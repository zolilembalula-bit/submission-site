# Albert Zolile Mbalula — Website & Submission Portal

This repository contains a combined personal portfolio, teacher resources site, and a lightweight submission dashboard.

## Quick start

```
npm install
npm run dev
```

Open http://localhost:5173

## Build

```
npm run build
```

## Deploy (GitHub Pages)

1. Ensure package.json `homepage` is set to:
   `https://zolilembalula-bit.github.io/submission-site/`
2. Install gh-pages:
   `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   `npm run deploy`

## Notes

- Authentication in this project is client-side (localStorage) and for demo/training only. For production, use a proper auth provider.
- The `dist/` folder is SPA-ready for Netlify/Vercel.


## Data-free build
This build does NOT store any user data. Login/register do not persist credentials and submissions are not saved after refresh.
