/* Offline support: saves the app files after the first visit. Network first, so updates appear when online. */
const CACHE = 'mgmp-v5';
const FILES = [
  './', './index.html', './style.css', './manifest.webmanifest',
  './diagrams.js', './diagrams-ss-b.js', './diagrams-pt-a.js', './diagrams-pt-b.js', './diagrams-ss-c.js',
  './content-ss-a.js', './content-ss-b.js', './content-pt-a.js', './content-pt-b.js',
  './core.js', './views.js', './practice.js', './tools.js', './planner.js', './campus.js', './extras.js',
  './icon-192.png', './icon-512.png', './icon-maskable-512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match('./index.html')))
  );
});
