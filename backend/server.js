const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const DotEnv = require('dotenv').config();
const puerto = process.env.PUERTO || 8000;
const DBConexion = require('./config/database');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

DBConexion();

app.use('/api/tareas', require('./rutas/rutasTareas'));
app.use(errorHandler);
//app.get('/api/tareas', (req,res)=>{
//	res.status(200).json({mensaje: 'Obtener todas las tareas'});
//});

app.listen(puerto, () => console.log(`Servidor escuchando en el puerto ${puerto}`));
