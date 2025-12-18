# api-toolkit

A lightweight SvelteKit starter focused on building and testing API-driven UIs. Includes a small set of utilities and an example fetch helper to get you started quickly.

**Quick Start**

- **Install:** Run `npm install` (or `pnpm install` / `yarn`).
- **Dev:** Start the dev server with `npm run dev` and open the app in the browser.
- **Build:** Create a production build with `npm run build` and preview with `npm run preview`.

## What you'll find

- Minimal SvelteKit app scaffold with routes under `src/routes`.
- A small helper for API fetching at `src/lib/tcapifetch.ts` and component examples in `src/lib`.
- Static assets served from `static/` and global styles in `src/app.css`.

## Development

1. Install dependencies:

	npm install

2. Start the development server:

	npm run dev

3. Open the app at the address shown in the terminal (usually http://localhost:5173).

Tips:

- Edit pages in `src/routes` to add views.
- Add reusable components to `src/lib` and import them into routes.

## Build & Deployment

- Build for production: `npm run build`.
- Preview the production build locally: `npm run preview`.
- For deployment, add the appropriate SvelteKit adapter for your target platform (Vercel, Netlify, Cloudflare, etc.). See the official SvelteKit docs for adapter setup.

## Project structure (key files)

- `src/routes/` — App routes and pages.
- `src/lib/` — Reusable components and helper utilities (e.g. `tcapifetch.ts`).
- `src/app.css` — Global styles.
- `static/` — Static assets served at the root of the site.
- `svelte.config.js`, `vite.config.ts`, `tsconfig.json` — Project configuration.

## Contributing

- Open an issue or submit a PR with improvements or fixes.
- Keep changes focused and document new public utilities in the README or as inline docs.

## License

Specify your project license here (e.g. MIT) or add a `LICENSE` file.

---

If you'd like, I can:

- run the dev server and confirm the app starts, or
- add a short usage example showing how to use `src/lib/tcapifetch.ts` in a page.
