import { ConsultUserService } from '../services/consult_user.service';
import { DeleteUserService } from "../services/delete_user.service";

export class DeleteUserUseCase {
    private provider: ConsultUserService;
    private service: DeleteUserService;

    constructor() {
        this.provider = new ConsultUserService();
        this.service = new DeleteUserService();
    }

    async deleteUser(email: string): Promise<void> {

        const userAlreadyExists = await await this.provider.consultUser(email);

        if (!userAlreadyExists) {
            throw new Error('Usuário não encontrado');
        }

        await this.service.deleteUser(email);
    }
}