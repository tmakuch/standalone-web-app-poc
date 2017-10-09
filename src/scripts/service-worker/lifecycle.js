import { getPrefixedCacheName, isKeyStale } from './utils/versioning';

export function installWorkerDependencies(worker, caches) {
    worker.addEventListener('install', event => event.waitUntil(
        caches
            .open(getPrefixedCacheName('testing'))
            .then((cache) => cache.addAll([
                    '/',
                    '/index.css',
                    '/index.js',
                    '/manifest.json'
                ])
            )));
}

export function invalidateCache(worker, caches) {
    //damn, I'm doing this...
    worker.addEventListener('activate', event => {
        event.waitUntil(
            caches.keys().then(keys => Promise.all(keys
                .filter(isKeyStale)
                .map(key => caches.delete(key))
            ))
        );
    });
}