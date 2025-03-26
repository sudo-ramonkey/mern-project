const express = require('express');
const router = express.Router();
const { getTareas, setTarea, actualizarTarea, eliminarTarea } = require('../controladores/controladorTareas');


router.route('/').get(getTareas).post(setTarea);

router.put('/:id', actualizarTarea);

router.delete('/:id', eliminarTarea);

module.export = router;
