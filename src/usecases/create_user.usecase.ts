import { User } from '../entities/user.entity';
import { CreateUserService } from '../services/create_user.service';

export class UserUseCase {
    private service: CreateUserService;

    constructor() {
        this.service = new CreateUserService();
    }

    createUser(id: string, name: string, email: string, password: string): User {
        const user = new User(id, name, email, password);
        return this.service.createUser(user);
    }
}
