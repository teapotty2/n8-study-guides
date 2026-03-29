        // ========== TOPIC 6: Seizure Disorders (10 questions, Q75-Q84) ==========

        Q.push({
            id: 75, type: 'mc',
            stem: 'A patient suddenly begins a generalized tonic-clonic seizure. Which nursing action is the PRIORITY?',
            opts: ['Stay with the patient, time the seizure, and protect them from injury by clearing the environment', 'Insert an oral airway to prevent tongue biting and ensure airway patency', 'Restrain the patient\'s extremities to prevent musculoskeletal injury', 'Administer IV lorazepam immediately within the first 30 seconds of seizure onset'],
            correct: 0,
            rationale: "<strong>Seizure Management ★MUST KNOW★:</strong> PRIORITY during seizure: (1) <strong>STAY with the patient</strong> — do not leave; your presence allows real-time assessment and protection. (2) <strong>TIME the seizure</strong> — critical for medication decisions (>5 min = status epilepticus). (3) <strong>Clear the environment</strong> — remove hard/sharp objects; cushion rails; loosen tight clothing. NEVER: Insert objects in the mouth — risk of broken teeth, aspiration, nurse injury. NEVER restrain — risk of fractures, dislocations. IV lorazepam is appropriate for status epilepticus (seizure >5 min) but not automatically for every seizure at onset.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 76, type: 'mc',
            stem: 'A patient has been continuously seizing for 8 minutes. The provider orders IV lorazepam. The nurse understands this is appropriate because:',
            opts: ['A seizure lasting >5 minutes is status epilepticus — a medical emergency requiring benzodiazepines first-line', 'All seizures require IV benzodiazepine treatment regardless of duration', 'Lorazepam is indicated after 30 minutes of continuous seizure activity only', 'Benzodiazepines are contraindicated during active seizure due to respiratory depression risk'],
            correct: 0,
            rationale: "<strong>Status Epilepticus ★HIGH YIELD★:</strong> <strong>Status epilepticus</strong> = continuous seizure activity for ≥5 minutes OR two or more seizures without return to baseline between them. Medical emergency — prolonged seizures cause permanent neuronal death from excitotoxicity, hyperthermia, and lactic acidosis. <strong>First-line treatment: Benzodiazepines</strong> (IV lorazepam 0.1 mg/kg or diazepam IV/rectal or IM midazolam). If seizure continues after benzo: second-line = phenytoin or levetiracetam IV load. If still seizing: phenobarbital, then general anesthesia (propofol or midazolam infusion). Airway protection is concurrent priority.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 77, type: 'sata',
            stem: 'A patient with a history of epilepsy is admitted for seizure management. Select ALL appropriate seizure precautions to implement.',
            opts: [
                { t: "Keep bed in lowest position with side rails up and padded", c: true },
                { t: "Have suction equipment at the bedside and functional", c: true },
                { t: "Ensure IV access is patent — benzodiazepines may need to be given emergently", c: true },
                { t: "Place an oral airway at the bedside (do NOT insert during active seizure)", c: true },
                { t: "Restrain all four extremities to prevent injury if a seizure occurs", c: false },
                { t: "Keep the room darkened and reduce stimulation — photosensitive seizures may be triggered by lights", c: true }
            ],
            rationale: "<strong>Seizure Precautions ★MUST KNOW★:</strong> (1) Bed low + padded rails = fall prevention; rails cushioned = no head injury from impact. (2) Suction at bedside = aspiration risk from hypersalivation or vomiting post-seizure. (3) Patent IV = emergency medication access. (4) Oral airway AVAILABLE (not inserted during seizure — only between seizures or post-ictal). (5) <strong>NEVER restrain</strong> — causes musculoskeletal injuries (fractures, dislocations); muscles contract with enormous force during tonic-clonic. (6) Dim lighting = reduces photosensitive triggers (strobe, flickering lights).",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 78, type: 'sata',
            stem: 'A patient is in the postictal phase following a generalized tonic-clonic seizure. Select ALL appropriate nursing actions.',
            opts: [
                { t: "Position the patient on their side (lateral) to prevent aspiration of secretions", c: true },
                { t: "Minimize stimulation — patient is confused, drowsy, and easily overstimulated", c: true },
                { t: "Reassess airway, breathing, and circulation", c: true },
                { t: "Perform oral suctioning if hypersalivation or secretions are present", c: true },
                { t: "Attempt to reorient the patient forcefully and persistently to speed recovery", c: false },
                { t: "Document seizure characteristics, duration, postictal behavior, and LOC recovery", c: true }
            ],
            rationale: "<strong>Postictal Phase Nursing:</strong> (1) <strong>Lateral position</strong> = aspiration prevention (hypersalivation, vomiting are common postictal). (2) <strong>Minimize stimulation</strong> — postictal brain is exhausted; noise/lights worsen agitation and can trigger another seizure. (3) <strong>Reassess ABCs</strong> — airway protection is paramount; may need positioning or suctioning. (4) <strong>Suction PRN</strong> — clear airway of secretions. (5) <strong>Do NOT forcefully reorient</strong> — patient is confused/agitated; forcing orientation increases distress. Let recovery happen naturally. (6) <strong>Documentation</strong> — what happened before, during, after seizure is critical for medical management.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 79, type: 'matrix',
            stem: 'Match each seizure characteristic to the correct seizure type.',
            rows: ['Starts in one hemisphere — the patient may have an aura, remain conscious', 'Involves both hemispheres from onset — patient loses consciousness immediately', 'Continuous seizure activity >5 minutes — medical emergency', 'Brief muscle jerks without loss of consciousness — occurs in clusters'],
            cols: ['Focal (Partial) Seizure', 'Generalized Seizure', 'Status Epilepticus', 'Myoclonic Seizure'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>Seizure Classification:</strong> (1) <strong>Focal (Partial)</strong>: Originates in one hemisphere. May have aura (unusual sensation). Simple focal = conscious; complex focal = altered awareness. Can generalize secondarily. (2) <strong>Generalized</strong>: Both hemispheres from onset → immediate LOC. Types: tonic-clonic (grand mal), absence (petit mal = brief staring), atonic (drop attacks). (3) <strong>Status epilepticus</strong>: ≥5 min continuous OR no recovery between seizures. Medical emergency → benzodiazepines first-line. (4) <strong>Myoclonic</strong>: Brief, sudden muscle jerks (like bumping elbow); can be physiologic (hypnic jerks) or pathologic.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 80, type: 'ordered',
            stem: 'A patient begins a generalized tonic-clonic seizure while receiving morning medications. Place the nursing actions in the correct priority order.',
            items: [
                "Stay with the patient and call for help using the call bell or by yelling",
                "Note the start time and begin timing the seizure",
                "Clear the environment — remove objects, lower bed, pad side rails",
                "Position patient on their side if possible without restraining",
                "After the seizure: assess airway, breathing, and consciousness; suction if needed",
                "Document seizure type, duration, body parts involved, incontinence, and postictal behavior"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Seizure Response Sequence ★MUST KNOW★:</strong> (1) <strong>Stay and call for help</strong> — never leave; call for assistance without leaving the patient. (2) <strong>Time it</strong> — >5 min = status epilepticus requiring emergency medication; timing drives treatment decisions. (3) <strong>Protect the environment</strong> — safety first; remove hazards; cushion. (4) <strong>Lateral positioning</strong> — aspiration prevention; never force; never restrain. (5) <strong>Post-seizure assessment</strong> — airway and LOC are priorities after the seizure stops. (6) <strong>Document thoroughly</strong> — type, duration, progression, incontinence, postictal recovery are all clinically important.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 81, type: 'cloze',
            stem: "When documenting a seizure, the nurse should record: the time of onset and |0| of the seizure, what body parts were involved and whether movements were |1| or |2| (spreading from one area vs involving all limbs at once), whether the patient experienced |3| (incontinence), and the duration and characteristics of the |4| phase (drowsiness, confusion, or amnesia after seizure activity stops).",
            selects: [
                { options: ['total duration', 'estimated severity', 'the patient\'s last meal', 'the number of observers'], correct: 0 },
                { options: ['focal (one area first)', 'generalized (all limbs immediately)', 'tonic only', 'absent (no movement)'], correct: 0 },
                { options: ['generalized (bilateral from onset)', 'focal', 'clonic only', 'atonic'], correct: 0 },
                { options: ['loss of bladder or bowel control', 'loss of vision only', 'involuntary vocalization only', 'subcutaneous bleeding'], correct: 0 },
                { options: ['postictal', 'tonic', 'clonic', 'aura'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Seizure Documentation:</strong> Comprehensive seizure documentation must capture: (1) Exact time and <strong>total duration</strong> — drives treatment (>5 min = emergent). (2) Whether the seizure was focal (started in one area) or generalized (all limbs immediately). Focal onset is important for localization. (3) Was there <strong>incontinence</strong>? Bladder/bowel loss = generalized brain involvement. (4) <strong>Postictal phase</strong> = post-seizure period of drowsiness, confusion, amnesia. Duration and characteristics help assess severity. Also document: aura, eye deviation, LOC, color, respirations, what was given.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 82, type: 'selectN', n: 3,
            stem: 'A nurse is caring for a patient with newly diagnosed epilepsy who will be discharged on levetiracetam. Select the 3 correct discharge teaching points.',
            options: [
                { text: "Do not stop levetiracetam abruptly — sudden discontinuation can cause severe rebound seizures", correct: true },
                { text: "Avoid driving or operating heavy machinery until seizure-free for the required legal period (varies by state)", correct: true },
                { text: "Report any significant mood changes, depression, or behavioral changes — known side effect of levetiracetam", correct: true },
                { text: "It is safe to swim alone as long as seizures have been controlled for 1 week", correct: false },
                { text: "Levetiracetam must always be taken with food — GI absorption requires food intake", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Seizure Patient Education:</strong> (1) <strong>Never abruptly stop AEDs</strong> — rebound seizures can be worse than the original; taper under medical supervision. (2) <strong>No driving</strong> until legally seizure-free per state law (typically 3–12 months depending on jurisdiction). (3) <strong>Mood/behavioral changes</strong> — levetiracetam (Keppra) is known for neuropsychiatric side effects (irritability, aggression, depression). Report to provider. <strong>NEVER swim alone</strong> — seizure in water = drowning; needs supervision for any water activity regardless of how long seizure-free. Levetiracetam can be taken with or without food — no food requirement.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 83, type: 'bowtie',
            stem: 'A 31-year-old patient with a history of epilepsy is found by the nurse in a generalized tonic-clonic seizure. The nurse notes the seizure began at 1402. It is now 1409 — the seizure has been continuous for 7 minutes with no pause. The patient is cyanotic, diaphoretic, and remains unconscious. No IV access is currently in place.',
            actions: ['Call for the rapid response team and provider — status epilepticus requires emergent escalation', 'Administer IM midazolam (Versed) as the fastest route for benzodiazepine delivery without IV access'],
            allActions: ['Call for the rapid response team and provider — status epilepticus requires emergent escalation', 'Administer IM midazolam (Versed) as the fastest route for benzodiazepine delivery without IV access', 'Insert a tongue depressor to protect the airway and prevent tongue biting', 'Restrain the patient\'s arms and legs to prevent musculoskeletal injury'],
            condition: 'Status epilepticus — continuous seizure activity for ≥5 minutes without recovery',
            allConditions: ['Status epilepticus — continuous seizure activity for ≥5 minutes without recovery', 'Simple focal seizure — unilateral tremor, patient conscious', 'Postictal state — seizure ended, patient resting', 'Absence seizure — brief staring episode, no intervention needed'],
            parameters: ['Seizure >5 min = status epilepticus = first-line benzodiazepines required', 'No IV access = IM midazolam or rectal/nasal route is acceptable alternative'],
            allParams: ['Seizure >5 min = status epilepticus = first-line benzodiazepines required', 'No IV access = IM midazolam or rectal/nasal route is acceptable alternative', 'Wait 10 minutes before giving medications to allow spontaneous resolution', 'Only IV lorazepam is acceptable — no alternative routes exist'],
            rationale: "<strong>Status Epilepticus Bowtie:</strong> 7 minutes of continuous seizure = <strong>status epilepticus</strong> (threshold ≥5 min). Immediate actions: (1) Escalate — rapid response team; status epilepticus requires physician/advanced practice involvement. (2) <strong>IM midazolam</strong> — when no IV access, IM midazolam 10 mg is acceptable first-line (evidence-based; faster than establishing IV then giving lorazepam). Alternative: diazepam PR or intranasal midazolam. <strong>NEVER insert anything in the mouth</strong> — oral airways ONLY between seizures, never during. <strong>NEVER restrain</strong> — injury risk from powerful tonic-clonic contractions.",
            topic: "Seizure Disorders"
        });

        Q.push({
            id: 84, type: 'highlight',
            stem: 'A nurse is setting up the room for a patient with epilepsy who is being admitted for seizure monitoring. Highlight the correct seizure precaution setups that should be in place.',
            phrases: [
                { text: "Bed in lowest position with wheels locked", correct: true },
                { text: "Side rails up and padded with foam padding", correct: true },
                { text: "Suction equipment at bedside and tested for function", correct: true },
                { text: "Oxygen and bag-valve mask available at bedside", correct: true },
                { text: "Padded tongue blade taped to wall for insertion during seizure", correct: false },
                { text: "Patent IV access or saline lock in place", correct: true },
                { text: "Wrist restraints applied in case of seizure onset", correct: false }
            ],
            rationale: "<strong>Seizure Precaution Setup ★MUST KNOW★:</strong> Correct setup: (1) Bed lowest + wheels locked = fall injury prevention. (2) Padded side rails = head protection during tonic-clonic thrashing. (3) Suction at bedside = hypersalivation + aspiration risk postictal. (4) Oxygen + BVM = post-seizure respiratory support. (5) Patent IV access = emergency medication delivery. <strong>Padded tongue blade at wall = OUTDATED and WRONG</strong> — NEVER insert anything in the mouth during a seizure; causes dental fractures, aspiration, nurse injury. <strong>Wrist restraints = CONTRAINDICATED</strong> — tonic-clonic force against restraints causes fractures/dislocations.",
            topic: "Seizure Disorders"
        });

        // ========== TOPIC 7: Neuromuscular Disorders (10 questions, Q85-Q94) ==========

        Q.push({
            id: 85, type: 'mc',
            stem: 'A patient with myasthenia gravis (MG) asks when to take pyridostigmine (Mestinon). The nurse correctly instructs the patient to take it:',
            opts: ['30 minutes before meals to maximize muscle strength during swallowing and eating', 'Immediately after meals to prevent nausea from the medication', 'At bedtime only — MG symptoms are worse with fatigue later in the day', 'With a full glass of water and a high-protein snack to maximize absorption'],
            correct: 0,
            rationale: "<strong>Mestinon Timing ★HIGH YIELD★:</strong> Pyridostigmine (Mestinon) = cholinesterase inhibitor → prevents ACh breakdown at the neuromuscular junction → increases available ACh → temporarily improves muscle strength. Timing: <strong>30 minutes BEFORE meals</strong> — this allows the drug to peak in effect when the patient needs to chew and swallow, reducing aspiration risk. The drug's peak effect timing (approximately 1 hour after oral dose) is planned to overlap with meal time. MG patients with bulbar involvement are at highest aspiration risk during meals.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 86, type: 'mc',
            stem: 'A myasthenia gravis patient who was hospitalized for a respiratory infection now has profound weakness, difficulty swallowing, and respiratory distress. The nurse must distinguish between myasthenic crisis and cholinergic crisis. Which assessment finding MOST helps differentiate the two?',
            opts: ['The Tensilon (edrophonium) test — improvement = myasthenic crisis; worsening = cholinergic crisis', 'Blood pressure — hypertension indicates myasthenic; hypotension indicates cholinergic', 'Pupil size — dilated pupils = myasthenic; constricted = cholinergic', 'Level of consciousness — confusion = cholinergic; alert = myasthenic'],
            correct: 0,
            rationale: "<strong>Myasthenic vs Cholinergic Crisis ★MUST KNOW★:</strong> Both present with profound weakness and respiratory failure requiring intubation. <strong>Tensilon (edrophonium) test</strong> = short-acting cholinesterase inhibitor given IV: (1) <strong>Improvement in strength</strong> = myasthenic crisis (undermedication → more ACh helps). (2) <strong>Worsening or no change</strong> = cholinergic crisis (overmedication → more cholinesterase inhibition makes it worse). Treatment: Myasthenic = increase Mestinon/IVIG/plasmapheresis. Cholinergic = STOP Mestinon + atropine (blocks excess ACh effects). Cholinergic signs include SLUDGE (Salivation, Lacrimation, Urination, Defecation, GI distress, Emesis) + bradycardia.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 87, type: 'mc',
            stem: 'A patient with multiple sclerosis (MS) is being discharged. Which nursing teaching point is MOST important for this patient?',
            opts: ['Avoid heat — hot baths, fever, or high environmental temperature worsen MS symptoms (Uhthoff\'s phenomenon)', 'Exercise is contraindicated — physical exertion permanently worsens demyelination', 'Corticosteroids should be taken daily as long-term maintenance therapy for MS', 'Driving restrictions apply permanently — MS patients cannot drive regardless of symptom status'],
            correct: 0,
            rationale: "<strong>MS Patient Education ★HIGH YIELD★:</strong> <strong>Uhthoff's phenomenon</strong>: Heat worsens MS symptoms (transiently impairs already-compromised myelin conduction). Teach patients to: avoid hot baths/showers, use cooling vests, stay cool during exercise, aggressively treat fever. Other MS teaching: (1) Exercise is ENCOURAGED (maintains function, mood) — just avoid overheating. (2) Corticosteroids = used during EXACERBATIONS only (IV methylprednisolone), not daily maintenance. (3) Driving is evaluated individually — many MS patients drive safely, especially in remission. Disease-modifying therapies (interferons, glatiramer acetate) reduce relapse frequency.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 88, type: 'sata',
            stem: 'A patient is admitted with ascending paralysis and areflexia consistent with Guillain-Barré Syndrome (GBS). Select ALL priority nursing assessments for this patient.',
            opts: [
                { t: "Monitor respiratory rate, depth, and vital capacity — respiratory failure is the primary cause of death in GBS", c: true },
                { t: "Assess swallowing and gag reflex — cranial nerve involvement causes aspiration risk", c: true },
                { t: "Continuous cardiac monitoring — autonomic instability causes dysrhythmias in GBS", c: true },
                { t: "Apply sequential compression devices and passive range of motion for DVT prevention", c: true },
                { t: "Assess for pain — most GBS patients experience significant neuropathic pain", c: true },
                { t: "Monitor for fever — GBS is a bacterial infection requiring immediate antibiotics", c: false }
            ],
            rationale: "<strong>GBS Nursing Priorities ★HIGH YIELD★:</strong> (1) <strong>Respiratory monitoring is #1</strong> — ascending paralysis can reach the respiratory muscles within hours; vital capacity <20 mL/kg or rapid decline = intubate. (2) <strong>Swallowing/gag reflex</strong> — cranial nerve involvement (CN IX, X) = aspiration risk; NPO if impaired. (3) <strong>Cardiac monitoring</strong> — autonomic instability (wild BP swings, bradycardia, tachycardia, arrhythmias) from demyelination of autonomic fibers. (4) <strong>DVT prevention</strong> — complete paralysis + immobility = very high DVT risk. (5) <strong>Pain management</strong> — intense neuropathic/burning pain is paradoxically common despite paralysis (gabapentin, opioids). <strong>GBS is autoimmune (NOT bacterial)</strong> — treated with IVIG or plasmapheresis, NOT antibiotics.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 89, type: 'sata',
            stem: 'A patient with myasthenia gravis is admitted for elective cholecystectomy. Select ALL nursing precautions specific to MG patients.',
            opts: [
                { t: "Avoid sedatives and tranquilizers — can cause respiratory and cardiac depression in MG patients", c: true },
                { t: "Coordinate medication timing around procedures — Mestinon peak effect must be timed appropriately", c: true },
                { t: "Monitor for respiratory failure — any physiological stress can trigger myasthenic crisis", c: true },
                { t: "Have atropine at the bedside if Tensilon (edrophonium) diagnostic test is ordered", c: true },
                { t: "Use succinylcholine for neuromuscular blockade during surgery — enhanced sensitivity in MG", c: false },
                { t: "MG patients are more sensitive to non-depolarizing neuromuscular blockers — use with extreme caution", c: true }
            ],
            rationale: "<strong>MG Perioperative Nursing:</strong> (1) <strong>Avoid sedatives/tranquilizers</strong> — cause respiratory depression; MG patients have marginal respiratory reserve. (2) <strong>Mestinon timing</strong> — coordinate oral medication with NPO periods; discuss IV pyridostigmine if NPO extended. (3) <strong>Respiratory monitoring</strong> — surgical stress, anesthesia, and infection all trigger myasthenic crisis. (4) <strong>Atropine at bedside</strong> — for Tensilon test side effects (bradycardia, bronchospasm, increased secretions). (5) <strong>AVOID succinylcholine</strong> — depolarizing NMB in MG = prolonged neuromuscular blockade and respiratory failure. (6) <strong>Extreme caution with non-depolarizing NMBs</strong> (rocuronium, vecuronium) — MG patients are hypersensitive; use ¼ of normal dose.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 90, type: 'matrix',
            stem: 'Match each neuromuscular disorder with its distinguishing characteristic.',
            rows: ['Myasthenia Gravis (MG)', 'Guillain-Barré Syndrome (GBS)', 'Multiple Sclerosis (MS)'],
            cols: ['Autoimmune attack on ACh receptors at NMJ; weakness worsens with activity', 'Ascending paralysis + areflexia; may need ventilator; IVIG or plasmapheresis', 'CNS demyelination; relapsing-remitting; heat worsens symptoms'],
            correct: [0, 1, 2],
            scoring: 'perRow',
            rationale: "<strong>Neuromuscular Disorder Comparison:</strong> (1) <strong>MG</strong>: Autoimmune → antibodies attack ACh receptors at NMJ → impaired neuromuscular transmission → weakness that WORSENS with repeated activity (fatigability). Treatment: Mestinon, IVIG, plasmapheresis, thymectomy. (2) <strong>GBS</strong>: Post-infectious autoimmune → ascending demyelination of PERIPHERAL nerves → ascending flaccid paralysis + areflexia. Respiratory failure = #1 risk. Treatment: IVIG or plasmapheresis (NOT steroids — may worsen). (3) <strong>MS</strong>: Autoimmune attack on CNS myelin (Schwann cells of brain/spinal cord). Relapsing-remitting (attack-recovery cycles). Heat worsens. Treatment: disease-modifying agents (interferons), steroids for exacerbations.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 91, type: 'ordered',
            stem: 'A patient with myasthenia gravis develops sudden profound weakness, inability to swallow, and increasing respiratory distress. The nurse suspects myasthenic crisis. Place the nursing actions in the correct priority order.',
            items: [
                "Assess respiratory status immediately — respiratory rate, depth, SpO₂, and ability to speak",
                "Prepare for endotracheal intubation — myasthenic crisis frequently requires ventilatory support",
                "Notify the provider and escalate rapidly — crisis requires immediate medical management",
                "Administer supplemental oxygen and prepare for possible IV pyridostigmine",
                "Prepare for plasmapheresis or IVIG — treatments that remove circulating antibodies",
                "Educate family on the temporary nature of the crisis and expected treatments"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>MG Crisis Management Priority:</strong> (1) <strong>Assess respiratory function first</strong> — is the patient ventilating? Can they speak? Respiratory failure = immediate threat in myasthenic crisis. (2) <strong>Prepare for intubation</strong> — if vital capacity dropping or SpO₂ falling, intubation is imminent. (3) <strong>Notify provider immediately</strong> — crisis requires escalation to neurology, ICU. (4) <strong>O₂ + IV pyridostigmine</strong> — if myasthenic crisis (not cholinergic), more ACh support helps; IV route since oral swallowing is compromised. (5) <strong>Plasmapheresis/IVIG</strong> — definitive treatment that takes hours to days; prepare while stabilizing. (6) <strong>Family education</strong> — important but comes after the patient is stabilized.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 92, type: 'cloze',
            stem: "The Tensilon (edrophonium) test is used to diagnose myasthenia gravis. Edrophonium is a |0| cholinesterase inhibitor that is given |1|. A positive test occurs when the patient shows |2| within 30–60 seconds. Before performing the test, the nurse must have |3| at the bedside because edrophonium can cause bradycardia, bronchoconstriction, and |4|.",
            selects: [
                { options: ['short-acting (wears off in minutes)', 'long-acting (lasts 12 hours)', 'irreversible (permanent binding)', 'rapid-release oral'], correct: 0 },
                { options: ['IV (intravenous push)', 'orally with water', 'intramuscularly in the thigh', 'subcutaneously'], correct: 0 },
                { options: ['immediate improvement in muscle strength', 'worsening weakness (cholinergic crisis)', 'no change in muscle strength', 'improvement in pain scores'], correct: 0 },
                { options: ['atropine (to reverse cholinergic side effects)', 'epinephrine (for anaphylaxis)', 'naloxone (for respiratory depression)', 'calcium gluconate (for hypocalcemia)'], correct: 0 },
                { options: ['increased secretions (salivation, lacrimation)', 'hypertension and tachycardia', 'bronchodilation and mydriasis', 'hyperglycemia and diaphoresis'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Tensilon Test ★HIGH YIELD★:</strong> Edrophonium (Tensilon) = ultra-short-acting cholinesterase inhibitor (IV push). In MG patients: temporarily increases ACh at the NMJ → immediate, brief improvement in weakness (ptosis lifts, grip improves, speech improves). This is a <strong>positive test</strong> = confirms MG. In cholinergic crisis: worsening (already too much ACh — adding more = worse). <strong>ATROPINE must be at bedside</strong>: Edrophonium causes cholinergic effects (bradycardia, bronchoconstriction, increased salivation, lacrimation, urination, GI cramping). Atropine blocks muscarinic receptors and reverses these effects.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 93, type: 'selectN', n: 4,
            stem: 'A patient with Guillain-Barré Syndrome is in the ICU on mechanical ventilation. Select the 4 correct nursing interventions.',
            options: [
                { text: "Monitor vital capacity and negative inspiratory force — respiratory failure is primary risk", correct: true },
                { text: "Assess for autonomic dysfunction — wild BP swings, tachycardia, bradycardia can occur", correct: true },
                { text: "Administer IVIG or prepare for plasmapheresis as ordered — definitive treatments", correct: true },
                { text: "Provide aggressive pain management — neuropathic pain is intense in GBS despite paralysis", correct: true },
                { text: "Administer high-dose corticosteroids — primary treatment for GBS", correct: false },
                { text: "Encourage family visitation — familiar voices help maintain sensory function", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>GBS ICU Care:</strong> (1) Vital capacity monitoring — intubate if VC <20 mL/kg or declining rapidly. (2) Autonomic monitoring — GBS demyelination affects autonomic nerves; life-threatening arrhythmias and BP instability. (3) <strong>IVIG or plasmapheresis</strong> — reduce circulating antibodies attacking peripheral myelin. (4) Pain management — paradoxical intense neuropathic pain in paralyzed extremities; gabapentin, tricyclics, opioids. <strong>Corticosteroids are NOT recommended for GBS</strong> — multiple trials show no benefit and possibly worse outcomes. Communication/sensory stimulation is helpful (option 6) but is NOT a nursing intervention for ventilated GBS specifically.",
            topic: "Neuromuscular Disorders"
        });

        Q.push({
            id: 94, type: 'bowtie',
            stem: 'A 52-year-old patient with myasthenia gravis has been in the hospital for 3 days with a respiratory tract infection. She is on her home dose of pyridostigmine 60 mg PO every 6 hours. The nurse assesses: profound weakness (cannot lift arms), ptosis, nasal speech, difficulty swallowing, RR 28, SpO₂ 91%, and unable to count to 10 in one breath. She denies excessive salivation, lacrimation, or GI cramping.',
            actions: ['Notify provider urgently — clinical picture is consistent with myasthenic crisis', 'Prepare for intubation — respiratory failure is imminent (SpO₂ 91%, RR 28, can\'t count to 10)'],
            allActions: ['Notify provider urgently — clinical picture is consistent with myasthenic crisis', 'Prepare for intubation — respiratory failure is imminent (SpO₂ 91%, RR 28, can\'t count to 10)', 'Hold pyridostigmine and administer atropine IV — cholinergic crisis suspected', 'Administer additional pyridostigmine dose immediately without provider order'],
            condition: 'Myasthenic crisis — undermedication or disease exacerbation with impending respiratory failure',
            allConditions: ['Myasthenic crisis — undermedication or disease exacerbation with impending respiratory failure', 'Cholinergic crisis — overmedication with excessive ACh effects (SLUDGE)', 'Bell\'s Palsy — facial nerve inflammation causing unilateral weakness', 'Stable MG — no intervention required'],
            parameters: ['Infection is a known trigger for myasthenic crisis', 'Absence of SLUDGE signs argues AGAINST cholinergic crisis'],
            allParams: ['Infection is a known trigger for myasthenic crisis', 'Absence of SLUDGE signs argues AGAINST cholinergic crisis', 'SLUDGE signs (salivation, lacrimation, etc.) are present confirming cholinergic crisis', 'MG patients never develop respiratory failure'],
            rationale: "<strong>Myasthenic Crisis Bowtie:</strong> Myasthenic crisis triggered by respiratory infection (physiological stress depletes ACh reserves faster). Key differentiator from cholinergic: <strong>NO SLUDGE signs</strong> (no excessive salivation, lacrimation, GI cramping) = NOT cholinergic. Rather: profound weakness + respiratory compromise = UNDER-medication (myasthenic). Immediate priorities: (1) Notify provider (Tensilon test may be ordered to confirm, IVIG/plasmapheresis ordered). (2) Prepare for intubation — SpO₂ 91% + RR 28 + inability to count = respiratory failure is IMMINENT. <strong>Do NOT hold Mestinon without provider order</strong> (that's the treatment for cholinergic). <strong>Do NOT give extra Mestinon without order</strong> (could push into cholinergic if misdiagnosed).",
            topic: "Neuromuscular Disorders"
        });

        // ========== TOPIC 8: Neurological Infections (8 questions, Q95-Q102) ==========

        Q.push({
            id: 95, type: 'mc',
            stem: 'A nurse is assessing a patient with suspected bacterial meningitis. The nurse flexes the patient\'s neck toward the chest and observes the hips and knees reflexively flex. This finding is known as:',
            opts: ['Brudzinski sign — positive finding indicating meningeal irritation', 'Kernig sign — positive finding indicating meningeal irritation', 'Babinski reflex — positive finding indicating upper motor neuron lesion', 'Romberg sign — positive finding indicating cerebellar ataxia'],
            correct: 0,
            rationale: "<strong>Meningeal Signs ★MUST KNOW★:</strong> <strong>Brudzinski sign</strong>: Flex the neck → hips and knees reflexively flex (involuntary). Positive = meningeal irritation. <strong>Kernig sign</strong>: With thigh flexed on abdomen, attempt to extend the knee → resistance/pain = positive meningeal irritation. Both indicate inflammation of the meninges (from infection, blood from SAH). <strong>Brudzinski is MORE sensitive than Kernig.</strong> Babinski = toes fan upward when lateral plantar surface stroked = UMN lesion. Romberg = loses balance with eyes closed = posterior column/cerebellar deficit.",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 96, type: 'mc',
            stem: 'A patient is diagnosed with bacterial meningitis caused by Neisseria meningitidis. Which action is the PRIORITY regarding close contacts of this patient?',
            opts: ['Close contacts must receive antimicrobial prophylaxis (rifampin, ciprofloxacin, or ceftriaxone) within 24 hours', 'Close contacts should be quarantined for 14 days and observed for symptoms', 'Close contacts should receive the meningococcal vaccine immediately to prevent infection', 'No action is required — bacterial meningitis is not transmitted person-to-person'],
            correct: 0,
            rationale: "<strong>Meningitis Contact Prophylaxis ★HIGH YIELD★:</strong> <strong>Neisseria meningitidis</strong> is highly transmissible via respiratory droplets. Close contacts (household members, roommates, people who shared utensils/kissing) must receive <strong>antimicrobial prophylaxis within 24 hours</strong> of exposure identification. Options: rifampin (2 days), ciprofloxacin (single dose), or ceftriaxone IM (single dose). The vaccine provides long-term protection but takes weeks to develop immunity — NOT adequate for immediate post-exposure prophylaxis. The patient must be on <strong>droplet precautions</strong> until 24 hours after antibiotics started.",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 97, type: 'sata',
            stem: 'A patient is admitted with bacterial meningitis. Select ALL correct nursing interventions.',
            opts: [
                { t: "Implement droplet precautions immediately — place patient in private room, mask for providers within 3 feet", c: true },
                { t: "Administer high-dose IV antibiotics as ordered — do not delay for lumbar puncture if patient is unstable", c: true },
                { t: "Monitor for increased ICP — meningitis causes cerebral edema and may lead to herniation", c: true },
                { t: "Reduce environmental stimulation — photophobia and phonophobia are common and painful", c: true },
                { t: "Perform lumbar puncture immediately before any other intervention regardless of patient stability", c: false },
                { t: "Administer dexamethasone as ordered — reduces inflammatory response in bacterial meningitis", c: true }
            ],
            rationale: "<strong>Meningitis Nursing ★HIGH YIELD★:</strong> (1) <strong>Droplet precautions</strong> — N. meningitidis transmitted via respiratory droplets; private room + mask. (2) <strong>Antibiotics</strong> — do NOT delay for LP if patient shows signs of herniation or is unstable; antibiotics first, LP later. If stable, LP before antibiotics ideal to get unaltered CSF culture. (3) <strong>ICP monitoring</strong> — cerebral edema from meningeal inflammation can cause herniation. (4) <strong>Reduce stimulation</strong> — light and sound worsen headache and meningeal irritation. (5) LP before antibiotics is ideal if safe, but patient safety > lab accuracy. (6) <strong>Dexamethasone</strong> — IV before first antibiotic dose reduces inflammation, improves outcomes in bacterial meningitis (unlike traumatic edema).",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 98, type: 'sata',
            stem: 'A nurse is preparing a patient for a lumbar puncture (LP). Select ALL correct nursing actions.',
            opts: [
                { t: "Confirm that increased ICP has been ruled out before LP — herniation risk if ICP is elevated", c: true },
                { t: "Position patient in lateral recumbent (fetal) position or sitting hunched forward", c: true },
                { t: "Instruct patient to remain completely still during the procedure", c: true },
                { t: "After LP: encourage increased fluid intake to replace CSF — headache is from CSF leakage", c: true },
                { t: "After LP: instruct patient to sit upright immediately — upright position promotes CSF replenishment", c: false },
                { t: "After LP: headache that worsens when upright and improves lying flat = post-LP headache; treat with fluids, caffeine, analgesics", c: true }
            ],
            rationale: "<strong>LP Nursing ★HIGH YIELD★:</strong> (1) <strong>Rule out ↑ICP first</strong> — LP in a patient with high ICP creates a pressure differential → downward herniation of brain stem through foramen magnum = death. CT head first if any concern. (2) <strong>Fetal position or forward flexion</strong> — opens intervertebral spaces for needle insertion. (3) <strong>Remain still</strong> — movement during LP risks spinal nerve injury. (4) <strong>Increase fluids post-LP</strong> — replenishes CSF (500 mL/day produced; CSF removed = 10-20 mL for LP). (5) <strong>Sit upright = WRONG post-LP</strong> — sitting makes headache WORSE (gravity pulls CSF away from head). Lie FLAT or prone for 1–4 hours. (6) Post-LP headache = positional (worse upright, better flat) = CSF leak from puncture site; caffeine constricts cerebral vessels and provides relief.",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 99, type: 'matrix',
            stem: 'Match each meningitis type with its characteristic feature.',
            rows: ['Bacterial (septic) meningitis', 'Viral (aseptic) meningitis', 'Cryptococcal meningitis'],
            cols: ['Most common in AIDS patients; treat with antifungal (amphotericin B)', 'Enteroviruses; generally self-limiting; common in summer/fall', 'S. pneumoniae, N. meningitidis; severe, life-threatening; requires IV antibiotics'],
            correct: [2, 1, 0],
            scoring: 'perRow',
            rationale: "<strong>Meningitis Types ★HIGH YIELD★:</strong> (1) <strong>Bacterial</strong>: S. pneumoniae + N. meningitidis most common. High mortality without treatment. CSF: cloudy, high WBC (neutrophils), high protein, low glucose. Treat immediately with IV antibiotics (ceftriaxone + vancomycin). (2) <strong>Viral (aseptic)</strong>: Most common overall. Enteroviruses (summer/early fall). CSF: clear, lymphocytic pleocytosis, normal glucose. Generally self-limiting — symptomatic treatment only. (3) <strong>Cryptococcal</strong>: Fungal infection. Cryptococcus neoformans from pigeon droppings. Most common in immunocompromised (AIDS, transplant). Treat with amphotericin B + fluconazole.",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 100, type: 'cloze',
            stem: "The classic triad of bacterial meningitis includes severe headache, |0|, and |1|. Additional findings include photophobia (sensitivity to light), phonophobia (sensitivity to sound), and positive |2| and |3| signs. The nurse should immediately implement |4| precautions because N. meningitidis is spread by respiratory droplets.",
            selects: [
                { options: ['high fever (≥38.5°C)', 'expressive aphasia', 'unilateral facial droop', 'loss of consciousness'], correct: 0 },
                { options: ['nuchal rigidity (stiff neck)', 'focal motor weakness', 'hearing loss', 'cerebellar ataxia'], correct: 0 },
                { options: ['Kernig', 'Babinski', 'Romberg', 'Cushing\'s'], correct: 0 },
                { options: ['Brudzinski', 'Battle\'s', 'Homan\'s', 'Murphy\'s'], correct: 0 },
                { options: ['droplet', 'airborne', 'contact', 'standard only'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Meningitis Classic Triad ★MUST KNOW★:</strong> (1) Severe headache (worst of life — 'thunderclap'). (2) <strong>High fever</strong>. (3) <strong>Nuchal rigidity</strong> (neck stiffness — cannot flex chin to chest). Plus: photophobia, phonophobia, altered LOC, petechial/purpuric rash (N. meningitidis). Kernig + Brudzinski = meningeal irritation signs. <strong>Droplet precautions</strong> for bacterial meningitis (N. meningitidis). Contacts need prophylaxis within 24hr. Remember: LP is contraindicated if ICP is elevated.",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 101, type: 'selectN', n: 3,
            stem: 'A patient is admitted with confirmed bacterial meningitis caused by N. meningitidis. Select the 3 CORRECT nursing actions.',
            options: [
                { text: "Maintain droplet precautions and private room for at least 24 hours after antibiotics started", correct: true },
                { text: "Monitor for signs of increased ICP — worsening headache, LOC changes, pupil changes", correct: true },
                { text: "Notify public health about the case — meningococcal meningitis is a reportable disease", correct: true },
                { text: "Perform lumbar puncture every 4 hours to monitor CSF improvement", correct: false },
                { text: "Apply warm compresses to the neck to reduce nuchal rigidity and muscle tension", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Meningitis Nursing Management:</strong> (1) <strong>Droplet precautions × 24hr antibiotics</strong> — once antibiotics on board, patient is no longer contagious; can discontinue precautions after 24 hours. (2) <strong>ICP monitoring</strong> — meningeal inflammation can cause life-threatening cerebral edema and herniation. (3) <strong>Public health reporting</strong> — N. meningitidis is a <strong>mandatorily reportable condition</strong>; public health initiates contact tracing and prophylaxis. <strong>Serial LPs are not standard</strong> — invasive, risky, not used for monitoring. Warm compresses do not effectively treat nuchal rigidity (it is meningeal, not muscular).",
            topic: "Neurological Infections"
        });

        Q.push({
            id: 102, type: 'highlight',
            stem: 'A 19-year-old college student is brought to the ED by friends who report she developed a severe headache "unlike any headache she\'s ever had" 4 hours ago. Review the findings below and highlight those consistent with bacterial meningitis requiring immediate intervention.',
            phrases: [
                { text: "Temperature 39.8°C (103.6°F)", correct: true },
                { text: "Severe headache rated 10/10 — sudden onset", correct: true },
                { text: "Neck stiffness — cannot flex chin to chest", correct: true },
                { text: "Petechial and purpuric rash on trunk and lower extremities", correct: true },
                { text: "Photophobia — keeps eyes tightly shut in the exam room", correct: true },
                { text: "Lives in a college dormitory (close contact setting)", correct: false },
                { text: "Blood pressure 118/74 mmHg", correct: false },
                { text: "Heart rate 102 bpm", correct: false }
            ],
            rationale: "<strong>Meningitis Recognition ★MUST KNOW★:</strong> (1) <strong>High fever</strong> — infectious etiology. (2) <strong>Thunderclap headache</strong> (worst ever, sudden) — meningeal irritation from infection or SAH. (3) <strong>Nuchal rigidity</strong> — cannot flex neck = meningism. (4) <strong>Petechial/purpuric rash</strong> = classic hallmark of <strong>N. meningitidis</strong> septicemia — indicates bacterial meningococcemia (septic emboli occluding small vessels). THIS IS AN EMERGENCY — mortality is high. (5) <strong>Photophobia</strong> — meningeal irritation with light sensitivity. <strong>Contextual background:</strong> Dormitory = risk factor but not a clinical finding. BP and HR are background context; tachycardia is expected with fever.",
            topic: "Neurological Infections"
        });

        // ========== TOPIC 9: Brain Anatomy & Aphasia (8 questions, Q103-Q110) ==========

        Q.push({
            id: 103, type: 'mc',
            stem: 'A patient had a left MCA stroke and now produces fluent, effortless speech that makes no sense — "word salad" — but becomes frustrated when the nurse doesn\'t understand. The nurse identifies this as:',
            opts: ['Wernicke\'s aphasia (receptive) — patient cannot understand language but speech is fluent', 'Broca\'s aphasia (expressive) — patient cannot produce speech but understands commands', 'Global aphasia — affects both speaking and understanding', 'Dysarthria — motor speech disorder causing slurred articulation'],
            correct: 0,
            rationale: "<strong>Aphasia Types ★MUST KNOW★:</strong> <strong>Wernicke's (Receptive)</strong>: Left posterior temporal lobe. Speech is FLUENT but NONSENSICAL ('word salad'). Cannot understand spoken or written language. Becomes frustrated because they think they are communicating normally. <strong>Broca's (Expressive)</strong>: Left inferior frontal lobe. Speech is effortful, broken, telegraphic. CAN understand commands. Cannot produce words/sentences. Also frustrated (knows what to say but can't say it). Memory: <strong>Wernicke's = Wordy but nonsense. Broca's = Broken speech.</strong> <strong>Dysarthria</strong> = motor problem (slurred speech from muscle weakness) — language comprehension and content are normal.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 104, type: 'mc',
            stem: 'A patient presents to the ED with sudden right-sided facial drooping. The MOST important assessment finding that would help the nurse distinguish Bell\'s palsy from a stroke is:',
            opts: ['Whether the forehead is involved — Bell\'s palsy affects the ENTIRE face including forehead; stroke spares the forehead', 'Whether the patient has arm weakness — present in stroke but absent in Bell\'s palsy', 'Whether the onset was sudden — Bell\'s palsy is always gradual; stroke is always sudden', 'Whether the patient has a fever — Bell\'s palsy causes fever; stroke does not'],
            correct: 0,
            rationale: "<strong>Bell's Palsy vs Stroke ★MUST KNOW★:</strong> <strong>The forehead is the KEY distinguisher:</strong> (1) <strong>Bell's Palsy</strong>: CN VII inflammation → affects the <strong>ENTIRE face including the forehead</strong> (patient cannot raise eyebrow, wrinkle forehead). This is because Bell's palsy = lower motor neuron lesion (peripheral). (2) <strong>Stroke</strong>: Upper motor neuron lesion (cortex). The forehead has <strong>bilateral cortical representation</strong> — even if one cortex is damaged, the other hemisphere still innervates the forehead → <strong>forehead is SPARED</strong>. Lower face drooping only. Clinical pearl: Can the patient wrinkle their forehead? Yes → stroke. No → Bell's palsy.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 105, type: 'sata',
            stem: 'The nurse is assessing a patient\'s brain lobe function. Select ALL correct associations between brain lobes and their functions.',
            opts: [
                { t: "Frontal lobe — concentration, judgment, personality, voluntary motor movement, affect", c: true },
                { t: "Temporal lobe — auditory reception, memory for sounds, language comprehension (Wernicke's area)", c: true },
                { t: "Parietal lobe — sensory analysis, body position awareness, spatial orientation, right-left discrimination", c: true },
                { t: "Occipital lobe — visual interpretation and memory of visual information", c: true },
                { t: "Cerebellum — voluntary motor planning, personality, and higher cognition", c: false },
                { t: "Cerebellum — coordination, fine motor control, balance, and proprioception", c: true }
            ],
            rationale: "<strong>Brain Lobe Functions ★MUST KNOW★:</strong> (1) <strong>Frontal</strong>: Motor (motor cortex), personality, judgment, inhibition, affect, executive function. (2) <strong>Temporal</strong>: Hearing, auditory memory, Wernicke's area (language comprehension). (3) <strong>Parietal</strong>: Sensory cortex, body image, spatial orientation, right-left discrimination. (4) <strong>Occipital</strong>: Visual cortex — processes what we see; visual field deficits (homonymous hemianopia). (5) <strong>Cerebellum</strong>: Coordination, balance, fine motor, proprioception. NOT personality/higher cognition (that's frontal). Cerebellar damage = ataxia, intention tremor, nystagmus.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 106, type: 'matrix',
            stem: 'Match each brain region with the primary deficits that result from damage to that area.',
            rows: ['Left frontal lobe (Broca\'s area)', 'Left temporal lobe (Wernicke\'s area)', 'Occipital lobe', 'Cerebellum'],
            cols: ['Expressive aphasia — broken speech, understands commands', 'Receptive aphasia — fluent nonsense, cannot understand', 'Visual field deficits and visual processing problems', 'Ataxia, intention tremor, loss of coordination'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>Brain Region-Deficit Matching:</strong> (1) <strong>Left frontal (Broca's)</strong>: Expressive aphasia — patient knows what to say but cannot produce speech (broken, effortful, telegraphic). (2) <strong>Left temporal (Wernicke's)</strong>: Receptive aphasia — fluent word salad, cannot understand what is said to them. (3) <strong>Occipital lobe</strong>: Processes visual input — damage causes hemianopia (half visual field loss), cortical blindness, visual agnosia (can see but can't recognize). (4) <strong>Cerebellum</strong>: Coordination hub — damage causes ataxia (wide-based gait, inability to do fine movements), intention tremor (tremor when reaching for something), dysmetria.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 107, type: 'cloze',
            stem: "A patient with a left hemisphere stroke has |0| aphasia, meaning they cannot produce speech but CAN understand commands (the nurse can use pointing and yes/no questions). Another patient with Wernicke's aphasia speaks |1| but their words make no sense — their speech is |2|. For both aphasia types, the nurse should speak |3|, use |4| communication aids (letter boards, pictures), and avoid finishing the patient's sentences.",
            selects: [
                { options: ['Broca\'s (expressive)', 'Wernicke\'s (receptive)', 'global', 'conductive'], correct: 0 },
                { options: ['fluently and effortlessly', 'in broken fragments only', 'with dysarthria (slurred)', 'not at all'], correct: 0 },
                { options: ['nonsensical (word salad)', 'perfectly logical and clear', 'in a foreign language', 'slowly but correctly'], correct: 0 },
                { options: ['slowly and clearly with simple sentences', 'loudly to overcome the hearing deficit', 'rapidly to model normal speech', 'using medical terminology for accuracy'], correct: 0 },
                { options: ['alternative and augmentative (AAC)', 'musical and rhythmic', 'complex visual', 'tactile and vibration'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Aphasia Nursing Communication:</strong> (1) <strong>Broca's (expressive)</strong>: Cannot produce speech; CAN understand. Use yes/no questions, gestures, pointing. (2) <strong>Wernicke's (receptive)</strong>: Fluent but nonsensical. Cannot understand what is spoken. Write it down; use pictures. Both: (3) <strong>Speak slowly, simply, clearly</strong> — no need to shout (not a hearing issue). (4) <strong>AAC aids</strong> — picture boards, alphabet boards, tablet apps. (5) Do NOT finish sentences — frustrating and infantilizing; give the patient time. Document speech therapy consult.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 108, type: 'selectN', n: 4,
            stem: 'A patient with Broca\'s aphasia following a stroke is very frustrated because she cannot communicate. Select the 4 correct nursing interventions.',
            options: [
                { text: "Use yes/no questions and allow patient to nod or use hand signals", correct: true },
                { text: "Provide a communication board with common words, pictures, and the alphabet", correct: true },
                { text: "Allow adequate time for the patient to respond — do not rush or finish sentences", correct: true },
                { text: "Consult speech-language pathology for formal aphasia assessment and therapy", correct: true },
                { text: "Speak louder and slower — the patient has a hearing deficit from the stroke", correct: false },
                { text: "Explain to family that the patient can no longer understand anything that is said to them", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Broca's Aphasia Communication:</strong> (1) <strong>Yes/no questions</strong> — Broca's patients understand questions perfectly; they just cannot formulate spoken responses. Nods, hand signals = alternative output. (2) <strong>Communication board</strong> — gives patient a tool to point to words/pictures without speaking. (3) <strong>Give time</strong> — don't rush; every rushed interaction increases frustration and anxiety. (4) <strong>Speech therapy</strong> — essential for rehabilitation; nurses initiate the consult. <strong>Speaking louder is wrong</strong> — aphasia is NOT a hearing deficit; it's a language processing deficit. <strong>Broca's CAN understand</strong> — do NOT tell family they cannot understand anything (that's Wernicke's).",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 109, type: 'bowtie',
            stem: 'A 61-year-old patient with hypertension wakes up and notices his right hand is weak and he cannot speak. His wife calls 911. In the ED, the nurse notes: right facial droop (lower face only, forehead normal), right arm 2/5 strength, effortful speech with only one or two words produced despite obvious effort to communicate, and the patient follows commands and nods appropriately to questions. BP 182/104, HR 76. CT shows no hemorrhage.',
            actions: ['Activate the stroke team and prepare for tPA administration — acute ischemic stroke with left hemisphere involvement', 'Communicate using yes/no questions and simple commands — patient has Broca\'s aphasia and CAN understand'],
            allActions: ['Activate the stroke team and prepare for tPA administration — acute ischemic stroke with left hemisphere involvement', 'Communicate using yes/no questions and simple commands — patient has Broca\'s aphasia and CAN understand', 'Consult psychiatry — the patient is selectively mute and may have a conversion disorder', 'Perform LP to rule out subarachnoid hemorrhage before proceeding'],
            condition: 'Acute ischemic stroke — left hemisphere (MCA territory), Broca\'s aphasia, right-sided deficits',
            allConditions: ['Acute ischemic stroke — left hemisphere (MCA territory), Broca\'s aphasia, right-sided deficits', 'Bell\'s palsy with expressive aphasia — viral CN VII inflammation', 'Hemorrhagic stroke — tPA absolutely contraindicated', 'Todd\'s paralysis — post-seizure focal weakness, transient'],
            parameters: ['Forehead spared = UMN stroke lesion (not Bell\'s palsy); left hemisphere lesion = right-sided deficits + Broca\'s aphasia', 'CT shows no hemorrhage = tPA eligible; within treatment window if onset confirmed'],
            allParams: ['Forehead spared = UMN stroke lesion (not Bell\'s palsy); left hemisphere lesion = right-sided deficits + Broca\'s aphasia', 'CT shows no hemorrhage = tPA eligible; within treatment window if onset confirmed', 'CT shows hemorrhage = tPA contraindicated', 'Bell\'s palsy involves the entire face including forehead'],
            rationale: "<strong>Aphasia + Stroke Bowtie:</strong> Left MCA stroke classic presentation: <strong>right-sided</strong> hemiparesis + Broca's aphasia (left hemisphere language dominant in 95% of people). <strong>Forehead spared</strong> = upper motor neuron lesion = STROKE (not Bell's palsy). Bell's palsy = entire face including forehead. CT no hemorrhage = eligible for tPA. Communication: Broca's = CAN understand → yes/no questions + command following. <strong>NOT psychiatric</strong> — this is organic neurological aphasia. LP for SAH is not indicated when CT shows no blood and clinical picture is ischemic stroke.",
            topic: "Brain Anatomy & Aphasia"
        });

        Q.push({
            id: 110, type: 'highlight',
            stem: 'A nurse is assessing a patient who presents with sudden onset left-sided facial weakness. Highlight the findings that are MOST consistent with an ischemic STROKE rather than Bell\'s palsy.',
            phrases: [
                { text: "Left facial droop affecting the lower face only — forehead is intact", correct: true },
                { text: "Left arm drift — cannot keep left arm level for 10 seconds", correct: true },
                { text: "Slurred speech (dysarthria)", correct: true },
                { text: "Sudden onset during waking hours", correct: true },
                { text: "Entire left face affected including forehead wrinkling", correct: false },
                { text: "History of recent viral illness 2 weeks ago", correct: false },
                { text: "No arm or leg weakness", correct: false },
                { text: "Pain behind the left ear (mastoid area)", correct: false }
            ],
            rationale: "<strong>Stroke vs Bell's Palsy ★MUST KNOW★:</strong> STROKE clues: (1) <strong>Forehead SPARED</strong> — upper motor neuron (cortical) lesion → bilateral forehead representation → forehead functions even when cortex on one side is damaged. (2) <strong>Arm drift/weakness</strong> — NEVER in Bell's palsy (peripheral CN VII only = face only). (3) <strong>Dysarthria</strong> — involvement of motor speech pathways suggests central (stroke). (4) <strong>Sudden onset</strong> — both can be sudden, but context matters. BELL'S PALSY clues: Entire face including forehead = peripheral (CN VII exits brainstem and goes to ALL of face). Recent viral illness = trigger (reactivation of HSV in geniculate ganglion). No arm/leg weakness = peripheral only. Pain behind ear = geniculate ganglion inflammation.",
            topic: "Brain Anatomy & Aphasia"
        });

        // ========== TOPIC 10: Neurological Pharmacology (10 questions, Q111-Q120) ==========

        Q.push({
            id: 111, type: 'mc',
            stem: 'A patient receiving tPA for ischemic stroke suddenly develops a new neurological deficit 30 minutes into the infusion. The nurse\'s PRIORITY action is:',
            opts: ['Stop the tPA infusion immediately and notify the provider — suspect intracranial hemorrhage', 'Reduce the tPA infusion rate by half and continue monitoring closely', 'Increase the tPA rate — the stroke may be worsening and needs more thrombolysis', 'Obtain a 12-lead ECG — new deficits may indicate a cardiac arrhythmia'],
            correct: 0,
            rationale: "<strong>tPA Hemorrhagic Conversion ★HIGH YIELD★:</strong> A <strong>new or worsening neurological deficit during tPA infusion</strong> is the most feared complication — intracranial hemorrhage (ICH). Incidence: 6–7% with tPA. Signs: sudden severe headache, LOC change, new weakness/aphasia that is different from presentation deficit. <strong>STOP tPA IMMEDIATELY</strong> and call provider. Do NOT slow down and continue — this risks catastrophic bleeding. Stat CT head, coagulation studies, neurosurgery consult. Have cryoprecipitate and fresh frozen plasma ready. Continuation is NEVER appropriate.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 112, type: 'mc',
            stem: 'A patient with a brain tumor is developing increased ICP from vasogenic edema. Which medication is MOST appropriate to reduce this specific type of cerebral edema?',
            opts: ['Dexamethasone (Decadron) — effective for vasogenic edema from brain tumors only', 'Mannitol — osmotic diuretic reduces all types of cerebral edema equally', 'Furosemide — loop diuretic reduces brain water content across all edema types', 'Methylprednisolone — most effective corticosteroid for traumatic brain edema'],
            correct: 0,
            rationale: "<strong>Dexamethasone vs Mannitol ★MUST KNOW★:</strong> <strong>Dexamethasone</strong> = corticosteroid that reduces <strong>vasogenic edema</strong> (leaky blood-brain barrier from tumor, infection, radiation) by decreasing vascular permeability. <strong>Effective ONLY for tumor-related edema. NOT effective for traumatic edema or cytotoxic edema (ischemia).</strong> Mannitol = osmotic agent that pulls fluid from ALL swollen brain tissue into the bloodstream — works for any cause of ICP but is temporary. Furosemide can be used adjunctively but is not first-line. Methylprednisolone for traumatic SCI is now controversial; NOT indicated for TBI edema.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 113, type: 'mc',
            stem: 'A patient with trigeminal neuralgia is prescribed carbamazepine (Tegretol). Which nursing teaching point is MOST critical?',
            opts: ['Report any skin rash immediately — carbamazepine has a black box warning for severe skin reactions (SJS and TEN)', 'Take carbamazepine on an empty stomach for maximum absorption', 'This medication can be stopped abruptly once pain is controlled', 'Carbamazepine has no significant drug interactions or monitoring requirements'],
            correct: 0,
            rationale: "<strong>Carbamazepine (Tegretol) ★HIGH YIELD★:</strong> Uses: Trigeminal neuralgia (CN V) + epilepsy. <strong>BLACK BOX WARNING: Stevens-Johnson Syndrome (SJS) and Toxic Epidermal Necrolysis (TEN)</strong> — potentially fatal skin reactions, especially in patients with the HLA-B*1502 allele (common in Asian populations). Teach: report ANY new rash IMMEDIATELY. Additional monitoring: CBC regularly (risk of aplastic anemia and agranulocytosis — rare but serious). Drug interactions: many (enzyme inducer = affects many drug levels). Can cause diplopia, ataxia, sedation. Take WITH food to reduce GI upset.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 114, type: 'sata',
            stem: 'A patient with subarachnoid hemorrhage (SAH) is admitted. Select ALL correct statements about nimodipine administration in SAH.',
            opts: [
                { t: "Nimodipine should be given to ALL patients with SAH to prevent vasospasm", c: true },
                { t: "Vasospasm typically occurs 4–14 days after SAH — nimodipine is given during this period", c: true },
                { t: "Nimodipine is a calcium channel blocker that dilates cerebral arterial smooth muscle", c: true },
                { t: "Nimodipine can cause hypotension — monitor BP before and after each dose", c: true },
                { t: "Nimodipine is given IV push every 4 hours for maximum efficacy", c: false },
                { t: "Nimodipine is the same as nifedipine and can be substituted safely", c: false }
            ],
            rationale: "<strong>Nimodipine for SAH ★HIGH YIELD★:</strong> (1) ALL SAH patients receive nimodipine — reduces cerebral vasospasm incidence and severity. (2) Vasospasm peaks 4–14 days post-SAH (days 7–8 peak) — nimodipine given during this window. (3) Nimodipine = dihydropyridine CCB → dilates cerebral arteries → reduces ischemic injury from spasm. (4) Monitor BP — hypotension is main side effect; hold and notify if BP drops significantly. (5) <strong>Nimodipine is ORAL (or via NG tube) NOT IV push</strong> — IV nimodipine is not approved in the US; fatal medication errors have occurred confusing the oral solution with IV administration. (6) <strong>Nimodipine ≠ nifedipine</strong> — different formulations, dosing, and cerebrovascular selectivity; NOT interchangeable.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 115, type: 'sata',
            stem: 'A patient post-craniotomy is receiving phenytoin (Dilantin) for seizure prophylaxis. Select ALL correct nursing considerations.',
            opts: [
                { t: "Monitor phenytoin therapeutic level (therapeutic range: 10–20 mcg/mL)", c: true },
                { t: "Observe for gingival hyperplasia with long-term use — teach good oral hygiene", c: true },
                { t: "Phenytoin must be given in normal saline only — glucose solutions cause precipitation", c: true },
                { t: "Phenytoin IV must be administered slowly — no faster than 50 mg/min (risk of arrhythmia)", c: true },
                { t: "Phenytoin can be given IV push rapidly if seizure activity is occurring", c: false }
            ],
            rationale: "<strong>Phenytoin (Dilantin) Nursing ★HIGH YIELD★:</strong> (1) Therapeutic level = <strong>10–20 mcg/mL</strong> (narrow therapeutic window). <25 = toxicity risk (nystagmus, ataxia, confusion, coma). (2) <strong>Gingival hyperplasia</strong> = long-term side effect; oral hygiene critical. (3) <strong>Normal saline ONLY</strong> — incompatible with dextrose solutions (crystallizes). Flush IV line with NS before and after. (4) <strong>IV rate ≤50 mg/min</strong> — faster = cardiac arrhythmias (bradycardia, heart block), hypotension. Monitor ECG during IV loading. (5) <strong>NEVER give rapid IV push</strong> even in seizure — can cause cardiac arrest. For status epilepticus, use lorazepam first, then slow phenytoin load.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 116, type: 'matrix',
            stem: 'Match each neurological medication to its primary indication.',
            rows: ['Nimodipine', 'Mannitol (Osmitrol)', 'Mestinon (pyridostigmine)', 'Baclofen'],
            cols: ['Reduce ICP via osmotic diuresis — pull fluid from brain tissue', 'Prevent cerebral vasospasm after subarachnoid hemorrhage', 'Cholinesterase inhibitor — first-line for myasthenia gravis', 'Reduce spasticity in MS and SCI — GABA-B agonist'],
            correct: [1, 0, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>Neuro Medication Matching:</strong> (1) <strong>Nimodipine</strong>: CCB → vasospasm prevention in SAH. (2) <strong>Mannitol</strong>: Osmotic diuretic → pulls fluid from swollen brain tissue → ↓ICP. Monitor osmolality, electrolytes. (3) <strong>Mestinon (pyridostigmine)</strong>: Cholinesterase inhibitor → ↑ACh at NMJ → improves MG muscle strength. Take 30 min before meals. (4) <strong>Baclofen</strong>: GABA-B receptor agonist → reduces spasticity. Used in MS (90% have spasticity), SCI, and other UMN conditions. Intrathecal baclofen pump for severe spasticity. Abrupt withdrawal = severe rebound spasticity and seizures.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 117, type: 'ordered',
            stem: 'A patient with epilepsy has been seizing continuously for 8 minutes (status epilepticus). The provider has given verbal orders. Place the medication interventions in the correct order.',
            items: [
                "Administer lorazepam (Ativan) 0.1 mg/kg IV — first-line benzodiazepine for status epilepticus",
                "If seizure continues after 5 minutes: give fosphenytoin or levetiracetam IV load",
                "If still seizing after second-line agents: administer phenobarbital IV",
                "If seizure persists (refractory status epilepticus): initiate propofol or midazolam infusion (general anesthesia)",
                "Intubate patient — prolonged seizure + anesthesia infusion requires airway protection",
                "Monitor EEG continuously — confirm cessation of seizure activity"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Status Epilepticus Treatment Ladder:</strong> (1) <strong>Benzodiazepines FIRST</strong> — lorazepam IV (or IM midazolam, rectal diazepam if no IV). Most effective for initial termination. (2) <strong>Second-line anticonvulsant</strong> — fosphenytoin, levetiracetam, or valproate IV load if benzo fails after 5 minutes. (3) <strong>Third-line</strong> — phenobarbital IV (effective but causes significant sedation/respiratory depression). (4) <strong>Refractory status</strong> — anesthetic infusion (propofol, midazolam, or ketamine); requires ICU. (5) <strong>Intubation</strong> — with anesthetic doses, airway protection mandatory. (6) <strong>EEG monitoring</strong> — clinically apparent seizure may stop while electrical seizure continues (subclinical status); only EEG detects this.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 118, type: 'cloze',
            stem: "Mannitol (Osmitrol) works as a(n) |0| diuretic that creates an osmotic gradient, pulling fluid from |1| into the bloodstream. When monitoring a patient on mannitol, the nurse should assess for |2| as a side effect of excessive diuresis. The target serum osmolality when using mannitol for ICP is |3|. Mannitol should be used with caution in patients with |4| because it can worsen fluid retention.",
            selects: [
                { options: ['osmotic', 'loop (Henle)', 'thiazide', 'potassium-sparing'], correct: 0 },
                { options: ['cerebral edema (swollen brain tissue)', 'muscle tissue', 'the lungs', 'the abdomen'], correct: 0 },
                { options: ['dehydration, hypovolemia, and electrolyte imbalances', 'fluid overload and pulmonary edema', 'hyperglycemia and weight gain', 'constipation and ileus'], correct: 0 },
                { options: ['290–320 mOsm/kg', '260–280 mOsm/kg', '320–360 mOsm/kg', '200–250 mOsm/kg'], correct: 0 },
                { options: ['heart failure or renal failure', 'hypertension', 'diabetes mellitus', 'liver disease'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Mannitol Mechanism and Monitoring:</strong> Mannitol = <strong>osmotic</strong> agent that creates a concentration gradient → water moves FROM the brain (edematous tissue) into the vascular space → brain volume ↓ → ICP ↓. Side effects from the resulting diuresis: dehydration, hypovolemia, hyponatremia, hypokalemia. Target serum osmolality: <strong>290–320 mOsm/kg</strong> (mild elevation is therapeutic). >320 = osmotic nephropathy risk. Avoid mannitol if: heart failure (can't handle the sudden intravascular volume shift) or renal failure (cannot excrete the large diuretic load).",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 119, type: 'selectN', n: 4,
            stem: 'A nurse is reviewing orders for a patient in the neurological ICU. Select the 4 correct statements about neurological medications.',
            options: [
                { text: "tPA is contraindicated in hemorrhagic stroke — it would worsen intracranial bleeding", correct: true },
                { text: "Dexamethasone reduces vasogenic edema from brain tumors but is NOT effective for traumatic cerebral edema", correct: true },
                { text: "Nimodipine is given to ALL patients with subarachnoid hemorrhage to prevent vasospasm", correct: true },
                { text: "Levophed (norepinephrine) is the first-line vasopressor for neurogenic shock in SCI patients", correct: true },
                { text: "Phenytoin can be given rapidly (IV push over 1–2 minutes) for status epilepticus", correct: false },
                { text: "Corticosteroids are the first-line treatment for Guillain-Barré Syndrome", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Neuro Pharmacology Review:</strong> (1) tPA = thrombolytic → NEVER in hemorrhagic stroke. (2) Dexamethasone = ONLY for brain tumor (vasogenic) edema; NOT for TBI edema. (3) Nimodipine for ALL SAH patients regardless of severity — reduces vasospasm morbidity. (4) Levophed for neurogenic shock — restores sympathetic tone and vascular resistance. <strong>Phenytoin NEVER fast IV push</strong> — max 50 mg/min to prevent cardiac arrhythmia and hypotension. <strong>Corticosteroids are NOT used for GBS</strong> — multiple trials show no benefit; can worsen outcomes. GBS = IVIG or plasmapheresis.",
            topic: "Neurological Pharmacology"
        });

        Q.push({
            id: 120, type: 'bowtie',
            stem: 'A 45-year-old patient with a history of epilepsy presents to the ED with a generalized tonic-clonic seizure that began 11 minutes ago. An IV has just been established. The patient is cyanotic, SpO₂ 87%, and remains in active seizure. The provider is at the bedside.',
            actions: ['Administer lorazepam (Ativan) 0.1 mg/kg IV — first-line benzodiazepine for status epilepticus', 'Apply supplemental oxygen via non-rebreather mask and prepare for potential intubation'],
            allActions: ['Administer lorazepam (Ativan) 0.1 mg/kg IV — first-line benzodiazepine for status epilepticus', 'Apply supplemental oxygen via non-rebreather mask and prepare for potential intubation', 'Administer phenytoin 20 mg/kg IV push rapidly for immediate seizure termination', 'Place a padded tongue blade in the patient\'s mouth to protect the airway'],
            condition: 'Status epilepticus — continuous tonic-clonic seizure activity for 11 minutes with hypoxemia',
            allConditions: ['Status epilepticus — continuous tonic-clonic seizure activity for 11 minutes with hypoxemia', 'Simple partial seizure — patient conscious, focal tremor, no intervention needed', 'Post-ictal state — seizure ended, patient resting safely', 'Absence seizure — brief staring episode, patient appears conscious'],
            parameters: ['IV access established — IV benzodiazepine is now the appropriate route', 'Hypoxemia (SpO₂ 87%, cyanosis) requires immediate O₂ support alongside medication'],
            allParams: ['IV access established — IV benzodiazepine is now the appropriate route', 'Hypoxemia (SpO₂ 87%, cyanosis) requires immediate O₂ support alongside medication', 'Phenytoin is always faster-acting than benzodiazepines for active seizures', 'Inserting an oral airway during active seizure is safe and standard practice'],
            rationale: "<strong>Status Epilepticus Bowtie:</strong> 11 minutes = status epilepticus (>5 min). IV access established = use IV route. (1) <strong>Lorazepam IV</strong> = first-line (acts in 2–3 min IV). Stops seizure in majority. (2) <strong>O₂ + intubation prep</strong> — SpO₂ 87% = hypoxic; seizure + cyanosis = airway emergency. <strong>NEVER phenytoin rapid IV push</strong> — max 50 mg/min; rapid administration causes ventricular fibrillation. Phenytoin is second-line AFTER benzodiazepine fails. <strong>NEVER insert anything in mouth during active seizure</strong> — oral airway is only used between seizures.",
            topic: "Neurological Pharmacology"
        });

        // ========== TOPIC 11: Neuro Emergencies (10 questions, Q121-Q130) ==========

        Q.push({
            id: 121, type: 'mc',
            stem: 'A patient in the ICU has been unresponsive since a massive intracranial hemorrhage 5 days ago. The family is asking about brain death. The nurse explains that brain death determination requires:',
            opts: ['Two physician examinations including apnea test (PaCO₂ must rise to ≥60 mmHg without respiratory effort)', 'A flat EEG for 30 minutes performed by the bedside nurse', 'Absence of response to pain only (motor response = 0)', 'A 24-hour observation period without any neurological activity'],
            correct: 0,
            rationale: "<strong>Brain Death Criteria ★HIGH YIELD★:</strong> Brain death = irreversible cessation of ALL brain function including brainstem. Requirements: (1) Known irreversible etiology of coma. (2) <strong>Two physicians</strong> must independently confirm (second may be neurologist or neurosurgeon). (3) Clinical exam: coma, absent all brainstem reflexes (pupillary, corneal, gag, cough, oculovestibular), absent spontaneous movement. (4) <strong>Apnea test</strong>: Disconnect from ventilator × 8–10 minutes with O₂ at 4–10 L/min; <strong>PaCO₂ must rise to ≥60 mmHg</strong> without any respiratory effort. If no breathing occurs at PaCO₂ ≥60 → positive apnea test = confirms brain death. EEG is a confirmatory test but not always required.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 122, type: 'mc',
            stem: 'A patient is brought to the ED in active status epilepticus. Lorazepam 4 mg IV has been given twice without effect (8 minutes have now passed). The provider\'s next order should include:',
            opts: ['IV fosphenytoin or levetiracetam load — second-line agents after benzodiazepine failure', 'A third dose of lorazepam — repeat benzodiazepines until seizure stops', 'Oral phenytoin via NG tube — more stable than IV formulation', 'Await spontaneous resolution — status epilepticus always self-limits within 15 minutes'],
            correct: 0,
            rationale: "<strong>Status Epilepticus Treatment Ladder ★MUST KNOW★:</strong> Benzodiazepines are first-line (lorazepam, midazolam). After adequate benzodiazepine dosing fails, the NEXT step is <strong>second-line IV anticonvulsant loading</strong>: fosphenytoin (15–20 mg PE/kg IV), levetiracetam (60 mg/kg IV, max 4,500 mg), or valproate. A third benzo = not standard (risk of excessive respiratory depression without additional seizure termination benefit). Oral medications = inadequate bioavailability during active seizure. Status epilepticus does NOT always self-resolve and causes progressive neuronal injury from excitotoxicity.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 123, type: 'sata',
            stem: 'A patient is showing signs of herniation (GCS dropping, unilateral dilated pupil, Cushing\'s triad). Select ALL appropriate emergency nursing interventions.',
            opts: [
                { t: "Elevate HOB to 30° and maintain head in strict neutral alignment immediately", c: true },
                { t: "Prepare for emergent intubation — GCS ≤8, airway protection required", c: true },
                { t: "Administer mannitol 1 g/kg IV as ordered — temporizing measure to reduce ICP", c: true },
                { t: "Notify provider and activate rapid response/neurosurgical team immediately", c: true },
                { t: "Administer dexamethasone — effective for all types of herniation-related edema", c: false },
                { t: "Lower head of bed to Trendelenburg — increases cerebral blood flow", c: false }
            ],
            rationale: "<strong>Herniation Emergency Response:</strong> (1) HOB 30° + neutral = immediate venous drainage; takes seconds. (2) Intubation — GCS ≤8 = airway unprotected; controlled ventilation also allows brief hyperventilation to reduce ICP. (3) Mannitol = temporizing pharmacologic ICP reduction; bridge to definitive treatment. (4) Provider/neurosurgery — only surgical decompression (craniotomy, ventriculostomy) can reverse herniation. <strong>Dexamethasone is NOT effective for traumatic herniation or ischemic herniation</strong> — only brain tumor edema. Trendelenburg (head down) INCREASES ICP by impairing venous drainage — absolutely contraindicated.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 124, type: 'sata',
            stem: 'A patient is in the ICU following a subarachnoid hemorrhage from a ruptured cerebral aneurysm. Select ALL correct nursing monitoring priorities for vasospasm detection (days 4–14 post-SAH).',
            opts: [
                { t: "Perform frequent neuro assessments — new focal deficits indicate vasospasm-related ischemia", c: true },
                { t: "Monitor for headache worsening — may indicate re-bleeding or vasospasm", c: true },
                { t: "Administer nimodipine as scheduled — do not hold without provider order", c: true },
                { t: "Monitor transcranial Doppler findings if ordered — elevated flow velocities indicate vasospasm", c: true },
                { t: "Vasospasm is most common in the first 24 hours after SAH — highest vigilance immediately post-bleed", c: false }
            ],
            rationale: "<strong>SAH Vasospasm Monitoring ★HIGH YIELD★:</strong> (1) Frequent neuro assessments — vasospasm causes ischemia → new focal deficits (same as ischemic stroke presentation). (2) Headache change — new or worsening headache = re-bleeding or spasm. (3) Nimodipine scheduled — the most effective pharmacological vasospasm prevention; do not skip doses. (4) Transcranial Doppler (TCD) — noninvasive measure of blood flow velocity in cerebral arteries; elevated velocity = vasospasm. <strong>Vasospasm peaks 7–8 days post-SAH</strong> (range 4–14 days) — NOT in the first 24 hours. Immediate post-bleed period risk is re-bleeding, not vasospasm.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 125, type: 'matrix',
            stem: 'Match each neurological emergency with its most important immediate nursing action.',
            rows: ['Autonomic dysreflexia (BP 210/118, headache, SCI patient)', 'Herniation signs (Cushing\'s triad, unilateral blown pupil)', 'Status epilepticus (continuous seizure >5 minutes)', 'Subarachnoid hemorrhage ("worst headache of my life")'],
            cols: ['Sit patient upright 90° and find/remove trigger', 'HOB 30°, prepare for intubation, notify neurosurgery', 'Lorazepam IV (or IM midazolam if no IV)', 'Immediate CT head without contrast and pain management'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>Neuro Emergency Response Matching:</strong> (1) <strong>Autonomic dysreflexia</strong> → SIT UP FIRST (gravity lowers BP) then find/remove trigger (catheter/bladder most common). (2) <strong>Herniation</strong> → HOB 30° immediately + prepare intubation + neurosurgery NOW (surgical decompression is the only cure). (3) <strong>Status epilepticus</strong> → IV benzodiazepine first-line (lorazepam IV = fastest; IM midazolam if no IV). (4) <strong>SAH</strong> → immediate CT head (confirms blood in subarachnoid space; guides management); pain management (severe headache); ICU admission; neurosurgery for aneurysm coiling/clipping.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 126, type: 'ordered',
            stem: 'A patient who had a craniotomy 6 hours ago suddenly shows: GCS dropping from 12 to 7, right pupil 7mm nonreactive, BP 182/58, HR 44, respirations irregular. Place the nursing actions in the correct emergency priority order.',
            items: [
                "Call provider and activate rapid response/neurosurgery STAT",
                "Ensure HOB is at 30° and head is in strict neutral midline alignment",
                "Prepare for emergent intubation — GCS 7 requires airway protection",
                "Prepare mannitol 1 g/kg IV per anticipated emergency order",
                "Obtain emergent head CT to evaluate for post-operative hematoma",
                "Remain with patient and monitor vital signs and neuro status continuously"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Post-Craniotomy Herniation Emergency:</strong> This is unilateral blown pupil (right 7mm) + Cushing's triad = herniation occurring post-operatively — likely post-craniotomy hematoma. (1) <strong>Provider + rapid response STAT</strong> — only neurosurgery can re-open the craniotomy and evacuate the new hematoma. Every minute counts. (2) <strong>HOB 30° + neutral</strong> — immediate ICP reduction aid. (3) <strong>Intubation</strong> — GCS 7 = airway unprotected; controlled ventilation. (4) <strong>Mannitol prep</strong> — temporizing while OR is being arranged. (5) <strong>CT head</strong> — confirms hematoma vs edema; guides decision. (6) <strong>Continue monitoring</strong> — never leave a deteriorating patient.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 127, type: 'cloze',
            stem: "During a herniation emergency, the nurse may briefly use |0| to temporarily lower ICP. This works by decreasing PaCO₂ below normal, which causes cerebral |1|, reducing cerebral blood flow and volume. This is a |2| measure only because prolonged hypocapnia causes cerebral |3|. The target PaCO₂ during brief therapeutic hyperventilation is |4| mmHg — it should NOT drop below 30 mmHg.",
            selects: [
                { options: ['therapeutic hyperventilation', 'sedation infusion', 'mannitol administration', 'corticosteroid infusion'], correct: 0 },
                { options: ['vasoconstriction (↓blood flow)', 'vasodilation (↑blood flow)', 'autoregulation reset', 'blood-brain barrier opening'], correct: 0 },
                { options: ['temporizing (short-term bridge)', 'definitive (long-term solution)', 'first-line (primary treatment)', 'preventive (maintenance)'], correct: 0 },
                { options: ['ischemia (too little blood flow)', 'hemorrhage (rupture from constriction)', 'edema (paradoxical swelling)', 'infarction (immediate tissue death)'], correct: 0 },
                { options: ['30–35', '20–25', '40–45', '15–20'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Therapeutic Hyperventilation ★HIGH YIELD★:</strong> Mechanism: ↓PaCO₂ → cerebral vessels constrict → ↓CBF → ↓cerebral blood volume → ↓ICP. Effective within minutes. <strong>SHORT-TERM ONLY</strong> (minutes to hours) — prolonged hypocapnia causes excessive cerebral vasoconstriction → ischemia in already-compromised brain tissue. Target PaCO₂: <strong>30–35 mmHg</strong>. Below 30 mmHg = ischemia risk. Used as bridge to surgery or other ICP-lowering interventions. NOT appropriate as maintenance therapy.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 128, type: 'selectN', n: 4,
            stem: 'Select the 4 findings that indicate a patient with traumatic brain injury may be developing herniation and requires immediate escalation.',
            options: [
                { text: "GCS declining by 2 or more points from baseline within 1 hour", correct: true },
                { text: "Unilateral pupil dilation with loss of reactivity (blown pupil)", correct: true },
                { text: "Cushing's triad — rising systolic BP with widening pulse pressure + bradycardia + irregular respirations", correct: true },
                { text: "New onset decerebrate posturing (extension of all four extremities to pain)", correct: true },
                { text: "Temperature elevation to 38.2°C", correct: false },
                { text: "Heart rate increasing from 72 to 88 bpm over 2 hours", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Herniation Warning Signs ★MUST KNOW★:</strong> (1) <strong>GCS drop ≥2 points</strong> — significant deterioration; approaching or crossing coma threshold. (2) <strong>Unilateral blown pupil</strong> — ipsilateral uncal herniation compressing CN III = neurosurgical emergency. (3) <strong>Cushing's triad</strong> = LATE sign of herniation (↑SBP/widened PP + bradycardia + irregular RR). (4) <strong>Decerebrate posturing</strong> = GCS motor 2 = brainstem compression. These four together are hallmarks of impending death without intervention. <strong>Temperature 38.2°C</strong> = mild fever, common in neuro patients (not herniation specific). <strong>Mild HR increase</strong> = non-specific, not a herniation sign.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 129, type: 'bowtie',
            stem: 'A 54-year-old woman is brought to the ED after collapsing while gardening. Her husband reports she complained of "the worst headache of my life" suddenly, then lost consciousness briefly. In the ED, she has a severe headache (10/10), nuchal rigidity, photophobia, and is vomiting. BP 168/96, HR 92. CT head shows hyperdense blood in the basal cisterns.',
            actions: ['Admit to ICU and begin nimodipine for vasospasm prophylaxis', 'Obtain emergent neurosurgical consultation for aneurysm evaluation and intervention'],
            allActions: ['Admit to ICU and begin nimodipine for vasospasm prophylaxis', 'Obtain emergent neurosurgical consultation for aneurysm evaluation and intervention', 'Administer tPA immediately — subarachnoid hemorrhage benefits from thrombolysis', 'Perform lumbar puncture first to confirm SAH before any other intervention'],
            condition: 'Subarachnoid hemorrhage (SAH) — blood in basal cisterns, thunderclap headache, meningismus',
            allConditions: ['Subarachnoid hemorrhage (SAH) — blood in basal cisterns, thunderclap headache, meningismus', 'Bacterial meningitis — fever and nuchal rigidity requiring antibiotics', 'Ischemic stroke — tPA within 3-hour window', 'Tension headache — severe but non-life-threatening'],
            parameters: ['CT confirms blood in subarachnoid space — LP is no longer needed (CT is diagnostic)', 'Vasospasm risk peaks 4–14 days post-SAH — nimodipine should begin immediately'],
            allParams: ['CT confirms blood in subarachnoid space — LP is no longer needed (CT is diagnostic)', 'Vasospasm risk peaks 4–14 days post-SAH — nimodipine should begin immediately', 'tPA is indicated for SAH to dissolve the subarachnoid clot', 'LP is required to confirm SAH even when CT is positive'],
            rationale: "<strong>SAH Bowtie ★HIGH YIELD★:</strong> Classic presentation: 'worst headache of my life' (thunderclap) + nuchal rigidity + loss of consciousness + CT showing blood in basal cisterns = SAH. Caused by ruptured cerebral aneurysm (most common). (1) <strong>Nimodipine immediately</strong> — vasospasm prophylaxis starts on admission; vasospasm peaks 7–8 days. (2) <strong>Neurosurgical consultation</strong> — aneurysm must be secured (endovascular coiling or surgical clipping) before re-bleeding. <strong>NEVER tPA</strong> — SAH is HEMORRHAGIC; thrombolytics would worsen bleeding catastrophically. <strong>LP is not needed when CT is positive</strong> — CT showing blood = SAH confirmed; LP adds risk without benefit.",
            topic: "Neuro Emergencies"
        });

        Q.push({
            id: 130, type: 'highlight',
            stem: 'A 47-year-old patient with a known berry aneurysm is on the neurological unit. Review the following nursing assessment findings. Highlight the findings that indicate SAH vasospasm may be occurring (days 4–14 post-SAH).',
            phrases: [
                { text: "New onset right arm weakness (not present at admission)", correct: true },
                { text: "Patient reports worsening headache compared to yesterday", correct: true },
                { text: "Aphasia developing — was speaking clearly yesterday", correct: true },
                { text: "GCS dropped from 14 to 11 over the past 2 hours", correct: true },
                { text: "This is post-SAH day 7 — peak vasospasm window", correct: true },
                { text: "Nimodipine dose was given on schedule 1 hour ago", correct: false },
                { text: "Temperature 37.6°C", correct: false },
                { text: "Blood pressure 138/82 mmHg (within target range)", correct: false }
            ],
            rationale: "<strong>SAH Vasospasm Recognition ★HIGH YIELD★:</strong> Vasospasm = cerebral arteries spasm → ischemia → stroke-like presentation. Red flags: (1) <strong>New focal deficit</strong> (arm weakness) = arterial territory ischemia. (2) <strong>Worsening headache</strong> = vascular or re-bleeding signal. (3) <strong>New aphasia</strong> = left MCA territory ischemia from vasospasm. (4) <strong>GCS decline</strong> = global deterioration. (5) <strong>Post-SAH day 7</strong> = peak vasospasm period (4–14 days; peak 7–8). ALL of these together = vasospasm until proven otherwise → notify provider, emergent CTA or cerebral angiography. <strong>Not concerning:</strong> Nimodipine given on schedule (reassuring — prophylaxis in place). Normal temp and BP = background data.",
            topic: "Neuro Emergencies"
        });

        // ===== END OF Q ARRAY =====
