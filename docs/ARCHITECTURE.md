# Architecture

## Runtime shape

Astro renders the site server-side through the standalone Node adapter. Content is file-backed MDX. React is limited to selectively hydrated interactive islands.

```text
MDX/content schemas → Astro collections → pages/layouts → HTML
                                            ↘ selected React island bundle
Node standalone server → nginx/Fly edge → visitor
```

No database, CMS, account system, or runtime content API exists.

## Boundaries

- Astro owns routes, content loading, layouts, metadata, and static presentation.
- React owns stateful interaction inside `src/components/interactive/` only.
- MDX composes prose and explicitly imports approved interactive components.
- `src/styles/global.css` owns semantic design tokens and shared visual primitives.
- Content schemas are public contracts; changing required fields requires content migration in the same commit.

## Content

- `writing`: notes, essays, labs, build logs, case studies.
- `work`: professional, open-source, independent, experiments.
- `draft` and `archived` content never appears as published.
- Featured homepage content is explicit frontmatter, then ordered deterministically.

## Routing

Canonical routes are `/writing/`, `/work/`, and `/about/`. Old `/blog`, `/snippets`, `/projects`, and `/contact` routes remain redirects. New route changes must preserve compatibility or document intentional removal.

## React island rule

Use Astro markup unless the feature requires browser state, user input, or a browser-only API. Hydrate with the narrowest directive:

- `client:visible` for below-fold labs.
- `client:idle` for useful but non-critical interaction.
- `client:load` only for controls required immediately, such as theme handling where a tiny inline script is preferable.

An island must have static explanatory context and must not own page navigation, metadata, or article prose.

## Metadata

`BaseLayout` owns canonical, Open Graph, Twitter, RSS discovery, theme colour, Person JSON-LD, and shared profile links. Entry layouts add article dates/topics. Dynamic OG output uses the same semantic palette.

## Deployment

GitHub Actions installs with frozen pnpm lock, verifies, builds, then deploys a Docker image to Fly.io. The runtime serves Astro's standalone Node output on port 8080.

Rollback: revert the last coherent commit, push `master`, and allow the deploy workflow to publish the prior state.
