const { test, expect } = require('@playwright/test');

test('EPAM client work link from services page', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).first().click({ force: true });
  await page.waitForURL('**/services');

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await page.waitForURL('**/services/client-work');

  await expect(page.getByRole('heading', { name: 'Client Work' })).toBeVisible();
});
