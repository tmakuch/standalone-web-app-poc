import { installWorkerDependencies, invalidateCache } from './service-worker/lifecycle';

installWorkerDependencies(self, caches);
invalidateCache(self, caches);