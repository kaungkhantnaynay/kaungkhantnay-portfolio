# Kaung Khant Nay (Nay) Portfolio

A personal portfolio website for Kaung Khant Nay, also known as Nay, a former Network & Data Center Engineer transitioning into full stack web development. The site presents professional experience, technical skills, selected projects, an about section, and contact links in a responsive single-page React application.

## Project Overview

This portfolio is designed as a concise developer profile and project showcase. It highlights Kaung's background in infrastructure, data analysis, and modern web development, while giving visitors direct access to live projects, GitHub repositories, and contact channels.

Main sections:

- **Navigation**: Fixed top navigation with responsive mobile menu.
- **Hero / Portfolio**: Introductory message with animated scramble text.
- **Work Experiences**: Career history cards for freelance development, data analysis, and network/data center engineering.
- **Skills & Tools**: Technical skill summary and icon grid for the main technologies used.
- **Projects**: Project cards with screenshots, descriptions, technology tags, live links, and GitHub links where available.
- **About Me**: Personal background and development goals.
- **Contact Footer**: Email, GitHub, LinkedIn, and WhatsApp links.

## Tech Stack

- **React 18** for component-based UI development.
- **Vite** for local development and production builds.
- **Tailwind CSS** for most layout, spacing, color, and responsive styling.
- **Framer Motion** for scroll-based project animations and hero text fade effects.
- **React Icons** for skill, tool, and social media icons.
- **CSS** for custom footer animation styles.

## Source Code Structure

```text
.
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── WaveText.jsx
    ├── Experience.jsx
    ├── SkillsTools.jsx
    ├── Projects.jsx
    ├── Footer.jsx
    ├── index.css
    ├── Footer.css
    ├── data/
    │   ├── contact.js
    │   ├── experience.js
    │   ├── projects.js
    │   └── skills.js
    └── assets/
        ├── Profile-Pic.jpg
        ├── career-coaching-website.PNG
        ├── shoe_retail.PNG
        ├── BeanCo.PNG
        ├── first-rubber.PNG
        ├── logistics_erp.PNG
        └── company/tool images
```

## Important Files

### `src/main.jsx`

The application entry point. It imports the global Tailwind stylesheet from `src/index.css`, creates the React root, and renders `App` inside `StrictMode`.

### `src/App.jsx`

The main page layout. It controls the mobile navigation menu with React state and composes the page sections:

- `WaveText`
- `Experience`
- `SkillsTools`
- `Projects`
- `Footer`

It also contains the hero, about section, profile image, and fixed navigation links.

### `src/WaveText.jsx`

Displays the animated introduction text:

- `I'm Kaung Khant Nay`
- `a Full Stack Web Developer`
- `You can call me Nay.`

The `ScrambleText` helper uses `useState`, `useEffect`, and timed intervals to reveal the final text through a character scramble animation. Framer Motion adds a simple opacity animation.

### `src/data/*.js`

The project content is separated from the UI components:

- `contact.js` stores email and social links.
- `experience.js` stores work history data and company logo imports.
- `projects.js` stores project descriptions, screenshots, live URLs, repository URLs, and technology tags.
- `skills.js` stores resume-aligned technical skill categories.

### `src/Experience.jsx`

Renders work experience data from `src/data/experience.js` as responsive cards. Each experience includes:

- Company name
- Logo
- Role
- Period
- Description

### `src/SkillsTools.jsx`

Renders the skill summary and resume skill matrix using `src/data/skills.js`. Categories include Languages, Frontend, Backend, Databases, Data & BI, and DevOps & Deployment.

### `src/Projects.jsx`

Renders portfolio project data from `src/data/projects.js`. Each project can include:

- Title
- Description
- Screenshot
- Technology tags
- Live project link
- GitHub repository link

Framer Motion animates project cards as they enter the viewport, while respecting reduced-motion preferences.

### `src/Footer.jsx` and `src/Footer.css`

`Footer.jsx` renders the contact section and social links. `Footer.css` provides the custom fade-in footer animation, animated gradient contact heading, email button styling, and circular social icon buttons.

### `src/index.css`

Imports Tailwind's base, component, and utility layers:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### `vite.config.js`

Configures Vite with the React plugin and explicitly includes image asset extensions such as `.PNG`, `.jpg`, `.jpeg`, and `.svg`.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Preview the production build locally:

```bash
npm run preview
```

## Customizing Content

Most portfolio content is stored in data files:

- Update work history in `src/data/experience.js`.
- Update skill categories and skill chips in `src/data/skills.js`.
- Update project cards in `src/data/projects.js`.
- Update the introduction and about content in `src/App.jsx`.
- Update contact links in `src/data/contact.js`.
- Add or replace images in `src/assets/`, then import them into the relevant component.

## Current Implementation Notes

- The site is a static frontend application and does not currently use a backend or CMS.
- Project, skill, experience, and contact data are stored in `src/data`.
- Styling is mostly Tailwind CSS, with custom CSS used for the footer.
- The navigation uses anchor links to scroll between sections.
- The mobile menu state is handled inside `App.jsx`.
- Icon-only links and buttons include accessible labels.
- Project GitHub links render only when a repository URL exists.
- The hero and project animations respect reduced-motion preferences.
- `index.html` includes a descriptive title, meta description, and social sharing tags.
- The app is suitable for deployment on static hosting platforms such as Vercel, Netlify, or GitHub Pages.

## What I Would Improve Next

1. **Refine responsive design details**

   Review spacing, image sizes, card heights, and text wrapping across mobile and desktop screens. The portfolio is responsive already, but a polish pass would make it feel more professional.

2. **Add a resume download or dedicated resume section**

   A downloadable resume PDF or structured resume section would make the portfolio more useful for recruiters and clients.

3. **Add basic tests or visual checks**

   For a portfolio, full test coverage may be unnecessary, but a few smoke tests or visual checks could catch broken navigation, missing project links, or rendering issues before deployment.

4. **Compress large project screenshots**

   Some screenshots are over 1 MB. Converting them to optimized WebP/AVIF images would reduce page weight and improve loading speed.

5. **Add structured project detail pages**

   The project cards work well for scanning, but dedicated case-study pages could explain each project's problem, role, stack, screenshots, and outcomes in more depth.
