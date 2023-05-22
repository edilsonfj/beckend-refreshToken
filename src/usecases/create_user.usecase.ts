import { User } from '../entities/user.entity';
import { CreateUserService } from '../services/create_user.service';
import { ConsultUserService } from '../services/consult_user.service';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

export class CreateUserUseCase {
    private provider: ConsultUserService;
    private service: CreateUserService;

    constructor() {
        this.provider = new ConsultUserService();
        this.service = new CreateUserService();
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        const userAlreadyExists = await await this.provider.consultUser(email);

        if (userAlreadyExists) {
            throw new Error('Usuário já cadastrado');
        }

        const idGeneration = uuidv4();
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User(idGeneration, name, email, hashedPassword);

        return this.service.createUser(user);
    }
}
