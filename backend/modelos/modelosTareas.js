const { text } = require('express');
const mongoose = require('mongoose');

const esquemaTareas = new mongoose.Schema(
    {
    texto: {
        type: String,
        required: [true, 'El texto es requerido']
    },
    },
    {timestamps: true}
);

module.exports = mongoose.model('Tarea', esquemaTareas);