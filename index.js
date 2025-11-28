import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";


import productsRouter from "./src/routes/products-router.js";
import usersRouter from "./src/routes/users-router.js";
import authRouter from "./src/routes/auth.router.js";   
import { badRoute } from "./src/middlewares/bad_route.middleware.js";




dotenv.config();

const app = express();



const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", productsRouter);
app.use("/api", usersRouter);
app.use("/api/auth", authRouter);


app.use(badRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor en puerto ${PORT}`);
});