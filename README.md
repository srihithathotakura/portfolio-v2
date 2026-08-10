# Srihitha Thotakura — Portfolio (v2)

My personal portfolio site, built with React and deployed on Vercel. It's a
single-page, scroll/anchor-navigated site covering my background, education,
skills, projects, publications, interests, resume, and contact info.

**Live site:** _add your Vercel URL here_

## Sections

- **About** — intro and background
- **Education** — academic history
- **Skills** — categorized skill chips pulled from my resume
- **Projects** — featured work including PasswordPal, Autofy, AURA, an
  Emergency Dispatch Management System, and other academic projects
- **Publications**
- **Interests**
- **Resume** — inline PDF viewer with a download option
- **Contact**

## Tech stack

- React 19 (bootstrapped with Create React App / `react-scripts`)
- Plain CSS (no framework) — custom typography (Space Grotesk / Inter /
  JetBrains Mono) and a warm off-white / near-black / indigo color palette
- Font Awesome + Devicon for icons

## Running locally

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000) in
development mode with hot reload.

## Building for production

```bash
npm run build
```

Outputs an optimized, minified production build to the `build/` folder.

## Deployment

This project is deployed on **Vercel**, connected directly to this GitHub
repo — every push to `main` triggers a new deployment automatically. There's
no manual deploy step needed.

Routing is defined in [`vercel.json`](./vercel.json). This app doesn't use
React Router (it's one page with anchor links), so no catch-all rewrite to
`index.html` is needed — and shouldn't be added, since a catch-all rewrite
will also intercept requests for static files like `resume.pdf`.

> Note: the `deploy` / `predeploy` npm scripts (`gh-pages -d build`) are
> leftover from an earlier GitHub Pages setup and are no longer used now
> that deployment happens through Vercel.

## Project structure

```
public/            static assets (images, resume.pdf, favicon, etc.)
src/components/    one component per section (About, Education, Skills,
                   Projects, Publications, Interests, Resume, Contact, ...)
src/App.jsx        assembles the sections into the single page
src/App.css        all site styling
```

## License

Personal project — not licensed for reuse.
