        const CASES = [
            {
                id: 1,
                title: "Ischemic Stroke → tPA → SIADH",
                patient: "Maria Santos",
                age: 68,
                dx: "Acute Ischemic Stroke — Left Middle Cerebral Artery Territory",
                tabs: {
                    notes: {
                        label: "Nursing Notes",
                        content: "<strong>Emergency Department — Stroke Alert Activated</strong><br>68-year-old female with history of hypertension and atrial fibrillation (on warfarin, last INR unknown). Brought by husband who reports sudden symptom onset 45 minutes ago during breakfast. Patient had no prior stroke history.<br><br><strong>Current Assessment:</strong> Alert but unable to speak in sentences — produces effortful single words only and becomes frustrated when she cannot communicate. Appears to understand commands and follows simple directions. Right facial droop affecting lower face. Right arm 1/5 strength, right leg 2/5 strength. Left side normal. No dysarthria noted separately — aphasia is expressive in nature.<br><br><strong>BEFAST Findings Positive:</strong> Balance — unsteady gait reported. Eyes — no visual deficit noted. Face — right facial droop. Arms — right arm drift/weakness. Speech — expressive aphasia, struggles to say her name. Time — onset approximately 45 minutes ago."
                    },
                    vitals: {
                        label: "Vital Signs",
                        content: "<table><tr><th>Parameter</th><th>Value</th><th>Status</th></tr><tr><td>Heart Rate</td><td>88 bpm (irregular)</td><td style='color:#d97706'>⚠ Atrial fibrillation</td></tr><tr><td>Blood Pressure</td><td>172/94 mmHg</td><td style='color:#d97706'>⬆ Elevated (permissive HTN)</td></tr><tr><td>Respiratory Rate</td><td>18/min</td><td style='color:#059669'>Normal</td></tr><tr><td>SpO₂</td><td>97% on room air</td><td style='color:#059669'>Normal</td></tr><tr><td>Temperature</td><td>37.1°C</td><td style='color:#059669'>Normal</td></tr><tr><td>Blood Glucose</td><td>118 mg/dL</td><td style='color:#059669'>Normal</td></tr><tr><td>NIHSS Score</td><td><strong>14</strong></td><td style='color:#dc2626'>Moderate-severe stroke</td></tr></table>"
                    },
                    labs: {
                        label: "Labs / Imaging",
                        content: "<strong>CT Head (Non-Contrast) — Completed in 18 minutes:</strong><br>No hyperdense region (no hemorrhage). No early ischemic changes visible. No mass effect.<br><em>Radiologist: No acute intracranial hemorrhage. CT findings consistent with early ischemic stroke. tPA candidate pending eligibility review.</em><br><br><strong>Stat Labs:</strong><table><tr><th>Test</th><th>Value</th><th>Status</th></tr><tr><td>INR</td><td style='color:#059669'>1.1</td><td>Within tPA eligibility range</td></tr><tr><td>PTT</td><td>32 sec</td><td style='color:#059669'>Normal</td></tr><tr><td>Platelets</td><td>224,000/μL</td><td style='color:#059669'>Normal</td></tr><tr><td>Glucose</td><td>118 mg/dL</td><td style='color:#059669'>Normal (50-400 required)</td></tr><tr><td>Creatinine</td><td>0.9 mg/dL</td><td style='color:#059669'>Normal</td></tr></table>"
                    },
                    orders: {
                        label: "Orders",
                        content: "<strong>Stroke Team Orders — Door-to-Needle Target: 45 minutes</strong><ul><li><strong>tPA (alteplase) 0.9 mg/kg IV, max 90 mg</strong> — 10% as bolus over 1 min, remainder over 60 min + 50 mL NS flush</li><li>Insert all invasive lines (PIV ×2, Foley) <strong>BEFORE</strong> tPA administration</li><li>Continuous cardiac monitoring (telemetry — known AF)</li><li><strong>Permissive hypertension:</strong> Do NOT lower BP unless >185/105 mmHg (must maintain penumbra perfusion)</li><li>NPO — swallow study required before any oral intake</li><li>NO anticoagulants for 24 hours post-tPA</li><li>Post-tPA neuro checks: q15 min × 2hr → q30 min × 6hr → q1hr × 16hr</li><li>Aspirin/anticoagulation hold — reassess at 24hr CT</li><li>Neurology consult and stroke team at bedside</li></ul>"
                    }
                },
                tabs2: {
                    notes: {
                        label: "24hr Update",
                        content: "<strong>Acute Stroke Unit — 24 Hours Post-tPA</strong><br>tPA administered without bleeding complications. Repeat CT head at 24 hours: no hemorrhagic transformation. Expressive aphasia mildly improved — patient producing short phrases. Right-sided weakness persisting, rehabilitation consult placed.<br><br><strong>New Finding — SIADH Developing:</strong> The nurse notes urine output has been only 200 mL over the past 8 hours despite adequate IV fluid intake. Patient is euvolemic on exam (no edema, no orthostasis). Urine appears dark and concentrated. Repeat labs ordered.<br><br><strong>Assessment:</strong> Altered mental status — more confused than yesterday. Patient repeating questions and appearing disoriented to time."
                    },
                    vitals: {
                        label: "Updated Vitals",
                        content: "<table><tr><th>Parameter</th><th>Value</th><th>Trend</th></tr><tr><td>Blood Pressure</td><td>148/84 mmHg</td><td style='color:#059669'>↓ Normalizing</td></tr><tr><td>Heart Rate</td><td>82 bpm (irregular)</td><td style='color:#d97706'>AF continues</td></tr><tr><td>Urine Output (8hr)</td><td style='color:#dc2626'>200 mL</td><td style='color:#dc2626'>↓↓ Oliguria</td></tr><tr><td>Urine SG</td><td style='color:#dc2626'>1.030</td><td style='color:#dc2626'>Concentrated (high)</td></tr><tr><td>Serum Na⁺</td><td style='color:#dc2626'>128 mEq/L</td><td style='color:#dc2626'>↓↓ Hyponatremia</td></tr><tr><td>Serum Osmolality</td><td style='color:#dc2626'>258 mOsm/kg</td><td style='color:#dc2626'>↓ Low</td></tr><tr><td>Urine Osmolality</td><td style='color:#dc2626'>680 mOsm/kg</td><td style='color:#dc2626'>⬆ Inappropriately high</td></tr></table>"
                    },
                    labs: {
                        label: "Updated Labs",
                        content: "<strong>SIADH Diagnostic Criteria — All Met:</strong><table><tr><th>Criterion</th><th>Finding</th><th>Expected in SIADH</th></tr><tr><td>Serum Na⁺</td><td style='color:#dc2626'>128 mEq/L</td><td>↓ &lt;135</td></tr><tr><td>Serum osmolality</td><td style='color:#dc2626'>258 mOsm/kg</td><td>↓ &lt;275</td></tr><tr><td>Urine osmolality</td><td style='color:#dc2626'>680 mOsm/kg</td><td>↑ inappropriately concentrated</td></tr><tr><td>Urine Na⁺</td><td style='color:#dc2626'>62 mEq/L</td><td>↑ &gt;40 (kidneys excreting Na⁺)</td></tr><tr><td>Volume status</td><td>Euvolemic</td><td>Euvolemic (not hypovolemic)</td></tr><tr><td>Thyroid/Adrenal</td><td>Normal</td><td>Normal (rule out other causes)</td></tr></table><br><em>Note: DI would show OPPOSITE pattern — dilute urine (SG 1.001), hypernatremia, massive urine output.</em>"
                    },
                    orders: {
                        label: "Updated Orders",
                        content: "<ul><li><strong>SIADH Management:</strong> Fluid restriction 1,000 mL/24hr</li><li>Monitor Na⁺ q4-6hr — correct at rate NO MORE than 8–10 mEq/L per 24 hours (prevent osmotic demyelination)</li><li>Daily weights</li><li>No free water (avoid D5W infusions)</li><li>Continue anticoagulation HOLD (still within 24hr post-tPA window)</li><li>Swallow study completed — passed; soft diet initiated</li><li>Speech therapy consult for aphasia</li><li>Physical therapy and occupational therapy consults for right-sided deficits</li><li>Repeat head CT at 24hr (done — no hemorrhagic transformation)</li></ul>"
                    }
                }
            },
            {
                id: 2,
                title: "TBI → Increased ICP → Craniotomy",
                patient: "Jason Park",
                age: 22,
                dx: "Traumatic Brain Injury — Left Epidural Hematoma with Uncal Herniation",
                tabs: {
                    notes: {
                        label: "Nursing Notes",
                        content: "<strong>Emergency Department — Trauma Activation Level 1</strong><br>22-year-old male brought by EMS after motorcycle collision — struck by passenger vehicle at intersection. Patient was not wearing a helmet. EMS reports brief loss of consciousness at the scene (approximately 30 seconds), but patient was alert and talking on arrival (GCS 14). However, over the past 20 minutes in the ED, his level of consciousness has rapidly deteriorated.<br><br><strong>Current Assessment (GCS now 7):</strong> Eye opening: To pain only (2). Verbal: Incomprehensible sounds (2). Motor: Localizes pain (5) → now decerebrate posturing (2) on right. GCS = 7 on re-assessment.<br><br><strong>Pupil Exam:</strong> Left pupil 6 mm, nonreactive (blown pupil) — UNILATERAL dilation = uncal herniation in progress. Right pupil 3 mm, sluggishly reactive.<br><br><strong>Other Findings:</strong> Bruising over left temporal region. Tachycardia HR 44, BP widened (see vitals). Respirations irregular. Right-sided weakness. Contralateral (right) motor deficits."
                    },
                    vitals: {
                        label: "Vital Signs",
                        content: "<table><tr><th>Parameter</th><th>Value</th><th>Status</th></tr><tr><td>Blood Pressure</td><td style='color:#dc2626'>178/52 mmHg</td><td style='color:#dc2626'>⬆ Widened pulse pressure = Cushing</td></tr><tr><td>Heart Rate</td><td style='color:#dc2626'>44 bpm</td><td style='color:#dc2626'>⬇⬇ Bradycardia = Cushing</td></tr><tr><td>Respiratory Rate</td><td style='color:#dc2626'>Irregular (Cheyne-Stokes)</td><td style='color:#dc2626'>⚠ Herniation pattern</td></tr><tr><td>SpO₂</td><td style='color:#d97706'>93% on 4L NC</td><td style='color:#d97706'>⬇ Decreasing</td></tr><tr><td>Temperature</td><td>37.4°C</td><td style='color:#059669'>Normal</td></tr><tr><td>GCS</td><td style='color:#dc2626'><strong>7</strong> (↓ from 14)</td><td style='color:#dc2626'>Rapid deterioration</td></tr><tr><td>Left Pupil</td><td style='color:#dc2626'>6 mm — nonreactive</td><td style='color:#dc2626'>⚠ Uncal herniation</td></tr></table>"
                    },
                    labs: {
                        label: "Labs / Imaging",
                        content: "<strong>CT Head (Non-Contrast) — STAT:</strong><br>Large biconvex (lenticular) hyperdense lesion in the left temporal region measuring 3.2 cm at maximum thickness. Midline shift 8 mm to the right. Effacement of left lateral ventricle. Temporal uncus herniating through tentorium cerebelli.<br><br><em>Radiologist: LEFT EPIDURAL HEMATOMA with UNCAL HERNIATION and significant midline shift. Emergent neurosurgical intervention required.</em><br><br><strong>Labs:</strong><table><tr><th>Test</th><th>Value</th></tr><tr><td>Type & Screen</td><td>O positive — 4 units PRBC on hold</td></tr><tr><td>PT/INR</td><td>1.1 (normal)</td></tr><tr><td>Platelets</td><td>198,000/μL</td></tr><tr><td>Glucose</td><td>142 mg/dL (stress response)</td></tr></table>"
                    },
                    orders: {
                        label: "Orders",
                        content: "<strong>Emergent Neurosurgical Orders:</strong><ul><li><strong>Emergent craniotomy for evacuation of left epidural hematoma</strong></li><li>Rapid sequence intubation — RSI (avoid succinylcholine if possible — fasciculations increase ICP)</li><li>Target PaCO₂ 35–40 (avoid hypercapnia; brief hyperventilation ONLY if actively herniating)</li><li><strong>HOB 30° elevation, head midline</strong> (promote venous drainage from brain)</li><li>Mannitol 1 g/kg IV bolus (osmotic ICP reduction — temporizing measure before surgery)</li><li>No sedatives that cause hypotension (avoid propofol bolus) — maintain CPP</li><li>Phenytoin 20 mg/kg IV load for seizure prophylaxis (perioperative)</li><li>NPO immediately — emergent case</li><li>Foley catheter in place</li><li>Continuous ICP monitoring planned intraoperatively</li></ul>"
                    }
                },
                tabs2: {
                    notes: {
                        label: "Post-Op Update",
                        content: "<strong>Neurosurgical ICU — Post-Craniotomy Day 1</strong><br>Left temporal craniotomy performed emergently — epidural hematoma fully evacuated. Dura intact. ICP monitor placed intraoperatively. Patient extubated post-operatively — now on 4L nasal cannula.<br><br><strong>Current Neurological Status:</strong> GCS now 12 (E3V4M5). Right-sided weakness improving. Left pupil now 4mm and reactive (improving from 6mm nonreactive pre-op). Still confused and oriented ×1 (person only). Incision intact with small Jackson-Pratt drain in place.<br><br><strong>Nursing Concerns:</strong> Over the past 4 hours, urine output has been <strong>800 mL/hr</strong>. The urine is completely clear. Patient is becoming restless. Na⁺ is rising. Repeat labs ordered stat."
                    },
                    vitals: {
                        label: "Updated Vitals",
                        content: "<table><tr><th>Parameter</th><th>Value</th><th>Trend</th></tr><tr><td>Blood Pressure</td><td>132/78 mmHg</td><td style='color:#059669'>Stable</td></tr><tr><td>Heart Rate</td><td>88 bpm</td><td style='color:#059669'>Normal</td></tr><tr><td>SpO₂</td><td>96% on 4L NC</td><td style='color:#059669'>Stable</td></tr><tr><td>ICP (monitor)</td><td style='color:#059669'>12 mmHg</td><td style='color:#059669'>Acceptable (&lt;15)</td></tr><tr><td>Urine Output</td><td style='color:#dc2626'>800 mL/hr ×4hr = 3,200 mL</td><td style='color:#dc2626'>⬆⬆⬆ Massive polyuria</td></tr><tr><td>Urine SG</td><td style='color:#dc2626'>1.001</td><td style='color:#dc2626'>Extremely dilute</td></tr><tr><td>Serum Na⁺</td><td style='color:#dc2626'>154 mEq/L</td><td style='color:#dc2626'>⬆⬆ Hypernatremia</td></tr></table>"
                    },
                    labs: {
                        label: "Updated Labs",
                        content: "<strong>Diabetes Insipidus (DI) — Pattern Present:</strong><table><tr><th>Finding</th><th>Value</th><th>DI Pattern</th></tr><tr><td>Urine output</td><td style='color:#dc2626'>&gt;200 mL/hr (800 mL/hr)</td><td>⬆⬆ Massive</td></tr><tr><td>Urine SG</td><td style='color:#dc2626'>1.001</td><td>⬇ Extremely dilute</td></tr><tr><td>Urine osmolality</td><td style='color:#dc2626'>80 mOsm/kg</td><td>⬇ Very low</td></tr><tr><td>Serum Na⁺</td><td style='color:#dc2626'>154 mEq/L</td><td>⬆ Hypernatremia</td></tr><tr><td>Serum osmolality</td><td style='color:#dc2626'>318 mOsm/kg</td><td>⬆ Elevated</td></tr></table><br><em>DI vs SIADH: DI = massive dilute urine + hypernatremia. SIADH = concentrated oliguria + hyponatremia. These are OPPOSITES.</em><br><em>Cause: Post-craniotomy DI occurs from hypothalamic/pituitary stalk manipulation — ADH production disrupted.</em>"
                    },
                    orders: {
                        label: "Updated Orders",
                        content: "<ul><li><strong>DI Management:</strong> DDAVP (desmopressin) 1–2 mcg IV q12hr (synthetic ADH replacement)</li><li>Replace urine output mL-for-mL with 0.45% NaCl IV</li><li>Monitor Na⁺ q4hr — correct hypernatremia NO faster than 8–10 mEq/L per 24 hours</li><li><strong>No coughing, sneezing, or blowing nose</strong> — increases ICP and risks CSF leak</li><li>HOB 30° — maintain until ICP monitor removed</li><li>Continue phenytoin — therapeutic drug monitoring ordered</li><li>Neurology follow-up — EEG if seizure activity suspected</li><li>Wound care: monitor surgical incision for CSF leak (clear halo sign around blood stain = CSF)</li><li>No heavy lifting, straining, or Valsalva activity</li></ul>"
                    }
                }
            },
            {
                id: 3,
                title: "SCI → Neurogenic Shock → Autonomic Dysreflexia",
                patient: "Marcus Williams",
                age: 35,
                dx: "Complete C5 Spinal Cord Injury with Neurogenic Shock",
                tabs: {
                    notes: {
                        label: "Nursing Notes",
                        content: "<strong>Emergency Department — Trauma Activation</strong><br>35-year-old male brought by EMS from a community pool after diving into the shallow end. Bystanders immediately noted he could not move his arms or legs and kept him floating until EMS arrived. Transported with full cervical spine immobilization (hard cervical collar + backboard).<br><br><strong>Current Assessment:</strong> Alert and oriented ×4, very anxious. Reports he cannot feel or move his arms or legs. Burning sensation at the level of his clavicles. Motor: Arms — no movement bilaterally. Hands — no grip. Legs — no movement. Sensation: Absent below bilateral clavicle level.<br><br><strong>C-Spine Immobilization Maintained Throughout All Assessments</strong><br><br><strong>Skin Assessment:</strong> Skin below the level of injury is <strong>warm and dry</strong>. No diaphoresis. Skin above the level is normal. Patient feels cold internally but skin is paradoxically warm — vasodilation from loss of sympathetic tone."
                    },
                    vitals: {
                        label: "Vital Signs",
                        content: "<table><tr><th>Parameter</th><th>Value</th><th>Status</th></tr><tr><td>Blood Pressure</td><td style='color:#dc2626'>78/50 mmHg</td><td style='color:#dc2626'>⬇⬇ Severe hypotension</td></tr><tr><td>Heart Rate</td><td style='color:#dc2626'>48 bpm</td><td style='color:#dc2626'>⬇ Bradycardia (not tachy!)</td></tr><tr><td>Respiratory Rate</td><td style='color:#d97706'>22/min (diaphragm only)</td><td style='color:#d97706'>⚠ At risk for respiratory failure</td></tr><tr><td>SpO₂</td><td style='color:#d97706'>94% on 4L NC</td><td style='color:#d97706'>Monitor closely</td></tr><tr><td>Temperature</td><td style='color:#d97706'>36.1°C</td><td style='color:#d97706'>Low-normal (thermoregulation lost)</td></tr><tr><td>Skin (below injury)</td><td>WARM and DRY</td><td style='color:#d97706'>⚠ Vasodilation (sympathetic lost)</td></tr></table>"
                    },
                    labs: {
                        label: "Labs / Imaging",
                        content: "<strong>CT C-Spine / MRI (Emergent):</strong><br>Fracture-dislocation at C5-C6 with complete cord transection. Cord edema and hemorrhage at injury level. No evidence of injury above C5.<br><br><strong>Respiratory Assessment:</strong> C5 complete SCI — diaphragm (C3-C5) partially preserved, but intercostals (T1-T7) and abdominal muscles lost. High risk for respiratory failure especially with fatigue or secretion accumulation.<br><br><strong>Labs:</strong><table><tr><th>Test</th><th>Value</th></tr><tr><td>CBC</td><td>WBC 9.2, Hgb 14.1 (normal — not hemorrhagic shock)</td></tr><tr><td>BMP</td><td>Na 140, K 4.1, Cr 0.8 (normal)</td></tr><tr><td>Lactate</td><td>2.1 mmol/L (mild elevation — distributive)</td></tr><tr><td>UA</td><td>Clear (Foley just placed)</td></tr></table>"
                    },
                    orders: {
                        label: "Orders",
                        content: "<strong>Neurogenic Shock Management:</strong><ul><li>IV fluid resuscitation: 500 mL NS bolus — will have limited effect (distributive shock, not volume depletion)</li><li><strong>Levophed (norepinephrine) infusion</strong> — first-line vasopressor for neurogenic shock (restores sympathetic tone; start at 0.05 mcg/kg/min and titrate)</li><li><strong>MAP target ≥85 mmHg</strong> during hyperacute phase (maintains spinal cord perfusion)</li><li>If bradycardia worsens or becomes symptomatic: atropine 0.5 mg IV</li><li>C-spine immobilization maintained — NO logrolling without full team</li><li>Foley catheter placed (bladder atony expected)</li><li>Respiratory monitoring: ABG, continuous SpO₂, incentive spirometry — intubation if respiratory failure develops</li><li>DVT prophylaxis: sequential compression devices NOW; pharmacologic prophylaxis within 72 hours</li><li>Neurosurgery and rehabilitation consults</li></ul>"
                    }
                },
                tabs2: {
                    notes: {
                        label: "12hr Update",
                        content: "<strong>Neurological ICU — 12 Hours Post-Admission</strong><br>Neurogenic shock stabilized — MAP maintained ≥85 on low-dose Levophed (weaning). BP improving. Respiratory status stable with supplemental O₂ — no intubation required yet. C5 complete SCI confirmed — no motor or sensory function below bilateral clavicle level.<br><br><strong>New Emergency — Autonomic Dysreflexia:</strong><br>Sudden onset 20 minutes ago: Patient reports an immediate, pounding headache (10/10). Face is flushed and diaphoretic <strong>above</strong> the injury level. Skin below injury is pale and cool. Nasal congestion reported. Extreme anxiety.<br><br><strong>Nursing Assessment:</strong> BP suddenly 210/118 mmHg (previously 98/62 on Levophed). HR 42 bpm (dropping). Foley catheter bag is empty — tubing kinked under the patient. Bladder scan: 680 mL urine retained."
                    },
                    vitals: {
                        label: "Updated Vitals — AD Episode",
                        content: "<table><tr><th>Parameter</th><th>During AD</th><th>Significance</th></tr><tr><td>Blood Pressure</td><td style='color:#dc2626'>210/118 mmHg</td><td style='color:#dc2626'>⬆⬆⬆ Hypertensive emergency</td></tr><tr><td>Heart Rate</td><td style='color:#dc2626'>42 bpm</td><td style='color:#dc2626'>⬇ Reflex bradycardia</td></tr><tr><td>Face/Neck</td><td style='color:#dc2626'>Flushing, diaphoresis ABOVE C5</td><td style='color:#dc2626'>⚠ Above-injury response</td></tr><tr><td>Below injury</td><td>Pale, cool, piloerection</td><td style='color:#d97706'>Vasoconstriction below lesion</td></tr><tr><td>Bladder scan</td><td style='color:#dc2626'>680 mL retained</td><td style='color:#dc2626'>⚠ Most common trigger</td></tr><tr><td>Catheter</td><td style='color:#dc2626'>Tubing KINKED — no drainage</td><td style='color:#dc2626'>TRIGGER IDENTIFIED</td></tr></table>"
                    },
                    labs: {
                        label: "AD Management",
                        content: "<strong>Autonomic Dysreflexia — Management Priority Order:</strong><ol><li><strong>SIT PATIENT UP IMMEDIATELY</strong> (head of bed 90° → uses gravity to lower BP)</li><li><strong>Identify and eliminate the trigger:</strong> Straighten and unclomp Foley tubing → if still blocked, irrigate or replace catheter immediately</li><li>Loosen any tight clothing, compression stockings, or restrictive items</li><li>Check for fecal impaction (secondary trigger — do NOT perform digital rectal exam until BP controlled)</li><li>If BP remains ≥150 systolic after trigger removed: <strong>Hydralazine IV or nifedipine SL</strong></li><li>Monitor BP q5 min during episode</li></ol><br><em>Autonomic dysreflexia = exaggerated sympathetic response below lesion to a noxious stimulus, with parasympathetic bradycardia above the lesion. Most common trigger: distended bladder.</em>"
                    },
                    orders: {
                        label: "Updated Orders",
                        content: "<ul><li>Foley catheter re-inserted (previous kinked and replaced) — confirm patency before leaving bedside</li><li>Bladder irrigation prn to maintain catheter patency</li><li>Monitor BP q5 min until resolved, then q1hr</li><li><strong>Document AD episode</strong> — alert ALL providers that patient is at risk</li><li>Patient education (when stable): triggers of AD, importance of bladder/bowel management, how to self-identify and respond</li><li>DVT prophylaxis: enoxaparin started (now &gt;72hr post-injury)</li><li>Begin PROM (passive range of motion) with physical therapy — minimum 4×/day</li><li>Bowel regimen initiated (stool softeners + suppository schedule)</li><li>Nutritional consult — high-protein diet for wound/pressure injury prevention</li></ul>"
                    }
                }
            }
        ];

        const Q = [];

        // ========== CASE 1: Ischemic Stroke → tPA → SIADH (Q1-Q6) ==========

        Q.push({
            id: 1, type: 'highlight', caseId: 1,
            stem: 'Review the nursing notes, vital signs, labs, and imaging for Maria Santos. Highlight the findings that indicate an acute ischemic stroke requiring immediate intervention.',
            phrases: [
                { text: "sudden symptom onset 45 minutes ago", correct: true },
                { text: "unable to speak in sentences — produces effortful single words only", correct: true },
                { text: "Right facial droop affecting lower face", correct: true },
                { text: "Right arm 1/5 strength, right leg 2/5 strength", correct: true },
                { text: "NIHSS Score 14", correct: true },
                { text: "No acute intracranial hemorrhage on CT", correct: true },
                { text: "history of hypertension and atrial fibrillation", correct: false },
                { text: "INR 1.1 (within tPA eligibility range)", correct: false },
                { text: "SpO₂ 97% on room air", correct: false },
                { text: "Blood Glucose 118 mg/dL", correct: false }
            ],
            rationale: "<strong>Stroke Lecture — Recognize Cues:</strong> Critical findings signaling acute ischemic stroke requiring immediate intervention: (1) <strong>Sudden symptom onset 45 minutes ago</strong> — time is brain; within tPA window. (2) <strong>Expressive aphasia</strong> (effortful single words, understands commands = Broca's aphasia). (3) <strong>Right facial droop</strong> — lower facial palsy (stroke, not Bell's palsy which affects the whole face including forehead). (4) <strong>Right-sided hemiparesis</strong> (arm 1/5, leg 2/5). (5) <strong>NIHSS 14</strong> (moderate-severe stroke). (6) <strong>CT showing no hemorrhage</strong> = critical eligibility criterion for tPA. <strong>Non-urgent findings:</strong> History of AF and HTN are background context. INR 1.1 is reassuring (normal). SpO₂ 97% is fine. Glucose 118 is normal.",
            topic: "Stroke"
        });

        Q.push({
            id: 2, type: 'cloze', caseId: 1,
            stem: "Maria Santos is eligible for tPA because the CT shows |0| and onset was |1| hours ago. The tPA dose will be 0.9 mg/kg with a maximum of |2| mg. Before tPA is infused, the nurse must insert |3| to prevent bleeding complications after administration. The target blood pressure BEFORE tPA is |4|.",
            selects: [
                { options: ['no hemorrhage (ischemic stroke confirmed)', 'bilateral infiltrates', 'a biconvex hematoma', 'subarachnoid blood'], correct: 0 },
                { options: ['less than 3', 'less than 24', 'less than 6', 'less than 12'], correct: 0 },
                { options: ['90 mg', '45 mg', '150 mg', '0.9 mg'], correct: 0 },
                { options: ['all invasive lines (PIV ×2, Foley)', 'a Foley catheter only', 'an arterial line only', 'a central venous catheter only'], correct: 0 },
                { options: ['≤185/105 mmHg (permissive hypertension)', '≤120/80 mmHg (tight control)', '≤160/90 mmHg (moderate control)', 'any pressure is acceptable'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Stroke Lecture — Analyze Cues:</strong> tPA eligibility requires: (1) <strong>No hemorrhage on CT</strong> — tPA is absolutely contraindicated in hemorrhagic stroke (would worsen bleeding). (2) <strong>Onset &lt;3 hours</strong> (extended to 4.5 hours with restrictions — younger age, no prior stroke, no diabetes with prior stroke). (3) <strong>Dose: 0.9 mg/kg, max 90 mg</strong> (10% bolus over 1 min, 90% over 60 min). (4) <strong>Insert ALL invasive lines BEFORE tPA</strong> — any puncture site after tPA can cause uncontrolled bleeding. (5) <strong>Permissive hypertension up to 185/105</strong> — the elevated BP is perfusing the ischemic penumbra; aggressively lowering it before tPA would enlarge the infarct.",
            topic: "Stroke"
        });

        Q.push({
            id: 3, type: 'matrix', caseId: 1,
            stem: 'For each nursing action related to Maria Santos\'s acute ischemic stroke and tPA administration, indicate whether it is an Immediate Priority, Secondary Priority, or NOT Appropriate.',
            rows: [
                'Insert two peripheral IVs and Foley catheter before tPA',
                'Obtain CT head to confirm no hemorrhage',
                'Keep blood pressure ≤185/105 mmHg before tPA',
                'Administer aspirin 325 mg immediately with tPA',
                'Keep patient NPO until swallow study completed',
                'Start heparin drip to prevent AF-related clots'
            ],
            cols: ['Immediate Priority', 'Secondary Priority', 'NOT Appropriate'],
            correct: [0, 0, 0, 2, 1, 2],
            scoring: 'perRow',
            rationale: "<strong>Stroke Lecture — Prioritize:</strong> (1) <strong>Insert all invasive lines BEFORE tPA</strong> — immediate priority to prevent post-tPA bleeding. (2) <strong>CT without contrast</strong> — immediate priority; must rule out hemorrhage before tPA. (3) <strong>BP ≤185/105</strong> — immediate priority; required for tPA eligibility. (4) <strong>Aspirin WITH tPA</strong> — NOT appropriate; antiplatelet therapy is held for 24 hours after tPA (bleeding risk). (5) <strong>NPO until swallow study</strong> — secondary priority (important but not the immediate stroke intervention). (6) <strong>Heparin during tPA</strong> — NOT appropriate; no anticoagulants for 24 hours after tPA.",
            topic: "Stroke"
        });

        Q.push({
            id: 4, type: 'selectN', n: 4, caseId: 1,
            stem: 'Select the 4 correct nursing interventions for a patient receiving tPA for ischemic stroke.',
            options: [
                { text: "Place the patient on continuous cardiac monitoring throughout tPA infusion", correct: true },
                { text: "Perform neurological checks q15 min × 2hr, then q30 min × 6hr, then q1hr × 16hr", correct: true },
                { text: "Immediately stop tPA and notify provider if patient develops sudden severe headache or LOC change", correct: true },
                { text: "Avoid any invasive procedures (venipuncture, NG tube, Foley) for 24 hours post-tPA", correct: true },
                { text: "Administer anticoagulants within 4 hours if the patient has atrial fibrillation", correct: false },
                { text: "Rapidly lower blood pressure to 120/80 mmHg immediately after tPA to prevent hemorrhagic conversion", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Stroke Lecture — Generate Solutions:</strong> (1) <strong>Continuous cardiac monitoring</strong> — detect dysrhythmias (especially with AF). (2) <strong>Strict neuro check schedule</strong> — the most important post-tPA nursing function; early detection of hemorrhagic conversion. (3) <strong>Stop tPA for sudden LOC change or severe headache</strong> — these are signs of intracranial hemorrhage, the most feared complication. (4) <strong>No invasive procedures × 24hr</strong> — any puncture site can cause serious bleeding when tPA is present. <strong>Traps:</strong> Anticoagulants must be HELD × 24hr after tPA (even for AF). Blood pressure should NOT be aggressively lowered — permissive hypertension protects the penumbra.",
            topic: "Stroke"
        });

        Q.push({
            id: 5, type: 'ordered', caseId: 1,
            stem: 'Place the nursing actions for post-tPA monitoring of Maria Santos in the correct priority order (first to last).',
            items: [
                "Perform neurological check q15 min for the first 2 hours after tPA completion",
                "Assess for signs of intracranial hemorrhage — sudden LOC change, new headache, worsening deficits",
                "Confirm no aspirin, anticoagulants, or antiplatelet agents are given for 24 hours",
                "Transition to q30 min neuro checks from hour 2 to hour 8",
                "Transition to q1hr neuro checks from hour 8 to hour 24",
                "Obtain repeat head CT at 24 hours before initiating anticoagulation"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Stroke Lecture — Take Action:</strong> The post-tPA monitoring sequence is non-negotiable: (1) q15 min × 2hr (highest risk period for intracranial hemorrhage). (2) Concurrent with monitoring — always assess for hemorrhagic conversion (sudden LOC change = stop what you're doing). (3) Confirm the anticoagulation hold is active (at risk if nurse who ordered it doesn't know). (4) q30 min × 6hr (hours 2–8). (5) q1hr × 16hr (hours 8–24). (6) Repeat CT at 24hr before any anticoagulation is restarted — must confirm no hemorrhagic transformation.",
            topic: "Stroke"
        });

        Q.push({
            id: 6, type: 'cloze', caseId: 1,
            stem: "Review the 24-hour update for Maria Santos. The urine output of 200 mL in 8 hours with a specific gravity of |0| and serum Na⁺ of 128 mEq/L is consistent with |1|. This is the OPPOSITE of |2|, which would show massive dilute urine output with hypernatremia. The primary management is |3|, and serum sodium must be corrected at a rate no faster than |4| mEq/L per 24 hours to prevent osmotic demyelination syndrome.",
            selects: [
                { options: ['1.030 (concentrated)', '1.001 (dilute)', '1.015 (normal)', '1.040 (very concentrated)'], correct: 0 },
                { options: ['SIADH (syndrome of inappropriate ADH)', 'Diabetes Insipidus (DI)', 'Cerebral salt wasting', 'Acute kidney injury'], correct: 0 },
                { options: ['Diabetes Insipidus (DI)', 'SIADH', 'Hypovolemia', 'Renal failure'], correct: 0 },
                { options: ['fluid restriction to 1,000 mL/24hr', 'aggressive IV fluid replacement', 'hypertonic saline 3% infusion', 'diuretic therapy'], correct: 0 },
                { options: ['8–10', '20–25', '15–20', '5'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Stroke Lecture — Evaluate Outcomes (SIADH):</strong> SIADH = Syndrome of Inappropriate Antidiuretic Hormone. Brain injury/stroke triggers inappropriate ADH release → kidneys retain water → dilutional hyponatremia + concentrated oliguria. Pattern: ↓Na, ↓urine output, ↑urine SG (1.030), ↑urine osmolality. <strong>DI is the OPPOSITE</strong>: ADH absent → massive dilute urine (SG 1.001) + hypernatremia. Post-craniotomy/hypothalamic injury → DI. Stroke → SIADH. Management: fluid restriction. <strong>Correction rate: 8–10 mEq/L per 24 hours maximum</strong> — faster correction → osmotic demyelination syndrome (central pontine myelinolysis) → permanent neurological damage.",
            topic: "Stroke"
        });

        // ========== CASE 2: TBI → Increased ICP → Craniotomy (Q7-Q12) ==========

        Q.push({
            id: 7, type: 'highlight', caseId: 2,
            stem: 'Review the nursing notes and vital signs for Jason Park. Highlight the findings that indicate uncal herniation and require immediate neurosurgical intervention.',
            phrases: [
                { text: "GCS drops to 7 (↓ from 14)", correct: true },
                { text: "Left pupil 6 mm, nonreactive (blown pupil)", correct: true },
                { text: "BP 178/52 mmHg with widened pulse pressure", correct: true },
                { text: "Heart Rate 44 bpm — Bradycardia", correct: true },
                { text: "Irregular (Cheyne-Stokes) respirations", correct: true },
                { text: "Decerebrate posturing on right", correct: true },
                { text: "brief loss of consciousness at the scene (30 seconds)", correct: false },
                { text: "GCS 14 on scene (alert and talking)", correct: false },
                { text: "Temperature 37.4°C", correct: false },
                { text: "Bruising over left temporal region", correct: false }
            ],
            rationale: "<strong>TBI Lecture — Recognize Cues (Cushing's Triad + Herniation):</strong> Herniation is occurring NOW based on: (1) <strong>Rapidly dropping GCS</strong> (14 → 7) = classic lucid interval pattern of epidural hematoma. (2) <strong>Unilateral blown pupil</strong> (left 6mm nonreactive) = uncal herniation compressing CN III on the same side as the hematoma. (3) <strong>Cushing's triad: widened pulse pressure + bradycardia + irregular respirations</strong> = late sign of brainstem compression. (4) <strong>Decerebrate posturing</strong> (extension) = brainstem damage, GCS motor 2. <strong>NOT herniation signs:</strong> Initial LOC of 30 sec = concussive component only. Initial GCS 14 = lucid interval (paradoxically reassuring at first). Low-grade temp and temporal bruising are background findings.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 8, type: 'cloze', caseId: 2,
            stem: "Jason's CT shows a |0| lesion — consistent with an epidural hematoma. The left pupil finding (6mm nonreactive, ipsilateral to the bleed) indicates |1|. His blood pressure of 178/52 mmHg with bradycardia and irregular respirations is called |2| and represents a |3| sign of herniation. The GCS of 7 means the nurse must prepare for |4| to protect the airway.",
            selects: [
                { options: ['biconvex (lenticular)', 'crescent-shaped', 'diffuse bilateral', 'ring-enhancing'], correct: 0 },
                { options: ['uncal herniation compressing CN III', 'contralateral motor loss only', 'a normal pupil variant', 'bilateral brainstem damage'], correct: 0 },
                { options: ["Cushing's Triad", 'BEFAST syndrome', 'Battle\'s Sign', 'Babinski response'], correct: 0 },
                { options: ['LATE (imminent death without intervention)', 'EARLY (first sign of ICP elevation)', 'MODERATE (can monitor and wait)', 'NORMAL (expected after trauma)'], correct: 0 },
                { options: ['emergent intubation (GCS ≤8)', 'nasal cannula at 6L', 'BiPAP ventilation only', 'high-flow mask with close monitoring'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>TBI Lecture — Analyze Cues:</strong> Epidural hematoma = <strong>biconvex (lens-shaped)</strong> hyperdense lesion on CT — arterial blood (middle meningeal artery) pools between skull and dura. Subdural = crescent-shaped (venous, bridging veins). The <strong>unilateral blown pupil IPSILATERAL</strong> to the bleed = uncal (temporal lobe) herniation through the tentorial notch → compresses CN III (oculomotor) → pupil dilates, loses reactivity. <strong>Cushing's Triad</strong> (↑BP/widened pulse pressure + bradycardia + irregular respirations) = LATE sign of brainstem compression = patient is minutes from death without intervention. GCS ≤8 = 'GR8' rule — requires airway protection via intubation.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 9, type: 'matrix', caseId: 2,
            stem: 'For each nursing action for Jason Park prior to emergent craniotomy, indicate whether it is Immediate Priority, Secondary Priority, or NOT Appropriate.',
            rows: [
                'Elevate HOB 30° with head in neutral alignment',
                'Administer mannitol 1 g/kg IV as a temporizing measure',
                'Prepare patient for immediate intubation (GCS 7)',
                'Administer dexamethasone IV to reduce cerebral edema',
                'Place Foley catheter (mannitol will cause diuresis)',
                'Allow family members in room to reduce patient agitation'
            ],
            cols: ['Immediate Priority', 'Secondary Priority', 'NOT Appropriate'],
            correct: [0, 0, 0, 2, 1, 2],
            scoring: 'perRow',
            rationale: "<strong>TBI Lecture — Prioritize:</strong> (1) <strong>HOB 30°, head neutral</strong> — immediate; promotes venous drainage from the brain, reduces ICP. (2) <strong>Mannitol</strong> — immediate; osmotic diuretic temporarily reduces brain volume/ICP as a bridge to surgery. (3) <strong>Intubation</strong> — GCS ≤8 requires airway protection; immediate. (4) <strong>Dexamethasone</strong> — NOT appropriate; corticosteroids are effective for tumor edema but <strong>NOT for traumatic brain edema</strong> — may increase glucose and infection risk with no ICP benefit. (5) <strong>Foley catheter</strong> — secondary priority (mannitol will cause massive diuresis, must have catheter in). (6) <strong>Family in room during herniation</strong> — NOT appropriate; agitation and stimulation INCREASE ICP.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 10, type: 'selectN', n: 5, caseId: 2,
            stem: 'Select the 5 correct nursing interventions for a patient with increased ICP undergoing emergent craniotomy preparation.',
            options: [
                { text: "Maintain HOB at 30° with head in neutral alignment — avoid hip flexion >90°", correct: true },
                { text: "Avoid clustering nursing activities — space out care to prevent ICP spikes", correct: true },
                { text: "Minimize environmental stimulation — dim lights, reduce noise, limit visitors", correct: true },
                { text: "Administer stool softeners to prevent Valsalva-induced ICP spikes", correct: true },
                { text: "Monitor for Cushing's triad — notify provider immediately if present", correct: true },
                { text: "Encourage patient to cough vigorously to clear secretions from airway", correct: false },
                { text: "Administer high-dose corticosteroids for traumatic cerebral edema", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>ICP Lecture — Generate Solutions:</strong> All 5 correct interventions target ICP reduction mechanisms: (1) HOB 30° + head neutral = promotes cerebral venous drainage (cerebral veins have NO valves). Hip flexion >90° obstructs venous return → ↑ICP. (2) Space nursing care — every intervention (turning, suctioning, bathing) transiently ↑ICP; cluster care spikes ICP too high. (3) Reduce stimulation — pain, noise, and anxiety all ↑ICP via ↑MAP. (4) Stool softeners — Valsalva during straining dramatically ↑ICP. (5) Monitor Cushing's triad — late sign of herniation requiring IMMEDIATE escalation. <strong>NEVER encourage coughing</strong> (Valsalva = ↑ICP). Corticosteroids are NOT indicated for traumatic edema.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 11, type: 'ordered', caseId: 2,
            stem: 'Place the emergency nursing actions for Jason Park (active herniation with epidural hematoma) in the correct priority order.',
            items: [
                "Call for immediate neurosurgical team and notify OR for emergent craniotomy",
                "Prepare for rapid sequence intubation (GCS 7 = airway not protected)",
                "Elevate HOB 30° and ensure head is in neutral midline alignment",
                "Administer mannitol 1 g/kg IV as temporizing ICP reduction measure",
                "Insert Foley catheter for urinary output monitoring with osmotic diuresis",
                "Continue neurological monitoring q15 min until OR transfer"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>TBI Lecture — Take Action:</strong> (1) <strong>Neurosurgical team NOW</strong> — the only definitive treatment for epidural hematoma is surgical evacuation; every minute of delay = more brain damage. (2) <strong>Intubate</strong> — GCS 7 = airway unprotected; aspiration risk + need for controlled hyperventilation if herniating. (3) <strong>HOB 30° + neutral head</strong> — immediate, takes seconds, decreases ICP. (4) <strong>Mannitol</strong> — temporizing pharmacologic ICP reduction. (5) <strong>Foley catheter</strong> — mannitol will cause massive diuresis; need accurate I&O. (6) <strong>Continuous neuro monitoring</strong> — must detect any further deterioration pre-operatively.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 12, type: 'cloze', caseId: 2,
            stem: "Review the post-craniotomy update for Jason Park. The urine output of 800 mL/hr with specific gravity of |0| and serum Na⁺ of 154 mEq/L is consistent with |1|. This condition occurs after craniotomy because |2|. The treatment is |3|. The nurse must also remember that post-craniotomy patients must NOT |4| as this increases ICP and risks CSF leakage.",
            selects: [
                { options: ['1.001 (extremely dilute)', '1.030 (concentrated)', '1.015 (normal)', '1.040 (very high)'], correct: 0 },
                { options: ['Diabetes Insipidus (DI)', 'SIADH', 'Acute kidney injury', 'Stress response'], correct: 0 },
                { options: ['hypothalamic or pituitary stalk manipulation disrupts ADH production', 'the kidney is damaged by intraoperative hypotension', 'mannitol causes permanent renal tubule damage', 'excessive IV fluids dilute ADH levels'], correct: 0 },
                { options: ['DDAVP (desmopressin) — synthetic ADH replacement', 'fluid restriction to 1,000 mL/24hr', 'furosemide to reduce urine output', 'hypertonic saline 3% to replace sodium'], correct: 0 },
                { options: ['cough, sneeze, or blow their nose', 'get out of bed with assistance', 'receive pain medication', 'have family at the bedside'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>TBI Lecture — Evaluate Outcomes (DI):</strong> Post-craniotomy DI = ADH production disrupted by surgical manipulation near hypothalamus/pituitary. Without ADH → kidneys cannot concentrate urine → massive dilute polyuria (800 mL/hr!), SG 1.001, and serum hypernatremia (154) from water loss. Treatment: <strong>DDAVP (desmopressin)</strong> = synthetic ADH replaces the missing hormone. Replace urine output mL-for-mL. Compare to SIADH (opposite pattern). <strong>Post-craniotomy restriction</strong>: no Valsalva activities — coughing/sneezing/blowing nose dramatically increases ICP and can cause CSF leakage at the incision site.",
            topic: "TBI & Brain Injuries"
        });

        // ========== CASE 3: SCI → Neurogenic Shock → Autonomic Dysreflexia (Q13-Q18) ==========

        Q.push({
            id: 13, type: 'highlight', caseId: 3,
            stem: 'Review the nursing notes and vital signs for Marcus Williams. Highlight the findings that differentiate neurogenic shock from hypovolemic shock.',
            phrases: [
                { text: "BP 78/50 mmHg — Severe hypotension", correct: true },
                { text: "Heart Rate 48 bpm — Bradycardia", correct: true },
                { text: "Skin below injury is WARM and DRY", correct: true },
                { text: "Respiratory Rate 22/min (diaphragm only)", correct: true },
                { text: "C5-C6 fracture-dislocation with complete cord transection", correct: true },
                { text: "CBC: Hgb 14.1 (normal — no hemorrhage)", correct: true },
                { text: "Alert and oriented ×4, very anxious", correct: false },
                { text: "reports cannot feel or move arms or legs", correct: false },
                { text: "Lactate 2.1 mmol/L", correct: false },
                { text: "Foley catheter placed", correct: false }
            ],
            rationale: "<strong>SCI Lecture — Recognize Cues:</strong> Neurogenic shock = loss of sympathetic tone from SCI above T6. Key differentiating features from hypovolemic shock: (1) <strong>↓BP with BRADYCARDIA</strong> — hypovolemic shock causes reflex TACHYCARDIA; neurogenic causes paradoxical bradycardia (vagus nerve still active but sympathetic lost). (2) <strong>Warm, dry skin</strong> — hypovolemic = cool/clammy; neurogenic = vasodilation → warm skin. (3) <strong>C5 injury level</strong> — above T6 = sympathetic outflow disrupted. (4) <strong>Normal Hgb</strong> — rules out hemorrhagic shock as the primary cause. (5) <strong>Respiratory compromise</strong> — C5 SCI affects intercostals; at risk for failure. Orientation and anxiety are expected with a conscious SCI patient. Low lactate confirms mild/developing shock.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 14, type: 'cloze', caseId: 3,
            stem: "Marcus's BP of 78/50 with HR 48 and warm dry skin indicates |0|, which occurs because SCI above |1| disrupts sympathetic outflow. Unlike hypovolemic shock (which causes tachycardia and cool clammy skin), neurogenic shock causes |2|. The first-line vasopressor for neurogenic shock is |3|, and the MAP target during the hyperacute phase is |4| mmHg.",
            selects: [
                { options: ['neurogenic shock (distributive)', 'hypovolemic shock', 'cardiogenic shock', 'obstructive shock'], correct: 0 },
                { options: ['T6 (upper thoracic cord)', 'L1 (lumbar)', 'T12 (lower thoracic)', 'C8 (lower cervical)'], correct: 0 },
                { options: ['bradycardia with vasodilation (warm dry skin)', 'tachycardia with vasoconstriction', 'tachycardia with vasodilation', 'bradycardia with cool clammy skin'], correct: 0 },
                { options: ['Levophed (norepinephrine)', 'Dopamine', 'Vasopressin', 'Epinephrine'], correct: 0 },
                { options: ['≥85 mmHg', '≥65 mmHg', '≥70 mmHg', '≥90 mmHg'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>SCI Lecture — Analyze Cues:</strong> Neurogenic shock = <strong>distributive shock</strong> from loss of sympathetic outflow in injuries at or above T6. Sympathetic outflow originates from T1-L2 spinal cord. Loss = (1) vasodilation → ↓SVR → ↓BP; (2) loss of cardiac accelerator fibers → bradycardia (vagus unopposed); (3) warm dry skin (vasodilated). This is OPPOSITE of hypovolemic (↑HR, cool/clammy). Treatment: <strong>Levophed (norepinephrine)</strong> = alpha+beta agonist, restores vascular tone and heart rate. MAP target ≥85 mmHg to maintain spinal cord perfusion pressure during the hyperacute phase (first 7 days).",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 15, type: 'matrix', caseId: 3,
            stem: 'For each nursing intervention for Marcus Williams with C5 complete SCI, indicate whether it is Immediate Priority, Secondary Priority, or NOT Appropriate.',
            rows: [
                'Maintain C-spine immobilization throughout all care',
                'Monitor respiratory status closely — intubation if fatigue develops',
                'Apply sequential compression devices for DVT prevention',
                'Start passive range of motion (PROM) exercises within the first hour',
                'Begin pharmacologic DVT prophylaxis within 72 hours of injury',
                'Administer high-dose IV methylprednisolone for SCI neuroprotection'
            ],
            cols: ['Immediate Priority', 'Secondary Priority', 'NOT Appropriate'],
            correct: [0, 0, 0, 2, 1, 2],
            scoring: 'perRow',
            rationale: "<strong>SCI Lecture — Prioritize:</strong> (1) <strong>C-spine immobilization</strong> — immediate; ANY movement without immobilization could convert incomplete to complete injury. (2) <strong>Respiratory monitoring</strong> — C5 SCI = partial diaphragm function; intercostals lost = fatigue → respiratory failure. (3) <strong>SCDs</strong> — immediate; SCI patients have extremely high DVT risk from immobility and venous stasis. (4) <strong>PROM within first hour</strong> — NOT appropriate; premature; wait for hemodynamic stability (neurogenic shock still present). (5) <strong>Pharmacologic DVT prophylaxis within 72hr</strong> — secondary priority (guidelines recommend within 72hr, not immediately due to bleeding risk). (6) <strong>Methylprednisolone for SCI</strong> — NOW CONTROVERSIAL and largely abandoned — limited benefit, significant risk (infection, GI bleeding, hyperglycemia); many institutions no longer use it.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 16, type: 'selectN', n: 4, caseId: 3,
            stem: 'Select the 4 correct ongoing nursing priorities for Marcus Williams with C5 complete SCI during the first 24 hours.',
            options: [
                { text: "Perform passive range of motion (PROM) at least 4 times per day once hemodynamically stable", correct: true },
                { text: "Position with proper body alignment and turn every 2 hours to prevent pressure injuries", correct: true },
                { text: "Maintain Foley catheter and bowel regimen — bladder and bowel atony expected", correct: true },
                { text: "Suction secretions cautiously — aggressive suctioning can stimulate vagus nerve, causing bradycardia", correct: true },
                { text: "Encourage vigorous coughing exercises with forced expiration to clear secretions", correct: false },
                { text: "Apply hot packs to warm the cold skin below the injury level", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>SCI Lecture — Generate Solutions:</strong> (1) <strong>PROM ×4/day</strong> — contractures develop rapidly in paralyzed limbs; PROM maintains joint mobility and prevents deformity. (2) <strong>Turning q2hr</strong> — SCI patients cannot feel pressure → highest risk for pressure injuries (sacrum, heels, occiput). (3) <strong>Foley + bowel program</strong> — bladder/bowel atony (spinal shock) = cannot void or defecate voluntarily; must manage externally. (4) <strong>Cautious suctioning</strong> — vagal stimulation → bradycardia (already susceptible in neurogenic shock). Secretion accumulation → pneumonia risk. <strong>AVOID:</strong> Forced coughing (C5 SCI = cannot generate force; will fatigue). Hot packs to anesthetic skin = burn risk (patient cannot feel heat/pain).",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 17, type: 'ordered', caseId: 3,
            stem: 'Marcus Williams is experiencing autonomic dysreflexia (BP 210/118, pounding headache, sweating above injury). Place the nursing actions in the correct priority order.',
            items: [
                "Sit the patient upright immediately (HOB 90° or full sitting position)",
                "Assess and remove the trigger — straighten/unclamp Foley tubing first (most common cause: distended bladder)",
                "Loosen any tight clothing, stockings, or restrictive items below the injury level",
                "Check for and remove any other noxious stimuli (skin pressure, fecal impaction — check rectum last)",
                "If BP remains ≥150 systolic after trigger removed: administer hydralazine IV or nifedipine SL",
                "Monitor BP every 5 minutes until episode resolves and document findings"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>SCI Lecture — Take Action (Autonomic Dysreflexia):</strong> AD = exaggerated sympathetic response below SCI level to a noxious stimulus. Ascending vasoconstriction causes severe HTN; parasympathetics respond with bradycardia and flushing ABOVE lesion. Priority: (1) <strong>Sit up FIRST</strong> — uses gravity to lower BP immediately (postural hypotension = blood pools in legs). (2) <strong>Find/remove trigger</strong> — bladder distension is THE most common cause (80%); check Foley FIRST. (3) <strong>Loosen clothing</strong> — constriction stimulates sympathetics. (4) <strong>Check other triggers</strong> (rectal exam LAST — digital rectal exam can worsen AD before BP controlled). (5) <strong>Antihypertensive</strong> if trigger removed but BP remains critically elevated. (6) <strong>Monitor and document</strong> — episode can recur.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 18, type: 'cloze', caseId: 3,
            stem: "Review the autonomic dysreflexia update for Marcus. The FIRST nursing action was to |0| because gravity immediately lowers blood pressure. The most common trigger of autonomic dysreflexia is |1|. Findings that are ABOVE the injury level during an AD episode include |2|, while below the injury level the patient shows |3|. If the trigger is removed and BP remains critically elevated (≥150 systolic), the nurse administers |4|.",
            selects: [
                { options: ['sit the patient upright (HOB 90°)', 'administer antihypertensive medication immediately', 'call for emergent cardiac consultation', 'place the patient in Trendelenburg position'], correct: 0 },
                { options: ['distended bladder (kinked or blocked Foley catheter)', 'skin breakdown and pressure injury', 'respiratory infection', 'emotional stress'], correct: 0 },
                { options: ['flushing, diaphoresis, pounding headache, nasal congestion', 'pallor, coolness, and piloerection', 'paralysis and sensory loss', 'hypotension and bradycardia'], correct: 0 },
                { options: ['pallor, coolness, and piloerection (vasoconstriction)', 'flushing and diaphoresis', 'intense pain and spasm', 'normal sensation and movement'], correct: 0 },
                { options: ['hydralazine IV or nifedipine SL', 'labetalol IV (beta-blocker)', 'epinephrine IM', 'atropine IV for bradycardia'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>SCI Lecture — Evaluate Outcomes (Autonomic Dysreflexia):</strong> AD mechanics: noxious stimulus below SCI → massive sympathetic discharge below lesion → severe vasoconstriction → ↑BP. Baroreceptors detect ↑BP → parasympathetic response ABOVE lesion (bradycardia, flushing, diaphoresis, nasal congestion). Below the lesion: the sympathetic vasoconstriction continues uninhibited (pallor, coolness, piloerection — patient can't feel it). Sitting upright = gravity-assisted blood pooling in legs → immediate BP reduction. Kinked catheter → bladder distension = #1 trigger (must check first). If BP persists after trigger removal: <strong>hydralazine IV</strong> (direct vasodilator) or <strong>nifedipine SL</strong> (CCB). NEVER labetalol (non-selective beta-blocker contraindicates in bradycardia context).",
            topic: "Spinal Cord Injury"
        });
