const CACHE_STATIC = 'static-cache-v1'

function hndlEventInstall(evt) {
	/**
	 * @returns {Promise<void>}
	 */
	async function cacheStaticFiles() {
		const files = [
			'//',
		]
		const cacheStat = await caches.open(CACHE_STATIC)
		await Promise.all(
			files.map(function (url) {
				return cacheStat.add(url).catch(function (reason) {
					// console.log(`'${url}' failed: ${String(reason)}`);
				})
			}),
		)
	}

	//  wait until all static files will be cached
	evt.waitUntil(cacheStaticFiles())
}

async function hndlEventActivete(evt) {
	const cacheNames = await caches.keys()
	await Promise.all(
		cacheNames
			.filter((name) => name !== CACHE_STATIC)
			.map((name) => caches.delete(name)),
	)
}

function hndlEventFetch(evt) {
	async function getFromCache() {
		const cache = await self.caches.open(CACHE_STATIC)
		const cachedResponse = await cache.match(evt.request)
		if (cachedResponse) {
			return cachedResponse
		}
		// wait until resource will be fetched from server and stored in cache
		const resp = await fetch(evt.request)
		await cache.put(evt.request, resp.clone())
		return resp
	}

	evt.respondWith(getFromCache())
}

self.addEventListener('install', hndlEventInstall)
self.addEventListener('activate', hndlEventActivete)
self.addEventListener('fetch', hndlEventFetch)
