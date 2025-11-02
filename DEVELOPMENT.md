# Development Plan

This document captures the architecture, tooling decisions, delivery workflow, and hosting strategy for the new lukebaylissdotcom personal site. Treat it as the source of truth for implementation and future maintenance.

## Product Vision

- Provide a single canonical URL with an at-a-glance profile, resume-quality experience, and links to deeper content.
- Emphasise readable, text-first presentation with minimal flourishes; evoke a subtle terminal aesthetic using ASCII accents where appropriate.
- Keep the surface area small enough to manage solo, while remaining easy to evolve with new writing, projects, or sections.

## Guiding Principles

- **Static-first**: Prefer build-time generation for content. Avoid servers or runtime databases.
- **Accessible & performant by default**: Score highly on Lighthouse accessibility and performance without manual intervention.
- **Content-friendly**: Make adding new posts or project entries frictionless, ideally by committing Markdown/MDX files.
- **Simple tooling**: Lean on well-supported tools (Astro, React, Tailwind, Biome) and automate lint/format/build in CI.

## Technical Stack

| Concern            | Choice / Notes                                                                                  |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| Framework          | Astro 5 (latest) with SSG output. Astro handles routing/content, React for interactive islands. |
| Components         | React 18 via `@astrojs/react`. Use sparingly for interactive subsections.                       |
| Styling            | Tailwind CSS v4 (latest release or canary). Utility-first approach; custom CSS kept minimal.    |
| Formatting/Linting | Biome (formatter + linter for TS/JS/JSON). Use built-in HTML/Markdown formatting when stable.   |
| Package manager    | pnpm (already configured).                                                                      |
| Content            | MDX via Astro Content Collections (`src/content`).                                              |
| Icons/Art          | ASCII/monospace motifs; no external icon libraries unless justified.                            |
| Deployment         | Static build served from a minimal Node 20 container on Fly.io.                                 |

## Architecture Overview

### Project Layout

```
astro.config.mjs
tailwind.config.ts
biome.json
src/
  content/
    blog/
    projects/
    snippets/        # optional short-form content
  env.d.ts
  layouts/
    BaseLayout.astro
    PostLayout.astro
    ProjectLayout.astro
  pages/
    index.astro
    blog.astro
    blog/[slug].astro
    projects.astro
    projects/[slug].astro
    about.astro
    contact.astro
  components/
    Navigation.astro
    Footer.astro
    Hero.astro
    TimelineItem.astro
    TerminalPanel.astro   # reusable ASCII/terminal-styled wrapper
    React/
      ThemeToggle.tsx     # example interactive widget
  styles/
    globals.css           # Tailwind base + custom tokens if required
    prose.css             # Optional typography adjustments
```

> Note: `backend/` remains empty unless future server-side features emerge. All work currently happens at the repository root.

### Routing Strategy

- Astro file-based routing for top-level pages.
- Dynamic routes (`[slug].astro`) render content collection entries.
- Deliver `rss.xml.ts` for generating RSS feeds from blog content.
- Ensure sitemap is generated and published alongside hosted site.

### Content Collections

- Use Astro Content Collections (`defineCollection`) for blog and projects.
- Define unified frontmatter schema (e.g., title, description, publishedAt, tags, heroImage optional).
- Use MDX for rich content; rely on `rehype-pretty-code` for syntax highlighting.
- Store assets alongside content (`/public/images/...`) and reference via relative URLs.
- Include an `author` object to support future multi-author expansion.

### Layouts & Components

- `BaseLayout` handles `<html>`, meta tags, global navigation, and terminal-inspired frame.
- Dedicated layouts for blog/project entries handle table of contents, metadata, next/previous links.
- Navigation emphasises keyboard accessibility; maintain skip link.
- Create minimal React islands only where progressive enhancement is warranted (e.g., theme toggle, copy-to-clipboard buttons).

## Styling Approach

- Tailwind v4 (or latest experimental build). Plan to initialise with `npx tailwindcss init --ts` once the project is scaffolded.
- Configure `tailwind.config.ts` with custom colour palette (monochrome/terminal greens).
- Enable `@tailwind base/components/utilities` via `src/styles/globals.css`.
- Use Tailwind’s upcoming `@theme` features if available; otherwise fall back to design tokens in CSS variables.
- For prose, use the Tailwind Typography plugin (if v4 supports). Otherwise, define custom `prose` classes.
- ASCII embellishments implemented via pseudo-elements or inline text (e.g., `[ links ]`, `┌─┤ Section ├─┐`).

## Accessibility, SEO, and Performance

- Ensure semantic structure: `<header>`, `<main>`, `<aside>`, `<footer>`.
- Provide descriptive `<meta>` tags and Open Graph/Twitter cards using Astro’s `<Meta>` helpers.
- Use accessible colour contrast (check with Tailwind config).
- Provide fallback fonts (`'JetBrains Mono'`, `'Fira Code'`, `'Menlo'`, monospace stack).
- Prefetch hero content with Astro’s `<Image>` for optimized images.
- Include JSON-LD for person schema and project listings.
- Add sitemap generation via `@astrojs/sitemap`.

## Tooling & Automation

- **Biome**: Add `biome.json` with formatting rules for TypeScript, Astro (when available), JSON. Configure scripts:
  - `pnpm format` → `pnpm biome format .`
  - `pnpm lint` → `pnpm biome lint .`
- **TypeScript**: `tsconfig.json` tailored for Astro + React; enable strict mode.
- **Pre-commit** (optional future): use lint-staged style hook with Biome.
- **Scripts**:
  - `pnpm dev` → `astro dev`
  - `pnpm build` → `astro build`
  - `pnpm preview` → `astro preview`
  - `pnpm check` → runs `pnpm lint` and `pnpm format --check`.

## Development Workflow

1. **Bootstrap**
   - Initialise Astro via `pnpm create astro@latest` from the repository root.
   - Install dependencies: `@astrojs/react`, `@astrojs/mdx`, `@astrojs/tailwind` (if compatible with Tailwind v4), `rehype-pretty-code`, `tailwindcss@next`, `autoprefixer`, `postcss`, `biome`.
   - Configure `tsconfig.json`, `astro.config.mjs`, `tailwind.config.ts`.
2. **Global frame**
   - Implement base layout, navigation, footer, theme support.
   - Add global styles and Tailwind utilities.
3. **Content collections**
   - Define schemas and example entries for blog and projects.
   - Build list pages (`/blog`, `/projects`) and dynamic detail routes.
4. **About & contact**
   - Craft copy-driven pages using ASCII styling.
   - Add CV/resume blocks (experience timeline, skills matrix).
5. **Enhancements**
   - Add RSS feed, sitemap, Open Graph images, social links.
   - Polish typographic rhythm and spacing.
6. **QA**
   - Run Lighthouse locally, manual accessibility review, cross-browser checks.
   - Validate build artefacts for Fly deployment.

## Deployment & Hosting

- **Static Build**: `astro build` outputs to `dist/`.
- **Containerisation**:
  - Use multi-stage Dockerfile:
    1. `node:20-slim` builder → install pnpm, dependencies, run `pnpm build`.
    2. Distroless or minimal `node:20-slim` runner → copy `dist/`, serve with `pnpm astro preview --host 0.0.0.0 --port 8080` or `npx @astrojs/preview`.
  - Expose port 8080 (Fly defaults). Configure Fly service to route HTTP to `8080`.
- **Fly.io**:
  - Confirm `fly.toml` points at the repository root during deployment.
  - `fly deploy` performs build via Dockerfile.
  - Use Fly secrets for analytics tokens or contact form endpoints if introduced.
- **CI/CD Pipeline** (GitHub Actions recommended):
  - Workflow triggered on PR + main pushes.
  - Steps: checkout → setup pnpm → install → `pnpm lint` → `pnpm build`.
  - Optionally push Docker image to Fly on main merges.
- Integrate Lighthouse CI for production URL smoke tests post-deployment.
- **Analytics (Umami)**:
  - Deploy Umami as a sibling Fly app (Docker image) backed by Fly Postgres Lite or another managed Postgres instance.
  - Store `DATABASE_URL` and `HASH_SALT` via `fly secrets`. Configure optional SMTP credentials if email reports are desired.
  - Create a site entry in Umami, then add the provided tracking script to `src/layouts/BaseLayout.astro` with `async defer`.
  - Respect DNT or consent preferences when toggling analytics in the layout logic.

## Production Readiness Considerations

- **Reliability & Observability**: Rely on Fly’s metrics dashboard for CPU/MEM/response stats and enable Fly log streaming for quick debugging. Set up a free external uptime check (e.g., Cronitor Ping or Better Uptime’s free tier) so you get notified if the container drops.
- **Release Hygiene (Solo-Friendly)**: Keep a lightweight branch workflow—feature branches for sizeable changes, then fast-forward merge onto `main`. Capture deployment notes in PR descriptions or Git tags. Use conventional commits only if they help you stay organised.
- **Security & Compliance**: Enforce HTTPS with automatic Fly certificates, add HSTS and basic security headers via Astro middleware or Fly `[[services.http_checks]]` configuration, and watch dependency advisories using `pnpm audit`. If analytics/contact forms capture personal data, add a simple privacy blurb and outline data usage.
- **Secrets & Configuration**: Store all API keys (analytics, email forms) in Fly secrets; mirror required keys in `.env.example`. Limit the number of secrets; prefer static content over third-party integrations when possible.
- **Performance Budgets**: Target Lighthouse scores > 90 across the board, keep LCP < 2.5s on mobile, CLS < 0.1, TBT < 200ms. Use Astro Image, Tailwind tree-shaking, and serve Brotli or gzip-compressed assets via Fly.
- **Accessibility QA**: Aim for WCAG 2.1 AA. Run automated checks (`pnpm astro check`, axe browser extension) and do a quick keyboard-only pass before pushing major changes.
- **Content Governance**: Maintain a simple content checklist (frontmatter fields, required assets) in `content/README.md`. Back up the repo regularly (e.g., GitHub + local clone) to avoid losing published posts.
- **Brand & Visual Consistency**: Document the core palette, typographic scale, and ASCII motifs in Tailwind config comments so future additions stay on brand.
- **Error & Edge Cases**: Ship custom 404 and maintenance pages with navigation back to home. Handle deprecated URLs with Astro redirects if slugs change.
- **Analytics & Feedback Loops**: Use a privacy-friendly analytics stack. Recommended: self-hosted Umami (MIT-licensed, runs on Postgres) deployed either on Fly or another platform; alternatively GoatCounter offers a generous free tier. Integrate consent or opt-out messaging if you record identifiable data.
- **Legal & Policy**: Offer a concise privacy statement and an imprint/contact summary to cover global visitors. Note licence terms for code snippets or downloadable resume PDFs.
- **Infrastructure Governance**: Document deployment/rollback steps in `fly-deploy.md` (run `fly deploy`, check `fly status`, roll back with `fly releases`). Schedule occasional image vulnerability scans with a local tool like Trivy before pushing major updates.

## Content Operations

- Store author/profile data in `src/content/config.ts`.
- Maintain `src/content/projects/_meta.json` for ordering or featured flag.
- Encourage writing in Markdown/MDX; include frontmatter template with prompts.
- Provide `content/README.md` later describing how to add entries.
- Plan for contact options:
  - Primary: mailto link with obfuscation.
  - Secondary: links to LinkedIn/GitHub.
  - Optional: integrate form service (e.g., Formspree) with progressive enhancement.

## Future Enhancements (Backlog)

- Dark/light mode toggle with local storage.
- Micro-interactions (e.g., copy email button, keyboard navigation hints).
- Search across blog/projects (static index generated at build time).
- Embed analytics (Plausible or Umami) respecting privacy.
- Schedule blog publishing automation via GitHub Actions.

## Next Steps Checklist

- [ ] Scaffold Astro project at the repository root with chosen integrations.
- [ ] Add Tailwind v4 configuration and terminal-inspired design tokens.
- [ ] Configure Biome (+ scripts) and ensure formatting passes.
- [ ] Implement global layout and navigation shell.
- [ ] Build content collections and example content.
- [ ] Set up Fly.io deployment pipeline (Dockerfile + GitHub Action).
- [ ] Document contribution/testing flows in `README.md` or `CONTRIBUTING.md`.
- [ ] Deploy Umami + Postgres on Fly and wire the tracking script into the base layout.

Keep this document updated as the implementation evolves; append changelog entries when major architectural or process decisions change.
