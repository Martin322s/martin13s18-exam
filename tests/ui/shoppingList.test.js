const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://martin13s18-exam-8r31.onrender.com/Shopping-List');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  