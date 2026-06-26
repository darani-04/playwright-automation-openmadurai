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
  const datasets = page.getByRole('link', { name: 'Datasets' });

await datasets.waitFor({
  state: 'visible',
  timeout: 30000
});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('link', { name: 'My Datasets' }).waitFor({
  timeout: 30000});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add Dataset' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Dataset Title' }).click();
  await page.getByRole('textbox', { name: 'Dataset Title' }).fill('Allobaby Dataset');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Summary' }).click();
  await page.getByRole('textbox', { name: 'Summary' }).fill('this dataset was developed using python');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('this is useful for healthcare');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Upload Image' }).click();
  await page.getByLabel('Upload Image').setInputFiles('input[type="file"]', 'tests/feature.png');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('option', { name: 'Healthcare' }).click();
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('option', { name: 'Text Dataset' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('python');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Dataset Link' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Dataset Link' }).fill('https://allobaby-landing-page.netlify.app/');
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
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
});