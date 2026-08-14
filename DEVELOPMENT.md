# Development

## Product direction

Build a clean, approachable, modern personal technical space. Reading, real work, and interactive explanation come first. The complete contract is [`docs/REDESIGN-SPEC.md`](./docs/REDESIGN-SPEC.md).

## Stack

- Astro 7 standalone Node output
- MDX content collections
- React 19 for stateful islands only
- Tailwind CSS 4 with semantic CSS tokens
- TypeScript strict mode
- Biome formatting/linting
- Playwright + axe browser verification
- pnpm 8.8.0 with one authoritative lockfile

## Working rules

- Astro renders structure, content, routes, and metadata.
- React islands live under `src/components/interactive/` and require a real interaction need.
- Public writing/work comes from typed content collections.
- Draft/archived entries remain unpublished.
- Route changes preserve compatibility redirects.
- Visual changes follow [`DESIGN.md`](./DESIGN.md).
- Content changes follow [`docs/CONTENT-GUIDE.md`](./docs/CONTENT-GUIDE.md).

## Commands

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
corepack pnpm check
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test:links
corepack pnpm test:e2e
corepack pnpm test:lighthouse
corepack pnpm verify
```

## Delivery

1. Inspect governing docs and current implementation.
2. Make one coherent, reversible slice.
3. Run focused checks, then the required gate.
4. Review diff and public claims.
5. Commit concisely and push `master` after the deliverable is complete.
6. Verify remote SHA and exact GitHub Actions run.

## Deployment and rollback

The deploy workflow builds and sends the Docker image to Fly.io. Runtime port: 8080. If a release breaks, revert the responsible coherent commit and push the revert. See [`docs/TESTING.md`](./docs/TESTING.md) for live verification.

## Backlog boundary

Future professional case studies, essays, analytics, comments, a CMS, and search growth are separate product work. Do not introduce them as redesign scope without an accepted requirement.
