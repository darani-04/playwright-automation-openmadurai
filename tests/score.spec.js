import { test, expect } from '@playwright/test';
test.setTimeout(180000);

test('test', async ({ page }) => {
  await page.goto('https://openmadurai.org/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByRole('textbox', { name: '············' }).click();
  await page.getByRole('textbox', { name: 'Enter your email' }).fill('thara@gmail.com');
  await page.getByRole('textbox', { name: '············' }).click();
  await page.getByRole('textbox', { name: '············' }).fill('thara@04');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForLoadState('domcontentloaded');
  await expect(page.locator('body')).toBeVisible();
  const score = await page.locator('h2').first().textContent();
  console.log(score);
  const projects = await page.getByText('ProjectsTotal projects2').textContent();

  console.log(projects); 

  const quickTools = await page.getByText('Quick ToolsTotal quick tools2').textContent();

  console.log(quickTools); 

  const datasets = await page.getByText('DatasetsTotal datasets2').textContent();
  console.log(datasets); 

  const researchPapers = await page.getByText('Research PapersTotal research papers1').textContent();

  console.log(researchPapers); 
  await page.locator('div').filter({ hasText: /^Activity OverviewYour contributions over time$/ }).first().click();
  await page.locator('div').filter({ hasText: /^DatasetsProjectsQuick ToolsResearch Papers$/ }).click();
  await page.getByRole('application').click();
  await page.locator('.recharts-zIndex-layer_1200 > g:nth-child(4) > .recharts-dot').click();
  await page.getByRole('application').click();
  await page.getByRole('application').click();
  await page.getByRole('link', { name: 'OpenMadurai Logo OpenMadurAI' }).click();
  await page.getByRole('button', { name: 'Dashboard' }).click();
});