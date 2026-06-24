import { test, expect } from '@playwright/test';
test.setTimeout(120000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('navigation').getByRole('link', { name: 'Events' }).click();
  await page.waitForLoadState('load');
  await page.waitForTimeout(5000);
  await page.getByRole('button', { name: 'View Detail' }).first().waitFor();
  await page.getByRole('button', { name: 'View Detail' }).first().click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('load');
  await page.waitForTimeout(10000);
  await page.getByText('Join GDG Cloud Madurai for an').click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('load');
  await page.waitForTimeout(10000);
  await page.getByText('Join Google Developer Groups Madurai for an exciting AI-powered vibeathon where').click();
  await page.goto('https://openmadurai.org/events');
  await page.waitForLoadState('load');
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'View Recap' }).nth(2).click();
  await page.goto('https://openmadurai.org/events');
});