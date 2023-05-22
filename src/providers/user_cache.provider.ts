import { User } from '../entities/user.entity';
import { redis } from '../database/redis.client';

export class UserCacheProvider {
    private redis = redis;

    constructor() {
        this.redis = redis;
    }

    async set(key: string, value: User): Promise<void> {
        const serializedValue = JSON.stringify(value);
        await this.redis.set(key, serializedValue);
    }

    async get(key: string): Promise<User | undefined> {
        const serializedValue = await this.redis.get(key);
        const parsedValue = serializedValue ? JSON.parse(serializedValue) as User : undefined
        return parsedValue;
    }

    async update(key: string, value: User): Promise<void> {
        const serializedValue = JSON.stringify(value);
        await this.redis.set(key, serializedValue);
    }

    async delete(key: string): Promise<void> {
        await this.redis.del(key);
    }
}
