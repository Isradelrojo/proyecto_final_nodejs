// const users = [
//     { id: 1, name: "Alice", rol: "admin" },
//     { id: 2, name: "Bob", rol: "user" },
//     { id: 3, name: "Charlie", rol: "employee" }  
// ];
import { users } from '../models/user.model.js';
import * as model from '../models/user.model.js';


export const getAllUsers = async (req, res) => {
    const users = await model.users();
    if (users.length === 0) {
        return res.status(400).json({ message: "No hay usuarios disponibles" });   
    }
    res.status(200).json(users);
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await model.getUsersById(id);
  if (!user) {
    return res.status(404).json({ error: "Not Found" });
  }
  res.json(user);
};

export const createUser = async (req, res) => {
  if (typeof req.body.name == undefined) {
    return res.status(422).json({ error: "El nombre es obligatorio" });
  }

  const { name, email, password, rol } = req.body;

  const user = await model.createUser({ name, email, password, rol });

  res.status(201).json(user);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deleted = await model.deleteUser(id);

  if (!deleted) {
    return res.status(404).json({ error: "Not Found" });
  }

  res.json({ message: "User deleted" });
};
