importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js"
);

if (!workbox) {
  throw new Error("Workbox didn't import properly.");
}

workbox.setConfig({ debug: true });
workbox.precaching.precacheAndRoute(serviceWorkerOption.assets);
workbox.precaching.addPlugins(
  new workbox.expiration.Plugin({
    maxAgeSeconds: 24 * 60 * 60,
  })
);
