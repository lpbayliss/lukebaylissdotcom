# Redesign implementation plan

Governing specification: [`REDESIGN-SPEC.md`](./REDESIGN-SPEC.md)

## Constraints

- Default branch: `master`.
- Remote: `lpbayliss/lukebaylissdotcom`.
- Commit and push after every completed slice.
- Preserve Astro + MDX + React + Tailwind.
- Functional TypeScript; arrow functions; avoid classes.
- No public fictional content.
- No terminal visual language.

## Slice 1 — governing baseline

**Owns:** `docs/REDESIGN-SPEC.md`, `docs/IMPLEMENTATION-PLAN.md`

1. Record goals, non-goals, testable requirements, design decisions, verification, rollout, and completion state.
2. Verify Markdown links and diff.
3. Commit `docs: define personal site redesign`.
4. Push and verify `origin/master`.

**Pass:** Both documents tracked; specification status Accepted/Ready; no blocking question.

## Slice 2 — agent and repository foundation

**Owns:** `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, `DESIGN.md`, `README.md`, `DEVELOPMENT.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT-GUIDE.md`, `docs/TESTING.md`, package/workflow/config files.

1. Replace stale terminal-era agent/development guidance.
2. Add one canonical agent contract and short pointers for Claude/Copilot.
3. Define design tokens and anti-patterns in `DESIGN.md`.
4. Document architecture, content types, React island rules, testing, deploy, and rollback.
5. Standardise pnpm and remove stale npm lockfile.
6. Add Astro typecheck and browser-quality dependencies/scripts.
7. Update CI to run frozen install, check, typecheck, build, browser tests, and audit.
8. Verify frozen install, checks, and build.
9. Commit `docs: add redesign and agent foundations`.
10. Push and verify remote.

**Pass:** FR-070–074; QR-001 foundation; no contradictory terminal instructions.

## Slice 3 — design system and shell

**Owns:** global styles, shared shell/components, homepage, metadata/OG/favicon.

1. Implement semantic light/dark tokens, typography, spacing, focus, motion, prose, and reusable primitives.
2. Replace terminal frame with responsive editorial shell.
3. Add accessible navigation and persisted theme control.
4. Rebuild footer/contact links.
5. Rebuild homepage with identity, current focus, selected writing/work, contact.
6. Replace terminal OG image and favicon.
7. Add Person JSON-LD and metadata.
8. Verify build, typecheck, screenshots, keyboard path, overflow, axe.
9. Commit `feat: redesign site shell and homepage`.
10. Push and verify remote.

**Pass:** FR-001–013, FR-060–063, DR-001–007, focused QR checks.

## Slice 4 — writing, work, about, interactive lab

**Owns:** content schemas/content, writing/work/about routes/layouts, redirects, RSS/search, interactive components.

1. Replace blog/snippets/projects with writing/work schemas.
2. Remove unsupported placeholder content.
3. Add truthful introductory writing, personal-site work entry, and one interactive lab.
4. Add reusable selectively hydrated React component and static explanation.
5. Build Writing and Work indexes/details.
6. Rebuild About with direct contact region and no unsupported claims.
7. Add redirects for removed routes.
8. Update RSS, sitemap behaviour, search index or remove search if unjustified.
9. Verify draft exclusion, RSS, metadata, redirects, island and static-page bundle behaviour.
10. Commit `feat: rebuild publishing and work sections`.
11. Push and verify remote.

**Pass:** FR-020–052, FR-064; public content authenticity scan clean.

## Slice 5 — release verification and polish

**Owns:** tests/scripts/CI fixes and defects found during release review.

1. Add/complete Playwright route, interaction, overflow, theme, reduced-motion, and axe checks.
2. Add built-link checker.
3. Run frozen install, Biome, Astro check, build, browser suite.
4. Run Lighthouse mobile against production build.
5. Build Docker image and probe required routes.
6. Inspect real screenshots at mobile/tablet/desktop and repair visual defects.
7. Review final diff for security, unsupported claims, accessibility, and requirement coverage.
8. Commit `test: verify redesigned site release`.
9. Push and verify final GitHub Actions/deploy SHA.
10. Verify live site after deployment.

**Pass:** QR-001–010 and complete specification matrix observed green.

## Required commands

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test:e2e
corepack pnpm test:links
corepack pnpm test:lighthouse
docker build -t lukebaylissdotcom:verify .
```

## Commit discipline

Before each commit:

```bash
git status --short
git diff --check
git diff --stat
git diff
```

After each push:

```bash
git fetch origin
test "$(git rev-parse HEAD)" = "$(git rev-parse origin/master)"
```

## Unresolved questions

None blocking.
