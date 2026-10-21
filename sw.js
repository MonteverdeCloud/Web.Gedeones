// Service Worker — Turno de Oración · Camp. Monteverde
// Estrategia:
//   - data.js  → network-first (red primero, caché si falla)
//   - resto    → cache-first con fallback a red
const CACHE_NAME = "turnos-oracion-v1"; // ← súbelo en cada release

const ARCHIVOS_ESTATICOS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon.svg",
    "./icons/icon-192.png",
    "./icons/icon-512.png"
];

// Instalación: cachear estáticos (data.js NO se cachea aquí)
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ARCHIVOS_ESTATICOS).catch(() => { });
        })
    );
    self.skipWaiting();
});

// Activación: borrar cachés viejas y tomar control
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
            );
        })
    );
    self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    // ---- data.js: network-first ----
    if (url.pathname.endsWith("data.js")) {
        event.respondWith(
            fetch(event.request)
                .then((respuesta) => {
                    // Guardar copia fresca en caché por si luego no hay red
                    const copia = respuesta.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, copia);
                    });
                    return respuesta;
                })
                .catch(() => {
                    // Sin red: usar la última copia cacheada
                    return caches.match(event.request);
                })
        );
        return;
    }

    // ---- Resto: cache-first ----
    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request)
                .then((respuesta) => {
                    if (respuesta && respuesta.status === 200 && respuesta.type === "basic") {
                        const copia = respuesta.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, copia);
                        });
                    }
                    return respuesta;
                })
                .catch(() => caches.match("./index.html"));
        })
    );
});