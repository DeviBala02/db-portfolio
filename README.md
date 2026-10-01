# Devi Bala V — React Portfolio

Professional React + Vite portfolio for Devi Bala V, focused on Java, Spring Boot, microservices, banking integrations, legacy modernization, and selected frontend work.

## Included

- Responsive React portfolio
- Profile photo and downloadable resume
- Java / Spring Boot / microservices skill section
- TCS banking experience
- COBOL-to-Java modernization experience
- Internship experience
- Certifications and awards
- GitHub project: [LunaraWebsite](https://github.com/DeviBala02/LunaraWebsite)
- GitHub profile: [DeviBala02](https://github.com/DeviBala02)
- GitHub Actions workflow for GitHub Pages

## Run in VS Code

1. Install Node.js LTS from https://nodejs.org/
2. Extract this folder.
3. Open the folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

```bash
npm install
npm run dev
```

6. Open the localhost URL printed by Vite (usually http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages hosting

This project already includes `.github/workflows/deploy.yml`.

Recommended repository name for a personal site:

```text
DeviBala02.github.io
```

Because the repository is a user site, `vite.config.js` uses `base: '/'`.

After pushing the project to `main`:

1. Open the GitHub repository.
2. Go to Settings → Pages.
3. Under Build and deployment → Source, select **GitHub Actions**.
4. Push changes to `main` or rerun the workflow from the Actions tab.
5. Your site will be available at:

```text
https://DeviBala02.github.io/
```

If you instead use a normal repository such as `portfolio`, change Vite's base to `/portfolio/` and use the project URL:

```text
https://DeviBala02.github.io/portfolio/
```
