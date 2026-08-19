# Testing and release evidence

## Local gate

From a frozen dependency state:

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm check
corepack pnpm typecheck
corepack pnpm build
corepack pnpm test:links
corepack pnpm test:e2e
```

`pnpm verify` runs the code/content/browser gate once scripts are installed.

## Browser matrix

Required pages:

- `/`
- `/writing/`
- one normal writing entry
- one interactive lab, when any are published
- `/work/`
- one work entry
- `/about/`
- `/404`

Required viewports:

- 390×844
- 768×1024
- 1440×900

Required states:

- light and dark themes
- keyboard navigation/focus
- reduced motion
- JavaScript-disabled article readability
- empty-safe homepage collections

## Automated browser assertions

- No serious/critical axe violations.
- No page-level horizontal overflow.
- No console/page errors.
- Header/footer routes work.
- Active navigation exposes `aria-current`.
- Theme choice persists and both themes remain legible.
- Interactive lab labels, controls, output, keyboard path, and reset work.
- Redirects resolve to canonical routes.

## Lighthouse

Run mobile Lighthouse against the production build for Home and one writing detail. Controlled local scores must be at least 90 for Performance, Accessibility, Best Practices, and SEO. Record environment and actual results; do not claim field Core Web Vitals from local Lighthouse.

## Link check

Parse built HTML and verify every root-relative page/file target exists in `dist/client` or is an intentional server/redirect route. Exclude `mailto:`, fragments, and external URLs.

## Docker smoke

```bash
docker build -t lukebaylissdotcom:verify .
docker run --rm -d --name lukebayliss-verify -p 18080:8080 lukebaylissdotcom:verify
curl --fail http://127.0.0.1:18080/
curl --fail http://127.0.0.1:18080/writing/
curl --fail http://127.0.0.1:18080/work/
curl --fail http://127.0.0.1:18080/about/
curl --fail http://127.0.0.1:18080/rss.xml
docker stop lukebayliss-verify
```

## Release

1. Full gate passes after final edit.
2. Review staged diff and unsupported-claim scan.
3. Commit and push coherent slice.
4. Confirm remote `master` SHA.
5. Confirm GitHub Actions for exact SHA.
6. Verify live routes and new visual identity after deploy.
7. Revert the slice if deployment fails and no safe forward fix is immediate.
