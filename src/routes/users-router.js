import { Router } from "express";
import { getAllUsers, getUserById, createUser, deleteUser } from "../controllers/users-controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



const router = Router();

router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/createUser", authenticateToken, createUser);
router.delete("/users/delete/:id", authenticateToken, deleteUser);




export default router;