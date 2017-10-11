import { installWorkerDependencies, invalidateCache, registerForFetch } from './service-worker/lifecycle';

try {
    installWorkerDependencies(self, caches);
    invalidateCache(self, caches);
    registerForFetch(self, caches);
} catch (e) {
    console.error('service worker error', e);
}