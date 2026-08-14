import { expect, test } from "@playwright/test";

const noteRoute = "/writing/making-room-for-small-ideas/";
const labRoute = "/writing/maintenance-pressure-model/";

test.describe("publishing system", () => {
  test("writing index lists every published format used by the site", async ({ page }) => {
    await page.goto("/writing/");
    await expect(
      page.getByRole("link", { name: "Making room for small ideas", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "A tiny maintenance-pressure model", exact: true }),
    ).toBeVisible();
    await expect(page.getByText("Note", { exact: true })).toBeVisible();
    await expect(page.getByText("Lab", { exact: true })).toBeVisible();
  });

  test("ordinary writing renders without a React island", async ({ page }) => {
    await page.goto(noteRoute);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Making room for small ideas");
    await expect(page.locator("astro-island")).toHaveCount(0);
  });

  test("interactive lab responds to keyboard input", async ({ page }) => {
    await page.goto(labRoute);
    await expect(
      page.getByRole("heading", { name: "Maintenance pressure", exact: true }),
    ).toBeVisible();
    await expect(page.getByRole("heading", { name: "Add lightweight structure" })).toBeVisible();

    const model = page.locator(".maintenance-model");
    await model.scrollIntoViewIfNeeded();
    await expect(page.locator("astro-island[ssr]")).toHaveCount(0);

    await page.getByLabel("Expected lifespan").press("End");
    await page.getByLabel("Regular contributors").press("End");
    await page.getByLabel("Requirement uncertainty").press("End");

    await expect(page.getByRole("heading", { name: "Design for sustained change" })).toBeVisible();
    await expect(page.getByRole("meter", { name: "Maintenance pressure score" })).toHaveAttribute(
      "value",
      "10",
    );
  });

  test("lab prose and initial model remain useful without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto(labRoute);
    await expect(page.getByText("It is not a decision engine.")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Maintenance pressure", exact: true }),
    ).toBeVisible();
    await context.close();
  });

  test("RSS contains all published writing and canonical writing links", async ({ request }) => {
    const response = await request.get("/rss.xml");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain("Making room for small ideas");
    expect(body).toContain("A tiny maintenance-pressure model");
    expect(body).toContain("/writing/making-room-for-small-ideas/");
    expect(body).toContain("/writing/maintenance-pressure-model/");
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
    ["/blog/welcome/", "/writing/making-room-for-small-ideas/"],
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
