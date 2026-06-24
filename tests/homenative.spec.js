import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Native Alumni' }).click();
  await page.getByRole('button', { name: 'Explore Alumni' }).click();
  await page.getByRole('button', { name: '–2 years' }).click();
  await page.getByRole('button', { name: 'All Industries ▾' }).click();
  await page.getByText('Information Technology').click();
  await page.getByRole('button', { name: 'View Profile' }).click();
  await page.getByRole('button', { name: 'Follow' }).click();
  await page.goto('https://openmadurai.org/alumni-connect');
  await page.getByRole('button', { name: 'Register as Alumni' }).click();
});