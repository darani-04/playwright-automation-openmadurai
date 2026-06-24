import { test, expect } from '@playwright/test';
test.setTimeout(120000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('navigation').getByRole('link', { name: 'Events' }).click();
 await page.waitForLoadState('domcontentloaded');
 await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'View Detail' }).first().waitFor();
  await page.getByRole('button', { name: 'View Detail' }).first().click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('domcontentloaded');
await expect(page.locator('body')).toBeVisible();
  await page.getByText('Join GDG Cloud Madurai for an').click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('domcontentloaded');
await expect(page.locator('body')).toBeVisible();
  await page.getByText('Join Google Developer Groups Madurai for an exciting AI-powered vibeathon where').click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('domcontentloaded');
await expect(page.locator('body')).toBeVisible();
  await page.getByRole('button', { name: 'View Recap' }).nth(2).click();
  await page.goto('https://openmadurai.org/events');
});