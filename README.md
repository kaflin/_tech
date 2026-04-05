# TechWorld Lab — Nepal's Premier IT Training Institute

A modern, responsive website for **TechWorld Lab**, a QA and software testing training institute based in Kathmandu, Nepal. Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build tools.

---

## Project Structure

```
techworld/
│
├── index.html              # Homepage — hero, stats, featured courses, testimonials
├── courses.html            # Full course catalog with category filters
├── about.html              # About TechWorld Lab
├── team.html               # Instructor & team profiles
├── contact.html            # Contact & enrollment form
│
├── css/
│   ├── variables.css       # CSS custom properties, base styles, utilities
│   ├── navbar.css          # Sticky navbar, mobile menu, logo
│   └── sections.css        # Hero, courses, about, team, contact, footer
│
└── js/
    ├── components.js       # Reusable: navbar, footer, cursor, toast, modal, animations
    └── courses.js          # Course data array + renderCourseCards() + filter logic
```

---

## Courses Offered

| Course | Level | Duration | Price |
|---|---|---|---|
| QA Automation Masterclass (Selenium, Cypress, Playwright) | Intermediate | 4 Months | NPR 25,000 |
| Software Testing Fundamentals | Beginner | 2 Months | NPR 15,000 |
| API Testing with Postman & Rest Assured | Intermediate | 2 Months | NPR 18,000 |
| Cypress & Playwright Testing | Intermediate | 3 Months | NPR 22,000 |
| DevOps & CI/CD for Testers | Advanced | 2 Months | NPR 20,000 |
| Performance Testing with JMeter | Advanced | 2 Months | NPR 18,000 |

---

## Features

- **Responsive design** — mobile-first layout with sticky navbar and hamburger menu
- **Animated hero section** — orbiting rings, floating tech chips, counting stats
- **Course catalog** — filterable cards by category (Automation, API, DevOps, Performance)
- **Custom cursor** — interactive cursor effect on desktop
- **Toast notifications** — form submission feedback
- **Modal dialogs** — course detail overlays
- **Scroll animations** — elements animate in as they enter the viewport

---

## Getting Started

No build step required. Open any HTML file directly in a browser, or serve locally:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Key Stats

- **1,200+** students trained
- **15+** expert courses
- **96%** placement rate
