

## 1. Project structure

```
edu-platform/
├── index.html          # App shell: login screen + sidebar + view container
├── css/
│   └── styles.css       # Full design system (tokens, components, responsive, dark mode)
├── js/
│   ├── data.js          # All content: methods, quizzes, skills, exam questions, notes
│   └── app.js           # All logic: auth, router, every view renderer, quiz engine, PDF export
└── README.md
```

No `node_modules`, no build step. The only external dependency loaded over the network is:
- **Google Fonts** (Fraunces, Inter, JetBrains Mono) — for typography
- **jsPDF** (via cdnjs) — only used when a user clicks a "Export PDF" button

If those two CDNs are unreachable, every other feature (quizzes, theory, lesson builder UI,
exam timer, progress tracking, dark mode) still works perfectly; only the **PDF download**
buttons will show a small "needs an internet connection" toast.

---

## 2. How to run it locally

**Option A — just open it**
Double‑click `index.html`. Everything works directly from the filesystem.

**Option B — local server (recommended, avoids any browser file:// quirks)**
```bash
cd edu-platform
python3 -m http.server 8080
# then open http://localhost:8080 in your browser
```
or with Node:
```bash
npx serve edu-platform
```

**Login password:** `Omar@2005` (shared password, no individual accounts).

**Deploying for real students:** drag the `edu-platform` folder into Netlify/Vercel/GitHub
Pages, or upload it to any static web host. It needs zero server-side code.

---

## 3. Design explanation

**Concept.** The visual identity reads as a serious teacher‑training academy, not a generic
SaaS dashboard — closer to an exam‑prep institute's printed handbook brought to the screen.

**Palette** — Indigo `#2541B2` (authority, focus) on a soft cool‑white `#F3F5FA` background,
with teal `#0EA5A4` for "correct/positive" states and amber `#F59E0B` reserved for the one
signature element (see below) and badges. Dark mode swaps to deep navy `#0E1424` /
`#161F36` surfaces with brightened versions of the same accents — never pure black.

**Type** — `Fraunces` (a characterful serif) for all headings, evoking the gravity of an
academic/teacher‑training context; `Inter` for body and UI copy; `JetBrains Mono` for the
exam timer, quiz scores and method abbreviations (GTM/ALM/CLT…), which gives those numbers
a "data/precision" feel distinct from prose.

**Signature element** — the **mastery ring**: a circular progress indicator styled like a
graded seal/stamp, anchored top‑right of the dashboard hero and reused (in different colours)
for quiz results, the daily‑goal tracker and the overall progress page. It's the one visual
motif a returning student will recognise instantly as "my score."

**Structure** — the sidebar groups sections into *Learn / Practice / Resources*, because
that's how a student actually studies (absorb → drill → review), not an arbitrary feature
list. Numbered badges appear only in the Lesson Plan Builder's 7 fields, because those steps
are a genuine, ordered sequence (Objective → Warm‑up → … → Feedback) — numbering elsewhere
would be decorative, so it's avoided.

**Motion** — kept restrained: a soft rise‑in on the login card, hover‑lift on cards, a flip
on flashcards, a pulsing red timer only in the final minute of an exam essay. Reduced‑motion
preference is respected globally.

---

## 4. Feature map (what's actually implemented)

- **Shared password gate** — `Omar@2005`, session‑based (re‑prompts after closing the tab),
  with a show/hide toggle and a shake animation + clear message on failure.
- **Dashboard** — mastery ring, 4 quick stats (daily goal, quizzes tried, plans saved,
  bookmarks), and a card grid linking to every module, each bookmarkable with one tap.
- **Didactics Theory** — accordion covering GTM, ALM, CLT, TBLT, CLIL (definition,
  principles, teacher role, student role, advantages/disadvantages, classroom example) plus
  a second tab on Classroom Management, Assessment, Lesson Planning Theory and Learner
  Differences.
- **Teaching Methods Library** — the same 5 methods as flip‑animation flashcards for rapid
  pre‑exam revision.
- **Lesson Plan Builder** — 7‑field form (Objective → Feedback) with live preview, "load
  sample plan," save to a personal library (localStorage), reload/delete saved plans, and a
  one‑click **PDF export** (via jsPDF).
- **Quizzes Zone** — 5 topic quizzes (Methods, Didactics Theory, Classroom Management,
  Lesson Planning, Assessment), each mixing **MCQ, True/False, Matching and Short‑answer**
  questions, with instant per‑question feedback + explanation, a progress bar, a final score
  ring, best‑score tracking, and **Retry quiz**.
- **Skills Practice** — Reading (skimming/scanning text + check questions), Listening
  (transcript placeholder + check questions, ready to swap in a real `<audio>` file),
  Speaking (role‑play/discussion prompts + sample structure), Writing (essay prompts +
  4‑step structure guide + sample introduction). Every tab has tips and sample answers.
- **Exam Practice Mode** — pick an essay question, get a live countdown timer (turns red and
  pulses in the final minute), a toggleable **Introduction → Explanation → Example →
  Conclusion** guide, a writing area with live word count, and submit/end‑early actions.
- **Download PDF Notes** — 4 ready‑made PDFs generated client‑side from the platform's own
  content (methods summary, didactics key concepts, sample lesson plan, exam essay guide).
- **Progress Tracker** — per‑quiz score bars, theory‑read percentage, an overall mastery
  ring, a configurable daily study goal with its own ring, 6 earnable badges, and a
  bookmarks list with quick‑open links.
- **Dark mode** — full theme toggle, persisted, applied consistently across every screen.
- All progress (scores, plans, bookmarks, theme, goals) persists in `localStorage`, so it
  survives reloads without any backend.

---

## 5. Suggestions for future improvements

1. **Real backend + per‑student accounts** — move from shared‑password + localStorage to
   proper auth (e.g. Supabase/Firebase) so progress syncs across devices and a teacher can
   see a cohort's aggregate performance.
2. **Real audio files** for the Listening module instead of the transcript placeholder, plus
   a recording feature for Speaking practice with playback for self‑review.
3. **AI‑assisted essay feedback** in Exam Practice Mode — score the student's free‑text
   answer against the Introduction/Explanation/Example/Conclusion rubric automatically.
4. **Spaced‑repetition scheduling** for quiz questions the student got wrong, instead of a
   flat retry.
5. **More content depth** — add Direct Method, Lexical Approach, and Suggestopedia to the
   methods library; expand the question bank per topic from ~4–6 to 20+ for true randomised
   quizzes.
6. **Printable/exportable progress report** (PDF) a student can submit to a tutor.
7. **Collaborative lesson‑plan review** — share a saved plan link for peer or tutor feedback.
8. **Accessibility pass** — full keyboard quiz navigation, ARIA live regions for instant
   feedback, and a high‑contrast theme variant.
9. **Offline/PWA support** — service worker + manifest so the whole academy works with no
   connection at all (the only current network dependency is Google Fonts + jsPDF).