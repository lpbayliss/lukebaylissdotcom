export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://lukebayliss.com/sitemap.xml",
    host: "https://lukebayliss.com",
  };
}
