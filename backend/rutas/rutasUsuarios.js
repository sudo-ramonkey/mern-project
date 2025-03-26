const express = require('express');
const router = express.Router();
const { reqistrarUsuario, getUsuarioActual, loginUsuario } = require('../controladores/controladorUsuarios');

router.route('/', registrarUsuario);
router.route('/login', loginUsuario);
router.route('/actual', getUsuarioActual);

module.exports = router;