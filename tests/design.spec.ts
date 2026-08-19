import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/writing/",
  "/writing/parse-json-string-with-zod/",
  "/writing/typescript-discriminated-unions/",
  "/about/",
  "/definitely-not-a-real-page",
];
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
];

test.describe("redesigned shell", () => {
  for (const route of routes) {
    test(`${route} has no serious accessibility violations`, async ({ page }) => {
      await page.goto(route);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      const blocking = results.violations.filter(
        ({ impact }) => impact === "serious" || impact === "critical",
      );
      expect(blocking).toEqual([]);
    });
  }

  for (const viewport of viewports) {
    test(`core pages do not overflow at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      for (const route of routes) {
        await page.goto(route);
        const overflow = await page.evaluate(
          () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
        );
        expect(overflow, route).toBeLessThanOrEqual(1);
      }
    });
  }

  test("theme choice persists", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" });
    await page.goto("/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    await page.getByRole("button", { name: "Switch to dark theme" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  });

  test("navigation exposes the current section", async ({ page }) => {
    await page.goto("/writing/");
    await expect(
      page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", {
        name: "Writing",
        exact: true,
      }),
    ).toHaveAttribute("aria-current", "page");
  });

  test("header and footer omit Work navigation", async ({ page }) => {
    await page.goto("/");

    const header = page.locator(".site-header");
    await expect(header.getByRole("link", { name: "Work", exact: true })).toHaveCount(0);
    await expect(
      page.getByRole("navigation", { name: "Footer navigation" }).getByRole("link", {
        name: "Work",
        exact: true,
      }),
    ).toHaveCount(0);
  });

  test("theme control is icon-only and separated from contact icons", async ({ page }) => {
    await page.goto("/");

    const header = page.locator(".site-header");
    const themeToggle = header.getByRole("button", { name: "Switch to dark theme" });
    const email = header.getByRole("link", { name: "Email", exact: true });

    await expect(themeToggle).toHaveText("");
    await expect(themeToggle.locator("svg[aria-hidden='true']")).toHaveCount(2);

    const [emailBox, toggleBox] = await Promise.all([
      email.boundingBox(),
      themeToggle.boundingBox(),
    ]);
    expect(emailBox).not.toBeNull();
    expect(toggleBox).not.toBeNull();
    expect(
      (toggleBox?.x ?? 0) - ((emailBox?.x ?? 0) + (emailBox?.width ?? 0)),
    ).toBeGreaterThanOrEqual(8);
    expect(toggleBox?.width).toBeGreaterThanOrEqual(44);
    expect(toggleBox?.height).toBeGreaterThanOrEqual(44);
  });

  test("homepage presents the accepted product regions", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("build software");
    await expect(page.getByRole("heading", { name: "Current focus" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Selected writing" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Selected work" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("┌─<");
  });
});
