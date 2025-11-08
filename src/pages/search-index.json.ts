import type { APIRoute } from "astro";
import { generateSearchIndex } from "../lib/search-index";

export const GET: APIRoute = async () => {
  const searchIndex = await generateSearchIndex();

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
};
