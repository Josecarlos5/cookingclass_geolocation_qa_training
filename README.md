# Cooking Class QA Training

This repository is designed for QA training, focusing on automating tests using Playwright and TypeScript. The example test checks the location accuracy for a cooking class listed on a fictional travel experience platform.

## Setup

Install dependencies:
   npm install

Run tests:
npx playwright test

Automate tests with GitHub Actions (configured in .github/workflows/playwright-tests.yml)
   

### Structure

Automation: .github/workflows/playwright-tests.yml sets up continuous integration for automatic test execution.

Testing: cookingClassLocation.spec.ts is where the actual test logic resides, ensuring cooking class locations are correctly presented.

Abstraction: cookingClassPage.ts encapsulates interactions with web page elements, improving test maintainability.

Dependencies: package.json manages project dependencies and scripts, facilitating easy setup and execution.

Configuration: playwright.config.ts customizes the Playwright environment for testing.
