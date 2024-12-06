// models/Habitacion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

//creacion del modelo de Habitacion

const Habitacion = sequelize.define('Habitacion',{
    numero: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tipo:{
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
},{
    timestamps: true,
    freezeTableName:true,  // No cambia el nombre de la tabla
})


module.exports = Habitacion;