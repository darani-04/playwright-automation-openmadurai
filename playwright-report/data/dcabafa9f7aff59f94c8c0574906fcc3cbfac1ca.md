# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\researchpapercreation.spec.js >> test
- Location: tests\researchpapercreation.spec.js:4:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'My Papers' }) to be visible

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
              - heading "79" [level=2] [ref=e120]
            - generic [ref=e123]:
              - generic [ref=e126]:
                - paragraph [ref=e127]: Projects
                - paragraph [ref=e128]: Total projects
              - heading "2" [level=2] [ref=e129]
            - generic [ref=e132]:
              - generic [ref=e135]:
                - paragraph [ref=e136]: Quick Tools
                - paragraph [ref=e137]: Total quick tools
              - heading "2" [level=2] [ref=e138]
            - generic [ref=e141]:
              - generic [ref=e144]:
                - paragraph [ref=e145]: Datasets
                - paragraph [ref=e146]: Total datasets
              - heading "2" [level=2] [ref=e147]
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
                      - generic [ref=e202]: "0.5"
                      - generic [ref=e204]: "1"
                      - generic [ref=e206]: "1.5"
                      - generic [ref=e208]: "2"
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
  1   | import { test, expect } from '@playwright/test';
  2   | test.setTimeout(180000);
  3   | 
  4   | test('test', async ({ page }) => {
  5   |   await page.goto('https://openmadurai.org/');
  6   |   await page.getByRole('link', { name: 'Log in' }).click();
  7   |    await page.getByRole('textbox', { name: '············' }).click();
  8   |   await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  9   |   await page.getByRole('textbox', { name: '············' }).click();
  10  |   await page.getByRole('textbox', { name: '············' }).fill('thara@04');
  11  |   await page.getByRole('button', { name: 'Login' }).click();
  12  |   await page.waitForLoadState('domcontentloaded');
  13  |   await expect(page.locator('body')).toBeVisible();
  14  |   const researchPapers = page.locator('a').filter({ hasText: 'Research Papers' });
  15  | 
  16  |   await researchPapers.waitFor({
  17  |   state: 'visible',
  18  |   timeout: 30000
  19  | });
  20  |   await page.waitForLoadState('domcontentloaded');
  21  |   await expect(page.locator('body')).toBeVisible();
  22  |   const myPapers = page.getByRole('link', { name: 'My Papers' });
  23  | 
> 24  | await myPapers.waitFor({
      |                ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  25  |   state: 'visible',
  26  |   timeout: 30000
  27  | });
  28  |   await page.waitForLoadState('domcontentloaded');
  29  |   await expect(page.locator('body')).toBeVisible();
  30  |   await page.getByRole('button', { name: 'Add Paper' }).click();
  31  |   await page.waitForLoadState('domcontentloaded');
  32  |   await expect(page.locator('body')).toBeVisible();
  33  |   await page.getByRole('textbox', { name: 'Paper Title' }).click();
  34  |   await page.getByRole('textbox', { name: 'Paper Title' }).fill('Allobaby Resear');
  35  |   await page.waitForLoadState('domcontentloaded');
  36  |   await expect(page.locator('body')).toBeVisible();
  37  |   await page.getByRole('textbox', { name: 'Paper Title' }).click();
  38  |   await page.getByRole('textbox', { name: 'Paper Title' }).fill('Allobaby Research paper');
  39  |   await page.waitForLoadState('domcontentloaded');
  40  |   await expect(page.locator('body')).toBeVisible();
  41  |   await page.getByRole('textbox', { name: 'Summary' }).click();
  42  |   await page.getByRole('textbox', { name: 'Summary' }).fill('this Research paper about healthcare');
  43  |   await page.waitForLoadState('domcontentloaded');
  44  |   await expect(page.locator('body')).toBeVisible();
  45  |   await page.getByRole('textbox', { name: 'Abstract' }).click();
  46  |   await page.getByRole('textbox', { name: 'Abstract' }).fill('this research paper about healthcare');
  47  |   await page.getByRole('textbox', { name: 'Description / Findings' }).click();
  48  |   await page.getByRole('textbox', { name: 'Description / Findings' }).fill('this research paper about healthcare and technology');
  49  |   await page.waitForLoadState('domcontentloaded');
  50  |   await expect(page.locator('body')).toBeVisible();
  51  |   await page.getByRole('button', { name: 'Upload Cover Image' }).click();
  52  |   await page.waitForLoadState('domcontentloaded');
  53  |   await expect(page.locator('body')).toBeVisible();
  54  |   await page.getByLabel('Upload Cover Image').setInputFiles('input[type="file"]', 'tests/feature.png');
  55  |   await page.waitForLoadState('domcontentloaded');
  56  |   await expect(page.locator('body')).toBeVisible();
  57  |   await page.getByRole('combobox', { name: 'Category' }).click();
  58  |   await page.waitForLoadState('domcontentloaded');
  59  |   await expect(page.locator('body')).toBeVisible();
  60  |   await page.getByRole('option', { name: 'Medicine' }).click();
  61  |   await page.waitForLoadState('domcontentloaded');
  62  |   await expect(page.locator('body')).toBeVisible();
  63  |   await page.getByRole('textbox', { name: 'DOI (Optional)' }).click();
  64  |   await page.waitForLoadState('domcontentloaded');
  65  |   await expect(page.locator('body')).toBeVisible();
  66  |   await page.getByRole('textbox', { name: 'DOI (Optional)' }).fill('123456');
  67  |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  68  |   await page.waitForLoadState('domcontentloaded');
  69  |   await expect(page.locator('body')).toBeVisible();
  70  |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('computer vision');
  71  |   await page.waitForLoadState('domcontentloaded');
  72  |   await expect(page.locator('body')).toBeVisible();
  73  |   await page.getByRole('button', { name: 'Add' }).click();
  74  |   await page.waitForLoadState('domcontentloaded');
  75  |   await expect(page.locator('body')).toBeVisible();
  76  |   await page.getByRole('textbox', { name: 'Paper Direct Link' }).click();
  77  |   await page.getByRole('textbox', { name: 'Paper Direct Link' }).fill('https://allobaby-landing-page.netlify.app/');
  78  |   await page.waitForLoadState('domcontentloaded');
  79  |   await expect(page.locator('body')).toBeVisible();
  80  |   await page.getByRole('textbox', { name: 'Publisher Link (Optional)' }).click();
  81  |   await page.getByRole('textbox', { name: 'Publisher Link (Optional)' }).fill('https://allobaby-landing-page.netlify.app/');
  82  |   await page.waitForLoadState('domcontentloaded');
  83  |   await expect(page.locator('body')).toBeVisible();
  84  |   await page.getByRole('button', { name: 'Save' }).click();
  85  |   await page.waitForLoadState('domcontentloaded');
  86  |   await expect(page.locator('body')).toBeVisible();
  87  |   await page.getByRole('button').nth(3).click();
  88  |   await page.waitForLoadState('domcontentloaded');
  89  |   await expect(page.locator('body')).toBeVisible();
  90  |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  91  |   await page.waitForLoadState('domcontentloaded');
  92  |   await expect(page.locator('body')).toBeVisible();
  93  |   await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('image');
  94  |   await page.waitForLoadState('domcontentloaded');
  95  |   await expect(page.locator('body')).toBeVisible();
  96  |   await page.getByRole('button', { name: 'Add' }).click();
  97  |   await page.waitForLoadState('domcontentloaded');
  98  |   await expect(page.locator('body')).toBeVisible();
  99  |   await page.getByRole('button', { name: 'Save' }).click();
  100 | });
```