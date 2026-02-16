/**
 * study-data.js — Unified Data Layer for N8 Study Projects
 *
 * All 10 projects + the hub share this single module.
 * It manages localStorage read/write for:
 *   - Performance scores (per concept area, per project, per session)
 *   - Weakness map (auto-updated on wrong answers)
 *   - Exposure log (concept practice tracking)
 *   - Spaced repetition queue (Leitner boxes 1-5)
 *   - Dosage calc streak
 *   - Session history
 */

const StudyData = (function() {
  'use strict';

  const STORAGE_KEY = 'n8_study_data';
  const VERSION = 1;

  // Concept areas with consistent colors (match hub CSS vars)
  const CONCEPT_AREAS = {
    'cardiac': { display: 'Cardiac Output & Perfusion', color: '#E74C3C', cssVar: '--cardiac' },
    'oxygenation': { display: 'Oxygenation', color: '#27AE60', cssVar: '--oxy' },
    'fluid-electrolytes': { display: 'Fluid & Electrolytes', color: '#3498DB', cssVar: '--fluid' },
    'cognition-sensation': { display: 'Cognition & Sensation', color: '#8E44AD', cssVar: '--neuro' },
    'emergency-disaster': { display: 'Emergency & Disaster', color: '#E67E22', cssVar: '--emergency' }
  };

  // Project registry
  const PROJECTS = {
    'shock-simulator':       { id: 1,  name: 'Shock Simulator',          file: 'shock-simulator.html' },
    'cardiac-pharm':         { id: 2,  name: 'Cardiac Pharm',            file: 'cardiac-pharm.html' },
    'sbar-journal':          { id: 3,  name: 'SBAR Journal',             file: 'sbar-journal.html' },
    'chain-maps':            { id: 4,  name: 'Chain Maps',               file: 'chain-maps.html' },
    'ecg-portfolio':         { id: 5,  name: 'ECG Portfolio',            file: 'ecg-portfolio.html' },
    'wrong-answer-log':      { id: 6,  name: 'Wrong Answer Log',         file: 'wrong-answer-log.html' },
    'teach-back-cards':      { id: 7,  name: 'Teach-Back Cards',         file: 'teach-back-cards.html' },
    'complication-connector': { id: 8,  name: 'Complication Connector',   file: 'complication-connector.html' },
    'dosage-calc':           { id: 9,  name: 'Dosage Calc Drill',        file: 'dosage-calc.html' },
    'quiz-prep':             { id: 10, name: 'Quiz Prep Hub',            file: 'quiz-prep.html' }
  };

  // Spaced repetition intervals (Leitner system, in days)
  const SR_INTERVALS = [1, 3, 7, 14, 30];

  // ─── CORE DATA ACCESS ───

  function _getStore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return _createFreshStore();
      const store = JSON.parse(raw);
      if (store._version !== VERSION) return _migrate(store);
      return store;
    } catch(e) {
      console.warn('StudyData: corrupt store, resetting', e);
      return _createFreshStore();
    }
  }

  function _saveStore(store) {
    store._lastUpdated = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  }

  function _createFreshStore() {
    const store = {
      _version: VERSION,
      _created: Date.now(),
      _lastUpdated: Date.now(),
      performance: {},    // { conceptArea: { projectKey: { correct: n, total: n, history: [...] } } }
      weakness: {},       // { conceptArea: { score: 0-100, flaggedBy: [projectKeys], lastUpdated: ts } }
      exposure: {},       // { itemKey: { lastSeen: ts, timesSeen: n, box: 1-5 } }
      sessions: [],       // [{ ts, project, conceptArea, correct, total, duration }]
      dosageStreak: { current: 0, best: 0, recentScores: [] },
      wrongAnswerLog: [], // [{ id, stem, yourAnswer, correct, whyTempting, errorType, concept, conceptArea, source, whatToRemember, ts, srBox, srNextDue }]
      dailyLog: {}        // { 'YYYY-MM-DD': { items: n, correct: n, projects: [] } }
    };
    _saveStore(store);
    return store;
  }

  function _migrate(store) {
    // Future migrations go here
    store._version = VERSION;
    _saveStore(store);
    return store;
  }

  // ─── PERFORMANCE TRACKING ───

  function recordResult(projectKey, conceptArea, correct, total, itemDetails) {
    const store = _getStore();

    // Performance by concept area and project
    if (!store.performance[conceptArea]) store.performance[conceptArea] = {};
    if (!store.performance[conceptArea][projectKey]) {
      store.performance[conceptArea][projectKey] = { correct: 0, total: 0, history: [] };
    }
    const perf = store.performance[conceptArea][projectKey];
    perf.correct += correct;
    perf.total += total;
    perf.history.push({ ts: Date.now(), correct, total });
    // Keep last 50 entries
    if (perf.history.length > 50) perf.history = perf.history.slice(-50);

    // Update weakness map
    _updateWeakness(store, conceptArea, projectKey);

    // Session log
    store.sessions.push({
      ts: Date.now(),
      project: projectKey,
      conceptArea,
      correct,
      total,
      details: itemDetails || null
    });
    if (store.sessions.length > 500) store.sessions = store.sessions.slice(-500);

    // Daily log
    const today = new Date().toISOString().split('T')[0];
    if (!store.dailyLog[today]) store.dailyLog[today] = { items: 0, correct: 0, projects: [] };
    store.dailyLog[today].items += total;
    store.dailyLog[today].correct += correct;
    if (!store.dailyLog[today].projects.includes(projectKey)) {
      store.dailyLog[today].projects.push(projectKey);
    }

    _saveStore(store);
    return _getAccuracy(conceptArea, projectKey);
  }

  function _updateWeakness(store, conceptArea, projectKey) {
    if (!store.weakness[conceptArea]) {
      store.weakness[conceptArea] = { score: 100, flaggedBy: [], lastUpdated: Date.now() };
    }

    // Calculate overall accuracy for this concept area across all projects
    const areaPerf = store.performance[conceptArea] || {};
    let totalCorrect = 0, totalAttempts = 0;
    const flaggedBy = [];

    for (const [pk, data] of Object.entries(areaPerf)) {
      totalCorrect += data.correct;
      totalAttempts += data.total;
      // Flag if accuracy < 75% and at least 3 attempts
      if (data.total >= 3 && (data.correct / data.total) < 0.75) {
        flaggedBy.push(pk);
      }
    }

    store.weakness[conceptArea] = {
      score: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 100,
      flaggedBy,
      lastUpdated: Date.now(),
      totalAttempts
    };
  }

  function _getAccuracy(conceptArea, projectKey) {
    const store = _getStore();
    const perf = store.performance[conceptArea]?.[projectKey];
    if (!perf || perf.total === 0) return null;
    return Math.round((perf.correct / perf.total) * 100);
  }

  // ─── WEAKNESS MAP ───

  function getWeaknesses() {
    const store = _getStore();
    const result = [];
    for (const [area, data] of Object.entries(store.weakness)) {
      if (data.totalAttempts >= 3 && data.score < 80) {
        result.push({
          conceptArea: area,
          display: CONCEPT_AREAS[area]?.display || area,
          color: CONCEPT_AREAS[area]?.color || '#999',
          score: data.score,
          flaggedBy: data.flaggedBy.map(pk => PROJECTS[pk]?.name || pk),
          flaggedByKeys: data.flaggedBy
        });
      }
    }
    // Sort worst first
    result.sort((a, b) => a.score - b.score);
    return result;
  }

  function getConceptScore(conceptArea) {
    const store = _getStore();
    return store.weakness[conceptArea]?.score ?? null;
  }

  // ─── SPACED REPETITION ───

  function trackExposure(itemKey, wasCorrect) {
    const store = _getStore();
    if (!store.exposure[itemKey]) {
      store.exposure[itemKey] = { lastSeen: Date.now(), timesSeen: 0, box: 1 };
    }
    const item = store.exposure[itemKey];
    item.lastSeen = Date.now();
    item.timesSeen++;

    if (wasCorrect) {
      item.box = Math.min(item.box + 1, 5);
    } else {
      item.box = 1; // Reset to box 1 on wrong answer
    }

    _saveStore(store);
    return item;
  }

  function getDueItems(limit) {
    const store = _getStore();
    const now = Date.now();
    const due = [];

    for (const [key, item] of Object.entries(store.exposure)) {
      const intervalDays = SR_INTERVALS[item.box - 1] || 1;
      const intervalMs = intervalDays * 24 * 60 * 60 * 1000;
      const dueAt = item.lastSeen + intervalMs;

      if (now >= dueAt) {
        due.push({
          key,
          box: item.box,
          lastSeen: item.lastSeen,
          daysSince: Math.floor((now - item.lastSeen) / (24 * 60 * 60 * 1000)),
          timesSeen: item.timesSeen,
          overdue: Math.floor((now - dueAt) / (24 * 60 * 60 * 1000))
        });
      }
    }

    // Sort: most overdue first, then lowest box first
    due.sort((a, b) => {
      if (a.box !== b.box) return a.box - b.box;
      return b.overdue - a.overdue;
    });

    return limit ? due.slice(0, limit) : due;
  }

  function getExposureCount() {
    const store = _getStore();
    return Object.keys(store.exposure).length;
  }

  // ─── DOSAGE CALC ───

  function recordDosageQuiz(score, totalQuestions) {
    const store = _getStore();
    const pct = Math.round((score / totalQuestions) * 100);

    store.dosageStreak.recentScores.push({ ts: Date.now(), score, total: totalQuestions, pct });
    if (store.dosageStreak.recentScores.length > 20) {
      store.dosageStreak.recentScores = store.dosageStreak.recentScores.slice(-20);
    }

    if (pct >= 90) {
      store.dosageStreak.current++;
      store.dosageStreak.best = Math.max(store.dosageStreak.best, store.dosageStreak.current);
    } else {
      store.dosageStreak.current = 0;
    }

    _saveStore(store);
    return {
      passed: pct >= 90,
      pct,
      streak: store.dosageStreak.current,
      best: store.dosageStreak.best
    };
  }

  function getDosageStats() {
    const store = _getStore();
    const scores = store.dosageStreak.recentScores;
    return {
      streak: store.dosageStreak.current,
      best: store.dosageStreak.best,
      recentScores: scores.slice(-5),
      avgScore: scores.length > 0
        ? Math.round(scores.reduce((s, q) => s + q.pct, 0) / scores.length)
        : null,
      totalAttempts: scores.length,
      passRate: scores.length > 0
        ? Math.round(scores.filter(q => q.pct >= 90).length / scores.length * 100)
        : null
    };
  }

  // ─── WRONG ANSWER LOG ───

  function addWrongAnswer(entry) {
    const store = _getStore();
    const item = {
      id: 'wa_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
      stem: entry.stem || '',
      yourAnswer: entry.yourAnswer || '',
      correctAnswer: entry.correctAnswer || '',
      whyTempting: entry.whyTempting || '',
      errorType: entry.errorType || '',
      concept: entry.concept || '',
      conceptArea: entry.conceptArea || '',
      source: entry.source || '',
      whatToRemember: entry.whatToRemember || '',
      ts: Date.now(),
      srBox: 1,
      srNextDue: Date.now() + (1 * 24 * 60 * 60 * 1000), // Due in 1 day
      retestHistory: []
    };
    store.wrongAnswerLog.push(item);
    _saveStore(store);
    return item;
  }

  function getWrongAnswersDue() {
    const store = _getStore();
    const now = Date.now();
    return store.wrongAnswerLog.filter(wa => now >= wa.srNextDue);
  }

  function retestWrongAnswer(waId, gotItRight) {
    const store = _getStore();
    const wa = store.wrongAnswerLog.find(w => w.id === waId);
    if (!wa) return null;

    wa.retestHistory.push({ ts: Date.now(), correct: gotItRight });

    if (gotItRight) {
      wa.srBox = Math.min(wa.srBox + 1, 5);
    } else {
      wa.srBox = 1;
    }

    const intervalDays = SR_INTERVALS[wa.srBox - 1];
    wa.srNextDue = Date.now() + (intervalDays * 24 * 60 * 60 * 1000);

    _saveStore(store);
    return wa;
  }

  function getWrongAnswerStats() {
    const store = _getStore();
    const log = store.wrongAnswerLog;

    // Error type distribution
    const errorTypes = {};
    const conceptAreas = {};
    const sources = {};

    for (const wa of log) {
      errorTypes[wa.errorType] = (errorTypes[wa.errorType] || 0) + 1;
      conceptAreas[wa.conceptArea] = (conceptAreas[wa.conceptArea] || 0) + 1;
      if (wa.source) sources[wa.source] = (sources[wa.source] || 0) + 1;
    }

    return {
      total: log.length,
      dueForRetest: log.filter(wa => Date.now() >= wa.srNextDue).length,
      mastered: log.filter(wa => wa.srBox >= 4).length,
      errorTypes,
      conceptAreas,
      sources
    };
  }

  // ─── SESSION & DAILY STATS ───

  function getSessionHistory(days) {
    const store = _getStore();
    const cutoff = Date.now() - (days * 24 * 60 * 60 * 1000);
    return store.sessions.filter(s => s.ts >= cutoff);
  }

  function getDailyLog(days) {
    const store = _getStore();
    const result = {};
    const today = new Date();

    for (let i = 0; i < (days || 30); i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      result[key] = store.dailyLog[key] || { items: 0, correct: 0, projects: [] };
    }
    return result;
  }

  function getStreak() {
    const store = _getStore();
    let streak = 0;
    const today = new Date();

    for (let i = 0; i < 365; i++) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().split('T')[0];
      if (store.dailyLog[key] && store.dailyLog[key].items > 0) {
        streak++;
      } else if (i > 0) { // Don't break on today if not started yet
        break;
      }
    }
    return streak;
  }

  // ─── DAILY 10 GENERATOR ───

  function generateDaily10() {
    const dueItems = getDueItems(10);
    const weaknesses = getWeaknesses();
    const waDue = getWrongAnswersDue().slice(0, 2);

    // Build a mixed set prioritizing weak areas and due items
    const items = [];

    // Wrong answer re-tests (up to 2)
    for (const wa of waDue) {
      items.push({ type: 'wrong-answer-retest', data: wa, project: 'wrong-answer-log' });
    }

    // Due spaced rep items (fill remaining)
    for (const due of dueItems) {
      if (items.length >= 10) break;
      items.push({ type: 'spaced-rep', data: due, project: _guessProjectFromKey(due.key) });
    }

    // If still under 10, flag weak concept areas for focused practice
    if (items.length < 10 && weaknesses.length > 0) {
      for (const weak of weaknesses) {
        if (items.length >= 10) break;
        items.push({
          type: 'weakness-practice',
          conceptArea: weak.conceptArea,
          display: weak.display,
          score: weak.score,
          suggestedProjects: weak.flaggedByKeys
        });
      }
    }

    return items;
  }

  function _guessProjectFromKey(key) {
    // Item keys are formatted as "projectKey:itemId"
    const parts = key.split(':');
    return parts[0] || 'unknown';
  }

  // ─── PROJECT STATUS (for hub cards) ───

  function getProjectStatus(projectKey) {
    const store = _getStore();
    let totalCorrect = 0, totalAttempts = 0;
    let lastUsed = 0;

    for (const [area, projects] of Object.entries(store.performance)) {
      if (projects[projectKey]) {
        totalCorrect += projects[projectKey].correct;
        totalAttempts += projects[projectKey].total;
        const lastEntry = projects[projectKey].history.slice(-1)[0];
        if (lastEntry && lastEntry.ts > lastUsed) lastUsed = lastEntry.ts;
      }
    }

    // Count due items for this project
    const dueCount = getDueItems().filter(d => d.key.startsWith(projectKey + ':')).length;

    return {
      totalAttempts,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null,
      lastUsed: lastUsed || null,
      dueForReview: dueCount,
      status: totalAttempts === 0 ? 'not-started' : dueCount > 0 ? 'items-due' : 'in-progress'
    };
  }

  // ─── OVERALL STATS ───

  function getOverallStats() {
    const store = _getStore();
    let totalCorrect = 0, totalAttempts = 0;

    for (const [area, projects] of Object.entries(store.performance)) {
      for (const [pk, data] of Object.entries(projects)) {
        totalCorrect += data.correct;
        totalAttempts += data.total;
      }
    }

    return {
      totalAttempts,
      accuracy: totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : null,
      conceptScores: Object.fromEntries(
        Object.keys(CONCEPT_AREAS).map(area => [area, getConceptScore(area)])
      ),
      weaknesses: getWeaknesses(),
      streak: getStreak(),
      exposureCount: getExposureCount(),
      dueItems: getDueItems().length,
      dosage: getDosageStats(),
      wrongAnswers: getWrongAnswerStats()
    };
  }

  // ─── EXPORT / RESET ───

  function exportData() {
    return JSON.stringify(_getStore(), null, 2);
  }

  function importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data._version) {
        localStorage.setItem(STORAGE_KEY, jsonString);
        return true;
      }
    } catch(e) {}
    return false;
  }

  function resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    return _createFreshStore();
  }

  // ─── PUBLIC API ───

  return {
    // Constants
    CONCEPT_AREAS,
    PROJECTS,
    SR_INTERVALS,

    // Performance
    recordResult,
    getWeaknesses,
    getConceptScore,

    // Spaced repetition
    trackExposure,
    getDueItems,

    // Dosage calc
    recordDosageQuiz,
    getDosageStats,

    // Wrong answer log
    addWrongAnswer,
    getWrongAnswersDue,
    retestWrongAnswer,
    getWrongAnswerStats,

    // Sessions & daily
    getSessionHistory,
    getDailyLog,
    getStreak,

    // Daily 10
    generateDaily10,

    // Project status
    getProjectStatus,

    // Overall
    getOverallStats,

    // Export/import
    exportData,
    importData,
    resetAll
  };
})();

// Make available globally and as module
if (typeof window !== 'undefined') window.StudyData = StudyData;
if (typeof module !== 'undefined') module.exports = StudyData;
