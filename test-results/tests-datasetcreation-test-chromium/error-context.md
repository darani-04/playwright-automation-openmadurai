# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\datasetcreation.spec.js >> test
- Location: tests\datasetcreation.spec.js:5:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Datasets' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
            - list [ref=e18]:
              - listitem [ref=e19]:
                - link "Dashboard" [ref=e20] [cursor=pointer]:
                  - /url: /home
                  - generic [ref=e23]: Dashboard
              - listitem [ref=e24]:
                - generic [ref=e28] [cursor=pointer]: Opportunities
              - listitem [ref=e32]:
                - generic [ref=e36] [cursor=pointer]: Events
              - listitem [ref=e40]:
                - generic [ref=e44] [cursor=pointer]: Projects
              - listitem [ref=e48]:
                - generic [ref=e52] [cursor=pointer]: Tools
              - listitem [ref=e56]:
                - generic [ref=e60] [cursor=pointer]: Datasets
              - listitem [ref=e64]:
                - generic [ref=e68] [cursor=pointer]: Research Papers
              - listitem [ref=e72]:
                - generic [ref=e76] [cursor=pointer]: Settings
      - generic [ref=e82]:
        - banner:
          - generic [ref=e85]:
            - button "Scan Event QR Code" [ref=e86] [cursor=pointer]:
              - img [ref=e87]
            - img "thra" [ref=e95] [cursor=pointer]
        - main [ref=e98]:
          - generic [ref=e99]:
            - generic [ref=e103]:
              - img "Congratulations thra" [ref=e105]
              - generic [ref=e106]:
                - heading "Welcome back thra! 🎉" [level=5] [ref=e107]
                - paragraph [ref=e108]: Explore new community projects and showcase your work today.
                - paragraph [ref=e109]: Connect with developers and contributors from your community.
                - link "Explore Community" [ref=e110] [cursor=pointer]:
                  - /url: /community
                  - button "Explore Community" [ref=e111]
            - generic [ref=e114]:
              - generic [ref=e117]:
                - paragraph [ref=e118]: Total Score
                - paragraph [ref=e119]: Overall community score
              - heading "64" [level=2] [ref=e120]
            - generic [ref=e123]:
              - generic [ref=e126]:
                - paragraph [ref=e127]: Projects
                - paragraph [ref=e128]: Total projects
              - heading "1" [level=2] [ref=e129]
            - generic [ref=e132]:
              - generic [ref=e135]:
                - paragraph [ref=e136]: Quick Tools
                - paragraph [ref=e137]: Total quick tools
              - heading "1" [level=2] [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e144]:
                - paragraph [ref=e145]: Datasets
                - paragraph [ref=e146]: Total datasets
              - heading "1" [level=2] [ref=e147]
            - generic [ref=e150]:
              - generic [ref=e153]:
                - paragraph [ref=e154]: Research Papers
                - paragraph [ref=e155]: Total research papers
              - heading "1" [level=2] [ref=e156]
            - generic [ref=e158]:
              - generic [ref=e160]:
                - generic [ref=e161]: Activity Overview
                - generic [ref=e162]: Your contributions over time
              - generic [ref=e166]:
                - list [ref=e168]:
                  - listitem [ref=e169]:
                    - img "Datasets legend icon" [ref=e170]
                    - text: Datasets
                  - listitem [ref=e172]:
                    - img "Projects legend icon" [ref=e173]
                    - text: Projects
                  - listitem [ref=e175]:
                    - img "Quick Tools legend icon" [ref=e176]
                    - text: Quick Tools
                  - listitem [ref=e178]:
                    - img "Research Papers legend icon" [ref=e179]
                    - text: Research Papers
                - application [ref=e181]:
                  - generic [ref=e194]:
                    - generic [ref=e197]: 2026-06
                    - generic [ref=e198]:
                      - generic [ref=e200]: "0"
                      - generic [ref=e202]: "0.25"
                      - generic [ref=e204]: "0.5"
                      - generic [ref=e206]: "0.75"
                      - generic [ref=e208]: "1"
        - contentinfo [ref=e209]:
          - paragraph [ref=e212]:
            - text: © 2026, Made with ❤️ by
            - link "Savemom" [ref=e213] [cursor=pointer]:
              - /url: https://savemom.in/
            - text: (v2)
    - generic:
      - region "Notifications Alt+T"
  - generic [ref=e214]: "0"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | test.setTimeout(180000);
  3  | 
  4  | 
  5  | test('test', async ({ page }) => {
  6  |   await page.goto('https://openmadurai.org/');
  7  |   await page.getByRole('link', { name: 'Log in' }).click();
  8  |    await page.getByRole('textbox', { name: '············' }).click();
  9  |   await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  10 |   await page.getByRole('textbox', { name: '············' }).click();
  11 |   await page.getByRole('textbox', { name: '············' }).fill('thara@04');
  12 |   await page.getByRole('button', { name: 'Login' }).click();
  13 |   await page.waitForLoadState('domcontentloaded');
  14 |   await expect(page.locator('body')).toBeVisible();
  15 |   const datasets = page.getByRole('link', { name: 'Datasets' });
  16 | 
> 17 | await datasets.waitFor({
     |                ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  18 |   state: 'visible',
  19 |   timeout: 30000
  20 | });
  21 |   await page.waitForLoadState('domcontentloaded');
  22 |   await expect(page.locator('body')).toBeVisible();
  23 |   await page.getByRole('link', { name: 'My Datasets' }).waitFor({
  24 |   timeout: 30000});
  25 |   await page.waitForLoadState('domcontentloaded');
  26 |   await expect(page.locator('body')).toBeVisible();
  27 |   await page.getByRole('button', { name: 'Add Dataset' }).click();
  28 |   await page.waitForLoadState('domcontentloaded');
  29 |   await expect(page.locator('body')).toBeVisible();
  30 |   await page.getByRole('textbox', { name: 'Dataset Title' }).click();
  31 |   await page.getByRole('textbox', { name: 'Dataset Title' }).fill('Allobaby Dataset');
  32 |   await page.waitForLoadState('domcontentloaded');
  33 |   await expect(page.locator('body')).toBeVisible();
  34 |   await page.getByRole('textbox', { name: 'Summary' }).click();
  35 |   await page.getByRole('textbox', { name: 'Summary' }).fill('this dataset was developed using python');
  36 |   await page.waitForLoadState('domcontentloaded');
  37 |   await expect(page.locator('body')).toBeVisible();
  38 |   await page.getByRole('textbox', { name: 'Description' }).click();
  39 |   await page.getByRole('textbox', { name: 'Description' }).fill('this is useful for healthcare');
  40 |   await page.waitForLoadState('domcontentloaded');
  41 |   await expect(page.locator('body')).toBeVisible();
  42 |   await page.getByRole('button', { name: 'Upload Image' }).click();
  43 |   await page.getByLabel('Upload Image').setInputFiles('input[type="file"]', 'tests/feature.png');
  44 |   await page.waitForLoadState('domcontentloaded');
  45 |   await expect(page.locator('body')).toBeVisible();
  46 |   await page.getByRole('combobox', { name: 'Category' }).click();
  47 |   await page.waitForLoadState('domcontentloaded');
  48 |   await expect(page.locator('body')).toBeVisible();
  49 |   await page.getByRole('option', { name: 'Healthcare' }).click();
  50 |   await page.getByRole('combobox', { name: 'Type' }).click();
  51 |   await page.waitForLoadState('domcontentloaded');
  52 |   await expect(page.locator('body')).toBeVisible();
  53 |   await page.getByRole('option', { name: 'Text Dataset' }).click();
  54 |   await page.waitForLoadState('domcontentloaded');
  55 |   await expect(page.locator('body')).toBeVisible();
  56 |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  57 |   await page.waitForLoadState('domcontentloaded');
  58 |   await expect(page.locator('body')).toBeVisible();
  59 |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('python');
  60 |   await page.waitForLoadState('domcontentloaded');
  61 |   await expect(page.locator('body')).toBeVisible();
  62 |   await page.getByRole('button', { name: 'Add' }).click();
  63 |   await page.waitForLoadState('domcontentloaded');
  64 |   await expect(page.locator('body')).toBeVisible();
  65 |   await page.getByRole('textbox', { name: 'Dataset Link' }).click();
  66 |   await page.waitForLoadState('domcontentloaded');
  67 |   await expect(page.locator('body')).toBeVisible();
  68 |   await page.getByRole('textbox', { name: 'Dataset Link' }).fill('https://allobaby-landing-page.netlify.app/');
  69 |   await page.waitForLoadState('domcontentloaded');
  70 |   await expect(page.locator('body')).toBeVisible();
  71 |   await page.getByRole('button', { name: 'Save' }).click();
  72 |   await page.waitForLoadState('domcontentloaded');
  73 |   await expect(page.locator('body')).toBeVisible();
  74 |   await page.getByRole('button').nth(3).click();
  75 |   await page.waitForLoadState('domcontentloaded');
  76 |   await expect(page.locator('body')).toBeVisible();
  77 |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  78 |   await page.waitForLoadState('domcontentloaded');
  79 |   await expect(page.locator('body')).toBeVisible();
  80 |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('image');
  81 |   await page.getByRole('button', { name: 'Add' }).click();
  82 |   await page.waitForLoadState('domcontentloaded');
  83 |   await expect(page.locator('body')).toBeVisible();
  84 |   await page.getByRole('button', { name: 'Save' }).click();
  85 | });
```