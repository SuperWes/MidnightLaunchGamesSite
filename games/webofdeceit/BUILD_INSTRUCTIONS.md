# Building Web of Deceit for Web Deployment

## Automated Deployment

Use the script in your web_of_deceit project:

```bash
cd /Users/wes/Documents/Twine/Stories
./scripts/publish.sh
```

This will automatically:
1. Build the Flutter web app with `--base-href "/games/webofdeceit/play/"`
2. Copy the build to this directory's `play/` subfolder
3. Update version.json
4. Tell you to deploy the website

## Configuration

The publish script uses a config file stored outside the repo at:
```
~/.config/webofdeceit/publish.conf
```

This keeps paths and settings out of version control.

## Manual Build (if needed)

If you need to build manually:

```bash
cd /Users/wes/Documents/Twine/Stories
flutter build web --release --base-href "/games/webofdeceit/play/"
```

Then copy:
```bash
cp -r build/web/* /Users/wes/workspace/MidnightLaunchGamesSite/static/games/webofdeceit/play/
```

## Deploy Website

After updating the game:
```bash
cd /Users/wes/workspace/MidnightLaunchGamesSite
npm run deploy
```

The game will be live at:
- **Game page:** https://midnightlaunchgames.com/games/webofdeceit/
- **Direct play:** https://midnightlaunchgames.com/games/webofdeceit/play/

Note: This is an unlisted page (not linked from the main games list).
