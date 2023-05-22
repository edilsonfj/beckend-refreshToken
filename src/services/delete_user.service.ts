import { UserCacheProvider } from "../providers/user_cache.provider";

export class DeleteUserService {
    private provider: UserCacheProvider;

    constructor() {
        this.provider = new UserCacheProvider();
    }

    async deleteUser(email: string): Promise<void> {
        await this.provider.delete(email);
    }
}