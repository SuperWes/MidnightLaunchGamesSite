# midnight-launch-games-site

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# OR use the simple startup script
$ ./dev.sh

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate

# deploy generated project to site
$ npm run deploy
```

**Note:** This project uses Nuxt 2.14 which requires the `NODE_OPTIONS=--openssl-legacy-provider` flag for Node 20 compatibility. This is already included in the npm scripts and the `dev.sh` startup script.

## Running the Development Server

**Option 1 (Recommended):** 
```bash
npm run dev
```

**Option 2 (Alternative):**
```bash
./dev.sh
```

The site will be available at http://localhost:3000

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
