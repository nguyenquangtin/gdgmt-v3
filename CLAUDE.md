# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

GDG Mien Trung website — a Next.js 10 static site (despite the Gatsby README, this is a Next.js project).

## Commands

```bash
yarn dev          # Start dev server at http://localhost:3000
yarn build        # Build (outputs to ./build/)
yarn start        # Run production server
yarn export       # Build + export as static files
```

No lint or test scripts are configured.

## Architecture

**Pages** (`src/pages/`) use Next.js file-based routing. Each page imports section components and composes them with a `PageWrapper` that accepts a `headerConfig` object for header behavior.

**Sections** (`src/sections/`) are grouped by page name (e.g., `sections/gdg/`, `sections/about/`). Each section folder contains sub-folders per section (Hero, Footer, Features, etc.). The active/primary page sections live under `sections/gdg/`.

**Components** (`src/components/`) are shared primitives: `PageWrapper`, `Header`, `Layout`, `Link`, `VideoModal`, `Accordion`, `Selectbox`, `SuperTag`, `Fontawesome`.

**Data** (`src/data/`) holds static JS/JSON data files: `menudata.js` (nav items), `Sponsors.js`, `caseData.js`, `faq.js`, `cart.js`, `GalleryProducts.js`, `datta.json`.

**Assets** (`src/assets/`) contains SCSS (Bootstrap-based theming with dark/light mode support in `scss/theme-mode-control/`) and images organized by page/section.

## Key Patterns

- `PageWrapper` wraps every page — pass `headerConfig` to control header classes, fluid container, and logo color.
- Styling uses SCSS (`src/assets/scss/`) + Bootstrap 5 + styled-components. SCSS `includePaths` points to `assets/scss/`.
- Build output is `./build/` (not the default `.next/`).
- `next-fonts` and `next-optimized-images` are configured in `next.config.js`.
