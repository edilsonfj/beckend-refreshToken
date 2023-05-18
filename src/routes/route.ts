import { Router } from "express";
import { CreateUserController } from "../controllers/create_user.controller";
import { ConsultUserController } from "../controllers/consult_user.controller";

const router = Router();

router.post('/create-users', (req, res) => {
    new CreateUserController().createUser(req, res)
})

router.get('/consult-users/', (req, res) => {
    new ConsultUserController().consultUser(req, res)
})

export default router;