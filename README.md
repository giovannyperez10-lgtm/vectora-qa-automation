🧪 Vectora QA Automation Framework

End-to-End test automation framework built with Playwright + TypeScript, using Page Object Model (POM), environment configuration, and CI execution.

This project simulates a real-world QA automation architecture for a fintech platform.

🚀 Tech Stack

Playwright

TypeScript

Page Object Model (POM)

Dotenv (env config)

GitHub Actions (CI/CD)

Multi-browser testing:

Chromium

Firefox

WebKit

📂 Project Structure
tests/
 ├── e2e/                → Test cases
 ├── pages/              → Page Object Models
 ├── fixtures/           → Custom fixtures (login, setup)
 └── setup/              → Session/login initialization

playwright.config.ts     → Global config
.env                     → Environment variables

🔐 Environment Variables

Create a .env file:

BASE_URL=https://www-dev.mouvlatam.com/
USER_EMAIL=your_user
USER_PASS=your_password

▶️ Run Tests

Run all tests:

npx playwright test


Run only E2E tests:

npx playwright test tests/e2e


Run in headed mode:

npx playwright test --headed


Run specific browser:

npx playwright test --project=chromium

🔁 Automatic Login (Session Handling)

The framework includes a login setup test that saves the session using storageState, allowing tests to run without logging in each time.

🧠 Framework Features

✔ Page Object Model design
✔ Reusable login fixture
✔ Environment-based configuration
✔ Cross-browser execution
✔ HTML test reports
✔ CI-ready structure

📸 Test Evidence

Playwright automatically captures:

Screenshots on failure

Trace files

HTML reports

View report:

npx playwright show-report

🎯 Example Scenarios Automated

User login

Dashboard validation

Sidebar menu verification (Dashboard, Recaudos, Pagos)

Authenticated session handling

💼 Author

Giovanny Pérez
QA Engineer | Test Automation | Playwright | API & E2E Testing
