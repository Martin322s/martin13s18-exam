const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://martin13s18-exam-8r31.onrender.com/Add-Product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  