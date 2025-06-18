import { test, expect } from "@playwright/test";

test.describe("Home Page (Unauthenticated)", () => {
  test("shows sign-in/up options and no fetch button", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Sign In")).toBeVisible();
    await expect(page.getByText("Sign Up")).toBeVisible();
    await expect(page.getByText("Fetch API Message")).toHaveCount(0);
    await expect(page.getByText("API Response:")).toHaveCount(0);
  });
});
