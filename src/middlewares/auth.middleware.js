import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

const secretkey = process.env.SECRET_KEY;

export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];   
    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado" });
    }
    jwt.verify(token, secretkey, (err) => {
        if (err) {
            return res.status(403).json({ message: "Token inválido" });
        }   
        next();
    });
}   