import { Router } from "express";
import usersControllers from "../controllers/usersControllers.js";

const router = Router()

router.get('/user', usersControllers.getUsers)
router.post('/user', usersControllers.addUser)
router.post('/login', usersControllers.login)

export default router