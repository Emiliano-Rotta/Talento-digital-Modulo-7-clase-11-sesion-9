const express = require('express');
const { crearUsuario, obtenerUsuarios, actualizarUsuario, eliminarUsuario } = require('./controllers/usuarioController');

const app = express();
app.use(express.json());

// Rutas
app.post('/usuarios', crearUsuario);
app.get('/usuarios', obtenerUsuarios);
app.put('/usuarios/:id', actualizarUsuario);
app.delete('/usuarios/:id', eliminarUsuario);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
