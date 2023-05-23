import { RefreshToken } from "../entities/refresh_token.entity";
import { redis } from "../database/redis.client";

export class RefreshTokenCashProvider {
    private redis = redis;

    constructor() {
        this.redis = redis;
    }

    async set(key: string, value: RefreshToken): Promise<RefreshToken> {
        const serializedValue = JSON.stringify(value);
        await this.redis.set(key, serializedValue);
        return value;
    }

    async get(key: string): Promise<RefreshToken | undefined> {
        const serializedValue = await this.redis.get(key);
        const parsedValue = serializedValue ? JSON.parse(serializedValue) as RefreshToken : undefined
        return parsedValue;
    }

    async update(key: string, value: RefreshToken): Promise<void> {
        const serializedValue = JSON.stringify(value);
        await this.redis.set(key, serializedValue);
    }

    async delete(key: string): Promise<void> {
        await this.redis.del(key);
    }
}