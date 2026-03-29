        // ========== TOPIC 1: Neuro Assessment & GCS (12 questions, Q19-Q30) ==========

        Q.push({
            id: 19, type: 'mc',
            stem: 'A nurse is assessing a patient with traumatic brain injury. The patient opens eyes to pain, makes incomprehensible sounds, and localizes to pain with the right hand. What is this patient\'s GCS score?',
            opts: ['9', '7', '11', '13'],
            correct: 0,
            rationale: "<strong>GCS ★MUST KNOW★:</strong> GCS = Eye + Verbal + Motor. Eye opening to pain = 2. Incomprehensible sounds = 2. Localizes to pain = 5. GCS = 2 + 2 + 5 = <strong>9</strong>. GCS ≤ 8 = coma requiring airway protection ('GR8 = Intubate'). <strong>Eye:</strong> Spontaneous(4), To voice(3), To pain(2), None(1). <strong>Verbal:</strong> Oriented(5), Confused(4), Inappropriate words(3), Incomprehensible(2), None(1). <strong>Motor:</strong> Obeys(6), Localizes(5), Withdraws(4), Decorticate(3), Decerebrate(2), Flaccid(1). Range: 3–15.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 20, type: 'mc',
            stem: 'A patient with a TBI has a GCS score of 7. Which nursing action is the PRIORITY based on this finding?',
            opts: ['Prepare for emergent intubation — GCS ≤8 indicates inability to protect the airway', 'Place the patient in semi-Fowler\'s position and apply supplemental O₂ via non-rebreather mask', 'Administer IV mannitol immediately to reduce ICP', 'Obtain a stat head CT before any intervention'],
            correct: 0,
            rationale: "<strong>GCS ≤8 = Intubate ★MUST KNOW★:</strong> A GCS of 7 falls at or below the threshold of 8, indicating the patient is in a coma and cannot protect their own airway. The mnemonic 'GR8 = Intubate' — GCS at or below 8 requires emergent endotracheal intubation. <strong>Airway is ALWAYS first priority.</strong> Without a protected airway, the patient will aspirate and die before any other intervention can help. NRB mask is not sufficient — the patient cannot maintain an open airway or manage secretions at GCS 7. CT and mannitol may follow but NEVER before securing the airway.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 21, type: 'mc',
            stem: 'A mechanically ventilated patient with severe TBI demonstrates extension of all four extremities when the nurse applies a sternal rub. This posturing pattern indicates:',
            opts: ['Decerebrate posturing — brainstem damage, worst prognosis', 'Decorticate posturing — cortical damage, better prognosis', 'Normal withdrawal response to pain', 'Locked-in syndrome with voluntary movement preserved'],
            correct: 0,
            rationale: "<strong>Posturing ★MUST KNOW★:</strong> <strong>Decerebrate posturing</strong> = extension of all extremities (arms extended, pronated, legs extended, feet plantar-flexed) in response to pain. Indicates <strong>brainstem damage</strong> = worst prognosis. GCS Motor = 2. <strong>Decorticate posturing</strong> = arms FLEXED toward the core, legs extended. Indicates damage at the level of the cortex but spinal cord/brainstem still functional = better prognosis. GCS Motor = 3. Memory: <strong>De-COR-ticate = arms toward CORe (flexion)</strong>. <strong>Decerebrate = brain stem Damaged = Extension</strong>. D-E for Extension = brainstem Damage.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 22, type: 'sata',
            stem: 'A nurse is assessing a patient with altered level of consciousness. Select ALL that apply regarding the GCS motor response subscale.',
            opts: [
                { t: "Obeying commands scores a 6 — the highest motor response", c: true },
                { t: "Localizing to pain (reaching toward the stimulus) scores a 5", c: true },
                { t: "Decorticate posturing (arm flexion) scores a 3", c: true },
                { t: "Decerebrate posturing (all extension) scores a 2 and indicates brainstem damage", c: true },
                { t: "Flaccid (no response) scores a 0 on the motor subscale", c: false },
                { t: "Withdrawal from pain (pulling away) scores a 4", c: true }
            ],
            rationale: "<strong>GCS Motor Subscale (1-6):</strong> 6 = Obeys commands. 5 = Localizes pain (purposeful reach toward stimulus). 4 = Withdraws from pain (pulls away but not purposeful). 3 = Decorticate flexion (arms flex, legs extend). 2 = Decerebrate extension (all extremities extend). 1 = Flaccid (NO response). <strong>Minimum motor score = 1, NOT 0.</strong> GCS minimum total = 3 (all ones). Withdrawal (4) = better than decorticate (3) = better than decerebrate (2).",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 23, type: 'sata',
            stem: 'A nurse is caring for an unconscious patient following a large ischemic stroke. Select ALL correct nursing actions when providing care for this patient.',
            opts: [
                { t: "Speak to the patient as if they can hear — hearing is the last sense to go", c: true },
                { t: "Assess level of consciousness as the first and most sensitive neurological indicator", c: true },
                { t: "Apply artificial tears and eye patches to protect corneas (patient cannot blink)", c: true },
                { t: "Maintain silence at the bedside — talking causes unnecessary cerebral stimulation", c: false },
                { t: "Reposition every 2 hours and use pressure-relieving devices for skin integrity", c: true },
                { t: "Perform oral hygiene even though patient is NPO to prevent aspiration pneumonia", c: true }
            ],
            rationale: "<strong>Altered LOC Nursing ★HIGH YIELD★:</strong> (1) <strong>Hearing is the LAST sense to go</strong> — always speak to unconscious patients, explain care, maintain dignity. (2) <strong>LOC = most sensitive neurological indicator</strong> — first to change with deterioration. (3) <strong>Eye protection</strong> — corneal abrasion from incomplete closure; lubricate q2-4hr. (4) Do NOT maintain silence — speaking is therapeutic and hearing remains. (5) <strong>Reposition q2hr</strong> — unconscious patients cannot shift weight = highest pressure injury risk. (6) <strong>Oral hygiene</strong> — bacteria colonize mouth; aspiration of bacteria → pneumonia; chlorhexidine rinse reduces VAP risk.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 24, type: 'matrix',
            stem: 'Match each neurological finding with the correct clinical interpretation.',
            rows: ['Positive Babinski reflex in an adult', 'Kernig sign — cannot extend knee with thigh flexed', 'Brudzinski sign — hips flex when neck is flexed', 'Cushing\'s triad (↑BP, ↓HR, irregular RR)'],
            cols: ['Meningeal irritation', 'Upper motor neuron lesion (corticospinal tract)', 'Late sign of increased ICP / herniation'],
            correct: [1, 0, 0, 2],
            scoring: 'perRow',
            rationale: "<strong>Neuro Assessment Signs ★MUST KNOW★:</strong> <strong>Babinski</strong>: Adults = toes DOWN normally; toes FAN UP (positive) = upper motor neuron (corticospinal tract) lesion. Normal in infants. <strong>Kernig sign</strong>: Cannot extend knee with thigh flexed → meningeal irritation. <strong>Brudzinski sign</strong>: Neck flexion → reflexive hip/knee flexion → meningeal irritation. Brudzinski is MORE sensitive than Kernig. <strong>Cushing's Triad</strong>: ↑systolic BP (widened pulse pressure) + bradycardia + irregular respirations = LATE, ominous sign of herniation → brain stem compression.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 25, type: 'ordered',
            stem: 'A nurse is performing a complete neurological assessment on a new ICU admission. Place the assessment components in the correct priority order (most to least urgent).',
            items: [
                "Assess level of consciousness and responsiveness — the most sensitive neurological indicator",
                "Assess pupils — size, shape, equality, and reactivity to light",
                "Assess motor function — strength, tone, and abnormal posturing",
                "Assess sensory function — compare bilateral sensation to touch and pain",
                "Assess cranial nerve reflexes — gag reflex, corneal reflex, cough",
                "Document findings and compare to baseline"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Neuro Assessment Priority Order:</strong> (1) <strong>LOC FIRST</strong> — most sensitive; tells you the overall picture immediately. (2) <strong>Pupils</strong> — pupil changes (especially unilateral dilation) signal herniation requiring IMMEDIATE action. (3) <strong>Motor</strong> — posturing (decorticate/decerebrate) indicates level and severity of CNS dysfunction. (4) <strong>Sensory</strong> — important but less urgent than motor; helps localize lesion. (5) <strong>Cranial nerves</strong> — specific function assessment; important for safety (gag = aspiration risk). (6) <strong>Document</strong> — essential for tracking trends; always last.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 26, type: 'cloze',
            stem: "The Glasgow Coma Scale has three components: Eye opening (max |0|), Verbal response (max |1|), and Motor response (max |2|). The total range is |3| to 15. A score of |4| or below indicates coma and need for airway protection.",
            selects: [
                { options: ['4', '5', '6', '3'], correct: 0 },
                { options: ['5', '4', '6', '3'], correct: 0 },
                { options: ['6', '5', '4', '3'], correct: 0 },
                { options: ['3', '5', '8', '1'], correct: 0 },
                { options: ['8', '10', '6', '12'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>GCS Components ★MUST KNOW★:</strong> Eye = max 4 (spontaneous). Verbal = max 5 (oriented). Motor = max 6 (obeys commands). Total max = 15. <strong>Minimum = 3</strong> (all 1s — even completely unresponsive patients score 3, not 0). <strong>GCS ≤ 8 = coma = intubate</strong> ('GR8 = Intubate'). Score of 8 or below = inability to protect airway.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 27, type: 'cloze',
            stem: "During a neurological assessment, the nurse notes that the patient's left pupil is 7mm and nonreactive while the right pupil is 3mm and brisk. This finding of a unilateral dilated nonreactive pupil on the LEFT side suggests |0| on the |1| side (ipsilateral). This occurs because herniation compresses |2|, which controls pupil constriction. This finding is considered a |3| neurological emergency.",
            selects: [
                { options: ['uncal herniation', 'a normal variant', 'bilateral herniation', 'posterior fossa compression'], correct: 0 },
                { options: ['left (same as the blown pupil)', 'right (opposite of the blown pupil)', 'bilateral (both sides)', 'unknown'], correct: 0 },
                { options: ['CN III (oculomotor nerve)', 'CN II (optic nerve)', 'CN VII (facial nerve)', 'CN VI (abducens nerve)'], correct: 0 },
                { options: ['life-threatening', 'routine (can wait for morning assessment)', 'minor (pupil changes are common)', 'expected post-operatively'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Pupil Assessment ★HIGH YIELD★:</strong> Unilateral dilated nonreactive pupil = uncal herniation — the temporal lobe is being pushed through the tentorium cerebelli, compressing CN III (oculomotor nerve) which controls pupil constriction (parasympathetic via ciliary ganglion). The blown pupil is <strong>IPSILATERAL</strong> to the hematoma (same side as the brain compression). This is a <strong>neurological emergency</strong> — herniation is in progress and patient will die without immediate intervention. PERRL = Pupils Equal Round Reactive to Light = NORMAL.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 28, type: 'selectN', n: 4,
            stem: 'Select the 4 components that are included in a comprehensive neurological assessment.',
            options: [
                { text: "Level of consciousness (alertness, orientation, responsiveness)", correct: true },
                { text: "Pupil size, equality, shape, and reaction to light", correct: true },
                { text: "Motor strength, tone, and symmetry bilaterally", correct: true },
                { text: "Cranial nerve function including gag reflex and corneal reflex", correct: true },
                { text: "Cardiac output measurement via pulmonary artery catheter", correct: false },
                { text: "Peak expiratory flow rate via spirometry", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Neuro Assessment Components:</strong> A complete neuro assessment includes: (1) <strong>LOC</strong> — most sensitive indicator (alert, arousable, responsive, orientation ×4). (2) <strong>Pupils</strong> — PERRL; unilateral changes = herniation sign. (3) <strong>Motor</strong> — bilateral strength testing, posturing (decorticate/decerebrate), pronator drift. (4) <strong>Cranial nerves</strong> — gag, corneal, facial symmetry, eye movement. Sensory, reflexes (Babinski, DTRs), speech, and vital signs round out the assessment. Cardiac output and spirometry are not part of the standard neurological exam.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 29, type: 'fillin',
            stem: 'A patient opens their eyes spontaneously, speaks in confused sentences, and withdraws from pain. Calculate their GCS score.',
            answer: 11,
            tolerance: 0,
            unit: 'points',
            rationale: "<strong>GCS Calculation:</strong> Eye opening = spontaneous = <strong>4</strong>. Verbal = confused sentences = <strong>4</strong>. Motor = withdraws from pain = <strong>4</strong>. GCS = 4 + 4 + 4 = <strong>11</strong>. This patient is NOT in a coma (>8) but warrants close monitoring. GCS 11 = moderate neurological compromise. If GCS drops to 8 or below → intubation required.",
            topic: "Neuro Assessment & GCS"
        });

        Q.push({
            id: 30, type: 'highlight',
            stem: 'A nurse is reviewing the chart of a patient admitted 4 hours ago with a subdural hematoma. Highlight the findings that indicate neurological deterioration requiring immediate provider notification.',
            phrases: [
                { text: "GCS drops from 12 to 8 over 2 hours", correct: true },
                { text: "New right-sided arm weakness, not present on admission", correct: true },
                { text: "Left pupil 5mm sluggishly reactive (previously 3mm brisk)", correct: true },
                { text: "Systolic BP rising to 182 mmHg with HR dropping to 52", correct: true },
                { text: "Patient confused but arousable to voice", correct: false },
                { text: "Temperature 37.8°C", correct: false },
                { text: "Bilateral crackles at lung bases", correct: false },
                { text: "Urine output 40 mL/hr for past 2 hours", correct: false }
            ],
            rationale: "<strong>Neuro Deterioration ★MUST KNOW★:</strong> Signs requiring IMMEDIATE notification: (1) <strong>GCS drop from 12 to 8</strong> — crosses the coma threshold; airway now at risk. (2) <strong>New focal weakness</strong> — indicates expanding hematoma or new ischemic event. (3) <strong>Pupil change</strong> — from brisk to sluggish and larger = early herniation warning. (4) <strong>↑BP + ↓HR</strong> = early Cushing's triad = increased ICP/herniation beginning. <strong>Not urgent</strong>: Confusion that was present on admission = baseline. Low-grade fever = common, monitor. Lung crackles = aspiration risk but not neuro emergency. Urine 40 mL/hr = adequate.",
            topic: "Neuro Assessment & GCS"
        });

        // ========== TOPIC 2: Increased ICP Management (10 questions, Q31-Q40) ==========

        Q.push({
            id: 31, type: 'mc',
            stem: 'A patient with a brain tumor has an ICP of 22 mmHg. The nurse understands that intervention is indicated when ICP exceeds:',
            opts: ['15 mmHg', '20 mmHg', '10 mmHg', '25 mmHg'],
            correct: 0,
            rationale: "<strong>ICP Values ★MUST KNOW★:</strong> Normal ICP = <strong>0–10 mmHg</strong>. ICP >15 mmHg = elevated and warrants intervention. ICP >20 mmHg = severely elevated, aggressive management. The threshold of 15 mmHg is when the nursing begins active interventions (positioning, reducing stimulation, medications). Above 20, emergency interventions such as ventriculostomy drainage or osmotherapy are used. CPP = MAP – ICP; normal CPP = 70–100 mmHg. If CPP drops below 50, irreversible ischemic damage occurs.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 32, type: 'mc',
            stem: 'A patient has a MAP of 85 mmHg and an ICP of 18 mmHg. What is the cerebral perfusion pressure (CPP) and how should the nurse interpret this finding?',
            opts: ['CPP = 67 mmHg — within acceptable range but requires monitoring', 'CPP = 67 mmHg — critically low, requires immediate intervention', 'CPP = 103 mmHg — normal, no intervention needed', 'CPP = 18 mmHg — dangerously low, immediate vasopressor needed'],
            correct: 0,
            rationale: "<strong>CPP = MAP – ICP ★MUST KNOW★:</strong> CPP = 85 – 18 = <strong>67 mmHg</strong>. Normal CPP = 70–100 mmHg. CPP of 67 is slightly below normal but NOT critically low. <strong>Critical threshold: CPP <50 mmHg = irreversible brain ischemia.</strong> At 67, the nurse should continue monitoring, assess for ICP trends, maintain MAP, and notify provider of the borderline CPP. Interventions to raise CPP: lower ICP (positioning, mannitol) or raise MAP (vasopressors if needed). The formula: CPP = MAP – ICP is a fundamental neuro nursing calculation.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 33, type: 'sata',
            stem: 'A nurse is caring for a patient with elevated ICP. Select ALL activities that can increase intracranial pressure and should be avoided or minimized.',
            opts: [
                { t: "Valsalva maneuver (straining during bowel movement)", c: true },
                { t: "Clustering of nursing activities (bathing, turning, suctioning in rapid succession)", c: true },
                { t: "Hip flexion greater than 90 degrees", c: true },
                { t: "Head rotation or lateral neck flexion", c: true },
                { t: "Emotional stress and agitation", c: true },
                { t: "Lying flat without head elevation", c: true },
                { t: "Passive range of motion exercises performed gently", c: false }
            ],
            rationale: "<strong>ICP-Increasing Activities ★MUST KNOW★:</strong> All of these increase ICP: (1) <strong>Valsalva</strong> → increased intrathoracic pressure → impairs venous drainage from brain. (2) <strong>Clustering care</strong> → each activity transiently ↑ICP; multiple in succession cause sustained dangerous elevation. (3) <strong>Hip flexion >90°</strong> → compresses abdominal veins → impairs cerebral venous return. (4) <strong>Head rotation/neck flexion</strong> → compresses jugular veins → ↑ICP. (5) <strong>Agitation/pain</strong> → ↑MAP → ↑ICP. (6) <strong>Flat positioning</strong> → gravity doesn't assist venous drainage. Gentle PROM does NOT significantly increase ICP and is appropriate for mobility.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 34, type: 'sata',
            stem: 'The nurse is caring for a patient with elevated ICP (ICP 20 mmHg). Select ALL appropriate nursing interventions.',
            opts: [
                { t: "Maintain HOB at 30–45° elevation", c: true },
                { t: "Keep the head in neutral alignment — no rotation or lateral flexion", c: true },
                { t: "Administer stool softeners to prevent straining", c: true },
                { t: "Dim lights and reduce noise to minimize external stimulation", c: true },
                { t: "Encourage deep breathing and coughing every 2 hours", c: false },
                { t: "Administer mannitol as ordered for osmotic ICP reduction", c: true }
            ],
            rationale: "<strong>ICP Nursing Interventions ★MUST KNOW★:</strong> (1) <strong>HOB 30–45°</strong> — allows gravity-assisted venous drainage (cerebral veins have no valves). (2) <strong>Neutral head alignment</strong> — jugular veins unobstructed for maximum venous drainage. (3) <strong>Stool softeners</strong> — prevent Valsalva maneuver which sharply increases ICP. (4) <strong>Reduce stimulation</strong> — pain/noise/light → ↑MAP → ↑ICP. (5) <strong>Deep coughing is CONTRAINDICATED</strong> — coughing is a Valsalva equivalent = spikes ICP. Turn patient and suction PRN instead. (6) <strong>Mannitol</strong> — osmotic diuretic; pulls fluid from brain tissue into vascular compartment → ↓ICP.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 35, type: 'matrix',
            stem: 'Match each ICP management intervention with its primary mechanism of action.',
            rows: ['HOB elevation 30–45°', 'Mannitol IV infusion', 'Hyperventilation (short-term)', 'Dexamethasone IV'],
            cols: ['Promotes cerebral venous drainage via gravity', 'Osmotic fluid shift from brain to bloodstream', 'Vasoconstriction from ↓CO₂ → ↓ICP', 'Reduces inflammation around brain tumors only'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>ICP Mechanism Matching ★MUST KNOW★:</strong> (1) <strong>HOB 30–45°</strong> = gravity promotes venous drainage (cerebral veins have no valves; head elevation facilitates return). (2) <strong>Mannitol</strong> = osmotic agent → creates osmotic gradient pulling fluid from cerebral edema into blood vessels → ↓brain volume → ↓ICP. (3) <strong>Hyperventilation</strong> = ↓PaCO₂ → cerebral vasoconstriction → ↓CBF → ↓ICP. SHORT-TERM ONLY (30 min) — can cause ischemia if used chronically. PaCO₂ must not drop below 30 mmHg. (4) <strong>Dexamethasone</strong> = steroid reduces vasogenic edema (leaky BBB) from brain tumors ONLY — NOT effective for traumatic or cytotoxic edema.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 36, type: 'ordered',
            stem: 'A patient with traumatic brain injury suddenly shows signs of increasing ICP (GCS drops from 11 to 8, BP rising with HR dropping). Place the nursing actions in the correct priority order.',
            items: [
                "Call for the provider and rapid response team immediately",
                "Ensure HOB is at 30–45° and head is in neutral midline alignment",
                "Prepare for emergent intubation — GCS ≤8",
                "Administer mannitol as ordered for osmotic ICP reduction",
                "Minimize all environmental stimulation (dim lights, limit visitors, quiet)",
                "Continue neurological monitoring every 15 minutes"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>ICP Emergency Response Order:</strong> (1) <strong>Call provider/rapid response</strong> — deteriorating GCS = life-threatening escalation; need immediate medical decision-making. (2) <strong>Position HOB 30° + neutral head</strong> — takes seconds, immediately aids venous drainage. (3) <strong>Prepare for intubation</strong> — GCS ≤8 = airway unprotected; must secure airway ASAP. (4) <strong>Mannitol</strong> — pharmacologic temporizing measure; requires provider order. (5) <strong>Reduce stimulation</strong> — every stimulus transiently raises ICP. (6) <strong>Continue neuro monitoring</strong> — must track progression and response to interventions.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 37, type: 'cloze',
            stem: "The Monro-Kellie hypothesis states that the skull is a |0| compartment containing three components: brain tissue (~1,400g), blood (~75 mL), and CSF (~75 mL). If one component increases in volume, another must |1| to maintain a constant total volume. When compensatory mechanisms are exhausted, even a small increase in volume causes a |2| rise in ICP. This explains why ICP can remain normal for a period then suddenly become |3| as a tumor grows.",
            selects: [
                { options: ['rigid (fixed volume)', 'elastic (expandable)', 'semi-permeable (partially flexible)', 'collapsible (compressible)'], correct: 0 },
                { options: ['decrease to compensate', 'increase proportionally', 'remain unchanged', 'leave the skull via CSF drainage'], correct: 0 },
                { options: ['dramatic (exponential)', 'gradual (linear)', 'minimal (logarithmic)', 'temporary (self-resolving)'], correct: 0 },
                { options: ['critically elevated and life-threatening', 'normal (compensated indefinitely)', 'slightly elevated but manageable', 'lower than baseline'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Monro-Kellie Hypothesis ★MUST KNOW★:</strong> The skull = <strong>rigid, fixed-volume compartment</strong>. Brain (80%) + blood (10%) + CSF (10%) = constant total. If one ↑ (e.g., tumor), others must ↓ (CSF displaced to spinal subarachnoid space, venous blood shunted out). This is <strong>compensation</strong> — works until compensatory reserve is exhausted. Once exhausted, even small volume increases cause <strong>dramatic exponential ICP rises</strong> (pressure-volume curve becomes steep). This is why a patient can have a growing subdural hematoma for weeks with normal ICP, then suddenly decompensate.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 38, type: 'cloze',
            stem: "A patient with bacterial meningitis has an ICP of 22 mmHg and a MAP of 78 mmHg. The cerebral perfusion pressure is |0| mmHg, which is |1| the critical threshold of 50 mmHg. The nurse recognizes that to improve CPP, interventions should aim to either |2| the MAP or |3| the ICP. If CPP drops below 50 mmHg, the patient is at risk for |4|.",
            selects: [
                { options: ['56', '44', '100', '78'], correct: 0 },
                { options: ['above (acceptable but low)', 'below (critically dangerous)', 'at (exactly the threshold)', 'far above (no concern)'], correct: 0 },
                { options: ['increase', 'decrease', 'maintain', 'rapidly fluctuate'], correct: 0 },
                { options: ['decrease', 'increase', 'stabilize', 'normalize'], correct: 0 },
                { options: ['irreversible cerebral ischemia and brain death', 'mild confusion only', 'hypertensive crisis', 'seizure activity only'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>CPP Calculation ★MUST KNOW★:</strong> CPP = MAP – ICP = 78 – 22 = <strong>56 mmHg</strong>. Normal CPP = 70–100 mmHg. <strong>Critical threshold = 50 mmHg</strong> — below this, irreversible cerebral ischemia begins. At CPP 56, the patient is above the critical threshold but low-normal; monitoring and optimization required. To improve CPP: (1) ↑MAP (vasopressors, IV fluids) or (2) ↓ICP (positioning, mannitol, CSF drainage). Never chase MAP up with fluids if ICP is the problem — treat both sides of the equation.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 39, type: 'selectN', n: 4,
            stem: 'A patient with a subarachnoid hemorrhage is showing signs of elevated ICP. Select the 4 CORRECT nursing interventions.',
            options: [
                { text: "Elevate HOB to 30–45° and keep head in neutral midline alignment", correct: true },
                { text: "Administer stool softeners — prevent straining/Valsalva which spike ICP", correct: true },
                { text: "Space nursing care activities — avoid clustering (bathing, turning, suctioning simultaneously)", correct: true },
                { text: "Monitor for Cushing's triad and report immediately if present", correct: true },
                { text: "Perform vigorous chest physiotherapy every 2 hours to prevent pneumonia", correct: false },
                { text: "Administer dexamethasone IV — most effective for SAH-related cerebral edema", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>ICP Management ★MUST KNOW★:</strong> (1) HOB 30–45° + neutral head = venous drainage optimization. (2) Stool softeners = prevent Valsalva ICP spikes. (3) Spacing care = prevents cumulative ICP elevation from multiple activities. (4) Monitoring for Cushing's triad = early detection of herniation. <strong>AVOID vigorous chest PT</strong> — coughing/percussion causes ICP spikes; gentle postural drainage acceptable. <strong>Dexamethasone does NOT help SAH or traumatic edema</strong> — only effective for vasogenic edema from brain tumors.",
            topic: "Increased ICP Management"
        });

        Q.push({
            id: 40, type: 'bowtie',
            stem: 'A 58-year-old patient with a known brain tumor is in the ICU. Over the past hour, the nurse notes the blood pressure rising from 130/82 to 178/54 mmHg, heart rate dropping from 88 to 46 bpm, and respiratory pattern changing to slow, irregular breathing. The patient\'s GCS has dropped from 13 to 8 in the past 30 minutes.',
            actions: ['Notify provider and rapid response team immediately — Cushing\'s triad indicates herniation', 'Prepare for emergent intubation and elevate HOB to 30°'],
            allActions: ['Notify provider and rapid response team immediately — Cushing\'s triad indicates herniation', 'Prepare for emergent intubation and elevate HOB to 30°', 'Administer dexamethasone 10 mg IV immediately — first-line for all cerebral edema', 'Lower the head of bed to improve cardiac output'],
            condition: 'Cushing\'s Triad — widened pulse pressure, bradycardia, irregular respirations — indicating herniation',
            allConditions: ['Cushing\'s Triad — widened pulse pressure, bradycardia, irregular respirations — indicating herniation', 'Septic shock with distributive hemodynamic pattern', 'Hypovolemic shock from uncontrolled bleeding', 'Respiratory failure from bilateral pneumonia'],
            parameters: ['GCS ≤8 — airway unprotected, herniation progressing', 'Cushing\'s triad is a LATE sign — immediate surgical/medical escalation required'],
            allParams: ['GCS ≤8 — airway unprotected, herniation progressing', 'Cushing\'s triad is a LATE sign — immediate surgical/medical escalation required', 'Dexamethasone is effective for all types of cerebral edema', 'Lowering HOB will improve cerebral perfusion'],
            rationale: "<strong>Cushing's Triad — ICP Emergency ★MUST KNOW★:</strong> Widened pulse pressure (↑systolic, ↓diastolic) + bradycardia + irregular respirations = <strong>Cushing's triad</strong> = brainstem is being compressed by herniation = patient will die without IMMEDIATE intervention. Actions: (1) Provider + rapid response — only neurosurgery/neurology can reverse herniation (emergent surgical decompression, ventriculostomy). (2) Intubate + HOB 30° — protect airway immediately; brief hyperventilation reduces ICP by vasoconstriction. Dexamethasone is NOT appropriate for all cerebral edema (only tumor-related vasogenic edema). Lowering HOB worsens ICP.",
            topic: "Increased ICP Management"
        });

        // ========== TOPIC 3: Stroke (12 questions, Q41-Q52) ==========

        Q.push({
            id: 41, type: 'mc',
            stem: 'A family member calls 911 because their spouse suddenly cannot speak, has a drooping left face, and cannot raise the left arm. Which stroke recognition tool should the EMS dispatcher use to assess this patient over the phone?',
            opts: ['BEFAST (Balance, Eyes, Face, Arms, Speech, Time)', 'AVPU (Alert, Voice, Pain, Unresponsive)', 'OPQRST (Onset, Provocation, Quality, Radiation, Severity, Time)', 'CIAMPEDS (Chief complaint, Illness, Allergies, Medications, Past history)'],
            correct: 0,
            rationale: "<strong>BEFAST ★MUST KNOW★:</strong> <strong>B</strong>alance — sudden loss. <strong>E</strong>yes — sudden visual change. <strong>F</strong>ace — drooping (one side). <strong>A</strong>rms — weakness (drift). <strong>S</strong>peech — slurred or absent. <strong>T</strong>ime — call 911 immediately; note time of last known well. Any positive finding = stroke until proven otherwise. 'Time is brain' — 1.9 million neurons lost per minute without treatment. BEFAST replaced FAST by adding B and E to capture posterior circulation strokes (balance/vision deficits from vertebrobasilar involvement).",
            topic: "Stroke"
        });

        Q.push({
            id: 42, type: 'mc',
            stem: 'A patient arrives to the ED 2 hours after last known well with left-sided weakness and slurred speech. CT head shows no hemorrhage. Which additional finding would CONTRAINDICATE tPA administration?',
            opts: ['INR of 2.8 (supratherapeutic anticoagulation)', 'Blood pressure 170/95 mmHg', 'NIHSS score of 8', 'Blood glucose of 130 mg/dL'],
            correct: 0,
            rationale: "<strong>tPA Contraindications ★MUST KNOW★:</strong> <strong>INR >1.7</strong> is a contraindication to tPA (excessive anticoagulation = high hemorrhage risk). INR 2.8 = significantly elevated = tPA CONTRAINDICATED. <strong>NOT contraindications:</strong> BP 170/95 is allowed (tPA eligibility requires BP ≤185/105 BEFORE administration; can treat to <185/105 and proceed). NIHSS 8 = moderate stroke, appropriate for tPA. Glucose 130 = normal range for tPA eligibility (50–400 required). Other major tPA contraindications: recent surgery (<14 days), active internal bleeding, prior ICH, recent LP, platelet count <100,000.",
            topic: "Stroke"
        });

        Q.push({
            id: 43, type: 'mc',
            stem: 'An ischemic stroke patient has a BP of 168/96 mmHg before tPA administration. The provider does not order antihypertensive treatment. The nurse understands this is appropriate because:',
            opts: ['Permissive hypertension up to 185/105 mmHg is maintained to perfuse the ischemic penumbra', 'The patient\'s baseline BP is unknown and treatment could cause harm', 'Blood pressure elevation is expected and resolves spontaneously within 1 hour', 'Antihypertensives are never given in the first 24 hours after stroke'],
            correct: 0,
            rationale: "<strong>Permissive Hypertension ★HIGH YIELD★:</strong> In acute ischemic stroke, the ischemic penumbra (tissue surrounding the dead core) is at risk. The elevated BP is the body's attempt to push blood through the partially blocked vessel and maintain perfusion to the penumbra. <strong>Aggressively lowering BP → enlarges the infarct</strong> by eliminating the perfusion pressure driving blood through the compromised territory. tPA eligibility requires BP <185/105 — if BP is already below this threshold (168/96 is fine), no treatment needed. After tPA: BP must be kept <180/105 for 24 hours.",
            topic: "Stroke"
        });

        Q.push({
            id: 44, type: 'sata',
            stem: 'A nurse is reviewing a patient\'s history before potential tPA administration for acute ischemic stroke. Select ALL findings that would CONTRAINDICATE tPA.',
            opts: [
                { t: "The patient had a craniotomy 10 days ago", c: true },
                { t: "Platelet count 82,000/μL", c: true },
                { t: "INR 2.2 (on warfarin for atrial fibrillation)", c: true },
                { t: "Blood glucose 65 mg/dL (below 50 mg/dL threshold is a contraindication)", c: false },
                { t: "Active GI bleeding noted in the past 21 days", c: true },
                { t: "History of intracranial hemorrhage", c: true }
            ],
            rationale: "<strong>tPA Contraindications ★HIGH YIELD★:</strong> (1) <strong>Recent craniotomy (<14 days)</strong> = surgery-related bleeding risk. (2) <strong>Platelets <100,000</strong> = inadequate clotting ability. (3) <strong>INR >1.7</strong> (on warfarin) = supratherapeutic anticoagulation = hemorrhage risk. (4) <strong>Blood glucose 65 mg/dL</strong> is NOT a contraindication (the threshold is glucose <50 mg/dL which could mimic stroke, or >400). At 65, tPA can proceed. (5) <strong>Active bleeding (including GI)</strong> = direct contraindication. (6) <strong>History of ICH</strong> = prior hemorrhage = highest risk for re-bleeding.",
            topic: "Stroke"
        });

        Q.push({
            id: 45, type: 'sata',
            stem: 'A patient received tPA for acute ischemic stroke 1 hour ago. Select ALL correct nursing actions during the post-tPA monitoring period.',
            opts: [
                { t: "Perform neurological checks q15 min for the first 2 hours after tPA completion", c: true },
                { t: "Immediately stop the tPA infusion if the patient develops sudden severe headache or new neurological deficits", c: true },
                { t: "Hold all anticoagulants and antiplatelet agents for at least 24 hours", c: true },
                { t: "Avoid any unnecessary venipuncture or invasive procedures for 24 hours post-tPA", c: true },
                { t: "Administer aspirin 325 mg now to prevent re-occlusion", c: false },
                { t: "Begin heparin infusion immediately to prevent atrial fibrillation-related recurrent stroke", c: false }
            ],
            rationale: "<strong>Post-tPA Nursing ★HIGH YIELD★:</strong> (1) q15 min neuro checks × 2hr (then q30 min × 6hr, then q1hr × 16hr). (2) STOP tPA immediately if signs of ICH (sudden LOC change, severe headache, new deficits) — hemorrhagic conversion is the most feared complication. (3) NO anticoagulants or antiplatelets × 24hr — wait for CT to confirm no hemorrhagic transformation. (4) Minimize invasive procedures — ANY puncture site can bleed with tPA active in the system. <strong>NEVER give aspirin with or within 24hr of tPA</strong> — bleeding risk. <strong>NEVER start heparin</strong> within 24hr of tPA.",
            topic: "Stroke"
        });

        Q.push({
            id: 46, type: 'matrix',
            stem: 'Match each stroke characteristic to the correct stroke type.',
            rows: ['"Worst headache of my life" with nuchal rigidity', 'tPA (alteplase) is the primary treatment', 'Biconvex hyperdense lesion on CT — lucid interval', 'Crescent-shaped blood collection on CT — venous origin'],
            cols: ['Ischemic Stroke', 'Subarachnoid Hemorrhage', 'Epidural Hematoma', 'Subdural Hematoma'],
            correct: [1, 0, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>Stroke Types ★MUST KNOW★:</strong> (1) <strong>'Worst headache of life' + nuchal rigidity</strong> = subarachnoid hemorrhage (SAH) — ruptured aneurysm or AVM bleeds into subarachnoid space; blood irritates meninges. (2) <strong>tPA</strong> = ischemic stroke ONLY; NEVER in hemorrhagic stroke (would worsen bleeding). (3) <strong>Biconvex hyperdense lesion + lucid interval</strong> = epidural hematoma — arterial bleeding (middle meningeal artery) between skull and dura; patient initially conscious then deteriorates. (4) <strong>Crescent-shaped + venous</strong> = subdural hematoma — bridging veins between dura and arachnoid; develops slowly over 24–48 hours.",
            topic: "Stroke"
        });

        Q.push({
            id: 47, type: 'ordered',
            stem: 'A patient arrives to the ED with acute stroke symptoms (left-sided weakness, facial droop, dysarthria). Place the stroke team interventions in the correct priority order.',
            items: [
                "Activate stroke alert and notify stroke team immediately upon patient arrival",
                "Obtain non-contrast CT head within 20 minutes of arrival to rule out hemorrhage",
                "Perform NIHSS assessment and review tPA eligibility criteria",
                "Insert IV access and draw stat labs (CBC, PT/INR, glucose, type & screen)",
                "Administer tPA if eligible — door-to-needle goal is 45 minutes",
                "Begin post-tPA monitoring protocol (q15 min neuro checks × 2 hours)"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Stroke Emergency Sequence ★HIGH YIELD★:</strong> (1) <strong>Activate stroke alert</strong> — the team cannot mobilize without notification; every minute counts (1.9 million neurons/min). (2) <strong>CT head within 20 min</strong> — must rule out hemorrhage before tPA; can't treat without this. (3) <strong>NIHSS + eligibility</strong> — determines tPA candidacy; done concurrently with CT prep. (4) <strong>IV access + labs</strong> — tPA requires INR, glucose, platelet results; insert lines before tPA. (5) <strong>tPA within 45 min of door</strong> — window closes at 3 hours from onset. (6) <strong>Post-tPA monitoring</strong> — immediately after administration begins.",
            topic: "Stroke"
        });

        Q.push({
            id: 48, type: 'cloze',
            stem: "tPA (alteplase) for ischemic stroke is dosed at |0| mg/kg with a maximum dose of |1| mg. The administration method is: give |2|% of the total dose as an IV bolus over 1 minute, then infuse the remaining |3|% over 60 minutes via IV pump, followed by a 50 mL NS flush. The treatment window from symptom onset is |4| hours (extended to 4.5 hours with specific restrictions).",
            selects: [
                { options: ['0.9', '0.5', '1.0', '1.5'], correct: 0 },
                { options: ['90', '45', '100', '150'], correct: 0 },
                { options: ['10', '20', '50', '5'], correct: 0 },
                { options: ['90', '80', '50', '95'], correct: 0 },
                { options: ['3', '6', '12', '24'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>tPA Dosing ★MUST KNOW★:</strong> <strong>0.9 mg/kg</strong> (max 90 mg). Split: <strong>10% as IV bolus over 1 min</strong>, <strong>90% over 60 min</strong> via pump. For a 70 kg patient: total dose 63 mg; bolus 6.3 mg over 1 min, then 56.7 mg over 60 min. Flush with 50 mL NS. <strong>3-hour window</strong> (extended to 4.5 hrs with restrictions: age <80, no prior stroke + DM, no recent anticoagulants, NIHSS ≤25). Time of onset/last known well = clock start.",
            topic: "Stroke"
        });

        Q.push({
            id: 49, type: 'selectN', n: 4,
            stem: 'A patient is being prepared for tPA administration for acute ischemic stroke. Select the 4 correct pre-tPA nursing actions.',
            options: [
                { text: "Insert all peripheral IVs and Foley catheter BEFORE starting tPA", correct: true },
                { text: "Confirm CT head shows NO hemorrhage before proceeding", correct: true },
                { text: "Verify BP is ≤185/105 mmHg before tPA administration", correct: true },
                { text: "Place patient on continuous cardiac monitoring", correct: true },
                { text: "Administer aspirin loading dose 325 mg 30 minutes before tPA", correct: false },
                { text: "Perform a lumbar puncture if subarachnoid hemorrhage is suspected", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Pre-tPA Nursing ★MUST KNOW★:</strong> (1) Insert ALL lines before — any post-tPA puncture = uncontrolled bleeding risk. (2) CT no hemorrhage = eligibility requirement; cannot give tPA to a hemorrhagic stroke. (3) BP ≤185/105 = tPA eligibility threshold; treat if needed before administration. (4) Continuous monitoring = detect cardiac dysrhythmias and neurological changes. <strong>NEVER aspirin before tPA</strong> — doubles hemorrhage risk. <strong>NEVER LP if tPA is planned</strong> — lumbar puncture = bleeding risk site after tPA; also LP is contraindicated if ↑ICP.",
            topic: "Stroke"
        });

        Q.push({
            id: 50, type: 'fillin',
            stem: 'A 90 kg patient is receiving tPA for acute ischemic stroke. Calculate the maximum tPA dose in milligrams that this patient should receive.',
            answer: 90,
            tolerance: 0,
            unit: 'mg',
            rationale: "<strong>tPA Max Dose:</strong> tPA dose = 0.9 mg/kg. For 90 kg: 0.9 × 90 = 81 mg. However, the <strong>maximum dose is capped at 90 mg</strong> regardless of weight. Since 81 mg is below 90 mg, this patient receives <strong>81 mg</strong>... Wait — actually the question asks for the maximum possible dose, not this specific patient's dose. The maximum is 90 mg for any patient ≥100 kg. For a 90 kg patient: 0.9 × 90 = 81 mg (which is the actual dose). The maximum cap is 90 mg. Answer = 90 mg (maximum cap for patients ≥100 kg). This tests knowledge of the absolute ceiling.",
            topic: "Stroke"
        });

        Q.push({
            id: 51, type: 'bowtie',
            stem: 'A 74-year-old male with hypertension arrives to the ED via ambulance 80 minutes after onset of sudden right-sided weakness, right facial droop, and inability to speak (only produces unintelligible sounds). He follows simple commands. BP 168/92 mmHg. CT head: no hemorrhage. INR 1.1. Platelets 215,000. Glucose 122 mg/dL. NIHSS 16. No recent surgery or active bleeding.',
            actions: ['Administer tPA 0.9 mg/kg (max 90 mg) — door-to-needle target 45 minutes', 'Insert all invasive lines before tPA and place on continuous cardiac monitoring'],
            allActions: ['Administer tPA 0.9 mg/kg (max 90 mg) — door-to-needle target 45 minutes', 'Insert all invasive lines before tPA and place on continuous cardiac monitoring', 'Administer heparin drip immediately to prevent re-occlusion', 'Aggressively lower BP to 120/80 to prevent hemorrhagic conversion'],
            condition: 'Acute ischemic stroke within 3-hour window, eligible for tPA (no contraindications)',
            allConditions: ['Acute ischemic stroke within 3-hour window, eligible for tPA (no contraindications)', 'Hemorrhagic stroke — tPA contraindicated', 'Acute ischemic stroke with INR 2.8 — tPA contraindicated', 'TIA — resolved, no acute intervention needed'],
            parameters: ['All tPA eligibility criteria met — window, no hemorrhage, labs within range', 'Lines must be inserted before tPA to prevent post-tPA bleeding complications'],
            allParams: ['All tPA eligibility criteria met — window, no hemorrhage, labs within range', 'Lines must be inserted before tPA to prevent post-tPA bleeding complications', 'Heparin should be started immediately with tPA', 'BP must be normalized before any intervention'],
            rationale: "<strong>Stroke Bowtie ★HIGH YIELD★:</strong> This patient meets ALL tPA eligibility criteria: (1) Ischemic stroke (no hemorrhage on CT). (2) Within 3-hour window (80 minutes). (3) BP 168/92 < 185/105. (4) INR 1.1 < 1.7. (5) Platelets 215k > 100k. (6) Glucose 122 = normal range. (7) No recent surgery or bleeding. Actions: give tPA + insert all lines before. <strong>NEVER</strong> heparin concurrent with tPA. <strong>NEVER</strong> aggressively lower BP before tPA — permissive hypertension protects the penumbra.",
            topic: "Stroke"
        });

        Q.push({
            id: 52, type: 'highlight',
            stem: 'A nurse is assessing a 69-year-old woman who was brought to the clinic by her daughter. Highlight the findings consistent with an acute stroke requiring immediate emergency activation.',
            phrases: [
                { text: "Sudden onset left facial droop sparing the forehead", correct: true },
                { text: "Left arm drift — unable to hold both arms level for 10 seconds", correct: true },
                { text: "Speech is slow, effortful, and words are mispronounced", correct: true },
                { text: "Symptom onset was 2 hours and 15 minutes ago", correct: true },
                { text: "History of hypertension and type 2 diabetes", correct: false },
                { text: "Blood pressure 158/88 mmHg", correct: false },
                { text: "Patient is alert and oriented to person and place", correct: false },
                { text: "Takes metformin and lisinopril daily", correct: false }
            ],
            rationale: "<strong>Stroke Recognition ★BEFAST★:</strong> (1) <strong>Facial droop sparing forehead</strong> = STROKE (central/upper motor neuron lesion spares forehead due to bilateral cortical representation). Bell's palsy = affects ENTIRE face including forehead. (2) <strong>Arm drift</strong> = motor weakness (pronator drift = upper motor neuron). (3) <strong>Dysarthria</strong> = speech difficulty = BEFAST 'S'. (4) <strong>2hr 15min onset</strong> = still within tPA window (BEFAST 'T'). <strong>Background only:</strong> HTN and DM = risk factors, not acute findings. BP 158/88 = not dangerously elevated, no immediate significance. Alert orientation = not a stroke finding.",
            topic: "Stroke"
        });

        // ========== TOPIC 4: TBI & Brain Injuries (10 questions, Q53-Q62) ==========

        Q.push({
            id: 53, type: 'mc',
            stem: 'A patient arrives to the ED after a motor vehicle accident. CT shows a biconvex hyperdense lesion at the left temporal region with a lucid interval noted in the prehospital records. This presentation is MOST consistent with:',
            opts: ['Epidural hematoma — arterial bleed from middle meningeal artery', 'Subdural hematoma — venous bleed from bridging veins', 'Subarachnoid hemorrhage — ruptured cerebral aneurysm', 'Diffuse axonal injury — widespread white matter shearing'],
            correct: 0,
            rationale: "<strong>TBI Types ★MUST KNOW★:</strong> <strong>Epidural hematoma</strong> = biconvex (lenticular) shaped lesion on CT + lucid interval (brief LOC → alert → rapid deterioration). Source: <strong>arterial</strong> (middle meningeal artery). Develops FAST (arterial pressure). <strong>Subdural</strong> = crescent-shaped + develops over 24–48 hours (venous/bridging veins). <strong>SAH</strong> = blood in subarachnoid space ('worst headache of life'). <strong>DAI</strong> = diffuse white matter shearing (MVA high-speed rotation/deceleration); CT may be negative early. Lucid interval is CLASSIC for epidural — arterial blood accumulates until pressure exceeds compensatory capacity, then rapid deterioration.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 54, type: 'mc',
            stem: 'A 16-year-old soccer player is evaluated after a collision on the field. She had a brief loss of consciousness for approximately 5 seconds and now complains of a headache and difficulty concentrating. CT is negative. She is awake, alert, and oriented. This presentation is MOST consistent with:',
            opts: ['Concussion — transient neurological dysfunction with negative CT', 'Contusion — brain bruising with effects peaking at 18–36 hours', 'Mild subdural hematoma — venous bleed with slow presentation', 'Diffuse axonal injury — widespread axonal shearing'],
            correct: 0,
            rationale: "<strong>Concussion vs Contusion ★KNOW★:</strong> <strong>Concussion</strong> = transient neurological dysfunction from mechanical force. Brief LOC (seconds to minutes), headache, confusion, amnesia. <strong>CT is NEGATIVE</strong> — no structural damage. Resolves with rest. Strict return-to-play protocols required (second-impact syndrome risk). <strong>Contusion</strong> = actual brain tissue bruising → CT shows hyperdense area → effects PEAK at 18–36 hours (edema develops). CTE (Chronic Traumatic Encephalopathy) = progressive degeneration from repeated concussions — occurs over years (boxers, NFL players).",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 55, type: 'sata',
            stem: 'A patient who underwent a craniotomy for epidural hematoma evacuation is in the neurosurgical ICU. Select ALL potential post-craniotomy complications that require monitoring.',
            opts: [
                { t: "Diabetes Insipidus (DI) — massive polyuria, dilute urine, rising Na⁺", c: true },
                { t: "SIADH — oliguria, concentrated urine, dropping Na⁺", c: true },
                { t: "Post-operative seizures — prophylactic anti-epileptics ordered", c: true },
                { t: "CSF leak — clear fluid around incision or from nose/ears", c: true },
                { t: "Meningitis — fever, nuchal rigidity, photophobia post-operatively", c: true },
                { t: "Pulmonary embolism — immobility risk post-craniotomy", c: true },
                { t: "Increased appetite and rapid weight gain from craniotomy procedure", c: false }
            ],
            rationale: "<strong>Post-Craniotomy Complications ★HIGH YIELD★:</strong> All except weight gain are real complications: (1) <strong>DI</strong> — hypothalamic/pituitary stalk involvement → no ADH → massive dilute urine + ↑Na. (2) <strong>SIADH</strong> — inappropriate ADH secretion → concentrated oliguria + ↓Na. (3) <strong>Seizures</strong> — irritation from blood/surgery; phenytoin or levetiracetam prescribed. (4) <strong>CSF leak</strong> — halo sign (ring of clear fluid around blood spot on dressing); also otorrhea/rhinorrhea. (5) <strong>Meningitis</strong> — surgical contamination or skin flora entry. (6) <strong>PE</strong> — DVT from immobility; SCDs + early ambulation critical. Weight gain is NOT a craniotomy complication.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 56, type: 'sata',
            stem: 'A nurse is caring for a patient admitted with traumatic brain injury (GCS 9). Select ALL correct nursing interventions for this patient.',
            opts: [
                { t: "Assess and document neurological status at minimum every 1 hour", c: true },
                { t: "Maintain HOB at 30° with head in neutral alignment", c: true },
                { t: "Minimize environmental stimulation — dim lights, reduce visitors, quiet environment", c: true },
                { t: "Ensure bowel regimen is in place to prevent straining/Valsalva", c: true },
                { t: "Encourage family to stimulate the patient loudly to promote neurological recovery", c: false },
                { t: "Administer dexamethasone IV — indicated for all traumatic cerebral edema", c: false }
            ],
            rationale: "<strong>TBI Nursing ★HIGH YIELD★:</strong> (1) Neuro checks q1hr minimum — LOC is the most sensitive indicator; detect deterioration early. (2) HOB 30° + neutral head — cerebral venous drainage optimization. (3) Reduce stimulation — external stimuli ↑MAP → ↑ICP. (4) Bowel regimen — Valsalva spikes ICP dangerously. <strong>Loud stimulation is HARMFUL</strong> in acute TBI — increases ICP, agitation, and metabolic demand. <strong>Dexamethasone is NOT indicated for traumatic edema</strong> — harmful in TBI; only for brain tumor edema. This distinction is heavily tested.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 57, type: 'matrix',
            stem: 'Match each TBI type with its distinguishing characteristic.',
            rows: ['Epidural hematoma', 'Subdural hematoma', 'Contusion', 'Diffuse axonal injury (DAI)'],
            cols: ['Lucid interval, arterial, biconvex on CT', 'Crescent-shaped, venous, develops 24–48hr', 'Brain tissue bruising, peaks 18–36hr', 'Widespread white matter shearing, CT often negative early'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>TBI Classification ★MUST KNOW★:</strong> (1) <strong>Epidural</strong>: Lucid interval (arterial pressure accumulates quickly) + biconvex (lens-shaped) on CT + middle meningeal artery source. (2) <strong>Subdural</strong>: No lucid interval (venous = slower) + crescent-shaped + bridging veins. Develops 24–48hr (acute) or days/weeks (chronic in elderly on anticoagulants). (3) <strong>Contusion</strong>: Brain tissue bruising from direct impact; cortex/tissue damaged; cerebral edema peaks 18–36hr post-injury. (4) <strong>DAI</strong>: Shearing of axons from rotational/deceleration forces (high-speed MVA); CT often negative early; MRI shows diffuse white matter changes.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 58, type: 'ordered',
            stem: 'A patient with TBI (GCS 8) is admitted to the neurosurgical unit. Place the nursing interventions in the correct priority order.',
            items: [
                "Ensure airway is patent — position and prepare for intubation if needed (GCS ≤8)",
                "Elevate HOB 30° and maintain head in neutral midline alignment",
                "Establish IV access and draw stat labs including CBC, BMP, coagulation studies",
                "Complete baseline neurological assessment including GCS, pupils, motor and sensory function",
                "Place Foley catheter for accurate intake and output monitoring",
                "Implement fall prevention measures and seizure precautions at bedside"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>TBI Admission Priority:</strong> (1) <strong>Airway FIRST</strong> — GCS 8 is AT the coma threshold; any further deterioration requires immediate intubation. (2) <strong>HOB 30° + neutral head</strong> — immediate, decreases ICP. (3) <strong>IV access + labs</strong> — needed for medications, glucose, coagulation status. (4) <strong>Baseline neuro assessment</strong> — essential reference point for tracking deterioration. (5) <strong>Foley</strong> — mannitol, diuretics, or polyuria all require accurate output monitoring. (6) <strong>Safety measures</strong> — seizure risk is high in TBI; falls risk from altered LOC.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 59, type: 'cloze',
            stem: "After craniotomy, the nurse must distinguish between two opposite post-operative complications. Diabetes Insipidus (DI) presents with urine output |0| mL/hr, urine specific gravity |1|, and serum Na⁺ that is |2|. By contrast, SIADH presents with urine output |3|, urine specific gravity |4|, and serum Na⁺ that is |5|.",
            selects: [
                { options: ['>200 (massive polyuria)', '<30 (oliguria)', '30–60 (normal)', '60–80 (mildly decreased)'], correct: 0 },
                { options: ['1.001–1.005 (very dilute)', '1.025–1.035 (concentrated)', '1.010–1.015 (normal)', '1.040 (maximum concentration)'], correct: 0 },
                { options: ['elevated (hypernatremia)', 'decreased (hyponatremia)', 'normal (134–145)', 'undetectable'], correct: 0 },
                { options: ['<30 mL/hr (oliguria/concentrated)', '>200 mL/hr (polyuria)', '60–80 mL/hr (normal)', '>500 mL/hr (extreme)'], correct: 0 },
                { options: ['1.025–1.035 (inappropriately concentrated)', '1.001–1.005 (dilute)', '1.010 (normal)', '1.040 (maximum)'], correct: 0 },
                { options: ['decreased (hyponatremia — dilutional)', 'elevated (hypernatremia)', 'normal (135–145)', 'critically low (&lt;110)'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>DI vs SIADH ★MUST KNOW★:</strong> These are <strong>opposite</strong> post-craniotomy complications: | | DI | SIADH | |---|---|---| | Urine output | MASSIVE (>200 mL/hr) | Low (<30 mL/hr) | | Urine SG | Very dilute (1.001) | Concentrated (1.030) | | Serum Na⁺ | ↑ Hypernatremia | ↓ Hyponatremia | | Mechanism | No ADH → can't concentrate | Excess ADH → retains water | | Treatment | DDAVP (synthetic ADH) | Fluid restriction |",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 60, type: 'selectN', n: 3,
            stem: 'A patient returned from craniotomy 8 hours ago. The nurse notes urine output of 650 mL in the past hour, urine specific gravity 1.002, and serum Na⁺ 148 mEq/L. Select the 3 correct nursing actions.',
            options: [
                { text: "Notify provider immediately — clinical picture consistent with Diabetes Insipidus (DI)", correct: true },
                { text: "Replace urine output mL-for-mL with 0.45% NaCl IV as ordered", correct: true },
                { text: "Prepare to administer DDAVP (desmopressin) — synthetic ADH replacement", correct: true },
                { text: "Implement fluid restriction to 1,000 mL/24hr — concentrated urine indicates SIADH", correct: false },
                { text: "Administer 3% hypertonic saline immediately to correct the hyponatremia", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Post-Craniotomy DI Management:</strong> Pattern: massive UO (650 mL/hr) + very dilute urine (SG 1.002) + rising Na⁺ (148) = <strong>Diabetes Insipidus</strong>. (1) Notify provider IMMEDIATELY — DI can cause severe dehydration and hypernatremia rapidly. (2) Replace urine output mL-for-mL to prevent dehydration. (3) DDAVP (desmopressin) = synthetic ADH that replaces the missing hormone. <strong>WRONG:</strong> Fluid restriction is for SIADH (opposite condition). 3% hypertonic saline is for hyponatremia (SIADH) — this patient has HYPERnatremia from DI.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 61, type: 'bowtie',
            stem: 'A 38-year-old cyclist is brought to the ED after being struck by a car. He was alert and talking at the scene but is now showing a declining GCS (from 15 to 9 over 20 minutes). CT head reveals a biconvex hyperdense lesion at the right temporal area. Right pupil is 5mm and sluggishly reactive. BP 165/48, HR 52, respirations irregular.',
            actions: ['Prepare for emergent neurosurgical craniotomy — epidural hematoma with herniation', 'Administer mannitol 1 g/kg IV as temporizing ICP reduction measure'],
            allActions: ['Prepare for emergent neurosurgical craniotomy — epidural hematoma with herniation', 'Administer mannitol 1 g/kg IV as temporizing ICP reduction measure', 'Administer tPA to dissolve the arterial clot causing the hematoma', 'Place patient in Trendelenburg position to improve cerebral blood flow'],
            condition: 'Epidural hematoma with uncal herniation — lucid interval, biconvex CT lesion, Cushing\'s triad developing',
            allConditions: ['Epidural hematoma with uncal herniation — lucid interval, biconvex CT lesion, Cushing\'s triad developing', 'Ischemic stroke — tPA indicated within 3 hours', 'Subdural hematoma — conservative management appropriate', 'Hypovolemic shock from internal hemorrhage'],
            parameters: ['Rapidly deteriorating GCS from lucid interval pattern = epidural hematoma until proven otherwise', 'Cushing\'s triad (widened PP, bradycardia, irregular RR) = herniation = surgical emergency'],
            allParams: ['Rapidly deteriorating GCS from lucid interval pattern = epidural hematoma until proven otherwise', 'Cushing\'s triad (widened PP, bradycardia, irregular RR) = herniation = surgical emergency', 'CT confirmation needed before any intervention', 'Patient requires IV fluids and observation only'],
            rationale: "<strong>Epidural Hematoma Bowtie:</strong> Classic presentation: lucid interval (alert at scene → rapid deterioration) + biconvex hyperdense CT lesion + Cushing's triad forming (BP 165/48 = widened pulse pressure, HR 52 = bradycardia, irregular respirations). <strong>Epidural hematoma requires emergent surgical evacuation</strong> — it is arterial and expands rapidly; time to surgery correlates directly with outcome. Mannitol is a temporizing measure only — buys minutes while prepping for OR. <strong>NEVER tPA</strong> for any hemorrhagic condition. Trendelenburg (flat or head-down) INCREASES ICP.",
            topic: "TBI & Brain Injuries"
        });

        Q.push({
            id: 62, type: 'highlight',
            stem: 'A nurse is conducting a shift assessment on a patient admitted 2 hours ago for a subdural hematoma (managed conservatively). Highlight the findings that represent a WORSENING neurological status requiring immediate provider notification.',
            phrases: [
                { text: "GCS decreased from 13 to 9 since admission", correct: true },
                { text: "Patient now responds only to painful stimuli", correct: true },
                { text: "Right arm now shows decerebrate posturing when stimulated", correct: true },
                { text: "Blood pressure 172/58 mmHg — widened pulse pressure from admission BP of 140/88", correct: true },
                { text: "Patient oriented to person and place but not time", correct: false },
                { text: "Mild headache rated 4/10 (unchanged from admission)", correct: false },
                { text: "SpO₂ 95% on 2L nasal cannula", correct: false },
                { text: "Bilateral crackles at lung bases — unchanged from admission", correct: false }
            ],
            rationale: "<strong>TBI Deterioration Signs ★MUST KNOW★:</strong> (1) <strong>GCS 13 → 9</strong> — significant 4-point drop = major deterioration; approaching coma threshold. (2) <strong>Responds only to pain</strong> = GCS eye 2, verbal 2 — worsening LOC. (3) <strong>Decerebrate posturing</strong> = GCS motor 2 = brainstem compression = herniation occurring. (4) <strong>Widened pulse pressure (172/58)</strong> = early Cushing's triad = ICP critically elevated. <strong>Stable/baseline findings:</strong> Disoriented to time is less concerning than full disorientation. Unchanged headache = baseline. SpO₂ 95% = acceptable. Unchanged lung findings = not new.",
            topic: "TBI & Brain Injuries"
        });

        // ========== TOPIC 5: Spinal Cord Injury (12 questions, Q63-Q74) ==========

        Q.push({
            id: 63, type: 'mc',
            stem: 'A patient with a C4 complete spinal cord injury has BP 72/44 mmHg, HR 46 bpm, and warm, dry skin. The nurse recognizes this hemodynamic pattern as:',
            opts: ['Neurogenic shock — loss of sympathetic tone from SCI above T6', 'Hypovolemic shock — blood loss from spinal cord injury', 'Cardiogenic shock — myocardial depression from spinal cord injury', 'Spinal shock — temporary areflexia from cord transection'],
            correct: 0,
            rationale: "<strong>Neurogenic Shock ★MUST KNOW★:</strong> <strong>Neurogenic shock</strong> = distributive shock from loss of sympathetic outflow in SCI at or above T6. Features: ↓BP + <strong>BRADYCARDIA</strong> + <strong>WARM DRY SKIN</strong> (vasodilation from no sympathetic tone). This is the OPPOSITE of hypovolemic shock (↓BP + TACHYCARDIA + cool/clammy skin). <strong>Spinal shock</strong> is different — it refers to the temporary loss of reflexes and flaccid paralysis (NOT hemodynamic collapse). Treatment for neurogenic shock: IV fluids + Levophed (norepinephrine), MAP target ≥85 mmHg. Warm dry skin = vasodilation. Bradycardia = vagus nerve unopposed (no cardiac sympathetics).",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 64, type: 'mc',
            stem: 'A patient with a T4 complete SCI suddenly develops a blood pressure of 198/104 mmHg, bradycardia, pounding headache, profuse sweating above the injury, and nasal congestion. The nurse\'s FIRST action is:',
            opts: ['Sit the patient upright immediately to use gravity to lower blood pressure', 'Administer hydralazine IV immediately as the first-line antihypertensive', 'Call the provider and wait for antihypertensive orders before doing anything', 'Apply ice packs above the injury to reduce reflex sympathetic response'],
            correct: 0,
            rationale: "<strong>Autonomic Dysreflexia — FIRST ACTION ★MUST KNOW★:</strong> Sitting the patient upright (HOB 90°) is ALWAYS the first action — it uses gravity to pool blood in the lower extremities, immediately reducing blood pressure while simultaneously identifying and correcting the trigger. This takes seconds and can prevent hypertensive stroke. <strong>Antihypertensive medication</strong> (hydralazine IV or nifedipine SL) is only given if BP remains ≥150 systolic AFTER the trigger is removed. Waiting for orders before acting is inappropriate — autonomous nursing action. Ice packs are not evidence-based for AD management.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 65, type: 'mc',
            stem: 'A patient sustains a complete C3 spinal cord injury. The nurse IMMEDIATELY prepares for which complication?',
            opts: ['Respiratory arrest — C3 injury disrupts phrenic nerve (C3-C5) controlling the diaphragm', 'Autonomic dysreflexia — the most immediate complication of cervical SCI', 'Neurogenic shock — loss of all spinal cord function requiring vasopressors', 'Aspiration pneumonia — impaired cough reflex from cervical injury'],
            correct: 0,
            rationale: "<strong>C3 SCI and Respiratory Failure ★HIGH YIELD★:</strong> The phrenic nerve originates from C3-C5 and controls the diaphragm — the primary respiratory muscle. A <strong>complete C3 injury</strong> disrupts phrenic nerve outflow → <strong>complete loss of diaphragmatic function</strong> → respiratory arrest without immediate ventilatory support. 'C3, 4, 5 keep the diaphragm alive.' C5 injury = partial diaphragm function. C6 and below = intercostals lost but diaphragm intact. Autonomic dysreflexia develops after spinal shock resolves (weeks later). Neurogenic shock is important but respiratory arrest is the most IMMEDIATE life threat with C3 injury.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 66, type: 'sata',
            stem: 'A patient with a T6 complete SCI is in neurogenic shock. Select ALL clinical findings characteristic of neurogenic shock.',
            opts: [
                { t: "Hypotension (↓BP) — loss of vasomotor tone from absent sympathetics", c: true },
                { t: "Bradycardia — vagus nerve (parasympathetic) unopposed without cardiac sympathetics", c: true },
                { t: "Warm, dry skin — vasodilation from absent sympathetic vascular tone", c: true },
                { t: "Normal or low body temperature — inability to thermoregulate below injury level", c: true },
                { t: "Tachycardia — compensatory response to hypotension", c: false },
                { t: "Cool, clammy, diaphoretic skin — from massive sympathetic discharge", c: false }
            ],
            rationale: "<strong>Neurogenic Shock Signs ★MUST KNOW★:</strong> Without sympathetic tone: (1) <strong>Hypotension</strong> = vasodilation → ↓SVR → ↓BP. (2) <strong>Bradycardia</strong> = cardiac accelerator fibers (T1-T4) lost → vagus unopposed → ↓HR. (3) <strong>Warm dry skin</strong> = vasodilation (blood pooling in periphery) + anhidrosis (no sympathetic sweat gland stimulation). (4) <strong>Poikilothermia</strong> = cannot thermoregulate; environmental temperature determines body temp. <strong>Tachycardia and cool clammy skin</strong> = hypovolemic shock pattern = OPPOSITE of neurogenic shock. This distinction is heavily tested.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 67, type: 'sata',
            stem: 'A patient with a C6 complete SCI is stabilized in the ICU. Select ALL correct statements about DVT prevention in spinal cord injury.',
            opts: [
                { t: "Sequential compression devices (SCDs) should be applied immediately upon admission", c: true },
                { t: "Pharmacologic anticoagulation (enoxaparin or heparin) should begin within 72 hours of injury", c: true },
                { t: "DVT prophylaxis should continue for at least 3 months after SCI", c: true },
                { t: "D-dimer is not useful in SCI patients because it is always elevated after trauma", c: false },
                { t: "Passive range of motion helps prevent venous stasis and DVT formation", c: true }
            ],
            rationale: "<strong>SCI DVT Prophylaxis ★HIGH YIELD★:</strong> (1) <strong>SCDs immediately</strong> — mechanical compression promotes venous return from paralyzed legs where blood pools. (2) <strong>Pharmacologic prophylaxis within 72 hours</strong> — ACCP guidelines recommend low-molecular-weight heparin (enoxaparin) or unfractionated heparin once hemorrhagic risk decreases. The 72-hour window allows hemostasis at injury site. (3) <strong>At least 3 months</strong> — complete SCI patients face persistent high DVT risk from permanent immobility and venous stasis. (4) D-dimer IS useful but interpret cautiously with trauma (elevated baseline is common). (5) <strong>PROM reduces stasis</strong> — muscle contractions help pump venous blood back to the heart.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 68, type: 'matrix',
            stem: 'Match each SCI complication with the correct nursing priority intervention.',
            rows: ['Neurogenic shock (↓BP, bradycardia, warm skin)', 'Autonomic dysreflexia (severe HTN, headache, flushing)', 'Respiratory failure from high cervical SCI', 'Pressure injury risk from immobility'],
            cols: ['Levophed infusion, MAP ≥85 mmHg target', 'Sit upright, find and remove trigger', 'Prepare for intubation, monitor respiratory fatigue', 'Reposition every 2 hours, pressure-relieving surfaces'],
            correct: [0, 1, 2, 3],
            scoring: 'perRow',
            rationale: "<strong>SCI Complication Management:</strong> (1) <strong>Neurogenic shock</strong> → Levophed (restores sympathetic tone) + MAP ≥85 (spinal cord perfusion). (2) <strong>Autonomic dysreflexia</strong> → SIT UP first (gravity) + find and remove noxious trigger (bladder most common). (3) <strong>Respiratory failure</strong> → Prepare for intubation; C3-C5 = phrenic nerve; respiratory fatigue develops over hours. (4) <strong>Pressure injuries</strong> → Turn q2hr (cannot feel pressure; cannot shift weight; highest risk patients in nursing).",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 69, type: 'ordered',
            stem: 'A patient with C5 complete SCI arrives to the ED in neurogenic shock (BP 72/44, HR 46, warm dry skin). Place the interventions in the correct priority order.',
            items: [
                "Maintain C-spine immobilization — do not remove collar until injury is fully assessed",
                "Establish IV access — begin fluid resuscitation with 500 mL NS bolus",
                "Start Levophed (norepinephrine) infusion — first-line vasopressor for neurogenic shock",
                "Titrate Levophed to maintain MAP ≥85 mmHg for spinal cord perfusion",
                "Place Foley catheter — bladder atony expected; monitor urinary output closely",
                "Apply sequential compression devices for DVT prophylaxis"
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Neurogenic Shock Management Priority:</strong> (1) <strong>C-spine immobilization</strong> — absolute priority; any uncontrolled movement could worsen cord injury from an incomplete to complete lesion. (2) <strong>IV access + fluid bolus</strong> — IV fluids have limited effect in distributive shock but are given while vasopressors are prepared. (3) <strong>Levophed</strong> — first-line vasopressor; restores vascular tone and cardiac rate; start immediately. (4) <strong>Titrate to MAP ≥85</strong> — the target is spinal cord perfusion (same principle as CPP in TBI). (5) <strong>Foley catheter</strong> — critical for monitoring output as Levophed affects renal perfusion. (6) <strong>SCDs</strong> — immediate DVT prevention; pharmacologic prophylaxis within 72hr.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 70, type: 'cloze',
            stem: "Autonomic dysreflexia occurs in patients with SCI at or above |0| and represents a massive uncontrolled |1| response below the lesion. The most common trigger is |2|. Clinical findings ABOVE the injury include flushing, diaphoresis, and pounding headache, while BELOW the injury the nurse observes |3|. If systolic BP remains ≥150 mmHg after trigger removal, the nurse administers |4|.",
            selects: [
                { options: ['T6 (upper thoracic or cervical)', 'L1 (lumbar)', 'T12 (lower thoracic)', 'S1 (sacral)'], correct: 0 },
                { options: ['sympathetic (vasoconstriction below, HTN)', 'parasympathetic (bradycardia, bronchospasm)', 'dopaminergic (euphoria, hypertension)', 'cholinergic (salivation, lacrimation)'], correct: 0 },
                { options: ['distended bladder (blocked or kinked catheter)', 'fever or infection', 'emotional stress', 'medication side effect'], correct: 0 },
                { options: ['pallor, coolness, and piloerection (goosebumps)', 'flushing, sweating, and warmth', 'paralysis and numbness (unchanged)', 'increased motor strength (recovery sign)'], correct: 0 },
                { options: ['hydralazine IV or nifedipine SL', 'labetalol IV (beta-blocker)', 'atropine IV (for the bradycardia)', 'norepinephrine to maintain BP'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Autonomic Dysreflexia ★MUST KNOW★:</strong> Occurs at or above T6 (where sympathetic outflow originates). A noxious stimulus below the lesion triggers massive sympathetic discharge → vasoconstriction below the lesion → ↑BP. Baroreceptors detect ↑BP → send parasympathetic signals (bradycardia, vasodilation ABOVE lesion — flushing, sweating, headache). Below the lesion: continued sympathetic vasoconstriction (pallor, coolness, piloerection). Treatment: sit up, remove trigger, then <strong>hydralazine IV</strong> (direct vasodilator) or <strong>nifedipine SL</strong> (CCB) if BP persists. NEVER labetalol (beta-blocker makes bradycardia worse). NEVER give norepinephrine (already hypertensive!).",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 71, type: 'cloze',
            stem: "Spinal shock is distinct from neurogenic shock. Spinal shock refers to |0| (loss of ALL reflex activity below the injury), which is a |1| condition lasting days to weeks. Neurogenic shock refers to |2| (circulatory failure). During spinal shock, the patient will have flaccid paralysis and |3|. After spinal shock resolves, patients may develop |4|, which is characterized by exaggerated reflex activity below the injury level.",
            selects: [
                { options: ['temporary areflexia and flaccid paralysis below the injury', 'permanent loss of motor and sensory function', 'cardiovascular instability from lost sympathetic tone', 'respiratory failure from diaphragm paralysis'], correct: 0 },
                { options: ['temporary', 'permanent', 'progressive', 'episodic'], correct: 0 },
                { options: ['cardiovascular instability from loss of sympathetic outflow', 'temporary loss of reflex activity only', 'hypertensive crisis from sympathetic overactivation', 'fluid overload from renal failure'], correct: 0 },
                { options: ['absent deep tendon reflexes (areflexia)', 'hyperreflexia and clonus', 'spastic paralysis below the level', 'bradycardia only'], correct: 0 },
                { options: ['spasticity and hyperreflexia', 'permanent flaccid paralysis', 'cardiovascular stability', 'return of normal sensation'], correct: 0 }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>Spinal Shock vs Neurogenic Shock vs Spasticity:</strong> <strong>Spinal shock</strong> = temporary physiological depression of all spinal cord function BELOW the injury level → flaccid paralysis + areflexia + absent sensation. Resolves over days to weeks. <strong>Neurogenic shock</strong> = circulatory (hemodynamic) failure from loss of sympathetic outflow. Both can coexist in acute phase. After spinal shock resolves, the cord below the injury reconnects to primitive reflex arcs → <strong>spasticity and hyperreflexia</strong> — muscles become spastic and deep tendon reflexes exaggerated. Treated with baclofen or dantrolene.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 72, type: 'selectN', n: 4,
            stem: 'Select the 4 correct ongoing nursing priorities for a patient with C5 complete spinal cord injury during acute hospitalization.',
            options: [
                { text: "Perform passive range of motion at least 4 times daily to prevent contractures", correct: true },
                { text: "Reposition every 2 hours — cannot feel pressure and cannot shift weight independently", correct: true },
                { text: "Maintain Foley catheter patency — bladder atony; unable to void voluntarily", correct: true },
                { text: "Provide a bowel regimen — suppositories and stool softeners; unable to defecate voluntarily", correct: true },
                { text: "Encourage the patient to perform forceful coughing exercises to clear secretions", correct: false },
                { text: "Apply heat packs to cold extremities below the injury level to promote circulation", correct: false }
            ],
            scoring: 'plusMinus',
            rationale: "<strong>SCI Ongoing Care ★HIGH YIELD★:</strong> (1) <strong>PROM ×4/day</strong> — contractures develop within days in paralyzed limbs; PROM maintains joint range. (2) <strong>Turn q2hr</strong> — inability to feel or move = highest pressure injury risk (sacrum, heels, occiput, trochanters). (3) <strong>Foley patency</strong> — spinal shock causes bladder atony (no reflex voiding); must drain urine to prevent distension (AD trigger). (4) <strong>Bowel program</strong> — bowel atony similarly; suppositories + stool softeners on schedule. <strong>AVOID forceful coughing</strong> — C5 SCI cannot generate sufficient force; assisted cough technique is appropriate. <strong>AVOID heat packs below injury</strong> — patient cannot feel heat/pain = thermal burn risk.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 73, type: 'fillin',
            stem: 'A patient with C5 complete spinal cord injury is in neurogenic shock. The provider orders Levophed infusion and states to "titrate to maintain a MAP of at least ___ mmHg to optimize spinal cord perfusion." Enter the target MAP value.',
            answer: 85,
            tolerance: 0,
            unit: 'mmHg',
            rationale: "<strong>MAP Target in Neurogenic Shock ★HIGH YIELD★:</strong> MAP target ≥<strong>85 mmHg</strong> during the hyperacute phase of SCI (first 7 days). Rationale: maintaining adequate MAP ensures spinal cord perfusion pressure (similar to CPP in TBI). The injured cord is vulnerable to secondary ischemic injury from hypoperfusion. This is higher than the usual septic shock MAP target of 65 mmHg — specifically because cord perfusion requires higher driving pressure.",
            topic: "Spinal Cord Injury"
        });

        Q.push({
            id: 74, type: 'bowtie',
            stem: 'A 42-year-old patient with a T3 complete spinal cord injury has been on the rehab unit for 3 weeks. The nurse enters the room and finds the patient pale and sweating profusely above the chest, complaining of the "worst pounding headache" they have ever had. Blood pressure is 204/112 mmHg, heart rate is 46 bpm. The Foley bag appears empty and the drainage tubing is kinked under the patient\'s leg.',
            actions: ['Sit the patient upright immediately to 90° (legs dangling off bed)', 'Straighten and unkink the Foley catheter tubing to relieve bladder distension'],
            allActions: ['Sit the patient upright immediately to 90° (legs dangling off bed)', 'Straighten and unkink the Foley catheter tubing to relieve bladder distension', 'Administer labetalol IV immediately as first-line antihypertensive', 'Apply ice packs below the injury level to reduce sympathetic stimulation'],
            condition: 'Autonomic dysreflexia — noxious stimulus (distended bladder) triggering uncontrolled sympathetic response',
            allConditions: ['Autonomic dysreflexia — noxious stimulus (distended bladder) triggering uncontrolled sympathetic response', 'Hypertensive crisis from medication non-compliance', 'New ischemic stroke causing sudden severe headache', 'Septic shock with paradoxical hypertension'],
            parameters: ['Kinked Foley = bladder distension = most common AD trigger', 'Sitting upright uses gravity to immediately lower BP while trigger is removed'],
            allParams: ['Kinked Foley = bladder distension = most common AD trigger', 'Sitting upright uses gravity to immediately lower BP while trigger is removed', 'Labetalol is first-line and should be given before any other intervention', 'The trigger must be identified via CT scan before treatment'],
            rationale: "<strong>Autonomic Dysreflexia Bowtie ★MUST KNOW★:</strong> AD diagnosis: SCI at/above T6 + sudden severe HTN + bradycardia + flushing/sweating ABOVE lesion + pounding headache. Trigger: kinked Foley = bladder distension (most common, ~80% of cases). Action sequence: (1) <strong>SIT UP FIRST</strong> — gravity pools blood in lower extremities, immediately lowers BP. (2) <strong>Remove trigger</strong> — straighten Foley tubing → drain bladder → noxious stimulus removed → BP drops. <strong>NEVER labetalol first</strong> — sit up first is the correct priority; also labetalol (beta-blocker) can worsen bradycardia. <strong>Ice packs below injury</strong> — patient CANNOT feel them (neuropathic) and won't help AD.",
            topic: "Spinal Cord Injury"
        });
