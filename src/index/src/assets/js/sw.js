import { ExpirationPlugin } from 'workbox-expiration'
import { cleanupOutdatedCaches, precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

// pre-cache assets built using Vite.js
precacheAndRoute(self.__WB_MANIFEST)

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

// remove old preCache done by Vite.js & workbox
cleanupOutdatedCaches()

// manually remove old caches
const obsoleteCaches = ['fonts', 'try', 'github-api']

for (const cacheName of obsoleteCaches) {
    caches.delete(cacheName)
}