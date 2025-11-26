import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";


import productsRouter from "./src/routes/products-router.js";
import usersRouter from "./src/routes/users-router.js";



dotenv.config();

const app = express();



const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", productsRouter);
app.use("/api", usersRouter);


app.use((req, res, next)=>{
    res.status(404).json({
        "message":"Ruta no encontrada",
        "error":"La ruta requerida no es valida."
    })
});

app.listen(PORT, ()=>{
    console.log(`Servidor en puerto ${PORT}`);
});