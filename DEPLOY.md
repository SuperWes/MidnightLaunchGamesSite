# Deployment Guide

## How to Deploy to GitHub Pages

### One-Step Deploy
Simply run:
```bash
npm run deploy
```

This will:
1. Clean build with the latest changes
2. Generate the static site with correct asset paths
3. Copy all files from `static/` (including demos) to the dist folder
4. Deploy to the `gh-pages` branch
5. Push to GitHub

### The site will be available at:
**https://midnightlaunchgames.com/**

(Also accessible via: https://superwes.github.io/MidnightLaunchGamesSite/)

### Important Configuration
The following settings are configured for the custom domain:
- `router.base: '/'` in `nuxt.config.js` (set to `/` for custom domains)
- `.nojekyll` file in the `static/` folder (prevents Jekyll processing)
- `CNAME` file in `static/` folder containing `midnightlaunchgames.com`
- Game demos and static files in `static/games/` folder (e.g., `static/games/gravesweeper/gravesweeper_demo/`)

### Manual Deploy (if needed)
If you want to deploy step-by-step:

```bash
# 1. Generate the static site
npm run generate

# 2. Deploy to GitHub Pages
gh-pages --dotfiles --dist dist --repo git@github.com:SuperWes/MidnightLaunchGamesSite.git
```

### Troubleshooting

**Site not updating?**
- Make sure your changes are saved
- Clear your browser cache (Cmd+Shift+R on Mac)
- Wait 1-2 minutes for GitHub Pages to rebuild

**404 errors?**
- Make sure `router.base` in `nuxt.config.js` is set to `/` (for custom domain)
- Check that `.nojekyll` file exists in the `static` folder
- Verify CNAME file exists with your custom domain

**Assets not loading?**
- Verify all asset paths use `~/assets/` in your Vue files
- Check that the `dist` folder has all the necessary files after running `npm run generate`

