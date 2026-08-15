import { expect, test } from "@playwright/test";

const externalLinkRoutes = ["/", "/about/", "/work/personal-site/"];

test.describe("compact homepage refinement", () => {
  test("homepage keeps featured content intentionally brief", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#selected-writing article")).toHaveCount(2);
    await expect(page.locator("#selected-work article")).toHaveCount(2);
    await expect(page.getByRole("heading", { name: "Current focus" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();
  });

  for (const viewport of [
    { name: "mobile", width: 390, height: 844, maxPageHeight: 2_700, maxHeroHeight: 760 },
    { name: "desktop", width: 1_440, height: 900, maxPageHeight: 2_400, maxHeroHeight: 680 },
  ]) {
    test(`homepage avoids excessive empty space at ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.goto("/");

      const dimensions = await page.evaluate(() => ({
        pageHeight: document.documentElement.scrollHeight,
        heroHeight:
          document.querySelector<HTMLElement>(".hero")?.getBoundingClientRect().height ?? 0,
      }));

      expect(dimensions.pageHeight).toBeLessThanOrEqual(viewport.maxPageHeight);
      expect(dimensions.heroHeight).toBeLessThanOrEqual(viewport.maxHeroHeight);
    });
  }

  test("small interface text remains readable", async ({ page }) => {
    await page.goto("/");

    const fontSizes = await page.evaluate(() => {
      const px = (selector: string) => {
        const element = document.querySelector<HTMLElement>(selector);
        if (!element) throw new Error(`Missing ${selector}`);
        return Number.parseFloat(getComputedStyle(element).fontSize);
      };

      return {
        navigation: px(".site-nav__link"),
        eyebrow: px(".eyebrow"),
        featureMetadata: px(".writing-feature__meta"),
        footerLink: px(".site-footer__links a"),
      };
    });

    expect(fontSizes.navigation).toBeGreaterThanOrEqual(14);
    expect(fontSizes.eyebrow).toBeGreaterThanOrEqual(13);
    expect(fontSizes.featureMetadata).toBeGreaterThanOrEqual(13);
    expect(fontSizes.footerLink).toBeGreaterThanOrEqual(14);
  });

  for (const surface of [
    {
      route: "/writing/",
      selectors: [".writing-row__meta", ".writing-row ul"],
    },
    {
      route: "/writing/making-room-for-small-ideas/",
      selectors: [".writing-header__meta", ".topic-list li"],
    },
    {
      route: "/work/",
      selectors: [".work-entry__meta", ".work-entry li"],
    },
    {
      route: "/work/personal-site/",
      selectors: [".work-header__meta > span", ".work-facts dt"],
    },
  ]) {
    test(`${surface.route} keeps metadata at a readable size`, async ({ page }) => {
      await page.goto(surface.route);

      for (const selector of surface.selectors) {
        const size = await page
          .locator(selector)
          .first()
          .evaluate((element) => Number.parseFloat(getComputedStyle(element).fontSize));
        expect(size, selector).toBeGreaterThanOrEqual(12);
      }
    });
  }

  test("applicable contact links use decorative icons with accessible link names", async ({
    page,
  }) => {
    await page.goto("/");

    const contact = page.locator("#contact");
    for (const name of ["Email", "GitHub", "LinkedIn"]) {
      const link = contact.getByRole("link", { name, exact: true });
      await expect(link).toBeVisible();
      await expect(link.locator("svg[aria-hidden='true']")).toHaveCount(1);
    }
  });
});

test("external web links open safely in a new tab", async ({ page }) => {
  for (const route of externalLinkRoutes) {
    await page.goto(route);
    const links = page.locator("a[href^='http://'], a[href^='https://']");

    for (let index = 0; index < (await links.count()); index += 1) {
      const link = links.nth(index);
      const href = await link.getAttribute("href");
      if (!href || new URL(href).hostname === "lukebayliss.com") continue;

      await expect(link, `${route}: ${href}`).toHaveAttribute("target", "_blank");
      const rel = (await link.getAttribute("rel"))?.split(/\s+/) ?? [];
      expect(rel, `${route}: ${href}`).toEqual(expect.arrayContaining(["noopener", "noreferrer"]));
    }
  }
});
