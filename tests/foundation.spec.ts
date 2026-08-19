import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/about/",
  "/writing/",
  "/writing/parse-json-string-with-zod/",
  "/writing/typescript-discriminated-unions/",
  "/work/",
  "/blog/",
  "/projects/",
  "/snippets/",
  "/contact/",
];

test.describe("site foundation", () => {
  for (const route of routes) {
    test(`${route} renders without browser errors`, async ({ page }) => {
      const errors: string[] = [];
      page.on("console", (message) => {
        if (message.type() === "error") errors.push(message.text());
      });
      page.on("pageerror", (error) => errors.push(error.message));

      const response = await page.goto(route);

      expect(response?.status()).toBeLessThan(400);
      await expect(page.locator("main")).toBeVisible();
      expect(errors).toEqual([]);
    });
  }

  test("skip link targets main content", async ({ page }) => {
    await page.goto("/");
    const skipLink = page.getByRole("link", { name: "Skip to content" });
    await skipLink.focus();
    await expect(skipLink).toBeFocused();
    await expect(skipLink).toHaveAttribute("href", "#main-content");
    await expect(page.locator("#main-content")).toHaveCount(1);
  });
});
