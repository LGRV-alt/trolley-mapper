import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:5173/");
});

const customerValues = [
  { name: "lewis", trollies: "3", other: "2 cages" },
  { name: "john", trollies: "2", other: "5 pallets" },
  { name: "jane", trollies: "5", other: "" },
  { name: "phil", trollies: "2", other: "Lots of loose" },
];

test.describe("Testing array", () => {
  test("Testing multiple entries coming from an array", async ({ page }) => {
    await page.getByRole("button", { name: "Add Customer" }).click();
    for (const customer of customerValues) {
      await page.getByPlaceholder("Landscapers").fill(customer.name);
      await page.getByPlaceholder("4T").fill(customer.trollies);
      await page.getByPlaceholder("Comp").fill(customer.other);
      await page.getByRole("button", { name: "create" }).click();
    }
    await page.getByRole("button", { name: "Add Customer" }).click();
    await page
      .getByRole("button", { name: "X 3 - Jane 5T" })
      .getByRole("button")
      .click();
    await expect(page.locator("#content")).toContainText("Total Trolleys- 7");
  });

  test("Trolley Mapper Title", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Trolley Mapper/);
  });
});

test("Input trolley number and check its shown on the total", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByPlaceholder("Landscapers").click();
  await page.getByPlaceholder("Landscapers").fill("Test");
  await page.getByPlaceholder("4T").click();
  await page.getByPlaceholder("4T").fill("2");
  await page.getByPlaceholder("Comp").click();
  await page.getByPlaceholder("Comp").fill("2 Pallets");
  await page.getByRole("button", { name: "create" }).click();
  await expect(page.locator("#content")).toContainText("2T");
  await expect(page.locator("#content")).toContainText("Total Trolleys- 2");
});

test("Check customer name gets added to the map section, check for empty box", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByPlaceholder("Landscapers").click();
  await page.getByPlaceholder("Landscapers").fill("John Doe");
  await page.getByPlaceholder("4T").click();
  await page.getByPlaceholder("4T").fill("2");
  await page.getByRole("button", { name: "create" }).click();
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByRole("button", { name: "8T" }).click();
  await page.getByRole("button", { name: "X 1 - John Doe 2T" }).click();
  await page.locator(".border-\\[1\\.5px\\] > .flex").first().click();
  await page.locator(".border-\\[3px\\] > div:nth-child(2) > .flex").click();
  await page.locator("div:nth-child(3) > .flex").click();
  await page.locator("div:nth-child(4) > .flex").click();
  await page.getByText("Trolley Mapper Add").click();
  await expect(page.locator("div:nth-child(4) > .flex")).toContainText(
    "John Doe"
  );
  // await expect(page.locator("#content")).toContainText("John Doe");
  await expect(page.locator("div:nth-child(5) > .flex")).toBeVisible();
});

test("Check the trailer section shows and will allow customer name to be placed in item", async ({
  page,
}) => {
  await page.goto("http://localhost:5173/");
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByPlaceholder("Landscapers").click();
  await page.getByPlaceholder("Landscapers").fill("John Doe");
  await page.getByPlaceholder("4T").click();
  await page.getByPlaceholder("4T").fill("2");
  await page.getByRole("button", { name: "create" }).click();
  await page.getByRole("button", { name: "Add Customer" }).click();
  await page.getByRole("button", { name: "Trailer" }).click();
  await page.getByRole("button", { name: "3T" }).click();
  await page.getByRole("button", { name: "X 1 - John Doe 2T" }).click();
  await page.locator(".border-black > .flex").first().click();
  await expect(page.locator("#trailerMap")).toContainText("John Doe");
});
