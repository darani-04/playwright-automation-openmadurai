import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
await page.goto('https://openmadurai.org/');
await page.getByRole('link', { name: 'Home' }).click();

const alumni = page.getByRole('link', { name: 'Native Alumni' });
await expect(alumni).toBeVisible();
await alumni.click();

const explore = page.getByRole('button', { name: 'Explore Alumni' });
await expect(explore).toBeVisible();
await explore.click();

const filter = page.getByRole('button', { name: '–2 years' });
await expect(filter).toBeVisible();
await filter.click();

const industry = page.getByRole('button', { name: 'All Industries ▾' });
await expect(industry).toBeVisible();
await industry.click();

const it = page.getByText('Information Technology');
await expect(it).toBeVisible();
await it.click();

await page.getByRole('button', { name: 'View Profile' }).first().click();

const follow = page.getByRole('button', { name: 'Follow' });
await expect(follow).toBeVisible();
await follow.click();
await page.goto('https://openmadurai.org/alumni-connect');
const registerBtn = page.getByRole('button', { name: 'Register as Alumni' });
await expect(registerBtn).toBeVisible();
await registerBtn.click();
});