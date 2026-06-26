import { test, expect } from '@playwright/test';
test.setTimeout(180000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('link', { name: 'Log in' }).click();
   await page.getByRole('textbox', { name: '············' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  await page.getByRole('textbox', { name: '············' }).click();
  await page.getByRole('textbox', { name: '············' }).fill('thara@04');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  const researchPapers = page.locator('a').filter({ hasText: 'Research Papers' });

  await researchPapers.waitFor({
  state: 'visible',
  timeout: 30000
});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  const myPapers = page.getByRole('link', { name: 'My Papers' });

await myPapers.waitFor({
  state: 'visible',
  timeout: 30000
});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add Paper' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Paper Title' }).click();
  await page.getByRole('textbox', { name: 'Paper Title' }).fill('Allobaby Resear');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Paper Title' }).click();
  await page.getByRole('textbox', { name: 'Paper Title' }).fill('Allobaby Research paper');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Summary' }).click();
  await page.getByRole('textbox', { name: 'Summary' }).fill('this Research paper about healthcare');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Abstract' }).click();
  await page.getByRole('textbox', { name: 'Abstract' }).fill('this research paper about healthcare');
  await page.getByRole('textbox', { name: 'Description / Findings' }).click();
  await page.getByRole('textbox', { name: 'Description / Findings' }).fill('this research paper about healthcare and technology');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Upload Cover Image' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByLabel('Upload Cover Image').setInputFiles('input[type="file"]', 'tests/feature.png');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('option', { name: 'Medicine' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'DOI (Optional)' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'DOI (Optional)' }).fill('123456');
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('computer vision');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Paper Direct Link' }).click();
  await page.getByRole('textbox', { name: 'Paper Direct Link' }).fill('https://allobaby-landing-page.netlify.app/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Publisher Link (Optional)' }).click();
  await page.getByRole('textbox', { name: 'Publisher Link (Optional)' }).fill('https://allobaby-landing-page.netlify.app/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button').nth(3).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('image');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
});