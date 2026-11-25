// Cache the whole site so it stays readable offline. Bump VERSION when files change.
// v2 cache name is distinct from every v1 "lfh-vNN" name; old lfh- caches are removed on activate.
const VERSION = "lfh-site-v2-15";
const FILES = [
  "./", "index.html", "questions.html", "principles.html", "about.html", "participate.html", "privacy.html",
  "status.html", "404.html", "style.css", "favicon.svg", "logo.svg", "logo.png", "icons.svg", "diagrams.svg",
  "robots.txt",
  "fonts/general-sans-500.woff2", "fonts/source-serif-4.woff2?v=2", "fonts/source-serif-4-italic-latin.woff2",
  "fonts/jetbrains-mono-400.woff2", "fonts/source-serif-4-OFL.txt",
  "images/doctor-free.webp", "images/lfh-boxed-logo.png",
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
// Network first so edits show up; cache when offline. Same-origin GET only.
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
