import { AuthUserService } from "../services/auth_user.service";
import { TokenProvider } from "../providers/user_token.provider";
import { RefreshToken } from "../entities/refresh_token.entity";
import { RefreshTokenCashProvider } from "../providers/token_cache.provider";
import { UserRefreshTokenProvider } from "../providers/user_refresh_token.provider";

export class AuthUserUseCase {
    private authService: AuthUserService;
    private tokenProvider: TokenProvider;
    private refreshTokenProvider: RefreshTokenCashProvider;

    constructor() {
        this.authService = new AuthUserService();
        this.tokenProvider = new TokenProvider();
        this.refreshTokenProvider = new RefreshTokenCashProvider();
    }

    async authUser(email: string, password: string): Promise<{ token: string, refreshToken: RefreshToken }> {
        const user = await this.authService.authUser(email, password);

        const token = await this.tokenProvider.generateToken(user?.id as string);

        await this.refreshTokenProvider.delete(user?.id as string);
        const refreshToken = await new UserRefreshTokenProvider().refreshToken(user?.id as string) as RefreshToken;

        return { token, refreshToken };
    }
}