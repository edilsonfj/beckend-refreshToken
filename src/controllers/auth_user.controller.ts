import { Request, Response } from 'express';
import { AuthUserUseCase } from '../usecases/auth_user.usecase';

export class AuthUserController {
    private useCase: AuthUserUseCase;

    constructor() {
        this.useCase = new AuthUserUseCase();
    }

    async authUser(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;

        try {
            const token = await this.useCase.authUser(email, password);
            res.status(201).json({ token });
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}