const CACHE = 'marruecos-2026-v6';
const GUIDE_PATHS = [
  '/', '/itinerario/', '/destinos/', '/monumentos/', '/restaurantes/', '/reservas/', '/presupuesto/', '/mapas/', '/informacion/', '/buscar/',
  ...['19','20','21','22','23','24','25','26','27','28','29','30'].map(day => `/itinerario/${day}-diciembre/`),
  ...['marrakech','alto-atlas','merzouga','fez','chefchaouen','tetuan'].map(id => `/destinos/${id}/`),
  ...['rahba','koutoubia','bab-agnaou','tumbas-saadi','bahia','ben-youssef','qubba','museo-marrakech','majorelle','museo-bereber','dar-el-bacha','bacha-coffee','jardin-secret','el-badi','mellah','lazama','palais-sebban','jemaa'].map(id => `/monumentos/${id}/`),
  '/manifest.webmanifest', '/favicon-marruecos.png', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-maskable-512.png', '/icons/apple-touch-icon.png'
];
const cacheGuide = async () => { const cache = await caches.open(CACHE); await Promise.all(GUIDE_PATHS.map(async url => { try { await cache.add(url); } catch { /* A route must not prevent offline installation. */ } })); };
self.addEventListener('install', event => event.waitUntil(cacheGuide().then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('message', event => { if (event.data?.type === 'CACHE_GUIDE') event.waitUntil(cacheGuide().then(() => event.source?.postMessage({ type:'GUIDE_CACHED' }))); });
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response; }).catch(() => caches.match(event.request).then(cached => cached || caches.match('/'))));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(event.request, copy)); return response; })));
});
