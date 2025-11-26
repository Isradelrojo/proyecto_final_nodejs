import { Router } from "express";
import { getAllProducts, getProductById, createProduct } from "../controllers/products-controller.js";



const router = Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getProductById);

router.post("/createProduct", createProduct);


export default router;