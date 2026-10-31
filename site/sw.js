// Cache the whole site so it stays readable offline. Bump VERSION when files change.
const VERSION = "lfh-v22";
const FILES = [
  "./", "index.html", "principles.html", "status.html", "participate.html", "about.html", "privacy.html",
  "style.css?v=22", "favicon.svg?v=21", "logo.svg?v=21", "icons.svg", "404.html", "fonts/general-sans-500.woff2",
  "fonts/source-serif-4.woff2?v=2", "fonts/jetbrains-mono-400.woff2",
  "diagrams.svg", "images/clinician-simple.webp",
  "images/pins/work-offline.webp",
  "images/pins/keep-records.webp",
  "images/pins/keep-software.webp",
  "images/pins/requirements.webp",
  "images/pins/privacy.webp",
  "images/pins/protection.webp",
  "images/pins/ready.webp",
  "images/pins/collaborate.webp",
  "images/pins/sync.webp",
  "images/pins/local-copies.webp",
  "images/pins/open.webp",
  "images/pins/freedom.webp",
];

self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))));
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("lfh-") && k !== VERSION).map(k => caches.delete(k))))
));
// Network first so edits show up; cache when offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(r => {
        if (r.ok) {
          const copy = r.clone();
          e.waitUntil(caches.open(VERSION).then(c => c.put(e.request, copy)).catch(() => {}));
        }
        return r;
      })
      .catch(async () => (await caches.match(e.request)) || Response.error())
  );
});
