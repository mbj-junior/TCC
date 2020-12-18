const express = require('express');
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get('/:id', controller.usuarioListar);
router.post('/', controller.usuarioListar);

module.exports = router;