# Design contract

## Intent

A modern editorial technical notebook: calm, approachable, precise, and occasionally playful. Development skill is shown through coherence, performance, accessibility, and purposeful interaction—not terminal decoration.

## Principles

1. Reading first. Content hierarchy wins over ornament.
2. Warm, human surfaces. Avoid sterile SaaS white and hacker black/green.
3. Evidence over claims. Diagrams, artefacts, code and interactive explanations earn attention.
4. Personality in details. Annotations, status language and small interactions may surprise without interrupting.
5. Static by default. Motion and React must improve understanding.

## Semantic colour tokens

Components use semantic names only.

| Token | Light | Dark | Purpose |
|---|---|---|---|
| `background` | `#f6f3ec` | `#14171b` | Page canvas |
| `surface` | `#fffdf8` | `#1c2025` | Elevated reading surface |
| `surface-muted` | `#ebe7dd` | `#252a31` | Quiet grouping |
| `foreground` | `#1e272e` | `#f3f0e8` | Primary text |
| `foreground-muted` | `#5e6970` | `#aeb6bc` | Secondary text |
| `border` | `#d8d2c6` | `#363d45` | Rules and boundaries |
| `accent` | `#3159d9` | `#8ca8ff` | Links and active state |
| `accent-strong` | `#2144b0` | `#b8c8ff` | Hover/high emphasis |
| `focus` | `#d66b2c` | `#ffad73` | Focus ring only |
| `danger` | `#a63d40` | `#ff9a9d` | Destructive/error state |

Token changes require contrast verification in both themes.

## Typography

- Interface/headings: `Manrope Variable`, system sans fallback.
- Long-form prose: `Source Serif 4 Variable`, readable serif fallback.
- Code/metadata: `JetBrains Mono Variable`, system monospace fallback.
- Body/UI base: 16px. Long prose: 18px desktop, 17px narrow.
- Reading measure: 65–75 characters.
- Weights: regular, medium, semibold. Avoid heavy display shouting.
- Titles use tight line-height; prose uses 1.65–1.75.

## Spacing and shape

- Base rhythm: 4px; common steps: 8, 12, 16, 24, 32, 48, 64, 96.
- Content container: max 1180px. Reading column: max 72ch.
- Border radius: 6px controls, 12px grouped surfaces, 999px only for compact tags.
- Shadows are rare, soft, and never the primary hierarchy mechanism.
- Prefer whitespace and 1px rules over nested cards.

## Layout

### Site shell

- Header: wordmark left, primary navigation right; compact mobile arrangement without a hidden menu unless links no longer fit.
- Main: full-width editorial regions constrained by purpose.
- Footer: direct identity/contact/RSS, visually quiet.

### Homepage

- Identity and purpose first.
- Current focus as a concise annotation, not a dashboard widget.
- Selected writing as editorial rows.
- Contact is direct and low-friction.

### Writing

- Index: date/format, title, summary, topics; scan-friendly rows.
- Detail: readable column, optional wider breakout for figures/labs.
- Metadata is useful but subordinate.

## Component patterns

- **Text link:** underlined on hover/focus; never colour alone for state.
- **Primary action:** solid accent, high-contrast label.
- **Secondary action:** quiet text or subtle border.
- **Tag:** compact metadata; avoid badge soup.
- **Section heading:** eyebrow where useful, title, optional short summary, one route action.
- **Editorial row:** aligned metadata + content; divider between rows; no card shell.
- **Annotation:** small border-left or offset note; not a fake terminal message.
- **Interactive lab:** static explanation plus clearly labelled control surface and output.

## Interaction

- Focus uses a visible 3px `focus` ring with offset.
- Hover never carries essential information.
- Persist explicit theme selection in `localStorage`; initial theme respects `prefers-color-scheme`.
- Motion durations: 120–220ms. Use opacity/transform only where practical.
- Under `prefers-reduced-motion: reduce`, remove smooth scrolling and non-essential transitions/animation.

## Responsive states

Verify at 390×844, 768×1024, and 1440×900.

- No page-level horizontal overflow.
- Navigation remains readable and reachable.
- Reading size/measure stay comfortable.
- Interactive controls preserve labels and touch targets.
- Wide figures scroll locally or recompose; they never widen the page.

## Accessibility

- WCAG 2.2 AA baseline.
- Semantic landmarks/headings.
- 44px touch targets where practical.
- Visible keyboard focus.
- Accessible names for every control.
- Theme and lab controls work by keyboard.
- Decorative marks hidden from assistive technology.
- Motion honours reduced-motion preference.

## Anti-patterns

- Terminal windows, prompts, command markers, CRT effects, matrix/hacker green.
- All-monospace body text.
- Generic gradient hero and repeated card grids.
- Glassmorphism or animation without content purpose.
- Tiny low-contrast metadata.
- Raw hex values inside feature components.
- React for static presentation.
- Native controls visually replaced without preserving semantics.

## Visual verification

Every substantial UI change requires real browser inspection in both themes and target viewports. Capture Home, Writing, article/lab, About, and 404. Check computed overflow, focus, contrast, reduced motion, console errors, and populated states.
