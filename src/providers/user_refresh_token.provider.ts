import { RefreshToken } from "../entities/refresh_token.entity";
import { RefreshTokenCashProvider } from "./token_cache.provider";
import dayjs from 'dayjs';
import { v4 as uuid } from "uuid";

export class UserRefreshTokenProvider {
    private tokenCacheProvider = new RefreshTokenCashProvider();

    constructor() {
        this.tokenCacheProvider = new RefreshTokenCashProvider();
    }

    async refreshToken(user_id: string): Promise<RefreshToken | void> {
        const expires_in = dayjs().add(15, 'seconds').unix();

        const refreshTokenData = {
            id: uuid(),
            user_id: user_id,
            expires_in: expires_in,
        }

        const refreshToken = await this.tokenCacheProvider.set(refreshTokenData.id, refreshTokenData);

        return refreshToken;
    }

}