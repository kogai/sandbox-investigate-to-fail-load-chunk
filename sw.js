importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);

if (!workbox) {
  throw new Error("Workbox didn't import properly.");
}

const CACHE_VERSION = "v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then(cache => cache.addAll(serviceWorkerOption.assets)),
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
        // TODO 4 - Add fetched files to the cache
      })
      .catch(error => {
        // TODO 6 - Respond with custom offline page
        console.log(error);
      }),
  );
});

