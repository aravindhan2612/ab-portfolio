# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # tsc type-check + Vite production build
npm run lint      # ESLint
npm run preview   # preview the production build locally
npm run deploy    # build + push dist/ to GitHub Pages via gh-pages
```

There are no tests in this project.

## Environment Variables

Firebase Analytics requires a `.env` file with these variables (all prefixed `VITE_F_`):

```
VITE_F_API_KEY
VITE_F_AUTH_DOMAIN
VITE_F_PROJECT_ID
VITE_F_STORAGE_BUCKET
VITE_F_MESSAGE_SENDER_ID
VITE_F_APP_ID
VITE_F_MEASUREMENT_ID
```

## Architecture

Single-page React + TypeScript app built with Vite and Tailwind CSS v4, deployed to GitHub Pages at base path `/ab-portfolio`.

**Routing:** `App.tsx` sets up React Router with `basename={import.meta.env.BASE_URL}`. Only two routes exist: `/` → `Home`, `*` → `NotFound`.

**Page layout:** `Home.tsx` composes all sections in order — `StarBackground` (fixed decorative layer, z-0), `NavBar`, then the main content sections: `HeroSection`, `AboutSection`, `SkillsSection`, `ExperienceSection`, `ProjectSection`, `CreativeSamplesSection`, `ContactSection`. All section data (skills, experience, projects) is hardcoded inline within each component.

**Theming:** `ThemeContext.tsx` provides a `useTheme()` hook. Theme is persisted in `localStorage` and applied as a `light`/`dark` class on `<html>`. Wrap consumers in `<ThemeProvider>` (done in `main.tsx`).

**Analytics:** `TrackedLinkComponent.tsx` exports a `TrackedLink` component that wraps `<a>` tags and calls `logEvent(analytics, eventName, eventParams)` on click. Firebase is initialized in `FirebaseConfig.tsx` and exports `analytics`. Use `TrackedLink` instead of plain `<a>` for any outbound or important navigation links.

**Path alias:** `@` resolves to `./src` (configured in both `vite.config.ts` and `tsconfig.json`).

**Styling:** Tailwind CSS v4 (via `@tailwindcss/vite` plugin — no `tailwind.config.js`). Custom animations (`animate-pulse-subtle`, `animate-meteor`, `.star`, `.meteor` classes) are defined in `src/index.css`.
