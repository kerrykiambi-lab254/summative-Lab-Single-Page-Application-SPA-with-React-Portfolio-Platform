# Portfolio SPA Platform

A React Single Page Application that displays GitHub repositories as portfolio projects, complete with client-side routing, custom hooks, and automated testing.This is a brief summary of its internal workings of the summarive lab to the marking criteria 

## Tech Stack

- React 19
- Vite
- React Router DOM 6
- GitHub API (public repos)
- Vitest + Testing Library
- CSS-based responsive UI

## Architecture

- `src/App.jsx` - app routing shell using `BrowserRouter`, `Routes`, and nested route components
- `src/components/` - reusable UI components for navbar, cards, lists, and details
- `src/pages/` - route-level page components for Home, Projects, and About
- `src/api/projectsAPI.js` - API client for fetching from GitHub API `/users/kerrykiambi-lab254/repos`
- `src/hooks/` - custom hooks:
  - `useFetchProjects` for async resource loading with loading/error state
  - `useLocalStorage` for state persistence via `window.localStorage`
- `db.json` - unused (previously for local development)

## Developer Setup

1. Install dependencies:

```bash
npm install
```

2. Start the Vite dev server:

```bash
npm run dev
```

3. Open the app in the browser at:

```text
http://localhost:5173
```

The app fetches live data from GitHub API, no additional server needed.

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - build production bundle
- `npm run preview` - preview production build
- `npm test` - run Vitest in CI mode
- `npm run test:ui` - run Vitest interactive mode
- `npm run test:coverage` - generate coverage report

## Testing

The application includes unit and integration coverage for:

- React components
- custom hooks
- routing behavior
- API client methods

Test files are located in `src/__tests__/`

## Developer Notes

- The app fetches public repositories from GitHub API for the user `kerrykiambi-lab254`
- Data is mapped to a project format with title, description, tags (language), and GitHub links
- The UI theme is intentionally styled with a purple/pink gradient design and hover interactions for cards and buttons
- `NavBar` and route setup support a standard SPA navigation flow
- CRUD operations are not available as GitHub repos require authentication for modifications

## Repo Link

This project is connected to the GitHub repository:

https://github.com/kerrykiambi-lab254

thank you :) for reading this 

