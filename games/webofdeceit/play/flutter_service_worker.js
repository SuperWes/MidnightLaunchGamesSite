'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "40017d5ea223fee12462f0700f7022b9",
"version.json": "e67133c6090177276769df774ab943a2",
"index.html": "60157fd6f3d0e982fa3ed2e7af8a39bf",
"/": "60157fd6f3d0e982fa3ed2e7af8a39bf",
"main.dart.js": "5971bede9ade7acf85feb2632f44fce1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "57b5c86168fb51ec04a2be2c8f6ad0db",
"icons/Icon-192.png": "a9c8e187c180d49eadb95af6c65341da",
"icons/Icon-maskable-192.png": "a9c8e187c180d49eadb95af6c65341da",
"icons/Icon-maskable-512.png": "e2ad56f066e70a4a79a1f69e9ba19c39",
"icons/Icon-512.png": "e2ad56f066e70a4a79a1f69e9ba19c39",
"manifest.json": "37898d1ff609479764b60316afbcd717",
"assets/NOTICES": "4ad0d0130d8d500be678b243d1caedd8",
"assets/The%2520Masquerade%2520Ball.html": "e09c03029853480f185b52e0c1ede97d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "164cbdf38ca645213d306403c2caeac4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "f97fabdcc2932d0580fab08050e361f2",
"assets/fonts/MaterialIcons-Regular.otf": "2d1203ee8d9dad90589233c2c8907d8a",
"assets/assets/music/Waltz_Schmaltz.mp3": "15062f8ddd0163156341f5d968d19a6c",
"assets/assets/images/webOfDeceitLogo_transparent_web_preserved.png": "80d71807470eb9bdd776fe65e0421c0f",
"assets/assets/images/webOfDeceitLogo.png": "e86d255538036d3bc36e3a133a3ca4a0",
"assets/assets/environments/second_floor.jpg": "e12da401befd5ea46a51ef5e65d2b14d",
"assets/assets/environments/garden.jpeg": "2ecf98edd718fc6a8f6dae6ba34a14c2",
"assets/assets/environments/coat_closet_wide.png": "2510358a139af8db9dcf6714d19b3a15",
"assets/assets/environments/refreshment_area.png": "6693f910e043d8ee7e51708b8e015520",
"assets/assets/environments/balcony.png": "729f5e2e420802b1530dddcc9b0ac11a",
"assets/assets/environments/greenhouse.jpg": "bc3fc49cce0c2c3cdc618e07f0bc8ae2",
"assets/assets/environments/gallery.png": "c12b5e9b6edec14250f82f85864b5295",
"assets/assets/environments/bedroom.png": "118e4f92742739bd6e75dc8a6cb4de83",
"assets/assets/environments/ballroom_without_wide.png": "68a138b46d04a6436e5b359af2dbfbc5",
"assets/assets/environments/victory.png": "c0170b6941ef24ef93cc66595b11e7ef",
"assets/assets/environments/backdoor.jpg": "b6aa2a1b2e66d87acc76a661388d9924",
"assets/assets/environments/service_hallway.jpg": "8285b5f2e834f41b7ccf5f135dc09495",
"assets/assets/environments/driveway.jpg": "e9e0d4c6fe531caa98b1fe88da370d94",
"assets/assets/environments/foyer_enterance.jpg": "cb91f7015ffa04a58933a8e19758455e",
"assets/assets/environments/game-over.png": "8d51df786ce4546d0904ffc6a04d5bfc",
"assets/assets/environments/library.jpg": "32543cdb9a9401bd1c7a7348245d06d8",
"assets/assets/environments/coat_closet.png": "c3145069610dc7d332ed88d4c7a8bc81",
"assets/assets/environments/house.jpg": "d5bc04ec6f74a6880439082d209dfe7c",
"assets/assets/environments/master_bath.png": "9fe6299870256de037ccbed6e88d6fc3",
"assets/assets/environments/newspaper_office.png": "2b2324f0ff52afb1a7c49c3313ad88da",
"assets/assets/environments/wine-cellar.jpg": "cfbe41579355c79494ef942e011761d5",
"assets/assets/environments/powder_room.png": "486721bafe5ee4867108f24628ddb8ea",
"assets/assets/environments/office.png": "18f64668c3c992fe7b274b0f3bcbe425",
"assets/assets/environments/door.jpg": "d4d1933eab5277243fe30b6fcae469da",
"assets/assets/environments/pabstmansion2ndfloorlanding-2559624155.jpg": "c27a8461c31daad24466faf8a02aa341",
"assets/assets/environments/ballroom_without_people.png": "3e1439c406121c1c2bd00944d705dff2",
"assets/assets/environments/kitchen.png": "d228fa1c69e843ca48626d6abeb5ee6a",
"assets/assets/environments/coat_check.png": "46f2a7eb948664ec4d5a30accc4815be",
"assets/assets/environments/coat_check_wide.png": "311c77a08afbc97d80e51cb2860a8a4a",
"assets/assets/environments/ballroom.png": "8a30185e6a381f6f5f6169a46dd6e414",
"assets/assets/environments/conservatory.jpg": "0988879129122b4c49f35c709ab04f28",
"assets/assets/environments/foyer.jpg": "55fc6961eccad93381a30259936c4172",
"assets/assets/sound_effects/man_talk_hello_3.mp3": "2a35c5f302c87bc65dd7d9b4640c72e4",
"assets/assets/sound_effects/man_talk_hi_3.mp3": "fd8279d700f874e0964f6f79387808aa",
"assets/assets/sound_effects/man_talk_hi_2.mp3": "302ded6254e95042bf5b1a2f93cfa878",
"assets/assets/sound_effects/man_talk_hello_2.mp3": "1ea333feb3d867b3846d8cd2b35945a8",
"assets/assets/sound_effects/man_talk_hi_1.mp3": "872efcea7c92e8fee52d954f3e046f7f",
"assets/assets/sound_effects/man_talk_hello_1.mp3": "962ef5e3dd615cfc3168151a586c89f8",
"assets/assets/sound_effects/man_talk_hello_5.mp3": "f48c31a23ee22d9bd4d4040f3d3cfe40",
"assets/assets/sound_effects/man_talk_hello_4.mp3": "495bf4ee8a7558ca207ece87331377bb",
"assets/assets/sound_effects/ui_cancel.mp3": "3424e7983dd283e52bc0e5378d1c2be6",
"assets/assets/sound_effects/woman_talk_hello.mp3": "85a18f4453206436bd075c341b68404a",
"assets/assets/sound_effects/woman_talk_hi.mp3": "bacba598533ab3644de9fbf262b912f6",
"assets/assets/sound_effects/woman_talk_goodevening_1.mp3": "cc846ced73d5d356ed6c67aa7d622e15",
"assets/assets/sound_effects/man_talk_goodevening_2.mp3": "7b02eea45e40ab9f77b6914e52ff230e",
"assets/assets/sound_effects/man_talk_goodevening_3.mp3": "3a890d4b0680819777959e96917bf813",
"assets/assets/sound_effects/woman_talk_goodevening_2.mp3": "0e69c91a1cce4a4d382247874ccc61eb",
"assets/assets/sound_effects/man_talk_goodevening_1.mp3": "29fda93875cecb430f4d7541c13c302e",
"assets/assets/sound_effects/woman_talk_goodevening_3.mp3": "44bf62134ed7baabd004c54f17177329",
"assets/assets/sound_effects/man_talk_goodevening_4.mp3": "adc335712603542116909723bc7dc42b",
"assets/assets/sound_effects/camera_flash.mp3": "9cc6d31e10d8443b09bc33bee735a60e",
"assets/assets/sound_effects/open_map.mp3": "ec76dbcc399eb9e4d92bd63d3d3d1c55",
"assets/assets/sound_effects/ui_select.mp3": "2038474e478617b8ab381ab3facbecaf",
"assets/assets/sound_effects/walk_away.mp3": "00c6c7a75f89b6c62a390e0b7b3117ad",
"assets/assets/characters/jjonah.png": "61c737b17e384ee6918398e942802cb4",
"assets/assets/characters/joker_mask.png": "265f8eb10146820ab3c17e6f8b9a20cc",
"assets/assets/characters/peacock_mask.png": "630ddf19c02e6771cabd720f520d3bc8",
"assets/assets/characters/phoenix_mask.png": "926ba3399fa613ca599f04e14551010f",
"assets/assets/characters/eagle.png": "0c3223efa905c9de0bcdcb57b7a5f10d",
"assets/assets/characters/swan.png": "1105c0f777da6b9d323d08c6a519ba07",
"assets/assets/characters/owl.png": "6da18490bcf3091cf46956139feaaba4",
"assets/assets/characters/cardinal.png": "879a05383cc25fe8d8013c15ee0db20c",
"assets/assets/characters/peacock.png": "cd6565f52b24de10be18032bbe1a008e",
"assets/assets/characters/joker.png": "97992e2d3f8a504b563c183e67e82a5a",
"assets/assets/characters/raven_mask.png": "86b3eef53e021393de0bdfc10ee97248",
"assets/assets/characters/raven.png": "cb5a4637b200621f9d89247afa133200",
"assets/assets/characters/swan_mask.png": "9cddc01513d0b04ea15771d336a2b2e6",
"assets/assets/characters/dove.png": "49606639c7ed7d44b9adde86891fec3d",
"assets/assets/characters/serpent.png": "c04c347d217143c560dbff2ccb0cf4c6",
"assets/assets/characters/eagle_mask.png": "93a3705d681e74527d174c67929eb3a9",
"assets/assets/characters/phoenix.png": "f48fd0b35ad73bb4fa0f0ad5576fc0aa",
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
