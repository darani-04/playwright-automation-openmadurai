import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.waitForLoadState('load');
  const communityLink = page.getByRole('navigation').getByRole('link', { name: 'Community' });
  await expect(communityLink).toBeVisible();
  await communityLink.click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'View Details' }).first().click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Load More' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/community');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Colleges' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: 'View Details' }).nth(1).click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/community');
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'Communities' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('https://openmadurai.org/community');
  await page.waitForLoadState('domcontentloaded');;
  await page.getByRole('button', { name: 'Organizations' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.getByRole('button', { name: 'View Details' }).nth(1).click();
});