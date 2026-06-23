const SITE_PASSWORD = "Omar@2005";
const STORE_KEY = "didactics_platform_state_v1";

/* ---------- persistent state ---------- */
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw) return JSON.parse(raw);
  }catch(e){}
  return {
    quizBest: {},          // quizId -> best % score
    quizAttempts: {},      // quizId -> number of attempts
    lessonPlans: [],       // saved lesson plans
    bookmarks: [],         // section ids
    lessonsRead: [],       // method/topic ids opened
    dailyGoalDate: null,
    dailyGoalDone: 0,
    dailyGoalTarget: 3,
    dark: false
  };
}
let STATE = loadState();
function saveState(){ localStorage.setItem(STORE_KEY, JSON.stringify(STATE)); }

function todayStr(){ return new Date().toISOString().slice(0,10); }
function ensureDailyGoalFresh(){
  if(STATE.dailyGoalDate !== todayStr()){
    STATE.dailyGoalDate = todayStr();
    STATE.dailyGoalDone = 0;
    saveState();
  }
}
function bumpDailyGoal(){
  ensureDailyGoalFresh();
  STATE.dailyGoalDone = Math.min(STATE.dailyGoalTarget, STATE.dailyGoalDone + 1);
  saveState();
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg, icon="✓"){
  const el = document.getElementById('toast');
  el.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove('show'), 2400);
}

/* ============================================================
   AUTH
   ============================================================ */
function initAuth(){
  const form = document.getElementById('login-form');
  const input = document.getElementById('password-input');
  const errBox = document.getElementById('login-error');
  const toggle = document.getElementById('pw-toggle');

  toggle.addEventListener('click', ()=>{
    input.type = input.type === 'password' ? 'text' : 'password';
    toggle.textContent = input.type === 'password' ? '👁' : '🙈';
  });

  if(sessionStorage.getItem('authed') === 'yes'){
    enterApp();
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(input.value === SITE_PASSWORD){
      sessionStorage.setItem('authed','yes');
      errBox.classList.add('hidden');
      enterApp();
    } else {
      errBox.classList.remove('hidden');
      input.value = '';
      input.focus();
      const card = document.querySelector('.login-card');
      card.style.animation = 'none';
      requestAnimationFrame(()=>{ card.style.animation = ''; });
    }
  });
}

function enterApp(){
  document.getElementById('login-screen').classList.add('hidden');
  document.getElementById('app-shell').classList.remove('hidden');
  document.getElementById('app-footer').classList.remove('hidden');
  applyTheme();
  buildSidebar();
  initRouter();
}

function logout(){
  sessionStorage.removeItem('authed');
  document.getElementById('app-shell').classList.add('hidden');
  document.getElementById('app-footer').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  document.getElementById('password-input').value = '';
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme(){
  document.body.classList.toggle('dark', !!STATE.dark);
  const sw = document.getElementById('theme-switch');
  if(sw) sw.checked = !!STATE.dark;
}
function toggleTheme(){
  STATE.dark = !STATE.dark;
  saveState();
  applyTheme();
}

/* ============================================================
   NAV / SIDEBAR
   ============================================================ */
const NAV_SECTIONS = [
  { group:"Learn", items:[
    {id:"dashboard", label:"Dashboard", icon:"🏠"},
    {id:"theory", label:"Didactics Theory", icon:"📘"},
    {id:"methods", label:"Methods Library", icon:"🧩"},
    {id:"skills", label:"Skills Practice", icon:"🎯"},
  ]},
  { group:"Practice", items:[
    {id:"lessonplan", label:"Lesson Plan Builder", icon:"🗂️"},
    {id:"quizzes", label:"Quizzes Zone", icon:"❓"},
    {id:"exam", label:"Exam Practice Mode", icon:"⏱️"},
  ]},
  { group:"Resources", items:[
    {id:"notes", label:"Download PDF Notes", icon:"📥"},
    {id:"progress", label:"Progress Tracker", icon:"📊"},
  ]}
];

function buildSidebar(){
  const nav = document.getElementById('sidebar-nav');
  nav.innerHTML = NAV_SECTIONS.map(group => `
    <div class="nav-sep">${group.group}</div>
    ${group.items.map(it => `
      <button class="nav-item" data-route="${it.id}">
        <span class="ic">${it.icon}</span><span>${it.label}</span>
      </button>
    `).join('')}
  `).join('');
  nav.querySelectorAll('.nav-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      location.hash = '#/' + btn.dataset.route;
      closeMobileSidebar();
    });
  });

  document.getElementById('theme-switch').addEventListener('change', toggleTheme);
  document.getElementById('logout-btn').addEventListener('click', logout);
  document.getElementById('menu-toggle').addEventListener('click', ()=>{
    document.getElementById('sidebar').classList.toggle('open');
  });
}
function closeMobileSidebar(){ document.getElementById('sidebar').classList.remove('open'); }
function setActiveNav(routeId){
  document.querySelectorAll('.nav-item').forEach(b=>{
    b.classList.toggle('active', b.dataset.route === routeId);
  });
}

/* ============================================================
   ROUTER
   ============================================================ */
const ROUTES = {
  "dashboard": renderDashboard,
  "theory": renderTheory,
  "methods": renderMethodsLibrary,
  "skills": renderSkillsHub,
  "lessonplan": renderLessonPlanBuilder,
  "quizzes": renderQuizMenu,
  "exam": renderExamMenu,
  "notes": renderNotes,
  "progress": renderProgress,
};

function initRouter(){
  window.addEventListener('hashchange', routeHandler);
  routeHandler();
}
function routeHandler(){
  let hash = location.hash.replace('#/','') || 'dashboard';
  let [route, ...rest] = hash.split('/');
  const param = rest.join('/');
  const root = document.getElementById('view-root');
  setActiveNav(route);
  const fn = ROUTES[route] || renderDashboard;
  root.innerHTML = '';
  fn(root, param);
  if(typeof root.scrollIntoView === 'function'){ root.scrollIntoView({block:'start'}); }
  if(typeof window.scrollTo === 'function'){ window.scrollTo(0,0); }
}
function go(route){ location.hash = '#/' + route; }

/* ============================================================
   SVG RING HELPER
   ============================================================ */
function ringSVG(pct, size=128, stroke=10, color="#fff", trackColor="rgba(255,255,255,.25)"){
  const r = (size - stroke) / 2;
  const c = size/2;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct/100);
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${trackColor}" stroke-width="${stroke}"/>
    <circle cx="${c}" cy="${c}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"/>
  </svg>`;
}

/* ============================================================
   PROGRESS CALC
   ============================================================ */
function overallMastery(){
  const quizKeys = Object.keys(QUIZ_BANK);
  const scores = quizKeys.map(k => STATE.quizBest[k] || 0);
  const quizAvg = scores.reduce((a,b)=>a+b,0) / (quizKeys.length || 1);
  const lessonsTotal = METHODS.length + DIDACTICS_TOPICS.length;
  const lessonsPct = (STATE.lessonsRead.length / lessonsTotal) * 100;
  const planBonus = Math.min(STATE.lessonPlans.length * 10, 10);
  const combined = (quizAvg * 0.55) + (lessonsPct * 0.35) + planBonus;
  return Math.max(0, Math.min(100, Math.round(combined)));
}

/* ============================================================
   VIEW: DASHBOARD
   ============================================================ */
function renderDashboard(root){
  ensureDailyGoalFresh();
  const mastery = overallMastery();
  const quizzesDone = Object.keys(STATE.quizBest).length;
  const cards = [
    {id:"theory", icon:"📘", title:"Didactics Theory", desc:"Methods, classroom management, assessment & learner differences."},
    {id:"lessonplan", icon:"🗂️", title:"Lesson Planning Builder", desc:"Build, save and export a complete lesson plan."},
    {id:"methods", icon:"🧩", title:"Teaching Methods Library", desc:"Flip-card quick reference for GTM, ALM, CLT, TBLT, CLIL."},
    {id:"skills", icon:"🎯", title:"Skills Practice", desc:"Reading, Listening, Speaking & Writing exercises."},
    {id:"quizzes", icon:"❓", title:"Quizzes Zone", desc:"MCQ, True/False, Matching & short-answer quizzes with feedback."},
    {id:"exam", icon:"⏱️", title:"Exam Practice Mode", desc:"Timed essay questions with a structured answer guide."},
    {id:"notes", icon:"📥", title:"Download PDF Notes", desc:"Printable summaries to revise offline."},
    {id:"progress", icon:"📊", title:"Progress Tracker", desc:"Mastery score, streaks, badges and bookmarks."},
  ];
  root.innerHTML = `
    <div class="dash-hero">
      <div class="dash-hero-text">
        <div class="eyebrow">CERMF / ENS · English Didactics</div>
        <h1>Welcome back, future teacher.</h1>
        <p>Keep building your didactics mastery — review theory, drill quizzes, and rehearse exam-style essays in one place.</p>
      </div>
      <div class="mastery-ring">
        ${ringSVG(mastery, 128, 10, "#ffffff", "rgba(255,255,255,.22)")}
        <div class="ring-label"><span class="pct">${mastery}%</span><span class="lbl">Mastery</span></div>
      </div>
    </div>

    <div class="stat-row">
      <div class="stat-card"><span class="ic">🔥</span><div class="num">${STATE.dailyGoalDone}/${STATE.dailyGoalTarget}</div><div class="lbl">Daily goal</div></div>
      <div class="stat-card"><span class="ic">❓</span><div class="num">${quizzesDone}/${Object.keys(QUIZ_BANK).length}</div><div class="lbl">Quizzes tried</div></div>
      <div class="stat-card"><span class="ic">🗂️</span><div class="num">${STATE.lessonPlans.length}</div><div class="lbl">Lesson plans saved</div></div>
      <div class="stat-card"><span class="ic">🔖</span><div class="num">${STATE.bookmarks.length}</div><div class="lbl">Bookmarked items</div></div>
    </div>

    <div class="view-header" style="margin-bottom:16px;">
      <div><div class="view-eyebrow">Explore</div><h1 style="font-size:20px;">All sections</h1></div>
    </div>
    <div class="section-cards-grid">
      ${cards.map(c => `
        <button class="section-card" data-go="${c.id}">
          <button class="bm ${STATE.bookmarks.includes(c.id)?'active':''}" data-bm="${c.id}" title="Bookmark">★</button>
          <div class="tab">${c.icon}</div>
          <h3>${c.title}</h3>
          <p>${c.desc}</p>
          <span class="go">Open <span class="arrow">→</span></span>
        </button>
      `).join('')}
    </div>
  `;
  root.querySelectorAll('.section-card').forEach(card=>{
    card.addEventListener('click', (e)=>{
      if(e.target.closest('[data-bm]')) return;
      go(card.dataset.go);
    });
  });
  root.querySelectorAll('[data-bm]').forEach(btn=>{
    btn.addEventListener('click', (e)=>{
      e.stopPropagation();
      toggleBookmark(btn.dataset.bm);
      btn.classList.toggle('active');
    });
  });
}

function toggleBookmark(id){
  const i = STATE.bookmarks.indexOf(id);
  if(i>-1){ STATE.bookmarks.splice(i,1); toast('Bookmark removed','🔖'); }
  else { STATE.bookmarks.push(id); toast('Bookmarked','⭐'); }
  saveState();
}

/* ============================================================
   VIEW: DIDACTICS THEORY
   ============================================================ */
function renderTheory(root, param){
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Module 1</div>
        <h1>Didactics Theory</h1>
        <p class="desc">Five core teaching methods plus the foundational theory examiners expect you to know: classroom management, assessment, lesson planning and learner differences.</p>
      </div>
    </div>
    <div class="tabs-row">
      <button class="tab-btn active" data-tab="methods">Teaching Methods</button>
      <button class="tab-btn" data-tab="topics">Core Concepts</button>
    </div>
    <div id="theory-methods" class="method-accordion"></div>
    <div id="theory-topics" class="method-accordion hidden"></div>
  `;
  const methodsWrap = root.querySelector('#theory-methods');
  methodsWrap.innerHTML = METHODS.map(m => methodAccordionItem(m)).join('');
  attachAccordionHandlers(methodsWrap);

  const topicsWrap = root.querySelector('#theory-topics');
  topicsWrap.innerHTML = DIDACTICS_TOPICS.map(t => `
    <div class="acc-item ${t.official ? 'is-official' : ''}" data-id="${t.id}">
      <button class="acc-head">
        <div class="left">
          <div class="pill">📌</div>
          <div><h3>${t.name}</h3>${t.official ? `<div class="men-seal"><span class="ring"></span>Official MEN reference</div>` : ''}</div>
        </div>
        <span class="chev">▾</span>
      </button>
      <div class="acc-body"><div class="acc-body-inner">
        <div class="def-box">${t.summary}</div>
        <div class="blockh4">Key points</div>
        <ul class="plainul">${t.points.map(p=>`<li>${p}</li>`).join('')}</ul>
      </div></div>
    </div>
  `).join('');
  attachAccordionHandlers(topicsWrap);

  root.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      root.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const which = btn.dataset.tab;
      methodsWrap.classList.toggle('hidden', which !== 'methods');
      topicsWrap.classList.toggle('hidden', which !== 'topics');
    });
  });

  if(param){
    const target = root.querySelector(`.acc-item[data-id="${param}"]`);
    if(target){ target.classList.add('open'); }
  }
}

function methodAccordionItem(m){
  return `
  <div class="acc-item" data-id="${m.id}">
    <button class="acc-head">
      <div class="left">
        <div class="pill">${m.short}</div>
        <div><h3>${m.name}</h3><div class="era">${m.era}</div></div>
      </div>
      <span class="chev">▾</span>
    </button>
    <div class="acc-body"><div class="acc-body-inner">
      <div class="def-box"><strong>Definition —</strong> ${m.definition}</div>
      <div class="subgrid">
        <div><h4>Key principles</h4><ul>${m.principles.map(p=>`<li>${p}</li>`).join('')}</ul></div>
        <div>
          <h4>Teacher role</h4>
          <div class="role-box" style="margin-bottom:12px;">${m.teacherRole}</div>
          <h4>Student role</h4>
          <div class="role-box">${m.studentRole}</div>
        </div>
      </div>
      <div class="adv-grid">
        <div class="adv-box good"><h4>Advantages</h4><ul class="plainul">${m.advantages.map(a=>`<li>${a}</li>`).join('')}</ul></div>
        <div class="adv-box bad"><h4>Disadvantages</h4><ul class="plainul">${m.disadvantages.map(a=>`<li>${a}</li>`).join('')}</ul></div>
      </div>
      <div class="blockh4">Classroom example</div>
      <div class="example-box">${m.example}</div>
    </div></div>
  </div>`;
}

function attachAccordionHandlers(wrap){
  wrap.querySelectorAll('.acc-head').forEach(head=>{
    head.addEventListener('click', ()=>{
      const item = head.closest('.acc-item');
      const wasOpen = item.classList.contains('open');
      item.classList.toggle('open');
      if(!wasOpen) markLessonRead(item.dataset.id);
    });
  });
}

function markLessonRead(id){
  if(!STATE.lessonsRead.includes(id)){
    STATE.lessonsRead.push(id);
    bumpDailyGoal();
    saveState();
  }
}

/* ============================================================
   VIEW: METHODS LIBRARY (flashcards)
   ============================================================ */
function renderMethodsLibrary(root){
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Quick reference</div>
        <h1>Teaching Methods Library</h1>
        <p class="desc">Flip each card for a rapid-fire summary — perfect for last-minute revision before the exam.</p>
      </div>
    </div>
    <div class="flash-grid">
      ${METHODS.map(m => `
        <div class="flashcard" data-id="${m.id}">
          <div class="flashcard-inner">
            <div class="flash-face flash-front">
              <span class="pill" style="background:var(--primary-soft); color:var(--primary); font-family:var(--font-mono); font-size:11px; font-weight:700; padding:4px 9px; border-radius:6px;">${m.short}</span>
              <h3>${m.name}</h3>
              <div class="hint">Tap to flip ↻</div>
            </div>
            <div class="flash-face flash-back">
              <b>Teacher role</b>${m.teacherRole}
              <b>Student role</b>${m.studentRole}
              <b>Example</b>${m.example}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  root.querySelectorAll('.flashcard').forEach(card=>{
    card.addEventListener('click', ()=>{
      card.classList.toggle('flipped');
      markLessonRead(card.dataset.id);
    });
  });
}

/* ============================================================
   VIEW: SKILLS PRACTICE
   ============================================================ */
function renderSkillsHub(root, param){
  const key = param && SKILLS[param] ? param : 'reading';
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Module 4</div>
        <h1>Skills Practice</h1>
        <p class="desc">Targeted practice for the four core skills, each with instructions, exercises, sample answers and tips.</p>
      </div>
    </div>
    <div class="tabs-row">
      ${Object.keys(SKILLS).map(k => `<button class="tab-btn ${k===key?'active':''}" data-skill="${k}">${SKILLS[k].icon} ${SKILLS[k].title}</button>`).join('')}
    </div>
    <div id="skill-body"></div>
  `;
  renderSkillBody(root.querySelector('#skill-body'), key);
  root.querySelectorAll('[data-skill]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      root.querySelectorAll('[data-skill]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderSkillBody(root.querySelector('#skill-body'), btn.dataset.skill);
      history.replaceState(null, '', `#/skills/${btn.dataset.skill}`);
    });
  });
}

function renderSkillBody(wrap, key){
  const s = SKILLS[key];
  let html = `
    <div class="card">
      <div class="blockh4">Instructions</div>
      <p style="font-size:13.5px; color:var(--ink-soft); line-height:1.6; margin-bottom:16px;">${s.intro}</p>
      <div class="blockh4">Tips</div>
      <ul class="tip-list">${s.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
    </div>
  `;

  if(key === 'reading'){
    html += `
      <div class="card">
        <h3 style="margin-bottom:10px;">${s.text.title}</h3>
        <div class="reading-text">${s.text.body}</div>
      </div>
      <div class="card" id="skill-quiz-wrap"></div>
      <div class="card">
        <div class="blockh4">Sample strategy</div>
        <p style="font-size:13.5px; color:var(--ink-soft); line-height:1.6;">${s.sampleAnswer}</p>
      </div>
    `;
  }
  if(key === 'listening'){
    html += `
      <div class="card">
        <div class="audio-placeholder"><span class="icon">🎧</span><div class="bar"></div><span style="font-size:12px; color:var(--muted); font-family:var(--font-mono);">02:14</span></div>
        <p style="font-size:12px; color:var(--muted); margin-bottom:10px;">No audio file attached — read the transcript below as a placeholder for listening practice.</p>
        <div class="script-box">${s.script}</div>
      </div>
      <div class="card" id="skill-quiz-wrap"></div>
    `;
  }
  if(key === 'speaking'){
    html += `
      <div class="card">
        <div class="blockh4">Role-play & discussion prompts</div>
        <div class="prompt-list">${s.prompts.map((p,i)=>`<div class="prompt-item"><span class="num">${String(i+1).padStart(2,'0')}</span><span>${p}</span></div>`).join('')}</div>
      </div>
      <div class="card">
        <div class="blockh4">Sample answer structure</div>
        <p style="font-size:13.5px; color:var(--ink-soft); line-height:1.6;">${s.sampleAnswer}</p>
      </div>
    `;
  }
  if(key === 'writing'){
    html += `
      <div class="card">
        <div class="blockh4">Essay structure guide</div>
        <div class="structure-steps">${s.structureGuide.map((g,i)=>`<div class="step"><div class="dot">${i+1}</div><p>${g}</p></div>`).join('')}</div>
      </div>
      <div class="card">
        <div class="blockh4">Writing prompts</div>
        <div class="prompt-list">${s.prompts.map((p,i)=>`<div class="prompt-item"><span class="num">${String(i+1).padStart(2,'0')}</span><span>${p}</span></div>`).join('')}</div>
      </div>
      <div class="card">
        <div class="blockh4">Sample introduction</div>
        <p style="font-size:13.5px; color:var(--ink-soft); line-height:1.6; font-style:italic;">${s.sampleAnswer}</p>
      </div>
    `;
  }
  wrap.innerHTML = html;

  if(key === 'reading' || key === 'listening'){
    renderInlineMiniQuiz(wrap.querySelector('#skill-quiz-wrap'), s.questions);
  }
  markLessonRead('skills-' + key);
}

/* mini inline check-questions for reading/listening (simple, no scoring persistence) */
function renderInlineMiniQuiz(wrap, questions){
  wrap.innerHTML = `<div class="blockh4">Check your understanding</div>` + questions.map((q,i) => `
    <div style="margin-bottom:18px;">
      <p style="font-size:14px; font-weight:600; margin-bottom:10px;">${i+1}. ${q.q}</p>
      <div class="opt-list" data-qi="${i}">
        ${q.type === 'mcq' ? q.options.map((o,oi)=>`<button class="opt-item" data-oi="${oi}"><span class="bullet">${String.fromCharCode(65+oi)}</span>${o}</button>`).join('') :
          q.type === 'tf' ? `<button class="opt-item" data-oi="true"><span class="bullet">T</span>True</button><button class="opt-item" data-oi="false"><span class="bullet">F</span>False</button>` :
          `<input class="short-input" type="text" placeholder="Type your answer..." data-short>`}
      </div>
      <div class="feedback-box" data-fb></div>
    </div>
  `).join('');

  wrap.querySelectorAll('[data-qi]').forEach((group, i)=>{
    const q = questions[i];
    const fb = group.parentElement.querySelector('[data-fb]');
    if(q.type === 'short'){
      const input = group.querySelector('[data-short]');
      const checkBtn = document.createElement('button');
      checkBtn.className = 'btn solid sm';
      checkBtn.style.marginTop = '8px';
      checkBtn.textContent = 'Check answer';
      group.appendChild(checkBtn);
      checkBtn.addEventListener('click', ()=>{
        const val = (input.value||'').toLowerCase();
        const ok = (q.acceptable||[]).some(a => val.includes(a.toLowerCase()));
        fb.className = 'feedback-box show ' + (ok ? 'correct':'incorrect');
        fb.innerHTML = `<div class="verdict">${ok? '✓ Good answer':'~ Compare with the explanation'}</div>${q.explanation}`;
      });
    } else {
      group.querySelectorAll('.opt-item').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          group.querySelectorAll('.opt-item').forEach(b=>b.disabled=true);
          let isCorrect;
          if(q.type === 'mcq') isCorrect = Number(btn.dataset.oi) === q.answer;
          else isCorrect = (btn.dataset.oi === 'true') === q.answer;
          btn.classList.add(isCorrect ? 'correct':'incorrect');
          if(!isCorrect){
            const correctBtn = q.type === 'mcq' ? group.querySelectorAll('.opt-item')[q.answer] : group.querySelector(`[data-oi="${q.answer}"]`);
            if(correctBtn) correctBtn.classList.add('correct');
          }
          fb.className = 'feedback-box show ' + (isCorrect ? 'correct':'incorrect');
          fb.innerHTML = `<div class="verdict">${isCorrect? '✓ Correct':'✕ Not quite'}</div>${q.explanation}`;
        });
      });
    }
  });
}

/* ============================================================
   VIEW: LESSON PLAN BUILDER
   ============================================================ */
const MEN_LEVELS = [
  "Tronc Commun (CEF A2/B1)",
  "1ère Bac Sciences (B1)",
  "1ère Bac Lettres & Sciences Humaines (B1)",
  "2ème Bac Sciences (B1+)",
  "2ème Bac Lettres & Sciences Humaines (B1+)",
  "Collégial — 3ème année (A2)",
  "Other / custom level"
];
const LP_FIELDS = [
  {key:'objective', label:'Objective', n:1, ph:'By the end of the lesson, students will be able to...'},
  {key:'level', label:'Level', n:2, ph:'e.g. Intermediate (B1)', select: MEN_LEVELS},
  {key:'warmup', label:'Warm-up', n:3, ph:'How will you activate prior knowledge / engage learners?'},
  {key:'presentation', label:'Presentation', n:4, ph:'How will you present the new language/content?'},
  {key:'practice', label:'Practice', n:5, ph:'Controlled practice activity...'},
  {key:'production', label:'Production', n:6, ph:'Freer, communicative production activity...'},
  {key:'feedback', label:'Feedback', n:7, ph:'How will you give feedback and check the objective was met?'},
];

function renderLessonPlanBuilder(root){
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Module 2</div>
        <h1>Lesson Plan Builder</h1>
        <p class="desc">Fill in each stage of your lesson. Save it to your library, load the sample plan for inspiration, or export to PDF.</p>
      </div>
    </div>
    <div class="lp-grid">
      <div>
        <div class="card">
          <form id="lp-form">
            ${LP_FIELDS.map(f => `
              <div class="lp-field">
                <label><span class="n">${f.n}</span>${f.label}</label>
                ${f.select ? `
                  <select name="${f.key}" class="lp-select">
                    <option value="">— select a level —</option>
                    ${f.select.map(opt => `<option value="${opt}">${opt}</option>`).join('')}
                  </select>
                ` : `
                  <textarea name="${f.key}" rows="3" placeholder="${f.ph}"></textarea>
                `}
              </div>
            `).join('')}
            <div class="lp-actions">
              <button type="submit" class="btn solid">💾 Save plan</button>
              <button type="button" class="btn" id="lp-sample">✨ Load sample plan</button>
              <button type="button" class="btn teal" id="lp-pdf">⬇️ Export as PDF</button>
              <button type="button" class="btn ghost-red" id="lp-clear">Clear</button>
            </div>
          </form>
        </div>
        <div class="card">
          <h3 style="font-size:16px; margin-bottom:12px;">📚 Saved lesson plans</h3>
          <div class="saved-plans" id="saved-plans-list"></div>
        </div>
      </div>
      <div class="lp-preview" id="lp-preview">
        <h4>Live preview</h4>
        ${LP_FIELDS.map(f => `<div class="row"><b>${f.label}</b><span data-prev="${f.key}">—</span></div>`).join('')}
      </div>
    </div>
  `;

  const form = root.querySelector('#lp-form');
  const preview = root.querySelector('#lp-preview');

  function setFieldValue(f, value){
    const el = form.querySelector(`[name="${f.key}"]`);
    if(el.tagName === 'SELECT' && value && !f.select.includes(value)){
      const opt = document.createElement('option');
      opt.value = value; opt.textContent = value;
      el.insertBefore(opt, el.firstChild.nextSibling);
    }
    el.value = value || '';
  }

  function updatePreview(){
    LP_FIELDS.forEach(f=>{
      const val = form.querySelector(`[name="${f.key}"]`).value.trim();
      preview.querySelector(`[data-prev="${f.key}"]`).textContent = val || '—';
    });
  }
  form.addEventListener('input', updatePreview);

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = {};
    LP_FIELDS.forEach(f=> data[f.key] = form.querySelector(`[name="${f.key}"]`).value.trim());
    if(!data.objective){ toast('Add at least an objective before saving','⚠️'); return; }
    STATE.lessonPlans.unshift({ id: 'lp_' + Date.now(), createdAt: new Date().toLocaleDateString(), ...data });
    saveState();
    bumpDailyGoal();
    toast('Lesson plan saved');
    renderSavedPlans();
  });

  root.querySelector('#lp-sample').addEventListener('click', ()=>{
    LP_FIELDS.forEach(f=> setFieldValue(f, SAMPLE_LESSON_PLAN[f.key]));
    updatePreview();
    toast('Sample plan loaded','✨');
  });

  root.querySelector('#lp-clear').addEventListener('click', ()=>{
    form.reset(); updatePreview();
  });

  root.querySelector('#lp-pdf').addEventListener('click', ()=>{
    const data = {};
    LP_FIELDS.forEach(f=> data[f.key] = form.querySelector(`[name="${f.key}"]`).value.trim() || '—');
    exportLessonPlanPDF(data, 'My Lesson Plan');
  });

  function renderSavedPlans(){
    const list = root.querySelector('#saved-plans-list');
    if(STATE.lessonPlans.length === 0){
      list.innerHTML = `<p style="font-size:13px; color:var(--muted);">No saved plans yet — build one above and click "Save plan".</p>`;
      return;
    }
    list.innerHTML = STATE.lessonPlans.map(p => `
      <div class="saved-plan-item" data-id="${p.id}">
        <div class="meta"><b>${(p.objective||'Untitled plan').slice(0,60)}${p.objective && p.objective.length>60?'…':''}</b><span>${p.level || 'No level set'} · Saved ${p.createdAt}</span></div>
        <div class="acts">
          <button class="icon-btn" data-load title="Load into editor">📝</button>
          <button class="icon-btn" data-pdf title="Export PDF">⬇️</button>
          <button class="icon-btn" data-del title="Delete">🗑️</button>
        </div>
      </div>
    `).join('');
    list.querySelectorAll('[data-load]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const p = STATE.lessonPlans.find(x=>x.id === btn.closest('.saved-plan-item').dataset.id);
        LP_FIELDS.forEach(f=> setFieldValue(f, p[f.key]));
        updatePreview();
        toast('Plan loaded into editor','📝');
        window.scrollTo({top:0, behavior:'smooth'});
      });
    });
    list.querySelectorAll('[data-pdf]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const p = STATE.lessonPlans.find(x=>x.id === btn.closest('.saved-plan-item').dataset.id);
        exportLessonPlanPDF(p, p.objective ? p.objective.slice(0,40) : 'Lesson Plan');
      });
    });
    list.querySelectorAll('[data-del]').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const id = btn.closest('.saved-plan-item').dataset.id;
        STATE.lessonPlans = STATE.lessonPlans.filter(x=>x.id !== id);
        saveState();
        renderSavedPlans();
        toast('Plan deleted','🗑️');
      });
    });
  }

  updatePreview();
  renderSavedPlans();
}

function exportLessonPlanPDF(data, titleText){
  try{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:'pt', format:'a4' });
    const marginX = 50; let y = 60;
    doc.setFont('helvetica','bold'); doc.setFontSize(18);
    doc.text('Lesson Plan', marginX, y); y += 28;
    doc.setDrawColor(37,65,178); doc.setLineWidth(1.2); doc.line(marginX, y, 545, y); y += 24;

    LP_FIELDS.forEach(f=>{
      doc.setFont('helvetica','bold'); doc.setFontSize(11); doc.setTextColor(37,65,178);
      doc.text(f.label.toUpperCase(), marginX, y); y += 16;
      doc.setFont('helvetica','normal'); doc.setFontSize(11); doc.setTextColor(30,35,50);
      const lines = doc.splitTextToSize(data[f.key] || '—', 495);
      doc.text(lines, marginX, y);
      y += lines.length * 14 + 14;
      if(y > 760){ doc.addPage(); y = 60; }
    });
    doc.setFontSize(9); doc.setTextColor(140,150,170);
    doc.text('Generated by the English Didactics Exam Prep Platform', marginX, 800);
    doc.save((titleText || 'lesson-plan').replace(/[^a-z0-9]+/gi,'-').toLowerCase() + '.pdf');
    toast('PDF exported','⬇️');
  }catch(err){
    console.error(err);
    toast('PDF export needs an internet connection','⚠️');
  }
}

/* ============================================================
   VIEW: QUIZ MENU + RUNNER
   ============================================================ */
function renderQuizMenu(root, param){
  if(param && QUIZ_BANK[param]) return renderQuizRunner(root, param);
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Module 3</div>
        <h1>Quizzes Zone</h1>
        <p class="desc">Test yourself across five topics. Every quiz mixes MCQ, True/False, matching and short-answer questions with instant feedback.</p>
      </div>
    </div>
    <div class="quiz-menu-grid">
      ${Object.entries(QUIZ_BANK).map(([key, quiz]) => `
        <button class="quiz-card ${quiz.official ? 'is-official' : ''}" data-quiz="${key}">
          <span class="ic">${quiz.icon}</span>
          <h3>${quiz.title}</h3>
          ${quiz.official ? `<div class="men-seal" style="margin-bottom:8px;"><span class="ring"></span>Official MEN reference</div>` : ''}
          <div class="meta">${quiz.questions.length} questions · mixed format</div>
          <div class="best">${STATE.quizBest[key] !== undefined ? `Best score: ${STATE.quizBest[key]}%` : 'Not attempted yet'}</div>
        </button>
      `).join('')}
    </div>
  `;
  root.querySelectorAll('[data-quiz]').forEach(c=> c.addEventListener('click', ()=> go('quizzes/' + c.dataset.quiz)));
}

function renderQuizRunner(root, key){
  const quiz = QUIZ_BANK[key];
  let qi = 0;
  let score = 0;
  const total = quiz.questions.length;
  let answeredCurrent = false;

  root.innerHTML = `
    <button class="back-link" id="quiz-back">← Back to Quizzes Zone</button>
    <div class="card" id="quiz-stage" style="max-width:680px; margin:0 auto;"></div>
  `;
  root.querySelector('#quiz-back').addEventListener('click', ()=> go('quizzes'));
  const stage = root.querySelector('#quiz-stage');

  function renderQuestion(){
    answeredCurrent = false;
    const q = quiz.questions[qi];
    const pct = Math.round((qi/total)*100);
    stage.innerHTML = `
      <div class="quiz-progressbar"><div class="fill" style="width:${pct}%"></div></div>
      <div class="quiz-qcounter">Question ${qi+1} of ${total}</div>
      <div class="qtype-pill">${labelForType(q.type)}</div>
      <div class="quiz-question">${q.q}</div>
      <div id="q-area"></div>
      <div class="feedback-box" id="q-feedback"></div>
      <div class="quiz-nav">
        <span style="font-size:12.5px; color:var(--muted); font-weight:700;">Score so far: ${score}/${qi}</span>
        <button class="btn solid" id="q-next" disabled>Next →</button>
      </div>
    `;
    const area = stage.querySelector('#q-area');
    const fb = stage.querySelector('#q-feedback');
    const nextBtn = stage.querySelector('#q-next');

    function lockAndScore(isCorrect){
      if(answeredCurrent) return;
      answeredCurrent = true;
      if(isCorrect) score++;
      fb.className = 'feedback-box show ' + (isCorrect ? 'correct':'incorrect');
      fb.innerHTML = `<div class="verdict">${isCorrect? '✓ Correct!':'✕ Not quite'}</div>${q.explanation}`;
      nextBtn.disabled = false;
      nextBtn.textContent = (qi === total-1) ? 'See results →' : 'Next →';
    }

    if(q.type === 'mcq'){
      area.innerHTML = `<div class="opt-list">${q.options.map((o,oi)=>`<button class="opt-item" data-oi="${oi}"><span class="bullet">${String.fromCharCode(65+oi)}</span>${o}</button>`).join('')}</div>`;
      area.querySelectorAll('.opt-item').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if(answeredCurrent) return;
          const correct = Number(btn.dataset.oi) === q.answer;
          area.querySelectorAll('.opt-item').forEach(b=>b.disabled=true);
          btn.classList.add(correct?'correct':'incorrect');
          if(!correct) area.querySelectorAll('.opt-item')[q.answer].classList.add('correct');
          lockAndScore(correct);
        });
      });
    }
    else if(q.type === 'tf'){
      area.innerHTML = `<div class="tf-row">
        <button class="opt-item" data-v="true"><span class="bullet">T</span>True</button>
        <button class="opt-item" data-v="false"><span class="bullet">F</span>False</button>
      </div>`;
      area.querySelectorAll('.opt-item').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          if(answeredCurrent) return;
          const val = btn.dataset.v === 'true';
          const correct = val === q.answer;
          area.querySelectorAll('.opt-item').forEach(b=>b.disabled=true);
          btn.classList.add(correct?'correct':'incorrect');
          if(!correct) area.querySelector(`[data-v="${q.answer}"]`).classList.add('correct');
          lockAndScore(correct);
        });
      });
    }
    else if(q.type === 'matching'){
      const rightOptions = q.pairs.map(p=>p.right);
      area.innerHTML = `<div class="match-grid">
        <div class="match-col"><h5>Item</h5>${q.pairs.map((p,i)=>`<div class="match-left-item">${p.left}</div>`).join('')}</div>
        <div class="match-col"><h5>Your match</h5>${q.pairs.map((p,i)=>`
          <select class="match-select" data-i="${i}">
            <option value="">— select —</option>
            ${shuffleStable(rightOptions, i).map(r=>`<option value="${r}">${r}</option>`).join('')}
          </select>`).join('')}</div>
      </div>
      <button class="btn solid sm" id="match-check">Check matches</button>`;
      area.querySelector('#match-check').addEventListener('click', ()=>{
        if(answeredCurrent) return;
        const selects = area.querySelectorAll('.match-select');
        let correctCount = 0;
        selects.forEach((sel, i)=>{
          const ok = sel.value === q.pairs[i].right;
          sel.style.borderColor = sel.value ? (ok ? 'var(--teal)' : 'var(--red)') : 'var(--border)';
          if(ok) correctCount++;
          sel.disabled = true;
        });
        area.querySelector('#match-check').disabled = true;
        lockAndScore(correctCount === q.pairs.length);
      });
    }
    else if(q.type === 'short'){
      area.innerHTML = `<input class="short-input" type="text" id="short-input" placeholder="Type your answer...">
        <button class="btn solid sm" id="short-check">Check answer</button>`;
      area.querySelector('#short-check').addEventListener('click', ()=>{
        if(answeredCurrent) return;
        const val = (area.querySelector('#short-input').value || '').toLowerCase().trim();
        const correct = (q.acceptable||[]).some(a => val.includes(a.toLowerCase()));
        area.querySelector('#short-input').disabled = true;
        area.querySelector('#short-check').disabled = true;
        lockAndScore(correct);
      });
    }

    nextBtn.addEventListener('click', ()=>{
      if(!answeredCurrent) return;
      if(qi < total - 1){ qi++; renderQuestion(); }
      else { finishQuiz(); }
    });
  }

  function finishQuiz(){
    const pct = Math.round((score/total)*100);
    const prevBest = STATE.quizBest[key] || 0;
    STATE.quizBest[key] = Math.max(prevBest, pct);
    STATE.quizAttempts[key] = (STATE.quizAttempts[key]||0) + 1;
    saveState();
    bumpDailyGoal();
    const ringColor = pct >= 70 ? 'var(--teal)' : pct >= 40 ? 'var(--amber)' : 'var(--red)';
    stage.innerHTML = `
      <div class="quiz-result">
        <div class="score-ring" style="margin:0 auto 18px; position:relative;">
          ${ringSVG(pct, 140, 11, ringColor, 'var(--bg-alt)')}
        </div>
        <h2>${pct}% — ${pct>=70?'Great job!':pct>=40?'Good effort':'Keep practising'}</h2>
        <p>You scored ${score} out of ${total} on <strong>${quiz.title}</strong>. Best score: ${STATE.quizBest[key]}%.</p>
        <div style="display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
          <button class="btn solid" id="retry-quiz">↻ Retry quiz</button>
          <button class="btn" id="back-menu">Back to Quizzes Zone</button>
        </div>
      </div>
    `;
    const ringWrap = stage.querySelector('.score-ring');
    const label = document.createElement('div');
    label.style.position = 'absolute'; label.style.inset = '0';
    label.style.display = 'flex'; label.style.flexDirection='column'; label.style.alignItems='center'; label.style.justifyContent='center';
    label.innerHTML = `<span style="font-family:var(--font-display); font-size:28px; font-weight:700; color:var(--ink);">${pct}%</span>`;
    ringWrap.appendChild(label);

    stage.querySelector('#retry-quiz').addEventListener('click', ()=>{ qi=0; score=0; renderQuestion(); });
    stage.querySelector('#back-menu').addEventListener('click', ()=> go('quizzes'));
  }

  renderQuestion();
}

function labelForType(t){
  return {mcq:'Multiple choice', tf:'True / False', matching:'Matching', short:'Short answer'}[t] || t;
}
function shuffleStable(arr, seed){
  const copy = [...arr];
  let s = seed + 7;
  for(let i=copy.length-1; i>0; i--){
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s/233280) * (i+1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* ============================================================
   VIEW: EXAM PRACTICE MODE
   ============================================================ */
function renderExamMenu(root, param){
  if(param) return renderExamActive(root, param);
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Module 5</div>
        <h1>Exam Practice Mode</h1>
        <p class="desc">Simulate real exam conditions: timed essay questions with a structured Introduction → Explanation → Example → Conclusion guide.</p>
      </div>
    </div>
    <div class="exam-list">
      ${EXAM_QUESTIONS.map(q => `
        <div class="exam-item ${q.official ? 'is-official' : ''}">
          <div><div class="q">${q.question}</div>${q.official ? `<div class="men-seal" style="margin-top:6px;"><span class="ring"></span>Official MEN reference</div>` : ''}<div class="time">⏱ ${q.timeMinutes} minutes</div></div>
          <button class="btn solid" data-exam="${q.id}">Start →</button>
        </div>
      `).join('')}
    </div>
  `;
  root.querySelectorAll('[data-exam]').forEach(b=> b.addEventListener('click', ()=> go('exam/' + b.dataset.exam)));
}

let examTimerInterval = null;
function renderExamActive(root, id){
  const q = EXAM_QUESTIONS.find(x=>x.id===id);
  if(!q){ go('exam'); return; }
  let secondsLeft = q.timeMinutes * 60;
  let guideShown = false;

  root.innerHTML = `
    <button class="back-link" id="exam-back">← Back to Exam Practice Mode</button>
    <div class="card">
      <div class="exam-active-top">
        <div class="qtype-pill">Exam essay</div>
        <div class="timer-display" id="exam-timer">${fmtTime(secondsLeft)}</div>
      </div>
      <h2 style="font-size:19px; margin-bottom:16px; line-height:1.4;">${q.question}</h2>
      <button class="btn sm" id="toggle-guide">📋 Show structured answer guide</button>
      <div class="guide-grid hidden" id="guide-grid">
        <div class="guide-box"><h5>1. Introduction</h5><p>${q.guide.introduction}</p></div>
        <div class="guide-box"><h5>2. Explanation</h5><p>${q.guide.explanation}</p></div>
        <div class="guide-box"><h5>3. Classroom example</h5><p>${q.guide.example}</p></div>
        <div class="guide-box"><h5>4. Conclusion</h5><p>${q.guide.conclusion}</p></div>
      </div>
      <textarea id="exam-essay-area" placeholder="Write your essay here, following the structure above..." style="margin-top:18px;"></textarea>
      <div class="wordcount" id="wordcount">0 words</div>
      <div class="lp-actions" style="margin-top:14px;">
        <button class="btn solid" id="exam-submit">✓ Finish & submit</button>
        <button class="btn ghost-red" id="exam-giveup">End early</button>
      </div>
    </div>
  `;

  root.querySelector('#exam-back').addEventListener('click', ()=>{ clearInterval(examTimerInterval); go('exam'); });
  root.querySelector('#toggle-guide').addEventListener('click', (e)=>{
    guideShown = !guideShown;
    root.querySelector('#guide-grid').classList.toggle('hidden', !guideShown);
    e.target.textContent = `📋 ${guideShown?'Hide':'Show'} structured answer guide`;
  });
  const essayArea = root.querySelector('#exam-essay-area');
  essayArea.addEventListener('input', ()=>{
    const words = essayArea.value.trim().split(/\s+/).filter(Boolean).length;
    root.querySelector('#wordcount').textContent = `${words} words`;
  });

  const timerEl = root.querySelector('#exam-timer');
  examTimerInterval = setInterval(()=>{
    secondsLeft--;
    timerEl.textContent = fmtTime(Math.max(0,secondsLeft));
    if(secondsLeft <= 60) timerEl.classList.add('warn');
    if(secondsLeft <= 0){
      clearInterval(examTimerInterval);
      toast("Time's up! Submit when ready.", '⏰');
    }
  }, 1000);

  function finish(){
    clearInterval(examTimerInterval);
    bumpDailyGoal();
    toast('Exam answer recorded — review it against the guide above.', '✓');
    go('exam');
  }
  root.querySelector('#exam-submit').addEventListener('click', finish);
  root.querySelector('#exam-giveup').addEventListener('click', finish);
}
function fmtTime(s){
  const m = Math.floor(s/60).toString().padStart(2,'0');
  const sec = (s%60).toString().padStart(2,'0');
  return `${m}:${sec}`;
}

/* ============================================================
   VIEW: NOTES / DOWNLOADS
   ============================================================ */
function renderNotes(root){
  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Resources</div>
        <h1>Download PDF Notes</h1>
        <p class="desc">Printable summaries generated from the platform's content — great for offline revision.</p>
      </div>
    </div>
    <div class="notes-grid">
      ${NOTES_FILES.map(n => `
        <div class="note-card ${n.official ? 'is-official' : ''}">
          <span class="ic">📄</span>
          <h3>${n.title}</h3>
          ${n.official ? `<div class="men-seal" style="margin-bottom:10px;"><span class="ring"></span>Official MEN reference</div>` : ''}
          <p>${n.desc}</p>
          <button class="btn solid sm" data-note="${n.type}">⬇️ Download PDF</button>
        </div>
      `).join('')}
    </div>
  `;
  root.querySelectorAll('[data-note]').forEach(btn=> btn.addEventListener('click', ()=> downloadNotePDF(btn.dataset.note)));
}

function downloadNotePDF(type){
  try{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit:'pt', format:'a4' });
    const marginX = 50; let y = 60;
    function heading(txt){ doc.setFont('helvetica','bold'); doc.setFontSize(17); doc.setTextColor(37,65,178); doc.text(txt, marginX, y); y+=22; doc.setDrawColor(37,65,178); doc.line(marginX,y-12,545,y-12); }
    function sub(txt){ if(y>740){doc.addPage();y=60;} doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(14,165,164); doc.text(txt, marginX, y); y+=16; }
    function body(txt){
      doc.setFont('helvetica','normal'); doc.setFontSize(10.5); doc.setTextColor(30,35,50);
      const lines = doc.splitTextToSize(txt, 495);
      lines.forEach(l=>{ if(y>780){doc.addPage(); y=60;} doc.text(l, marginX, y); y+=13; });
      y += 8;
    }

    if(type === 'methods'){
      heading('Teaching Methods — Quick Reference');
      METHODS.forEach(m=>{
        sub(`${m.name} (${m.short})`);
        body(`Definition: ${m.definition}`);
        body(`Teacher role: ${m.teacherRole}`);
        body(`Student role: ${m.studentRole}`);
        body(`Example: ${m.example}`);
      });
    } else if(type === 'didactics'){
      heading('Didactics Theory — Key Concepts');
      DIDACTICS_TOPICS.forEach(t=>{
        sub(t.name);
        body(t.summary);
        t.points.forEach(p=> body('• ' + p));
      });
    } else if(type === 'lessonplan'){
      heading('Sample Lesson Plan');
      LP_FIELDS.forEach(f=>{ sub(f.label); body(SAMPLE_LESSON_PLAN[f.key]); });
    } else if(type === 'examguide'){
      heading('Exam Essay Structure Guide');
      sub('1. Introduction'); body('Define the concept clearly and state the direction of your essay.');
      sub('2. Explanation'); body('Explain the relevant theory/principles in your own words, using correct terminology.');
      sub('3. Classroom example'); body('Illustrate the theory with a concrete, realistic classroom example or activity.');
      sub('4. Conclusion'); body('Summarise your argument and restate its pedagogical value or limitations.');
      sub('Sample exam questions'); EXAM_QUESTIONS.forEach(q=> body('• ' + q.question));
    } else if(type === 'morocco'){
      heading('Moroccan Education System — Key Reference');
      DIDACTICS_TOPICS.filter(t=>t.official).forEach(t=>{
        sub(t.name);
        body(t.summary);
        t.points.forEach(p=> body('• ' + p));
      });
    }
    doc.setFontSize(9); doc.setTextColor(140,150,170);
    doc.text('English Didactics Exam Prep Platform', marginX, 815);
    doc.save(type + '-notes.pdf');
    toast('PDF downloaded','⬇️');
  }catch(err){
    console.error(err);
    toast('PDF export needs an internet connection','⚠️');
  }
}

/* ============================================================
   VIEW: PROGRESS TRACKER
   ============================================================ */
function renderProgress(root){
  ensureDailyGoalFresh();
  const mastery = overallMastery();
  const quizEntries = Object.entries(QUIZ_BANK);
  const lessonsTotal = METHODS.length + DIDACTICS_TOPICS.length;
  const lessonsPct = Math.round((STATE.lessonsRead.length / lessonsTotal) * 100);
  const goalPct = Math.round((STATE.dailyGoalDone/STATE.dailyGoalTarget)*100);

  const badges = [
    { id:'first-quiz', label:'First Quiz', earned: Object.keys(STATE.quizBest).length > 0, icon:'🎯' },
    { id:'quiz-master', label:'Quiz Master (all 5)', earned: Object.keys(STATE.quizBest).length >= 5, icon:'🏅' },
    { id:'planner', label:'Lesson Planner', earned: STATE.lessonPlans.length > 0, icon:'🗂️' },
    { id:'theory-buff', label:'Theory Buff', earned: STATE.lessonsRead.length >= 5, icon:'📘' },
    { id:'high-scorer', label:'High Scorer (80%+)', earned: Object.values(STATE.quizBest).some(v=>v>=80), icon:'⭐' },
    { id:'bookworm', label:'Bookmarker', earned: STATE.bookmarks.length > 0, icon:'🔖' },
  ];

  root.innerHTML = `
    <div class="view-header">
      <div>
        <div class="view-eyebrow">Your journey</div>
        <h1>Progress Tracker</h1>
        <p class="desc">Track your overall mastery, quiz scores, daily study goal and bookmarked content.</p>
      </div>
    </div>
    <div class="progress-grid">
      <div>
        <div class="card">
          <h3 style="font-size:16px; margin-bottom:16px;">Quiz scores</h3>
          ${quizEntries.map(([key, quiz]) => `
            <div class="bar-row">
              <div class="top"><span>${quiz.icon} ${quiz.title}</span><span>${STATE.quizBest[key] !== undefined ? STATE.quizBest[key]+'%' : '—'}</span></div>
              <div class="bar-track"><div class="bar-fill" style="width:${STATE.quizBest[key]||0}%"></div></div>
            </div>
          `).join('')}
          <div class="bar-row" style="margin-top:18px;">
            <div class="top"><span>📘 Theory & methods read</span><span>${STATE.lessonsRead.length}/${lessonsTotal}</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:${lessonsPct}%"></div></div>
          </div>
        </div>
        <div class="card">
          <h3 style="font-size:16px; margin-bottom:14px;">Badges</h3>
          <div class="badge-row">
            ${badges.map(b => `<div class="badge ${b.earned?'earned':''}"><span>${b.icon}</span>${b.label}</div>`).join('')}
          </div>
        </div>
      </div>
      <div>
        <div class="card" style="text-align:center;">
          <h3 style="font-size:16px; margin-bottom:14px; text-align:left;">Overall mastery</h3>
          <div style="position:relative; display:inline-block;">
            ${ringSVG(mastery,150,12,'var(--primary)','var(--bg-alt)')}
            <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center;">
              <span style="font-family:var(--font-display); font-size:26px; font-weight:700;">${mastery}%</span>
            </div>
          </div>
        </div>
        <div class="card">
          <h3 style="font-size:16px; margin-bottom:14px;">Daily study goal</h3>
          <div class="goal-box">
            <div class="goal-ring" style="position:relative;">
              ${ringSVG(goalPct,64,7,'var(--teal)','var(--bg-alt)')}
            </div>
            <div>
              <p style="font-weight:700; font-size:15px;">${STATE.dailyGoalDone} / ${STATE.dailyGoalTarget} activities today</p>
              <p style="font-size:12.5px; color:var(--muted);">Complete a quiz, read a lesson, or save a plan to progress.</p>
            </div>
          </div>
          <div style="margin-top:14px; display:flex; gap:8px; align-items:center;">
            <label style="font-size:12.5px; color:var(--muted); font-weight:600;">Target:</label>
            <input type="number" min="1" max="10" id="goal-target" value="${STATE.dailyGoalTarget}" style="width:60px; padding:6px 8px; border-radius:8px; border:1px solid var(--border); background:var(--surface-2); color:var(--ink);">
          </div>
        </div>
        <div class="card">
          <h3 style="font-size:16px; margin-bottom:14px;">🔖 Bookmarks</h3>
          <div class="bookmark-list" id="bookmark-list"></div>
        </div>
      </div>
    </div>
  `;

  root.querySelector('#goal-target').addEventListener('change', (e)=>{
    const v = Math.max(1, Math.min(10, Number(e.target.value)||3));
    STATE.dailyGoalTarget = v; saveState();
    renderProgress(root);
  });

  const bmList = root.querySelector('#bookmark-list');
  if(STATE.bookmarks.length === 0){
    bmList.innerHTML = `<p style="font-size:13px; color:var(--muted);">No bookmarks yet — star a section from the dashboard.</p>`;
  } else {
    bmList.innerHTML = STATE.bookmarks.map(id => `
      <div class="bookmark-row"><span>${labelForRoute(id)}</span><button class="icon-btn" data-open="${id}">Open →</button></div>
    `).join('');
    bmList.querySelectorAll('[data-open]').forEach(b=> b.addEventListener('click', ()=> go(b.dataset.open)));
  }
}
function labelForRoute(id){
  const all = NAV_SECTIONS.flatMap(g=>g.items);
  const found = all.find(i=>i.id===id);
  return found ? `${found.icon} ${found.label}` : id;
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', initAuth);
