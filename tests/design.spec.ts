import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/writing/", "/work/", "/about/"];
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

  test("homepage presents the accepted product regions", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("build software");
    await expect(page.getByRole("heading", { name: "Current focus" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Selected writing" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Selected work" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("┌─<");
  });
});
