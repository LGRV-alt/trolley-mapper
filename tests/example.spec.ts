import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("Trolley Mapper Title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Trolley Mapper/);
});

test("test", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByPlaceholder("Landscapers").click();
  await page.getByPlaceholder("Landscapers").fill("Lewis");
  await page.getByPlaceholder("4T").click();
  await page.getByPlaceholder("4T").fill("2");
  await page.getByPlaceholder("Comp").click();
  await page.getByPlaceholder("Comp").fill("1 Pallet");
  await page.getByRole("button", { name: "create" }).click();
  await page.getByRole("button", { name: "Add Customer" }).click();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
