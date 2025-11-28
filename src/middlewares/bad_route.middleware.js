


export const badRoute = (req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada", status: 404, timestamp: new Date().toISOString() });
};