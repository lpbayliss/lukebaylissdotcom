import { expect, test } from "@playwright/test";

const noteRoute = "/writing/parse-json-string-with-zod/";

const restoredWriting = [
  ["Discriminated Unions in TypeScript", "/writing/typescript-discriminated-unions/"],
  ["Using Zod to Parse a JSON String", noteRoute],
] as const;

const removedWritingTitles = [
  "My Tips for Starting at a New Job",
  "How and Why I Used Emotion with Tailwind",
];

test.describe("publishing system", () => {
  test("writing index lists restored first-hand posts instead of redesign placeholders", async ({
    page,
  }) => {
    await page.goto("/writing/");

    for (const [title] of restoredWriting) {
      await expect(page.getByRole("link", { name: title, exact: true })).toBeVisible();
    }

    for (const title of removedWritingTitles) {
      await expect(page.getByRole("link", { name: title, exact: true })).toHaveCount(0);
    }

    await expect(page.locator("body")).not.toContainText("Making room for small ideas");
    await expect(page.locator("body")).not.toContainText("A tiny maintenance-pressure model");
  });

  test("ordinary writing renders without a React island", async ({ page }) => {
    await page.goto(noteRoute);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Using Zod to Parse a JSON String",
    );
    await expect(page.locator("astro-island")).toHaveCount(0);
  });

  test("RSS reflects the published writing collection", async ({ page, request }) => {
    await page.goto("/writing/");
    const publishedWriting = await page
      .locator('[aria-label="Published writing"] h2 a')
      .evaluateAll((links) =>
        links.map((link) => ({
          title: link.textContent?.trim() ?? "",
          route: link.getAttribute("href") ?? "",
        })),
      );

    const response = await request.get("/rss.xml");
    expect(response.status()).toBe(200);
    const body = await response.text();

    for (const { title, route } of publishedWriting) {
      expect(body).toContain(title);
      expect(body).toContain(route);
    }

    for (const title of removedWritingTitles) {
      expect(body).not.toContain(title);
    }

    expect(body).not.toContain("Making room for small ideas");
    expect(body).not.toContain("A tiny maintenance-pressure model");
  });

  test("article metadata is canonical and complete", async ({ page }) => {
    await page.goto(noteRoute);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://lukebayliss.com${noteRoute}`,
    );
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
    await expect(page.locator('meta[property="article:published_time"]')).toHaveCount(1);
    const jsonLd = await page
      .locator('script[type="application/ld+json"]')
      .evaluate((element) => JSON.parse(element.textContent || "{}"));
    expect(jsonLd.name).toBe("Luke Bayliss");
  });
});

test.describe("work and compatibility routes", () => {
  test("work index presents only real curated entries", async ({ page }) => {
    await page.goto("/work/");
    await expect(page.getByRole("link", { name: "Aeonmarked", exact: true })).toBeVisible();
    await expect(page.getByRole("link", { name: "lukebayliss.com", exact: true })).toBeVisible();
    await expect(page.locator("body")).not.toContainText("Somewhere Tech");
  });

  test("work actions render only when the artefact exists", async ({ page }) => {
    await page.goto("/work/aeonmarked/");
    await expect(page.getByRole("link", { name: "View source" })).toHaveCount(0);
    await page.goto("/work/personal-site/");
    await expect(page.getByRole("link", { name: "View source" })).toHaveAttribute(
      "href",
      "https://github.com/lpbayliss/lukebaylissdotcom",
    );
  });

  for (const [route, target] of [
    ["/blog/", "/writing/"],
    ["/blog/welcome/", "/writing/"],
    ["/snippets/terminal-tricks/", "/writing/"],
    ["/projects/", "/work/"],
    ["/projects/personal-site/", "/work/personal-site/"],
    ["/contact/", "/about/#contact"],
  ]) {
    test(`${route} redirects permanently`, async ({ request }) => {
      const response = await request.get(route, { maxRedirects: 0 });
      expect(response.status()).toBe(301);
      expect(response.headers().location).toBe(target);
    });
  }

  test("unknown routes render the designed 404 page", async ({ page }) => {
    const response = await page.goto("/definitely-not-a-real-page");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "That page isn’t here." })).toBeVisible();
  });
});
