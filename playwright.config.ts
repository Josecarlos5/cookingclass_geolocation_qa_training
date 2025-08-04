import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    headless: true,
    browserName: 'chromium',
    baseURL: 'https://example.com', // Replace with actual base URL
  },
};

export default config;
