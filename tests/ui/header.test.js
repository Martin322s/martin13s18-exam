const { test, expect } = require('@playwright/test');

test('Check header', async ({ page }) => {
    await page.goto('https://martin13s18-exam-8r31.onrender.com'); 
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  