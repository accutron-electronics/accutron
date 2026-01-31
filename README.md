# Accutron — accutron.eu

Corporate website scaffold for Accutron Electronics. Built with React and Vite, styled with a minimal black-and-white stylesheet. Ready for Vercel deployment as a static site.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build locally

```bash
npm run preview
```

Vercel deployment

- This project is configured as a static build. The `vercel.json` file instructs Vercel to use `npm run build` and the `dist` directory as output.
- Push the repository to GitHub (or another Git provider) and import it in Vercel, or use the Vercel CLI.

Notes

- Replace `src/assets/accutron-logo.png` with the provided Accutron logo image if available.
- The site uses React Router for routing; all routes are client-side and Vercel routes are configured to fallback to `index.html`.
- SEO meta tags referencing `accutron.eu` are present in `index.html` and per-page titles via `react-helmet-async`.
