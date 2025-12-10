# orangeHRM — Playwright test suite

Lightweight Playwright-based end-to-end test suite for the OrangeHRM demo app.

## Project

- **Purpose:** Automated UI tests (login, forgot password) using Playwright and TypeScript.
- **Repository layout:** tests and page objects using the `pages/` folder.

## Prerequisites

- Node.js (>= 16) and `npm` installed.
- A modern OS (Windows/macOS/Linux). This repo has been developed on Windows.

## Install

Open PowerShell in the repository root and run:

```powershell
npm ci
```

## Run tests

Note: The npm scripts set `USERNAME` and `PASSWORD` environment variables via `cross-env` in `package.json`, in order to run the npm scripts successfully, please assign valid credentials.

- Run the interactive UI test runner:

```powershell
npm run test:ui
```

- Run tests in headed mode:

```powershell
npm run test:headed
```

- Run tests in headless mode (CI-friendly):

```powershell
npm run test:headless
```

Check the generated report in `playwright-report/` after a run.

## Project structure

- `tests/` — Playwright test files (e.g. `login.spec.ts`, `forgot-password.spec.ts`).
- `pages/` — Page object models (`base.page.ts`, `login.page.ts`, `forgot-password.page.ts`).
- `fixtures/`, `models/` — Test fixtures and data models.
- `playwright.config.ts` — Playwright configuration.
- `global-setup.ts` — execute code once before all tests.
- `playwright-report/` — Generated HTML test reports.
- `test-results/` — Raw test results (if configured).

## Development notes

- Use the `pages/` folder to add or update page objects when tests need new selectors or helpers.
- Keep tests focused and independent — prefer isolated, fast tests.
