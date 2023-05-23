import { User } from "../entities/user.entity";
import { UserCacheProvider } from "../providers/user_cache.provider";
import bcrypt from "bcrypt";

export class AuthUserService {
    private provider: UserCacheProvider;

    constructor() {
        this.provider = new UserCacheProvider();
    }

    async authUser(email: string, password: string): Promise<User | undefined> {
        const user = await this.provider.get(email);

        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            throw new Error('Senha incorreta');
        }

        return user;
    }
}