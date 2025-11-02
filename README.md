# lukebaylissdotcom

Astro + React + Tailwind v4 implementation of the lukebayliss.com personal site.

Refer to `DEVELOPMENT.md` for architectural decisions and future tasks.

## Project structure

```text
├── astro.config.mjs        # Astro configuration & integrations
├── biome.json              # Biome formatter + linter rules
├── public/                 # Static assets served as-is
├── src/
│   ├── components/         # Astro + React components
│   ├── content/            # MDX collections (blog, projects, snippets)
│   ├── layouts/            # Page + entry layouts
│   └── pages/              # Route definitions
├── tailwind.config.ts      # Tailwind v4 customization
└── tsconfig.json           # TypeScript configuration
```

## Commands

| Command | Description |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start the Astro dev server on http://localhost:4321 |
| `pnpm build` | Generate a production-ready static build |
| `pnpm preview` | Preview the production build locally |
| `pnpm lint` | Run Biome linting |
| `pnpm format` | Apply Biome formatting in-place |
| `pnpm check` | Run Biome's combined lint + format diagnostics |

## Notes

- Tailwind v4 is wired via the official `@tailwindcss/vite` plugin.
- Content collections (blog, projects, snippets) are typed through `src/content/config.ts`.
- Update `astro.config.mjs` with the final production domain when ready to deploy.
- Analytics will be added via an external Umami Fly deployment — see `DEVELOPMENT.md` for the provisioning checklist.
