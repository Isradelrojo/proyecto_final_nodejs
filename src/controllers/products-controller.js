
const products = [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 }
];


export const getAllProducts = (req, res) => {
    if (products.length === 0) {
        return res.status(200).json({ message: "No hay productos disponibles" });

    }
    res.status(200).json(products);
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));  
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    };
};