// Service Worker for caching images and other assets
const CACHE_NAME = 'image-cache-v1';

// List of extensions to cache
const FILE_EXTENSIONS = [
  '.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp',
  '.ico', '.json', '.css', '.js'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  // Skip waiting to activate immediately
  event.waitUntil(self.skipWaiting());
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
  // Take control of all clients
  return self.clientsClaim();
});

// Fetch event - serve from cache if available, otherwise fetch and cache
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only cache requests from the same origin
  if (url.origin !== self.location.origin) {
    return;
  }

  // Check if request matches our file extensions
  const shouldCache = FILE_EXTENSIONS.some(ext => 
    url.pathname.endsWith(ext) || 
    request.destination === ext.substring(1) // e.g., 'png' for .png
  );

  if (shouldCache) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          // Don't cache if response is not valid
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response because it's a stream that can only be consumed once
          const responseClone = networkResponse.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });

          return networkResponse;
        });
      })
    );
  }
});