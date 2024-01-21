import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("/");
  await page.getByPlaceholder("Назва").click();
  await page.getByPlaceholder("Назва").fill("Test name");
  await page.getByPlaceholder("Опис").click();
  await page.getByPlaceholder("Опис").fill("Text deckription");
  await page.getByRole("button", { name: "Добавити" }).click();
  await expect(page.getByText("Test nameText deckription")).toBeVisible();
  await page
    .locator("div")
    .filter({ hasText: /^Test nameText deckriptionВидалити$/ })
    .getByRole("button")
    .click();
  await expect(page.getByText("Test nameText deckription")).not.toBeVisible();
});
