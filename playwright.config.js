// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  // Test timeout per test in milliseconds
  timeout: 60000,

  // Number of retries for failed tests (only on CI)
  retries: process.env.CI ? 1 : 0,

  // Run tests in parallel
  fullyParallel: true,

  // Number of workers for parallel execution
  workers: process.env.CI ? 4 : undefined,

  // Fail build if test.only is left in code
  forbidOnly: !!process.env.CI,

  // Reporter configuration
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['list']
  ],

  // Global test settings
  use: {
    // Base URL for all tests
    baseURL: process.env.BASE_URL || 'http://localhost:3000',

    // Timeouts for actions
    actionTimeout: 10000,
    navigationTimeout: 15000,

    // ✅ CRITICAL: Screenshot on failure only
    screenshot: 'only-on-failure',
    
    // ❌ Videos disabled (faster)
    video: 'off',
    
    // ❌ Traces disabled (faster)
    trace: 'off',

    // Test isolation
    storageState: undefined,
    testIdAttribute: 'data-testid'
  },

  // Browser configurations
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: true,
        launchOptions: {
          args: [
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--disable-setuid-sandbox'
          ]
        }
      },
    },
  ],
});