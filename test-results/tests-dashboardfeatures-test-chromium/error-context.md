# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\dashboardfeatures.spec.js >> test
- Location: tests\dashboardfeatures.spec.js:4:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: /^Opportunities$/ })

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]:
    - complementary [ref=e5]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - link "OpenMadurai Logo OpenMadurAI" [ref=e9] [cursor=pointer]:
            - /url: /
            - generic [ref=e10]:
              - img "OpenMadurai Logo" [ref=e11]
              - generic [ref=e12]: OpenMadurAI
          - button [ref=e13] [cursor=pointer]
        - navigation [ref=e17]:
          - list [ref=e18]
    - generic [ref=e32]:
      - banner:
        - generic [ref=e35]:
          - button "Scan Event QR Code" [ref=e36] [cursor=pointer]:
            - img [ref=e37]
          - img "thra" [ref=e45] [cursor=pointer]
      - main [ref=e48]:
        - generic [ref=e53]:
          - img "Congratulations thra" [ref=e55]
          - generic [ref=e56]:
            - heading "Welcome back thra! 🎉" [level=5] [ref=e57]
            - paragraph [ref=e58]: Explore new community projects and showcase your work today.
            - paragraph [ref=e59]: Connect with developers and contributors from your community.
            - link "Explore Community" [ref=e60] [cursor=pointer]:
              - /url: /community
              - button "Explore Community" [ref=e61]
      - contentinfo [ref=e74]:
        - paragraph [ref=e77]:
          - text: © 2026, Made with ❤️ by
          - link "Savemom" [ref=e78] [cursor=pointer]:
            - /url: https://savemom.in/
          - text: (v2)
  - generic:
    - region "Notifications Alt+T"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test.setTimeout(180000);
  3  | 
  4  | test('test', async ({ page }) => {
  5  |   await page.goto('https://openmadurai.org/');
  6  |   await page.getByRole('link', { name: 'Log in' }).click();
  7  |   await page.getByRole('textbox', { name: '············' }).click();
  8  |   await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  9  |   await page.getByRole('textbox', { name: '············' }).click();
  10 |   await page.getByRole('textbox', { name: '············' }).fill('thara@04');
  11 |   await page.getByRole('button', { name: 'Login' }).click();
  12 |   await page.waitForLoadState('domcontentloaded');
  13 |   await expect(page.locator('body')).toBeVisible();
> 14 |   await page.locator('a').filter({ hasText: /^Opportunities$/ }).click();
     |                                                                  ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  15 |   await page.waitForLoadState('domcontentloaded');
  16 |   await expect(page.locator('body')).toBeVisible();
  17 |   await page.locator('a').filter({ hasText: /^Events$/ }).click();
  18 |   await page.waitForLoadState('domcontentloaded');
  19 |   await expect(page.locator('body')).toBeVisible();
  20 |   await page.getByRole('link', { name: 'My Events' }).click();
  21 |   await page.waitForLoadState('domcontentloaded');
  22 |   await expect(page.locator('body')).toBeVisible();
  23 |   await page.getByRole('img', { name: 'Deploying Open Models on GKE' }).click();
  24 |   await page.getByRole('button').click();
  25 |  await page.waitForLoadState('domcontentloaded');
  26 |  await expect(page.locator('body')).toBeVisible();
  27 |   await page.locator('a').filter({ hasText: /^Projects$/ }).click();
  28 |   await page.waitForLoadState('domcontentloaded');
  29 |   await expect(page.locator('body')).toBeVisible();
  30 |   await page.getByRole('link', { name: 'My Projects' }).click();
  31 |   await page.waitForLoadState('domcontentloaded');
  32 |   await expect(page.locator('body')).toBeVisible();
  33 |   await page.locator('a').filter({ hasText: /^Tools$/ }).click();
  34 |  await page.waitForLoadState('domcontentloaded');
  35 |  await expect(page.locator('body')).toBeVisible();
  36 |   await page.getByText('My Tools', { exact: false }).first().click();
  37 |   await page.waitForLoadState('domcontentloaded');
  38 |   await expect(page.locator('body')).toBeVisible();
  39 |   await page.locator('a').filter({ hasText: /^Datasets$/ }).click();
  40 |   await page.waitForLoadState('domcontentloaded');
  41 |   await expect(page.locator('body')).toBeVisible();
  42 |   await page.getByRole('link', { name: 'My Datasets' }).waitFor({
  43 |   timeout: 30000
  44 | });
  45 | 
  46 |   await page.waitForLoadState('domcontentloaded');
  47 |   await expect(page.locator('body')).toBeVisible();
  48 |   await page.locator('a').filter({ hasText: 'Research Papers' }).click();
  49 |   await page.waitForLoadState('domcontentloaded');
  50 |   await expect(page.locator('body')).toBeVisible();
  51 |   await page.getByRole('link', { name: 'My Papers' }).click();
  52 |   await page.waitForLoadState('domcontentloaded');
  53 |   await expect(page.locator('body')).toBeVisible();
  54 |   await page.locator('a').filter({ hasText: 'Settings' }).click();
  55 |   await page.waitForLoadState('domcontentloaded');
  56 |   await expect(page.locator('body')).toBeVisible();
  57 |   const profile = page.locator('text=Profile').first();
  58 |   await profile.waitFor({ state: 'visible', timeout: 10000 });
  59 | });
```