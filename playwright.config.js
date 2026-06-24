module.exports = {
  reporter: 'html',

  retries: 2,

  use: {
    actionTimeout: 30000,
    navigationTimeout: 60000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  },
};