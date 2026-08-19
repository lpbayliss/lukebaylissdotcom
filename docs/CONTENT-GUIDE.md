# Content guide

## Purpose

Publish useful first-hand technical thinking without requiring every idea to become a formal paper.

## Formats

- `note` — concise discovery, opinion, or technique.
- `essay` — developed argument.
- `lab` — explanation containing an interactive element.
- `build-log` — decisions and progress from active work.
- `case-study` — substantial context, choices, implementation, outcomes, limits, and evidence.

## Writing frontmatter

```yaml
title: Clear descriptive title
summary: One useful sentence under 160 characters
publishedAt: 2026-08-14
updatedAt: 2026-08-14 # optional
format: note # note | essay | lab | build-log | case-study
topics: [architecture, delivery]
status: published # draft | published | archived
featured: false
canonicalUrl: https://example.com/original # optional
heroImage: /images/example.webp # optional
```

## Authenticity gate

Before publishing, verify every employer, role, project, metric, outcome, date, quotation, and attribution. Never invent missing evidence. Team outcomes must be labelled as team outcomes. Confidential work may be sanitised, but not fictionalised. If uncertain, keep `status: draft`.

## Editorial style

- Put the useful conclusion early.
- Prefer first-hand decisions, constraints, rejected options, failures, and changed opinions.
- Use descriptive headings and short paragraphs.
- Include code, diagrams, data, screenshots, or citations only where they improve the argument.
- State assumptions and limitations.
- Avoid generic best-practice summaries and manufactured cadence.

## Interactive labs

Import components from `src/components/interactive/`. Explain the model before the control. Label inputs and outputs. Provide sensible defaults, keyboard operation, mobile behaviour, reduced motion, and useful surrounding prose when JavaScript is unavailable.

## Publishing checklist

1. Frontmatter validates.
2. Claims pass authenticity gate.
3. Title/summary describe the actual value.
4. Links and media work.
5. Images have useful alt text or are explicitly decorative.
6. Code/examples are verified.
7. Mobile and keyboard reading paths work.
8. `corepack pnpm verify` passes.
