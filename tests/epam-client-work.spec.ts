import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesLink = page.getByRole('link', { name: 'Services' }).first();
  await servicesLink.scrollIntoViewIfNeeded();
  await servicesLink.click({ force: true });
  await page.waitForURL(/\/services(?:\/?$)/);

  const clientWorkLink = page.getByRole('link', { name: 'Explore Our Client Work' });
  await expect(clientWorkLink).toBeVisible();
  await clientWorkLink.click();
  await page.waitForURL(/\/services\/client-work(?:\/?$)/);

  await expect(page.getByText('Client Work', { exact: true })).toBeVisible();
});
