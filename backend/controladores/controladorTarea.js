const Tarea = require('../modelos/modelosTareas');
const asyncHandler = require('express-async-handler');

const getTareas = (req, res)=>{
	const tareas = asyncHandler(async (req, res) => {
		const tareas = await Tarea.find({});
		res.json(tareas);
	});
}

const setTarea = (req, res)=>{
	if(!req.body.texto){
		res.status(400);
		throw new Error('Por favor proporcione una tarea');
		// HOLISS
		//res.status(400).json({mensaje: 'Por favor proporciona una tarea'})
	}else{
		const tarea = new Tarea({texto: req.body.texto});
		res.status(200).json(tarea);
	}
};

const actualizarTarea = (req, res)=>{
	res.status(200).json({mensaje: `Tarea ${req.params.id} actualizado`})
};

const eliminarTarea = (req, res)=>{
	res.status(200).json({mensaje: `Tarea ${req.params.id} elimiando`})
};

module.exports = { getTareas, setTarea, actualizarTarea, eliminarTarea };