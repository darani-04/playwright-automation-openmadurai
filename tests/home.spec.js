import { test, expect } from '@playwright/test';
test.setTimeout(120000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'View Community' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Search for developers or' }).click();
  await page.getByRole('textbox', { name: 'Search for developers or' }).fill('AI Task Planner');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByText('AI-powered productivity tool').click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  await page.getByRole('textbox', { name: 'Enter your email' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  await page.getByRole('button', { name: 'Subscribe' }).click();
});