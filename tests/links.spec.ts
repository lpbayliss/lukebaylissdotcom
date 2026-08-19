import { expect, test } from "@playwright/test";

const entryRoutes = [
  "/",
  "/about/",
  "/writing/",
  "/writing/parse-json-string-with-zod/",
  "/writing/typescript-discriminated-unions/",
];

const normalizeInternalUrl = (href: string, baseURL: string) => {
  const url = new URL(href, baseURL);
  if (url.origin !== new URL(baseURL).origin) return null;
  if (!["http:", "https:"].includes(url.protocol)) return null;
  url.hash = "";
  return url.toString();
};

test("internal links resolve", async ({ page, request, baseURL }) => {
  expect(baseURL).toBeTruthy();
  const targets = new Set<string>();

  for (const route of entryRoutes) {
    await page.goto(route);
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href"))
          .filter((href): href is string => Boolean(href)),
      );

    for (const href of hrefs) {
      const target = normalizeInternalUrl(href, baseURL as string);
      if (target) targets.add(target);
    }
  }

  for (const target of targets) {
    const response = await request.get(target, { maxRedirects: 5 });
    expect(response.status(), target).toBeLessThan(400);
  }
});
