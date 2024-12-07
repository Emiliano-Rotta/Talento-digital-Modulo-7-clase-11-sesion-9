const Producto = require('../models/Producto');

const crearProducto = async (datos) => {
    return await Producto.create(datos);
};

const obtenerProductos = async () => {
    return await Producto.findAll();
};

const actualizarProducto = async (id, datos) => {
    return await Producto.update(datos, { where: { id } });
};

const eliminarProducto = async (id) => {
    return await Producto.destroy({ where: { id } });
};

module.exports = { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto };
