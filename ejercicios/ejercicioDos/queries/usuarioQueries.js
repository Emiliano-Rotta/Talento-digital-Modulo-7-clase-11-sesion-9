const Usuario = require('../models/Usuario');

const crearUsuario = async (datos) => {
    return await Usuario.create(datos);
};

const obtenerUsuarios = async () => {
    return await Usuario.findAll();
};

const actualizarUsuario = async (id, datos) => {
    return await Usuario.update(datos, { where: { id } });
};

const eliminarUsuario = async (id) => {
    return await Usuario.destroy({ where: { id } });
};

module.exports = { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario };
