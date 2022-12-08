import { Router } from "express";
import taskControllers from "../controllers/taskControllers.js";
import authMiddleWare from "../middleware/auth.middleware.js";

const router = Router()

router.get('/task', taskControllers.getTasks)
router.post('/task', authMiddleWare, taskControllers.addTask)
router.delete('/task/:id', authMiddleWare, taskControllers.deleteTask)

export default router