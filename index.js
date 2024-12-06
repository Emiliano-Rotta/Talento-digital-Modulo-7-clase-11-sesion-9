//npm install sequelize pg pg-hstore dotenv

const sequelize = require("./db/config");
const Habitacion = require("./models/Habitacion");

async function main() {
    try {
        await sequelize.sync({ force:true }) // Sincronizar la base de datos con force: true (¡Cuidado! Borra datos existentes)
        console.log("Base de datos sincronizada con force true")

        async function crearHabitacion() {
            const nuevaHabitacion = await Habitacion.create({
                numero: 101,
                tipo: 'Doble',
                precio: 75.5,
            });
            console.log('Habitación creada:', nuevaHabitacion.toJSON());
        }
        async function crearHabitacionDos() {
            await Habitacion.create({
                numero: 102,
                tipo: 'Simple',
                precio: 50,
                disponible: false,
            });
            
        }

        async function obtenerHabitaciones() {
            const habitaciones = await Habitacion.findAll();
            console.log('Habitaciones:', habitaciones.map(h => h.toJSON()));
        }

        async function actualizarPrecio(id, nuevoPrecio) {
            await Habitacion.update({ precio: nuevoPrecio }, { where: { id } });
            console.log(`Precio de la habitación con ID ${id} actualizado a ${nuevoPrecio}.`);
        }

        async function eliminarHabitacion(id) {
            await Habitacion.destroy({ where: { id } });
            console.log(`Habitación con ID ${id} eliminada.`);
        }

        await crearHabitacion()
        await crearHabitacionDos()
        await obtenerHabitaciones()
        await actualizarPrecio(2, 55.5);
        await eliminarHabitacion(1)
        await obtenerHabitaciones()

    } catch (error) {
        console.error('Error en la aplicación:', error);
    } finally {
        await sequelize.close();
        console.log('Conexion cerrada.')
    }
    
}
main()