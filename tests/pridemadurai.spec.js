import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.waitForLoadState('domcontentloaded');
 await expect(page.locator('body')).toBeVisible()
  const prideLink = page.getByRole('navigation').getByRole('link', { name: 'Pride of Madurai' });
  await expect(prideLink).toBeVisible();
  await prideLink.click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.waitForLoadState('domcontentloaded');
 await expect(page.locator('body')).toBeVisible()
  const politicsBtn = page.getByRole('button', { name: 'Politics' });
  await expect(politicsBtn).toBeVisible();
  await politicsBtn.click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.waitForLoadState('domcontentloaded');
 await expect(page.locator('body')).toBeVisible()
  const artsCultureBtn = page.getByRole('button', { name: 'Arts & Culture' });
  await expect(artsCultureBtn).toBeVisible();
  await artsCultureBtn.click();
  await page.getByText('Arts & CultureMani RatnamArts').click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.waitForLoadState('domcontentloaded');
 await expect(page.locator('body')).toBeVisible()
  const businessEducationBtn = page.getByRole('button', { name: 'Business & Education' });
  await expect(businessEducationBtn).toBeVisible();
  await businessEducationBtn.click();
  await page.getByText('Business & EducationKarumuttu').click();
});