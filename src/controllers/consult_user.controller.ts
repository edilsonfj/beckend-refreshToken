import { Request, Response } from 'express';
import { ConsultUserUseCase } from '../usecases/consult_user.usecase';

export class ConsultUserController {
    private useCase: ConsultUserUseCase;

    constructor() {
        this.useCase = new ConsultUserUseCase();
    }

    async consultUser(req: Request, res: Response): Promise<void> {
        const { id } = req.body;

        try {
            const consultUser = await this.useCase.consultUser(id);
            res.status(201).json(consultUser);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}
