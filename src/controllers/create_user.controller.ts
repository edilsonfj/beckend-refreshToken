import { Request, Response } from 'express';
import { UserUseCase } from '../usecases/create_user.usecase';

export class UserController {
    private useCase: UserUseCase;

    constructor() {
        this.useCase = new UserUseCase();
    }

    createUser(req: Request, res: Response): void {
        const { id, name, email, password } = req.body;

        try {
            const createdUser = this.useCase.createUser(id, name, email, password);
            res.status(201).json(createdUser);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
