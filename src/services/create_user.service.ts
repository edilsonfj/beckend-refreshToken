import { User } from '../entities/user.entity';
import { UserCacheProvider } from '../providers/user_cache.provider';

export class CreateUserService {
    private provider: UserCacheProvider;

    constructor() {
        this.provider = new UserCacheProvider();
    }

    async createUser(user: User): Promise<User> {
        await this.provider.set(user.email, user);
        return user;
    }
}
