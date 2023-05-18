import { User } from '../entities/user.entity';
import { ConsultUserService } from '../services/consult_user.service';

export class ConsultUserUseCase {
  private service: ConsultUserService;

  constructor() {
    this.service = new ConsultUserService();
  }

  async consultUser(id: string): Promise<User | undefined> {
    const user = await this.service.consultUser(id);
    return user;
  }
}


