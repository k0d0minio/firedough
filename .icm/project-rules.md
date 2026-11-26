# Project rules

This file belongs to the repo. Build and the lanes read it.

## v0 sync

- v0.app (project `cIm4hAqkTIP`) pushes into this repo when a v0 chat deploys. A v0
  deploy can overwrite a commit made here. Before substantial work, ask J if the v0 link
  is still live. Until then, make small, self-contained changes. Tell J before a large
  refactor.
- The page still has v0 defaults: `app/layout.tsx` metadata is `title: 'v0 App'`. The
  footer phone number `+353 987654321` is not a real number.
- The repo has two lockfiles, `package-lock.json` and `pnpm-lock.yaml` (a v0 artefact).
  CI installs with pnpm. Keep the two lockfiles in agreement. Do not add a third lockfile.
  When the two disagree, cut a ticket.

## Business facts

- Never invent a business fact. Trading hours, locations, prices, phone numbers and menu
  items come from the client. An obviously fake placeholder is safer than a plausible
  invention: keep it and tell J.
- Do not publish a contact detail that did not come from the client.

## Where things are

| The task | Go to |
|---|---|
| The page | `app/page.tsx`: it composes the sections |
| Metadata, fonts, global chrome | `app/layout.tsx` |
| The copy or layout of a section | `components/`: `hero-section`, `about-section`, `menu-section`, `community-section`, `header`, `footer`, `under-construction` |
| Theme tokens, global styles | `app/globals.css` |
| shadcn primitives | `components/ui/` |
| Unit tests | `tests/`, with vitest |
