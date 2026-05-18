import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesLink = page.locator('a[href="/services"]').first();
  await servicesLink.evaluate((element) => element.scrollIntoView({ block: 'center', inline: 'center' }));
  await servicesLink.evaluate((element) => element.click());
  await page.waitForURL(/\/services(?:\/?$)/);

  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click({ force: true });
  await page.waitForURL(/\/services\/client-work(?:\/?$)/);

  await expect(page.locator('main').getByText('Client Work', { exact: true }).first()).toBeVisible();
});
