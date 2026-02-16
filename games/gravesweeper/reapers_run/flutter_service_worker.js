'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "86beb5a7be27b4e0ba93c54b0a0db75a",
"version.json": "fbfab1d5a0d14bf92fd67d2c15032bf6",
"fmod/fmodstudio.js": "1839facab7dfee6dbde3b51db4d23a0f",
"fmod/fmod.js": "5de843daf2146b874759f94b83551568",
"fmod/fmod.wasm": "179efda9712f35166b0ef925c5941379",
"fmod/fmodstudio.wasm": "48480ef675d81c973d201ef6f3ba7d4d",
"index.html": "0b7373cbbe0dc0b699470f317839f27c",
"/": "0b7373cbbe0dc0b699470f317839f27c",
"main.dart.js": "97713e0cdd0ade9199dacb5368475d2b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "86ffb81ab3145471430d020eb4a4596c",
"icons/Icon-192.png": "8442f1049360d317aa2087905ddce4a3",
"icons/Icon-maskable-192.png": "8442f1049360d317aa2087905ddce4a3",
"icons/Icon-maskable-512.png": "d6afc8d73baddc9190d36c4bc20c2e68",
"icons/Icon-512.png": "d6afc8d73baddc9190d36c4bc20c2e68",
"manifest.json": "846ece0a1d756526d9777f1b603577bb",
"assets/NOTICES": "986b8328ac35b1176e838debe5be1d17",
"assets/FontManifest.json": "7ed647e439a2b666a0352b5833ae2a9e",
"assets/AssetManifest.bin.json": "fe9074ca0b9c98c683599d3192dcfa71",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "3d95c4eb2e486e11f6e46eab80117e4c",
"assets/fonts/MaterialIcons-Regular.otf": "569a2546095a926b3a6869afaf9d4e1b",
"assets/assets/images/gravesweeper-logo1024x500.png": "125c6dd8bf85c6c5652467c2beb420df",
"assets/assets/images/gameicon512x512.png": "aa3f2bd6ca6a3906ed6fdd075c1e8224",
"assets/assets/images/gameicon.png": "0a27b2ebd364117a48d390ab459ceeba",
"assets/assets/images/gravesweeper-logo-bg.png": "eb9ec2237f037701fc01b2bbf5f13b18",
"assets/assets/images/gravesweeper-logo.png": "fb30f835be4b8f6115c5cf8f1960d09c",
"assets/assets/images/reapersRunTitle.png": "f88633bf80a14ce2f7479eff1984564f",
"assets/assets/audio/Master.bank": "786e583597ac141492bee73abd7cecb1",
"assets/assets/audio/Master.strings.bank": "3d2d3c9e7d4ca7531092457170cfe72b",
"assets/assets/audio/SFX.bank": "70315786df6134461811742610409587",
"assets/assets/audio/Music.bank": "c2bbf8da6d3e657efe40d607c6b902b8",
"assets/assets/fonts/Creepster-Regular.ttf": "2bcd50bbe90a02a290a9c8124800705d",
"assets/assets/fonts/Nothing%2520Clean.ttf": "71694d645f3f1b7b9dad2587212ab2a9",
"assets/assets/fonts/HappyHalloween.ttf": "3f75c27b3bdf270ee69c7299325c2f7c",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
