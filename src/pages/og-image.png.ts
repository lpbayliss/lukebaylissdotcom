import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";
import type { ReactNode } from "react";
import { createElement } from "react";

const element = (type: string, style: Record<string, string | number>, children: unknown) =>
  createElement(type, { style }, children as ReactNode);

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title") || "Luke Bayliss";
  const description =
    url.searchParams.get("description") ||
    "Software engineering, systems, and things worth exploring.";
  const type = url.searchParams.get("type") || "Personal technical space";

  const image = element(
    "div",
    {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "#f6f3ec",
      color: "#1e272e",
      padding: "72px 80px",
      fontFamily: "sans-serif",
    },
    [
      element(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          fontSize: 24,
          color: "#5e6970",
        },
        [
          element("div", { fontWeight: 700, color: "#3159d9" }, "Luke Bayliss"),
          element("div", {}, type),
        ],
      ),
      element("div", { display: "flex", flexDirection: "column", gap: 24, maxWidth: "1000px" }, [
        element(
          "div",
          { fontSize: 68, fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.035em" },
          title,
        ),
        element("div", { fontSize: 30, color: "#5e6970", lineHeight: 1.4 }, description),
      ]),
      element(
        "div",
        { display: "flex", alignItems: "center", gap: 16, fontSize: 22, color: "#5e6970" },
        [
          element("div", { width: 56, height: 5, backgroundColor: "#3159d9" }, ""),
          element("div", {}, "lukebayliss.com"),
        ],
      ),
    ],
  );

  return new ImageResponse(image, { width: 1200, height: 630 });
};
