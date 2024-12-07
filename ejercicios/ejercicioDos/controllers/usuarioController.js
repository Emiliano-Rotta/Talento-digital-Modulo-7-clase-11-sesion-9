const usuarioQueries = require('../queries/usuarioQueries');

const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioQueries.crearUsuario(req.body);
        res.json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioQueries.obtenerUsuarios();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const actualizarUsuario = async (req, res) => {
    try {
        const actualizado = await usuarioQueries.actualizarUsuario(req.params.id, req.body);
        res.json(actualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const eliminarUsuario = async (req, res) => {
    try {
        const eliminado = await usuarioQueries.eliminarUsuario(req.params.id);
        res.json(eliminado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario };
