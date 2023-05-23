import { Router } from "express";
import { CreateUserController } from "../controllers/create_user.controller";
import { ConsultUserController } from "../controllers/consult_user.controller";
import { DeleteUserController } from "../controllers/delete_user.controller";
import { AuthUserController } from "../controllers/auth_user.controller";

const router = Router();

router.post('/create-users', (req, res) => {
    new CreateUserController().createUser(req, res)
})

router.get('/consult-users', (req, res) => {
    new ConsultUserController().consultUser(req, res)
})

router.delete('/delete-users', (req, res) => {
    new DeleteUserController().deleteUser(req, res)
})

router.post('/auth-users', (req, res) => {
    new AuthUserController().authUser(req, res)
})

export default router;