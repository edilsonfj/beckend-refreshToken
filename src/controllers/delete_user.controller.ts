import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../usecases/delete_user.usecase';

export class DeleteUserController {
    private useCase: DeleteUserUseCase;

    constructor() {
        this.useCase = new DeleteUserUseCase();
    }

    async deleteUser(req: Request, res: Response): Promise<void> {
        const { email } = req.body;

        try {
            await this.useCase.deleteUser(email);
            res.status(201).json({ message: 'Usuário deletado' });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}