import { test, expect } from '@playwright/test';
test.setTimeout(120000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('link', { name: 'Leaderboard' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Profile' }).first().click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Follow' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/leaderboard');
  await page.waitForLoadState('domcontentloaded');
  await page.locator('div:nth-child(10) > div:nth-child(5) > .text-\\[11px\\]').click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/leaderboard');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: '2' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.locator('div:nth-child(9) > div:nth-child(5) > .text-\\[11px\\]').click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/leaderboard');
});