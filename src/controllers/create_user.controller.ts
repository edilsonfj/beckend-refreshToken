import { Request, Response } from 'express';
import { CreateUserUseCase } from '../usecases/create_user.usecase';

export class CreateUserController {
    private useCase: CreateUserUseCase;

    constructor() {
        this.useCase = new CreateUserUseCase();
    }

    async createUser(req: Request, res: Response): Promise<void> {
        const { name, email, password } = req.body;

        try {
            const createdUser = await this.useCase.createUser(name, email, password);
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
