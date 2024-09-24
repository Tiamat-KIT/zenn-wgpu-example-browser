import { test } from "@playwright/test";

test("normal test", async ({ page }) => {
  // Qiitaのページに移動
  await page.goto("http://localhost:5173/normal");
  
});


test("normal test", async ({ page }) => {
  // Qiitaのページに移動
  await page.goto("http://localhost:5173/colorful");
  
});