import { test, expect } from '@playwright/test';
 test.setTimeout(120000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('link', { name: 'Blogs' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Read Article').click();
  await page.goto('https://openmadurai.org/blogs');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Jun' }).click();
  await page.getByRole('button', { name: 'May' }).click();
  await page.waitForLoadState('domcontentloaded');
 await page.getByText('Read Article').click();
  await page.goto('https://openmadurai.org/blogs');
  await page.getByRole('button', { name: 'Apr' }).click();
  await page.getByRole('button', { name: 'Mar' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Read Article').click();
  await page.waitForLoadState('networkidle');
  await page.goto('https://openmadurai.org/blogs');
  await page.getByRole('button', { name: 'Feb' }).click();
  await page.getByRole('button', { name: 'Jan' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByText('Read Article').click();
  await page.goto('https://openmadurai.org/blogs');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible()
  await page.getByRole('button', { name: 'Dec' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'Leaderboard' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: '3' }).click();
});