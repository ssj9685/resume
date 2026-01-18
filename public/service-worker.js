const CACHE_NAME = "pwa-cache-v2";

/**
 * @type {Cache}
 */
let cacheInstance;

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
	const cache = await getCacheInstance();

	try {
		const response = await fetch(request);
		cache.put(request, response.clone());
		return response;
	} catch {
		return cache.match(request);
	}
}

async function cacheInvalidate() {
	const cacheNames = await caches.keys();

	return Promise.all(
		cacheNames
			.filter((name) => name !== CACHE_NAME)
			.map((name) => caches.delete(name)),
	);
}

async function getCacheInstance() {
	if (!cacheInstance) {
		cacheInstance = await caches.open(CACHE_NAME);
	}

	return cacheInstance;
}
