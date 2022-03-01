import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test.describe('App', () => {

  test('Logo is visible', async ({ page }) => {
    const logo = page.locator('img[alt=logo]');
    await expect(logo).toBeVisible();
  });

  test('Link should be valid', async ({ page }) => {
    const link = page.locator('a', { hasText: 'Learn React' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://reactjs.org');
  });
});