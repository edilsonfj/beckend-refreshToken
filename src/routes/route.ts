import { Router } from "express";
import { UserController } from "../controllers/create_user.controller";

const router = Router();

router.post('/create-users', (req, res) => {
    new UserController().createUser(req, res)
})

export default router;