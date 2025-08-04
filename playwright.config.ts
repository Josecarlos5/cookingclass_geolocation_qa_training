import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    // Configure the default browser to be used for tests
    browserName: 'chromium',

    // Enable headless mode for CI environments like GitHub Actions
    headless: true,

    // Set the base URL for navigating to your application pages
    baseURL: 'https://example.com', // Replace with your application's URL

    // Configure viewport size
    viewport: {
      width: 1280,
      height: 720,
    },

    // Capture screenshots on failure
    screenshot: 'only-on-failure',

    // Capture video on failure
    video: 'retain-on-failure',
  },

  // Define test directories
  testDir: 'src/tests',

  // Define global test timeout (in milliseconds)
  timeout: 30000,

  // Global setup options
  globalSetup: require.resolve('./global-setup'),

  // Set retries for flaky tests
  retries: 2,

  // Configure reporter
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]],

  // Configure projects for different browsers
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chromium'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};

export default config;
