# lukebayliss.com redesign specification

**Status:** Accepted
**Implementation readiness:** Ready
**Decision owner:** Luke Bayliss
**Scope:** Public site, publishing model, design system, coding-agent context, quality gates

## Decision summary

Rebuild lukebayliss.com as Luke's durable personal technical space: clean, readable, approachable, modern, and visibly developer-crafted. It must support low-friction notes, essays, labs, build logs, case studies, personal context, and embedded React explanations without becoming a white-paper platform, terminal simulation, generic portfolio, or JavaScript-heavy app.

The existing Astro 5 + MDX + React + Tailwind foundation stays. The redesign changes information architecture, content schemas, visual system, page composition, publishing guidance, agent metadata, and verification.

## Audiences

1. Luke, publishing and revisiting ideas.
2. Technical peers and collaborators exploring Luke's thinking.
3. Hiring or professional contacts seeking credible evidence and contact routes.

## Goals

- **G1 — Durable home:** identity, current interests, writing, and contact remain discoverable outside social platforms.
- **G2 — Easy publishing:** short notes and substantial pieces share one understandable workflow.
- **G3 — Interactive explanation:** MDX may embed reusable React islands where interaction improves an idea.
- **G4 — Approachable craft:** visual polish, accessibility, performance, and useful interaction signal development capability.
- **G5 — Honest credibility:** only real, attributable work and claims are public.

## Non-goals

- White-paper or academic-publication workflow.
- Runtime CMS, database, accounts, comments, or contact form.
- Full terminal/IDE simulation or hacker aesthetic.
- Automatic mirror of every GitHub repository.
- Bespoke page design for every article.
- Required publishing cadence.
- Large client-side application shell.

## Required information architecture

```text
/
/writing/
/writing/[slug]/
/about/
/rss.xml
```

Compatibility redirects:

- `/blog/*` → equivalent `/writing/*` where content exists; otherwise `/writing/`.
- `/snippets/*` → equivalent `/writing/*` where content exists; otherwise `/writing/`.
- `/work/*` and `/projects/*` → `/`.
- `/contact/` → `/about/#contact`.

## Functional requirements

### Navigation and shell

- **FR-001:** Every public page must expose Home, Writing, About, GitHub, and Email within header or footer navigation.
- **FR-002:** The active internal navigation item must expose `aria-current="page"`.
- **FR-003:** Every page must include a keyboard-visible skip link targeting the main landmark.
- **FR-004:** The shell must contain no terminal window, prompt, command-line navigation marker, hacker-green identity, or all-monospace body treatment.
- **FR-005:** The site must provide considered light and dark themes, defaulting to the system preference and allowing explicit visitor selection persisted locally.

### Homepage

- **FR-010:** The homepage must identify Luke, location, primary technical territory, and site purpose within the first viewport at 390×844 and 1440×900.
- **FR-011:** The homepage must contain Current focus, Selected writing, and Contact regions.
- **FR-012:** Selected writing must be curated via frontmatter, not automatically selected only by recency.
- **FR-013:** The homepage must remain useful when writing contains no featured entries.

### Writing

- **FR-020:** One `writing` content collection must support `note`, `essay`, `lab`, `build-log`, and `case-study` formats.
- **FR-021:** Required writing metadata must include title, summary, publication date, format, topics, status, and featured state. Updated date, canonical URL, and hero image remain optional.
- **FR-022:** Draft or archived writing must not be publicly listed or rendered as published content.
- **FR-023:** `/writing/` must list published entries newest-first and expose format, date, summary, and topics without JavaScript.
- **FR-024:** Writing pages must expose title, summary, format, publication date, optional update date, reading time, topics, canonical metadata, and related contact/navigation routes.
- **FR-025:** Long-form content must provide readable prose styles for headings, links, lists, tables, blockquotes, inline code, code blocks, figures, and footnotes.
- **FR-026:** RSS must include every published writing format and exclude draft/archived entries.

### Interactive writing

- **FR-030:** MDX must support selectively hydrated React components when an explanation benefits from interaction.
- **FR-031:** Published labs that use React must provide keyboard-operable controls and useful non-interactive surrounding content; a published lab is not required at all times.
- **FR-032:** Ordinary writing without islands must ship no page-specific React client bundle.
- **FR-033:** Interactive components must define useful labels, focus styles, reduced-motion behaviour, mobile layout, and a no-JavaScript fallback or explanatory static context.
- **FR-034:** Failure of an interactive island must not prevent article prose from rendering.

### About and contact

- **FR-050:** `/about/` must provide a concise professional narrative, technical interests, working principles, personal context, and direct contact routes.
- **FR-051:** Email, GitHub, and LinkedIn must be reachable without a dedicated contact page.
- **FR-052:** The site must not claim unconfirmed roles, employers, availability, results, or client services.

### Metadata and discovery

- **FR-060:** Every index and detail page must provide unique title, description, canonical URL, Open Graph metadata, and Twitter card metadata.
- **FR-061:** Article metadata must expose published and modified dates when available.
- **FR-062:** The site must publish sitemap, RSS discovery link, favicon, robots file, Person JSON-LD, and site-level contact/profile links.
- **FR-063:** Dynamic Open Graph images must use the new visual system and contain no terminal styling.
- **FR-064:** Removed routes must redirect rather than return an unexplained server error.

### Coding-agent context

- **FR-070:** Root `AGENTS.md` must define product intent, fixed constraints, architecture map, coding conventions, content rules, required verification, and forbidden outcomes.
- **FR-071:** `CLAUDE.md` and `.github/copilot-instructions.md` must direct agents to the same governing sources without duplicating conflicting rules.
- **FR-072:** `DESIGN.md` must define visual principles, semantic tokens, typography, spacing, component patterns, responsive rules, accessibility, and anti-patterns.
- **FR-073:** Repository docs must explain architecture, content authoring, interactive islands, testing, deployment, and rollback.
- **FR-074:** Package manager, lockfile, README commands, workflows, Docker build, and agent instructions must agree.

## Design requirements

- **DR-001:** Use proportional type for prose and UI; monospace only for code, metadata, and deliberate small accents.
- **DR-002:** Use a warm neutral light canvas, deep readable foreground, restrained surfaces, one confident accent, and equivalent dark-theme semantic tokens.
- **DR-003:** Use hierarchy, alignment, whitespace, and rules before boxes. Avoid repeated card grids.
- **DR-004:** Keep primary prose between 65–75 characters per line on wide viewports.
- **DR-005:** Use a documented 4/8px spacing rhythm and compact, named component patterns.
- **DR-006:** Personality may come from annotations, status markers, diagrams, small motion, and interactive ideas; it must not obstruct reading.
- **DR-007:** Mobile is a composed layout, not merely stacked desktop content.

## Quality requirements

- **QR-001:** `pnpm check`, Astro type checking, production build, and browser tests must pass from a frozen install.
- **QR-002:** Core pages at 390×844, 768×1024, and 1440×900 must have no page-level horizontal overflow.
- **QR-003:** All navigation, theme controls, links, and lab controls must be keyboard operable with visible focus.
- **QR-004:** Automated axe checks must report no serious or critical violations on Home, Writing, one writing detail, About, and 404 in both themes where applicable.
- **QR-005:** Normal text must meet WCAG 2.2 AA contrast; non-text controls and focus indicators must meet 3:1.
- **QR-006:** Motion must respect `prefers-reduced-motion`.
- **QR-007:** Production Lighthouse mobile runs for Home and one writing detail must score at least 90 for Performance, Accessibility, Best Practices, and SEO in the controlled local test environment.
- **QR-008:** Built output must contain no broken internal links in generated HTML.
- **QR-009:** A fresh Docker image must build and serve `/`, `/writing/`, `/about/`, and `/rss.xml` successfully.
- **QR-010:** No committed secret, generated build output, or stale alternate lockfile may be introduced.

## Content authenticity rules

- Published material must be first-hand, verifiable, clearly labelled as an experiment, or limited to factual site/project context.
- Never invent employers, client work, job titles, traffic, performance gains, users, or business results.
- Team outcomes must not be presented as solely Luke's work.
- Unverified material stays draft or is removed.

## Verification matrix

| Requirement group | Evidence | Pass state |
|---|---|---|
| FR-001–005 | Browser tests + DOM inspection | Links, active state, skip link, themes work; terminal patterns absent |
| FR-010–013 | Responsive screenshots + content assertions | Required regions visible and resilient |
| FR-020–026 | Schema/build/RSS tests | Formats validate; drafts excluded; writing renders |
| FR-030–034 | MDX build + ordinary-article bundle inspection | React islands remain supported; static articles have no island bundle |
| FR-050–052 | About/contact assertions + content review | Required content and links present; unsupported claims absent |
| FR-060–064 | Built HTML/API/redirect checks | Metadata, JSON-LD, OG, RSS, sitemap, redirects valid |
| FR-070–074 | Docs checker + human review | Agent sources exist, agree, and name real commands |
| DR-001–007 | DESIGN.md + screenshots + computed styles | Visual contract implemented at target viewports |
| QR-001–010 | Local/CI commands and captured outputs | Every quality gate passes |

## Delivery slices

1. **Specification baseline** — this specification plus implementation plan.
2. **Agent and repository foundation** — governing agent docs, design contract, architecture/content/testing docs, package-manager consistency, quality scripts.
3. **Design system and shell** — tokens, themes, navigation, footer, metadata, homepage, responsive base.
4. **Publishing system** — writing collections/routes/layouts, redirects, and truthful content with optional interactive labs.
5. **Release verification** — browser/accessibility tests, Lighthouse, link checks, Docker smoke, final polish.

Each slice is complete only after focused verification, review, commit, push, and confirmation that `origin/master` contains the commit.

## Rollout and rollback

- Direct commits to `master` are allowed by user instruction; each slice is independently revertible.
- Existing URLs receive redirects before old routes are removed.
- Fly deployment runs after each push. A broken deployment rolls back by reverting the latest slice and pushing the revert.
- Content removals affect only unsupported placeholder material already identified as a credibility risk.

## Complete state

The redesign is done only when all requirement groups have observed pass evidence, every delivery slice is present on `origin/master`, CI/deploy for the final SHA is successful or an external credential blocker is explicitly identified, and the live site serves the new design.

## Unresolved questions

None blocking. Real future professional case studies and substantial essays are content follow-up, not redesign blockers.
