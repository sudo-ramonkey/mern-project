const asyncHandler = require('express-async-handler');

const registrarUsuario = asyncHandler(async (req, res) => {
    res.json({mensaje: 'Usuario registrado satisfactoriamente'});
});

const loginUsuario = asyncHandler(async (req, res) => {
    res.json({mensaje: 'Usuario ha inciado sesion'});
});

const getUsuarioActual = asyncHandler( async (req, res) => {
    res.json({mensaje: 'Datos del usuario actual'});
});

module.exports = { registrarUsuario, getUsuarioActual, loginUsario };