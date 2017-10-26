import { getPrefixedCacheName, isKeyStale } from './utils/versioning';

export function installWorkerDependencies(worker, caches) {
    worker.addEventListener('install', event => event.waitUntil(
        caches
            .open(getPrefixedCacheName('resources'))
            .then((cache) => cache.addAll([
                    '/',
                    '/resources/icons.ico',
                    '/index.css',
                    '/index.js',
                    '/manifest.json'
                ])
            )));
}

export function invalidateCache(worker, caches) {
    //damn, I'm doing this...
    worker.addEventListener('activate', event => {
        caches.keys().then(keys => console.log('keys', keys));
        return event.waitUntil(
            caches.keys().then(keys => Promise.all(keys
                .filter(isKeyStale)
                .map(key => {
                    console.log('removing cache', key);
                    return caches.delete(key);
                })
            ))
        )
    });
}

export function registerForFetch(worker, caches) {
    worker.addEventListener('fetch', function (event) {
        let respondPromise;
        if (event.request.method !== 'GET') {
            respondPromise = fetch(event.request);
        } else {
            respondPromise = caches.open(getPrefixedCacheName('resources')).then(function(cache) {
                return cache.match(event.request).then(function (response) {
                    return response || fetch(event.request).then(function(response) {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                });
            });
        }
        return event.respondWith(respondPromise);
    });
}