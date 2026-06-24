import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('navigation').getByRole('link', { name: 'Pride of Madurai' }).click();
  await page.getByText('PoliticsMadangowriPoliticsPopular social media figure creating satirical tech').click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.getByRole('button', { name: 'Politics' }).click();
  await page.getByText('Arts & PoliticsVijayakanthArts & PoliticsTamil actor turned politician, founder').click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.getByRole('button', { name: 'Arts & Culture' }).click();
  await page.getByText('Arts & CultureMani RatnamArts').click();
  await page.goto('https://openmadurai.org/pride-of-madurai');
  await page.getByRole('button', { name: 'Business & Education' }).click();
  await page.getByText('Business & EducationKarumuttu').click();
});