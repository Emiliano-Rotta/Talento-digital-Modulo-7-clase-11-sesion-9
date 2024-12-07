const { DataTypes } = require('sequelize');
const sequelize = require('../db/db');

const Producto = sequelize.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Producto;
