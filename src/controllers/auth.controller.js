import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const login = (req, res )=> {
    const {email, password} = req.body;

    // Simulamos la verificación de usuario
    if (email === "hola@gmail.com" && password === "password123") {
        const secretkey = process.env.SECRET_KEY;
        const token = jwt.sign(
            { email },
            secretkey,
            { expiresIn: "1h" }
        );
        return  res.status(200).json({ token });
    };
    res.status(401).json({ message: "Credenciales inválidas" });
};