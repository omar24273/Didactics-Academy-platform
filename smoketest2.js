

(function() {
  'use strict';

  // Helper: log with colours
  const log = (msg, type = 'info') => {
    const styles = {
      info: 'background:#E8ECFB; color:#2541B2; font-weight:bold;',
      pass: 'background:#DFF6F5; color:#0EA5A4; font-weight:bold;',
      fail: 'background:#FBE6E3; color:#E1473A; font-weight:bold;',
    };
    console.log(`%c[Smoketest] ${msg}`, styles[type] || styles.info);
  };

  const tests = [];

  const assert = (condition, name, message) => {
    tests.push({ name, passed: !!condition, message });
  };

  // 1. DOM essentials
  assert(document.getElementById('login-screen'), 'Login screen exists', 'Element #login-screen present');
  assert(document.getElementById('password-input'), 'Password input exists', '#password-input present');
  assert(document.getElementById('login-form'), 'Login form exists', '#login-form present');
  assert(document.getElementById('app-shell'), 'App shell exists', '#app-shell present');

  // 2. Global data objects (from data.js)
  assert(typeof METHODS !== 'undefined' && Array.isArray(METHODS), 'METHODS array exists', 'Teaching methods data loaded');
  assert(typeof DIDACTICS_TOPICS !== 'undefined' && Array.isArray(DIDACTICS_TOPICS), 'DIDACTICS_TOPICS array exists', 'Didactics topics data loaded');
  assert(typeof QUIZ_BANK !== 'undefined' && typeof QUIZ_BANK === 'object', 'QUIZ_BANK object exists', 'Quiz bank loaded');
  assert(typeof SKILLS !== 'undefined' && typeof SKILLS === 'object', 'SKILLS object exists', 'Skills data loaded');
  assert(typeof EXAM_QUESTIONS !== 'undefined' && Array.isArray(EXAM_QUESTIONS), 'EXAM_QUESTIONS array exists', 'Exam questions loaded');
  assert(typeof SAMPLE_LESSON_PLAN !== 'undefined' && typeof SAMPLE_LESSON_PLAN === 'object', 'SAMPLE_LESSON_PLAN exists', 'Sample lesson plan loaded');

  // 3. State management (from app.js)
  assert(typeof loadState === 'function', 'loadState function exists', 'State loading available');
  assert(typeof saveState === 'function', 'saveState function exists', 'State saving available');
  assert(typeof STATE !== 'undefined' && STATE !== null, 'STATE object exists', 'Global state defined');

  // 4. Routing & navigation
  assert(typeof ROUTES === 'object' && Object.keys(ROUTES).length > 0, 'ROUTES object exists', 'Route map defined');
  const expectedRoutes = ['dashboard', 'theory', 'methods', 'skills', 'lessonplan', 'quizzes', 'exam', 'notes', 'progress'];
  const missingRoutes = expectedRoutes.filter(r => !ROUTES[r]);
  assert(missingRoutes.length === 0, 'All expected routes defined', `Missing: ${missingRoutes.join(', ') || 'none'}`);

  // 5. Core render functions
  const renderFunctions = ['renderDashboard', 'renderTheory', 'renderMethodsLibrary', 'renderSkillsHub', 'renderLessonPlanBuilder', 'renderQuizMenu', 'renderExamMenu', 'renderNotes', 'renderProgress'];
  renderFunctions.forEach(fn => {
    assert(typeof window[fn] === 'function', `${fn} exists`, `Function ${fn} is defined`);
  });

  // 6. Quiz runner
  assert(typeof renderQuizRunner === 'function', 'renderQuizRunner exists', 'Quiz runner render function defined');
  assert(typeof labelForType === 'function', 'labelForType exists', 'Quiz type label helper defined');

  // 7. PDF export
  assert(typeof exportLessonPlanPDF === 'function', 'exportLessonPlanPDF exists', 'PDF export for lesson plans defined');
  assert(typeof downloadNotePDF === 'function', 'downloadNotePDF exists', 'PDF export for notes defined');

  // 8. Helper functions
  assert(typeof ringSVG === 'function', 'ringSVG exists', 'SVG ring helper defined');
  assert(typeof toast === 'function', 'toast exists', 'Toast notification function defined');
  assert(typeof toggleBookmark === 'function', 'toggleBookmark exists', 'Bookmark toggle defined');

  // 9. Sidebar / navigation
  assert(document.getElementById('sidebar-nav'), 'Sidebar nav container exists', '#sidebar-nav present');
  assert(document.querySelector('.nav-item'), 'At least one nav item exists', 'Navigation items rendered');

  // 10. Password check (without triggering login)
  // We can test the password constant and the login handler indirectly
  assert(typeof SITE_PASSWORD !== 'undefined' && SITE_PASSWORD === 'Omar@2005', 'SITE_PASSWORD constant matches', 'Password constant is correct');

  // 11. State persistence
  assert(typeof localStorage !== 'undefined', 'localStorage available', 'Browser storage accessible');

  // 12. jsPDF availability (optional)
  const hasJSPDF = typeof window.jspdf !== 'undefined' && typeof window.jspdf.jsPDF === 'function';
  assert(hasJSPDF, 'jsPDF library loaded', 'PDF library available for export');

  // ----- Summary -----
  const passed = tests.filter(t => t.passed).length;
  const failed = tests.filter(t => !t.passed).length;

  console.group('🧪 Smoketest Results');
  tests.forEach(t => {
    console.log(`${t.passed ? '✅' : '❌'} ${t.name} — ${t.message}`);
  });
  console.log(`\n📊 Total: ${tests.length} | ✅ ${passed} | ❌ ${failed}`);
  if (failed === 0) {
    log('All tests passed — platform looks healthy!', 'pass');
  } else {
    log(`Some tests failed (${failed}). Check console for details.`, 'fail');
  }
  console.groupEnd();

  // Optionally, add a small UI indicator (could be removed if not needed)
  const style = document.createElement('style');
  style.textContent = `
    #smoke-badge {
      position: fixed; bottom: 10px; right: 10px;
      background: ${failed === 0 ? 'var(--teal)' : 'var(--red)'};
      color: white; padding: 6px 12px;
      border-radius: 20px; font-size: 12px;
      font-weight: 700; z-index: 9999;
      box-shadow: var(--shadow-md);
      pointer-events: none;
      opacity: 0.8;
    }
  `;
  document.head.appendChild(style);

  const badge = document.createElement('div');
  badge.id = 'smoke-badge';
  badge.textContent = failed === 0 ? '✓ Smoketest passed' : `⚠️ ${failed} test(s) failed`;
  document.body.appendChild(badge);

})();