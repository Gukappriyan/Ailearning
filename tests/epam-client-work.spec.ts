import { test, expect } from '@playwright/test';

test('navigate to Client Work from Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('link', { name: 'Services' }).nth(1).click();
  await expect(page).toHaveURL(/\/services$/);

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
  await page.waitForURL(/\/services\/client-work$/);

  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
