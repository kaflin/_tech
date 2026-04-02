// ===== TECHWORLD LAB - COURSES DATA =====

const COURSES = [
  {
    id: 1, category: 'automation',
    icon: '🤖', iconBg: 'linear-gradient(135deg,#00d4ff22,#00d4ff11)',
    badge: 'HOT', badgeClass: 'badge-hot',
    title: 'QA Automation Masterclass',
    desc: 'Master end-to-end test automation with Selenium, Cypress & Playwright. Build real-world frameworks from scratch.',
    tags: ['Selenium', 'Java', 'TestNG', 'Allure', 'Jenkins'],
    duration: '4 Months', students: '240+', price: 'NPR 25,000',
    level: 'Intermediate',
    details: `Learn the complete QA Automation stack used in top MNCs. This course covers Selenium WebDriver with Java, Page Object Model, TestNG framework, Allure reporting, Jenkins CI/CD integration, and advanced topics like parallel execution and cross-browser testing.`
  },
  {
    id: 2, category: 'testing',
    icon: '🔍', iconBg: 'linear-gradient(135deg,#00ff8822,#00ff8811)',
    badge: 'NEW', badgeClass: 'badge-new',
    title: 'Software Testing Fundamentals',
    desc: 'Complete manual testing course covering STLC, SDLC, test case design, bug reporting, and Agile methodology.',
    tags: ['Manual Testing', 'Agile', 'JIRA', 'Test Cases', 'BDD'],
    duration: '2 Months', students: '380+', price: 'NPR 15,000',
    level: 'Beginner',
    details: `Perfect entry point into QA. Covers software testing lifecycle, various testing types (functional, regression, UAT), test case writing, defect reporting in JIRA, Agile/Scrum practices, and interview preparation for QA roles.`
  },
  {
    id: 3, category: 'api',
    icon: '⚡', iconBg: 'linear-gradient(135deg,#ff6b0022,#ff6b0011)',
    badge: 'TOP', badgeClass: 'badge-top',
    title: 'API Testing with Postman & Rest Assured',
    desc: 'Master REST API testing, automation with Rest Assured, JSON/XML validation, and OAuth authentication flows.',
    tags: ['Postman', 'Rest Assured', 'JSON', 'OAuth', 'Newman'],
    duration: '2 Months', students: '195+', price: 'NPR 18,000',
    level: 'Intermediate',
    details: `Deep dive into API testing from manual Postman scripts to fully automated Rest Assured suites. Learn API authentication, schema validation, chaining requests, environment variables, and integrating API tests into CI/CD pipelines.`
  },
  {
    id: 4, category: 'automation',
    icon: '🎭', iconBg: 'linear-gradient(135deg,#00d4ff22,#00ff8811)',
    badge: 'NEW', badgeClass: 'badge-new',
    title: 'Cypress & Playwright Testing',
    desc: 'Modern web automation with Cypress and Playwright. Component testing, visual testing, and network interception.',
    tags: ['Cypress', 'Playwright', 'JavaScript', 'TypeScript', 'CI/CD'],
    duration: '3 Months', students: '120+', price: 'NPR 22,000',
    level: 'Intermediate',
    details: `Next-generation testing with Cypress and Playwright. Build robust, fast end-to-end tests with JavaScript/TypeScript. Covers component testing, visual regression, API mocking, and GitHub Actions integration.`
  },
  {
    id: 5, category: 'devops',
    icon: '🚀', iconBg: 'linear-gradient(135deg,#ff6b0022,#00d4ff11)',
    badge: 'HOT', badgeClass: 'badge-hot',
    title: 'DevOps & CI/CD for Testers',
    desc: 'Jenkins, Docker, GitHub Actions — integrate your tests into professional DevOps pipelines like industry pros.',
    tags: ['Jenkins', 'Docker', 'GitHub Actions', 'Maven', 'Shell'],
    duration: '2 Months', students: '98+', price: 'NPR 20,000',
    level: 'Advanced',
    details: `Bridge the gap between QA and DevOps. Learn Docker containerization for test environments, Jenkins pipeline creation, GitHub Actions workflows, parallel test execution in CI, and reporting dashboards with Allure & ELK stack.`
  },
  {
    id: 6, category: 'performance',
    icon: '📊', iconBg: 'linear-gradient(135deg,#00ff8822,#ff6b0011)',
    badge: 'TOP', badgeClass: 'badge-top',
    title: 'Performance Testing with JMeter',
    desc: 'Load test web applications, analyze bottlenecks, generate reports, and integrate with CI/CD pipelines.',
    tags: ['JMeter', 'BlazeMeter', 'Grafana', 'InfluxDB', 'k6'],
    duration: '1.5 Months', students: '75+', price: 'NPR 16,000',
    level: 'Intermediate',
    details: `Understand how applications behave under stress. Design load, stress, spike, and soak tests. Analyze results with Grafana dashboards, integrate JMeter into Jenkins, and use k6 for modern cloud-native performance testing.`
  }
];

// Render course cards
function renderCourseCards(containerId, filterCat = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;
  const filtered = filterCat === 'all' ? COURSES : COURSES.filter(c => c.category === filterCat);
  container.innerHTML = filtered.map(c => `
    <div class="course-card fade-in" data-category="${c.category}" data-id="${c.id}">
      <div class="course-header">
        <div class="course-icon-wrap" style="background:${c.iconBg}">${c.icon}</div>
        <span class="course-badge ${c.badgeClass}">${c.badge}</span>
      </div>
      <div class="course-body">
        <div class="course-title">${c.title}</div>
        <div class="course-desc">${c.desc}</div>
        <div class="course-tags">${c.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
      <div class="course-footer">
        <div class="course-meta">
          <div class="meta-item"><i>🕐</i>${c.duration}</div>
          <div class="meta-item"><i>👥</i>${c.students}</div>
        </div>
        <div class="course-price">${c.price}</div>
      </div>
    </div>
  `).join('');

  // Card click → modal
  container.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('click', () => {
      const course = COURSES.find(c => c.id === parseInt(card.dataset.id));
      if (!course) return;
      openModal(`
        <div style="text-align:center;margin-bottom:24px;">
          <div style="font-size:3rem;margin-bottom:12px;">${course.icon}</div>
          <h2 style="font-family:var(--font-display);font-size:1.3rem;color:var(--text-bright);margin-bottom:8px;">${course.title}</h2>
          <span class="course-badge ${course.badgeClass}" style="margin-bottom:16px;display:inline-block;">${course.level}</span>
        </div>
        <p style="color:var(--text-muted);line-height:1.7;margin-bottom:24px;">${course.details}</p>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;">
          ${course.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-bottom:32px;">
          <div style="background:var(--bg-dark);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:1.1rem;font-family:var(--font-display);color:var(--primary)">${course.duration}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Duration</div>
          </div>
          <div style="background:var(--bg-dark);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:1.1rem;font-family:var(--font-display);color:var(--accent)">${course.students}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Students</div>
          </div>
          <div style="background:var(--bg-dark);border:1px solid var(--border);border-radius:10px;padding:14px;text-align:center;">
            <div style="font-size:1rem;font-family:var(--font-display);color:var(--secondary)">${course.price}</div>
            <div style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Fee</div>
          </div>
        </div>
        <a href="contact.html" class="btn btn-primary" style="width:100%;justify-content:center;">Enroll in This Course</a>
      `);
    });
  });
  initScrollAnimations();
}

// Filter tabs logic
function initCourseFilters(tabsId, gridId) {
  const tabs = document.getElementById(tabsId);
  if (!tabs) return;
  tabs.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderCourseCards(gridId, tab.dataset.filter);
    });
  });
}
