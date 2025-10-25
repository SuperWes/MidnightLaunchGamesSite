# Building Gravesweeper Reaper's Run Demo for Web Deployment

## Automated Deployment

Use the script in your gravesweeper project:

```bash
cd /Users/wes/workspace/gravesweeper/demos/gravesweeper_reapers_run
./scripts/deploy_to_website.sh
```

This will automatically:
1. Build the Flutter web app with `--base-href "/games/gravesweeper/reapers_run/"`
2. Copy the build to this directory
3. Tell you to deploy the website

## Manual Build (if needed)

If you need to build manually:

```bash
cd /Users/wes/workspace/gravesweeper/demos/gravesweeper_reapers_run
flutter build web --release --base-href "/games/gravesweeper/reapers_run/"
```

Then copy:
```bash
cp -r build/web/* /Users/wes/workspace/MidnightLaunchGamesSite/static/games/gravesweeper/reapers_run/
```

## Deploy Website

After updating the demo:
```bash
cd /Users/wes/workspace/MidnightLaunchGamesSite
npm run deploy
```

The demo will be live at: **https://midnightlaunchgames.com/games/gravesweeper/reapers_run/**

