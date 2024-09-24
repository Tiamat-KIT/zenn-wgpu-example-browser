import { test } from "@playwright/test";

test("normal triangle", async ({ page }) => {
  // Qiitaのページに移動
  await page.goto("http://localhost:5173/normal");
  
  // 画面に映ってる範囲をスクショ
  await page.screenshot({ path: "./normal.png" });
  
  // fullサイズで画面をスクショ
  await page.screenshot({
    path: "./screenshot/fullPage_normal.png",
    fullPage: true,
  });
});


test("color triangle", async ({ page }) => {
  // Qiitaのページに移動
  await page.goto("http://localhost:5173/colorful");
  
  // 画面に映ってる範囲をスクショ
  await page.screenshot({ path: "./colorful.png" });
  
  // fullサイズで画面をスクショ
  await page.screenshot({
    path: "./screenshot/fullPage_colorful.png",
    fullPage: true,
  });
});
