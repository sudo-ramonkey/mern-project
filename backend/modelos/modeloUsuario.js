const mongoose = require('mongoose');
const { type } = require('mquery/lib/env')

const esquemaUsuario = mongoose.Schema(
    {
    nombre:{
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'No se ha proporcionado el email']
    },
    password:{
        type: String,
        required: [true, 'No se proporciono la contraseña']
    }
    },
    { timestamps: true}
);


module.exports = mongoose.model('Usuario', esquemaUsuario);