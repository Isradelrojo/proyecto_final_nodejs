const users = [
    { id: 1, name: "Alice", rol: "admin" },
    { id: 2, name: "Bob", rol: "user" },
    { id: 3, name: "Charlie", rol: "employee" }  
];


export const getAllUsers = (req, res) => {
    if (users.length === 0) {
        return res.status(200).json({ message: "No hay usuarios disponibles" });   
    }
    res.status(200).json(users);
};