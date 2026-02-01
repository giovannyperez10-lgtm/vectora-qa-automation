📌 Vectora QA Automation Framework

Automated end-to-end testing framework built with Playwright + TypeScript using Page Object Model (POM) architecture.

🚀 Tech Stack

Playwright

TypeScript

Page Object Model (POM)

Dotenv (environment variables)

GitHub Actions (CI)

Multi-browser testing (Chromium, Firefox, WebKit)

📂 Project Structure
tests/
 ├── e2e/          → Test cases
 ├── pages/        → Page Objects (UI logic)
 ├── fixtures/     → Custom fixtures
 └── setup/        → Login session setup

playwright.config.ts → Playwright configuration
.github/workflows     → CI pipeline
.env                  → Environment variables

🔐 Features

✅ Automated login
✅ Session reuse (storageState)
✅ Dashboard validation
✅ Sidebar menu validation
✅ Logged user verification
✅ Cross-browser execution

▶️ Run tests
npx playwright test


Headed mode:

npx playwright test --headed


Single browser:

npx playwright test --project=chromium

📸 Reports

After execution:

npx playwright show-report

👤 Author

Giovanni Pérez
QA Engineer | Test Automation | Playwright | API Testing
