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
  await page.locator('a').filter({ hasText: /^Tools$/ }).waitFor({
  state: 'visible',
  timeout: 30000
});
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  const myTools = page.getByRole('link', { name: 'My Tools' });

await myTools.waitFor({
  state: 'visible',
  timeout: 30000
});

  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add Tool' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Tool Title' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Tool Title' }).fill('Allobaby tool')
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();;
  await page.getByRole('textbox', { name: 'Summary' }).click();
  await page.getByRole('textbox', { name: 'Summary' }).fill('this tool was developed using react');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Description' }).click();
  await page.getByRole('textbox', { name: 'Description' }).fill('this tool is used for healthcare');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Upload Image' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByLabel('Upload Image').setInputFiles('input[type="file"]', 'tests/feature.png');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('combobox', { name: 'Category' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('option', { name: 'Health' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('combobox', { name: 'Type' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('option', { name: 'Desktop Tool' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter a tag and press Add or' }).fill('react');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Tool Link' }).click();
  await page.getByRole('textbox', { name: 'Tool Link' }).fill('https://allobaby-landing-page.netlify.app/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Video Link' }).click();
  await page.getByRole('textbox', { name: 'Video Link' }).fill('https://allobaby-landing-page.netlify.app/');
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