# Deployment Guide

## How to Deploy to GitHub Pages

### One-Step Deploy
Simply run:
```bash
npm run deploy
```

This will:
1. Generate the static site with the latest changes
2. Deploy to the `gh-pages` branch
3. Push to GitHub

### The site will be available at:
**https://superwes.github.io/MidnightLaunchGamesSite/**

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
- Make sure `router.base` in `nuxt.config.js` is set to `/MidnightLaunchGamesSite/`
- Check that `.nojekyll` file exists in the `static` folder

**Assets not loading?**
- Verify all asset paths use `~/assets/` in your Vue files
- Check that the `dist` folder has all the necessary files after running `npm run generate`

