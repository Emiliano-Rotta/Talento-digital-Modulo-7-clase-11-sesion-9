const productoQueries = require('../queries/productoQueries');

const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await productoQueries.crearProducto(req.body);
        res.json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerProductos = async (req, res) => {
    try {
        const productos = await productoQueries.obtenerProductos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarProducto = async (req, res) => {
    try {
        const actualizado = await productoQueries.actualizarProducto(req.params.id, req.body);
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarProducto = async (req, res) => {
    try {
        const eliminado = await productoQueries.eliminarProducto(req.params.id);
        res.json(eliminado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto };
