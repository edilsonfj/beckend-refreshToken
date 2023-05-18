import { User } from '../entities/user.entity';
import { UserCacheProvider } from '../providers/user_cache.provider';

export class ConsultUserService {
    private provider: UserCacheProvider;

    constructor() {
        this.provider = new UserCacheProvider();
    }

    async consultUser(email: string): Promise<User | undefined> {
        const user = await this.provider.get(email);
        return user;
    }
}

