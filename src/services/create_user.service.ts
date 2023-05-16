import { User } from '../entities/user.entity';
import { UserCacheProvider } from '../providers/user_cache.provider';

export class CreateUserService {
    private provider: UserCacheProvider;

    constructor() {
        this.provider = new UserCacheProvider();
    }

    createUser(user: User): User {
        this.provider.set(user.id, user);
        return user;
    }
}
