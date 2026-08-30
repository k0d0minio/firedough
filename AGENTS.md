# AGENTS.md — Layer 0: Repository Identity & Routing

> This is the **first file any agent session reads.** It says what this repo is and where
> to go for a given task. Keep it short; detail lives in the routed files.

## What this repo is

**firedough** — the landing page for **Firedough Pizza**, a wood-fired pizza truck
operating around **Strandhill, Co. Sligo** on Ireland's Wild Atlantic Way. One page,
section by section: hero, about, menu, community, footer.

Next.js (App Router) + TypeScript + Tailwind + shadcn-style primitives, deployed on Vercel.

### Two things to know before changing anything

1. **This repo is synced from [v0.app](https://v0.app).** Changes deployed from the v0
   chat are pushed *into* this repository automatically (project `cIm4hAqkTIP`). A commit
   made here can therefore be overwritten by a later v0 deploy. Before doing substantial
   work, check with Jamie whether the v0 link is still live — otherwise the safe change is
   a small, reviewed one, and the risky change is a refactor.
2. **The page is still carrying v0 defaults and placeholders.** `app/layout.tsx` metadata
   is `title: 'v0 App'`, and the footer's phone number (`+353 987654321`) is not a real
   number. Do not treat any contact detail here as verified, and do not publish one that
   has not come from the client.

Both lockfiles are present (`package-lock.json` **and** `pnpm-lock.yaml`) — a v0 artefact.
Do not add a third; if the two disagree, that is a ticket.

## Routing — "if the task is… → go to…"

| The task | Go to |
|---|---|
| The page itself | [`app/page.tsx`](app/page.tsx) — composes the sections |
| Metadata, fonts, global chrome | [`app/layout.tsx`](app/layout.tsx) — still the v0 default; fixing it is real work |
| A section's copy or layout | [`components/`](components/) — `hero-section` · `about-section` · `menu-section` · `community-section` · `header` · `footer` |
| Theme tokens, global styles | [`app/globals.css`](app/globals.css) |
| shadcn primitives | [`components/ui/`](components/ui/) |
| Plan or track work on this repo | [`.icm/intake/`](.icm/intake/) — epics and stubs, contract in its README |

## Standing rules

- **Never invent a business fact.** Trading hours, locations, prices, phone numbers and
  menu items come from the client. A placeholder that is obviously fake is safer than a
  plausible invention — leave it and raise it.
- **Assume v0 can overwrite this repo.** Prefer small, self-contained commits; flag any
  large refactor to Jamie first.
- **CI is the source of truth.** Never run `build`/`lint`/`typecheck` locally — push and
  read the Vercel deployment check.
- **Planning is tickets.** Any plan or backlog becomes stubs in `.icm/intake/`, never a
  loose `TODO.md`. Ticket-only commits go straight to `main`; everything else through a PR
  on a `claude/` branch.
- **Gates are human checkboxes** — read them, never tick them.
- **No secrets in git, ever.** Env vars only; flag any plaintext credential found.
