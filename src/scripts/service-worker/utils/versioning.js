const version = 1;

export function getPrefixedCacheName(name) {
    return `v${version}-${name}`;
}

export function isKeyStale(key) {
    return key.indexOf(`v${version}-`) !== 0;
}