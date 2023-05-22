import { Request, Response } from 'express';
import { ConsultUserUseCase } from '../usecases/consult_user.usecase';

export class ConsultUserController {
    private useCase: ConsultUserUseCase;

    constructor() {
        this.useCase = new ConsultUserUseCase();
    }

    async consultUser(req: Request, res: Response): Promise<void> {
        const { email } = req.body;

        try {
            const consultUser = await this.useCase.consultUser(email);
            res.status(201).json(consultUser);
        } catch (error: any) {
            res.status(500).json({ error: error.message });
        }
    }
}
