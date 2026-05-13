# Portfolio SPA Platform

A React Single Page Application built as a developer showcase for portfolio project management, complete with client-side routing, custom hooks, CRUD integration, and automated testing.Made by Kerry so this is a breif summary of the applications inner functions from the version to the system architecture 

## Tech Stack

- React 19
- Vite
- React Router DOM 6
- json-server (mock REST API)
- Vitest + Testing Library
- CSS-based responsive UI

## Architecture

- `src/App.jsx` - app routing shell using `BrowserRouter`, `Routes`, and nested route components
- `src/components/` - reusable UI components for navbar, cards, lists, forms, and details
- `src/pages/` - route-level page components for Home, Projects, Add, Edit, and About
- `src/api/projectsAPI.js` - API client for `GET`, `POST`, `PATCH`, and `DELETE` against `/projects`
- `src/hooks/` - custom hooks:
  - `useFetchProjects` for async resource loading with loading/error state
  - `useLocalStorage` for state persistence via `window.localStorage`
- `db.json` - mock backend dataset for local development

## Developer Setup

1. Install dependencies:

```bash
npm install


2. Run json-server and Vite in parallel:

```bash
npm run dev-full


3. Open the app in the browser at:

```text
http://localhost:5173
```

The JSON API is available at:

```text
http://localhost:3001/projects

## Scripts

- `npm run dev` - start Vite dev server
- `npm run server` - start json-server on port `3001`
- `npm run dev-full` - run both Vite and json-server concurrently
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

- The app uses a lightweight JSON backend via `json-server` to mimic REST CRUD behavior.
- `useFetchProjects` encapsulates fetch lifecycle and error handling to keep components declarative.
- The UI theme is intentionally styled with a purple/pink gradient design and hover interactions for cards and buttons.
- `NavBar` and route setup support a standard SPA navigation flow.
-The about and the links which redirect you to the git hub repository 


## Repo Link

This project is connected to the GitHub repository:

https://github.com/kerrykiambi-lab254

Thank you for reading this :)

