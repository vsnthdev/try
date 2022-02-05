import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

precacheAndRoute(self.__WB_MANIFEST)

// remove old preCache done by Vite.js & workbox
cleanupOutdatedCaches()

const libHosts = ['cdn.tailwindcss.com', 'tailwindcss.com', 'vyaktitva.vercel.app', 'cdn.skypack.dev', 'unpkg.com']
registerRoute(
    req => libHosts.includes(req.url.host),
    new StaleWhileRevalidate({
        cacheName: 'lib',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 3600 * 24 * 30,
            }),
        ],
    }),
)

registerRoute(
    req => ['api.github.com', 'raw.githubusercontent.com'].includes(req.url.host),
    new StaleWhileRevalidate({
        cacheName: 'github',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 3600 * 24 * 30,
            }),
        ],
    }),
)

// manually remove old caches
self.addEventListener('activate', async () => {
    const names = await caches.keys()
    for (const name of names) {
        if (name.includes('workbox') == false) await caches.delete(name)
    }
})
