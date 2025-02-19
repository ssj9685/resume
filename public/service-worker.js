const CACHE_NAME = "pwa-cache-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (
    url.protocol === "chrome-extension:" ||
    url.protocol === "about:" ||
    event.request.method !== "GET"
  ) {
    return;
  }

  event.respondWith(interceptor(event));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(cacheInvalidate());
});

async function interceptor({ request }) {
  await storeResponse(request);

  return caches.match(request);
}

async function storeResponse(request) {
  try {
    const response = await fetch(request);
    const cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  } catch {
    console.warn("Fetch failed.");
  }
}

async function cacheInvalidate() {
  const cacheNames = await caches.keys();

  return Promise.all(
    cacheNames
      .filter((name) => name !== CACHE_NAME)
      .map((name) => caches.delete(name))
  );
}
