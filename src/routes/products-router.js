import { Router } from "express";
import { getAllProducts, getProductById, createProduct } from "../controllers/products-controller.js";
import authRouter from "./auth.router.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



const router = Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/createProduct",authenticateToken, createProduct);


export default router;