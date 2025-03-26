const mongoose = require('mongoose');

const DBconexion = async () => {
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Conectado a la base de datos: ${conexion.connection.name}`);      
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = DBconexion;