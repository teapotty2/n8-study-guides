#!/usr/bin/env python3
"""
Assembles ngn-cognition-practice.html from:
  - Head  : lines 1-1601 of ngn-cognition-practice.html (copied template)
  - Data  : cog_data_p1.js + cog_data_p2.js + cog_data_p3.js
  - Tail  : lines 3521+ of ngn-cognition-practice.html
All string replacements are applied to head and tail.
"""

import re, sys
BASE = r"C:/Users/Olive/Documents/Claudia/n8-study-guides"

# ── Read source files ──────────────────────────────────────────────────────────
with open(f"{BASE}/ngn-respiratory-practice.html", encoding="utf-8") as f:
    template_lines = f.readlines()

with open(f"{BASE}/cog_data_p1.js", encoding="utf-8") as f:
    p1 = f.read()
with open(f"{BASE}/cog_data_p2.js", encoding="utf-8") as f:
    p2 = f.read()
with open(f"{BASE}/cog_data_p3.js", encoding="utf-8") as f:
    p3 = f.read()

# ── Slice template  (1-indexed lines, Python 0-indexed) ───────────────────────
head_lines = template_lines[0:1601]   # lines 1–1601
tail_lines  = template_lines[3520:]   # lines 3521+

head = "".join(head_lines)
tail = "".join(tail_lines)

# ── Head replacements ─────────────────────────────────────────────────────────
head = head.replace(
    "NGN Respiratory &amp; Oxygenation Practice Exam",
    "NGN Cognition &amp; Sensation Practice Exam"
)
head = head.replace(
    "--respiratory: #0891b2;",
    "--neuro: #7c3aed;"
)

# ── Tail replacements ─────────────────────────────────────────────────────────
tail = tail.replace("'ngn_respiratory_v1'", "'ngn_cognition_v1'")

# Start screen heading
tail = tail.replace(
    "NGN Respiratory &amp; Oxygenation Practice Exam",
    "NGN Cognition &amp; Sensation Practice Exam"
)

# High-yield focus description
tail = tail.replace(
    "High-yield focus: V/Q mismatch, ARDS, ABG interpretation, mechanical ventilation, VAP &amp; ABCDEF bundles, chest tubes, respiratory pharmacology",
    "High-yield focus: ICP management, stroke/tPA, TBI, spinal cord injury, seizures, neuro pharmacology, neuromuscular disorders"
)

# Full exam size button (65 → 130)
tail = tail.replace(
    'data-size="65" onclick="setSize(this)">Full (65)</button>',
    'data-size="130" onclick="setSize(this)">Full (130)</button>'
)
tail = tail.replace("activeSize = 65;", "activeSize = 130;")

# Header h1 (appears twice in the engine)
tail = tail.replace("NGN Respiratory Exam", "NGN Cognition Exam")

# TOPIC_MAP block
old_topic_map = """        const TOPIC_MAP = {
            vq: ['Gas Exchange & V/Q'],
            abg: ['ABG Interpretation'],
            vent: ['Mechanical Ventilation', 'ARF & ARDS'],
            copd: ['COPD & Asthma/CF'],
            chest: ['Pleural Disorders & Chest Tubes'],
            pharm: ['Respiratory Pharmacology'],
            assess: ['Respiratory Assessment', 'O2 Therapy', 'Atelectasis & iCOUGH'],
            vap: ['Pneumonia & VAP Bundle']
        };"""

new_topic_map = """        const TOPIC_MAP = {
            assess:    ['Neuro Assessment & GCS'],
            icp:       ['Increased ICP Management'],
            stroke:    ['Stroke'],
            tbi:       ['TBI & Brain Injuries'],
            sci:       ['Spinal Cord Injury'],
            seizure:   ['Seizure Disorders'],
            neuromusc: ['Neuromuscular Disorders'],
            infect:    ['Neurological Infections'],
            anatomy:   ['Brain Anatomy & Aphasia'],
            pharm:     ['Neurological Pharmacology'],
            emergency: ['Neuro Emergencies']
        };"""

tail = tail.replace(old_topic_map, new_topic_map)

# Topic filter buttons block
old_topic_btns = """            <button class="btn btn-primary topic-btn active" data-topic="all" onclick="setTopic(this)">All Topics</button>
                <button class="btn btn-outline topic-btn" data-topic="vq" onclick="setTopic(this)">V/Q &amp; Gas Exchange</button>
                <button class="btn btn-outline topic-btn" data-topic="abg" onclick="setTopic(this)">ABG</button>
                <button class="btn btn-outline topic-btn" data-topic="vent" onclick="setTopic(this)">Vent &amp; ARDS</button>
                <button class="btn btn-outline topic-btn" data-topic="copd" onclick="setTopic(this)">COPD/Asthma</button>
                <button class="btn btn-outline topic-btn" data-topic="chest" onclick="setTopic(this)">Chest Tubes</button>
                <button class="btn btn-outline topic-btn" data-topic="pharm" onclick="setTopic(this)">Pharmacology</button>
                <button class="btn btn-outline topic-btn" data-topic="assess" onclick="setTopic(this)">Assessment</button>
                <button class="btn btn-outline topic-btn" data-topic="vap" onclick="setTopic(this)">Pneumonia/VAP</button>"""

new_topic_btns = """            <button class="btn btn-primary topic-btn active" data-topic="all" onclick="setTopic(this)">All Topics</button>
                <button class="btn btn-outline topic-btn" data-topic="assess" onclick="setTopic(this)">Neuro Assessment</button>
                <button class="btn btn-outline topic-btn" data-topic="icp" onclick="setTopic(this)">ICP</button>
                <button class="btn btn-outline topic-btn" data-topic="stroke" onclick="setTopic(this)">Stroke</button>
                <button class="btn btn-outline topic-btn" data-topic="tbi" onclick="setTopic(this)">TBI</button>
                <button class="btn btn-outline topic-btn" data-topic="sci" onclick="setTopic(this)">SCI</button>
                <button class="btn btn-outline topic-btn" data-topic="seizure" onclick="setTopic(this)">Seizures</button>
                <button class="btn btn-outline topic-btn" data-topic="neuromusc" onclick="setTopic(this)">Neuromuscular</button>
                <button class="btn btn-outline topic-btn" data-topic="infect" onclick="setTopic(this)">Infections</button>
                <button class="btn btn-outline topic-btn" data-topic="anatomy" onclick="setTopic(this)">Anatomy/Aphasia</button>
                <button class="btn btn-outline topic-btn" data-topic="pharm" onclick="setTopic(this)">Pharmacology</button>
                <button class="btn btn-outline topic-btn" data-topic="emergency" onclick="setTopic(this)">Emergencies</button>"""

tail = tail.replace(old_topic_btns, new_topic_btns)

# ── Assemble ──────────────────────────────────────────────────────────────────
data_section = "\n        // ===== DATA =====\n" + p1 + "\n" + p2 + "\n" + p3 + "\n"

output = head + data_section + tail

# ── Write ─────────────────────────────────────────────────────────────────────
out_path = f"{BASE}/ngn-cognition-practice.html"
with open(out_path, "w", encoding="utf-8") as f:
    f.write(output)

print(f"Written: {out_path}")
print(f"Total length: {len(output.splitlines())} lines")

# ── Quick validation ───────────────────────────────────────────────────────────
checks = [
    ("--neuro: #7c3aed",              "CSS color variable"),
    ("ngn_cognition_v1",              "Storage key"),
    ("NGN Cognition Exam",            "Header title"),
    ("NGN Cognition &amp; Sensation", "Start screen title"),
    ("ICP management",                "High-yield focus text"),
    ("data-topic=\"icp\"",            "ICP topic button"),
    ("data-topic=\"sci\"",            "SCI topic button"),
    ("TOPIC_MAP = {",                 "TOPIC_MAP present"),
    ("assess:    ['Neuro Assessment", "Neuro assess topic"),
    ("const CASES = [",              "CASES array"),
    ("Maria Santos",                  "Case 1 patient"),
    ("Jason Park",                    "Case 2 patient"),
    ("Marcus Williams",               "Case 3 patient"),
    ("data-size=\"130\"",             "Full exam size 130"),
]

print("\n-- Validation ------------------------------------------------")
all_ok = True
for needle, label in checks:
    found = needle in output
    status = "OK" if found else "MISSING"
    if not found:
        all_ok = False
    print(f"  [{status}] {label}")

# Count questions
q_ids = re.findall(r"id:\s*(\d+),", output)
print(f"\nQ ids found: {len(q_ids)} unique")
if q_ids:
    nums = sorted(set(int(x) for x in q_ids))
    print(f"  Range: Q{nums[0]}–Q{nums[-1]}")
    expected = set(range(1, 131))
    missing = expected - set(nums)
    dupes = [x for x in nums if q_ids.count(str(x)) > 1]
    if missing:
        print(f"  MISSING IDs: {sorted(missing)}")
    if dupes:
        print(f"  DUPLICATE IDs: {dupes}")
    if not missing and not dupes:
        print("  All IDs 1-130 present, no duplicates")

# Check respiratory strings NOT replaced
leftover = []
for pat in ["ngn_respiratory_v1", "NGN Respiratory Exam", "NGN Respiratory &amp;"]:
    if pat in output:
        leftover.append(pat)
if leftover:
    print(f"\n  WARN leftover respiratory strings: {leftover}")
else:
    print("\n  No leftover respiratory strings")

print("\nAssembly complete." if all_ok else "\nAssembly completed with warnings — check above.")
