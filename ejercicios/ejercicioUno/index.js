const express = require('express');
const { crearProducto, obtenerProductos, actualizarProducto, eliminarProducto } = require('./controllers/productoController');

const app = express();
app.use(express.json());

// Rutas
app.post('/productos', crearProducto);
app.get('/productos', obtenerProductos);
app.put('/productos/:id', actualizarProducto);
app.delete('/productos/:id', eliminarProducto);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
