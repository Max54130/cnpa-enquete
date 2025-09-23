// Minimal service worker for installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Claim clients immediately so updates are picked up
  event.waitUntil(self.clients.claim());
});

// Optional: network pass-through (no caching logic needed for installability)
self.addEventListener('fetch', (event) => {
  // Just allow requests to proceed normally
});
