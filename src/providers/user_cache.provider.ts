import NodeCache from 'node-cache';

export class UserCacheProvider {
    private cache: NodeCache;

    constructor() {
        this.cache = new NodeCache();
    }

    set(key: string, value: any): void {
        this.cache.set(key, value);
    }

    get(key: string): any {
        return this.cache.get(key);
    }
}
