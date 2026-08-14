# lukebayliss.com

Luke Bayliss' personal technical space: writing, interactive labs, curated work, and contact context.

Built with Astro 7, MDX, selectively hydrated React 19 islands, Tailwind CSS 4, and TypeScript.

## Start

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Local site: <http://localhost:4321>

## Verify

```bash
corepack pnpm check
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test:links
corepack pnpm test:e2e
```

Run all release checks with `corepack pnpm verify`.

## Structure

```text
src/content/writing/        Notes, essays, labs, build logs, case studies
src/content/work/           Curated professional/open-source/independent work
src/components/             Shared Astro components
src/components/interactive/ Selectively hydrated React islands
src/layouts/                Site and entry composition
src/pages/                  Routes and redirects
src/styles/                 Semantic tokens and shared styling
tests/                      Playwright and accessibility checks
scripts/                    Deterministic build/content checks
docs/                       Product, architecture, content and testing guidance
```

## Governing references

- [`AGENTS.md`](./AGENTS.md) — coding-agent contract
- [`docs/REDESIGN-SPEC.md`](./docs/REDESIGN-SPEC.md) — accepted requirements and done state
- [`DESIGN.md`](./DESIGN.md) — visual and interaction contract
- [`docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md) — system boundaries
- [`docs/CONTENT-GUIDE.md`](./docs/CONTENT-GUIDE.md) — authoring and authenticity
- [`docs/TESTING.md`](./docs/TESTING.md) — required release evidence

## Deployment

Pushes to `master` run verification and deploy the standalone Node build to Fly.io. The Docker runtime listens on port 8080.
