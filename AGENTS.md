# Repository Guidelines

## Project Structure & Module Organization
- `src/` holds all application code. Entry point is `src/main.tsx`, with top-level app wiring in `src/App.tsx`.
- UI components live in `src/components/` (feature components) and `src/components/ui/` (shared UI primitives).
- Pages/screens are in `src/pages/`, data fixtures in `src/data/`, and reusable logic in `src/hooks/` and `src/lib/`.
- Styles are in `src/index.css` and `src/App.css`; Tailwind configuration is in `tailwind.config.ts`.
- Static assets live in `public/` and `src/assets/`.
- Tests are located in `src/test/`.

## Build, Test, and Development Commands
- `npm run dev` starts the Vite dev server with HMR.
- `npm run build` собирает production-бандл.
- `npm run build:dev` builds with development mode flags for troubleshooting.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint over the repo.
- `npm test` runs Vitest once; `npm run test:watch` keeps Vitest in watch mode.

## Coding Style & Naming Conventions
- Language: TypeScript + React (TSX). Prefer functional components.
- Indentation: follow existing formatting in files (2 spaces is typical in this repo).
- Components use `PascalCase` filenames (e.g., `Header.tsx`). Hooks follow `use-*` naming (e.g., `use-toast.ts`).
- Use Tailwind CSS utility classes for styling; shared UI components live under `src/components/ui/`.
- Linting is enforced by `eslint.config.js` (React hooks rules + TypeScript ESLint). Fix lint issues before opening a PR.

## Testing Guidelines
- Test runner: Vitest with Testing Library (`@testing-library/react`).
- Tests live in `src/test/` and follow the `*.test.ts` naming pattern (see `src/test/example.test.ts`).
- Add tests for new components or logic where practical; update snapshots or fixtures if behavior changes.

## Commit & Pull Request Guidelines
- No commit message convention is established yet (repository has no commits). Use concise, imperative summaries (e.g., "Add hero CTA") or Conventional Commits if your team prefers.
- PRs should describe the change, include testing notes (`npm test`, `npm run lint`), and add screenshots for UI changes.
- Link related issues or tickets when available.
