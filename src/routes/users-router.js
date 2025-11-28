import { Router } from "express";
import { getAllUsers } from "../controllers/users-controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



const router = Router();

router.get("/users", authenticateToken, getAllUsers);




export default router;