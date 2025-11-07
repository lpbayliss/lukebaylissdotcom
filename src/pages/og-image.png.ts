import { ImageResponse } from "@vercel/og";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ url }) => {
  const title = url.searchParams.get("title") || "Luke Bayliss";
  const description =
    url.searchParams.get("description") || "Engineer and builder focused on dependable software";
  const type = url.searchParams.get("type") || "website";

  // Create the OG image with terminal aesthetic
  return new ImageResponse(
    {
      type: "div",
      props: {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#030712",
          padding: "60px 80px",
          fontFamily: "monospace",
        },
        children: [
          // Top border decoration
          {
            type: "div",
            props: {
              style: {
                fontSize: 24,
                color: "#34D399",
                marginBottom: 40,
              },
              children: "┌─< lukebayliss.com >─┐",
            },
          },
          // Content
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                flex: 1,
              },
              children: [
                // Type badge
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 28,
                      color: "#9CA3AF",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    },
                    children: `[${type}]`,
                  },
                },
                // Title
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 64,
                      fontWeight: "bold",
                      color: "#E5E7EB",
                      lineHeight: 1.2,
                      maxWidth: "90%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    },
                    children: title,
                  },
                },
                // Description
                {
                  type: "div",
                  props: {
                    style: {
                      fontSize: 32,
                      color: "#9CA3AF",
                      lineHeight: 1.4,
                      maxWidth: "90%",
                    },
                    children: description,
                  },
                },
              ],
            },
          },
          // Bottom decoration
          {
            type: "div",
            props: {
              style: {
                fontSize: 24,
                color: "#10B981",
                marginTop: 40,
              },
              children: "└─────────────────────┘",
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
    },
  );
};
