import { Router } from "express";
import { getAllProducts, getProductById, createProduct, deleteProduct } from "../controllers/products-controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";



const router = Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/createProduct",authenticateToken, createProduct);

router.delete("/products/delete/:id", deleteProduct);


export default router;