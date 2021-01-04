const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get("/:id", controller.usuarioListar);
router.post("/", controller.usuarioSalvar);
router.put("/:id", controller.usuarioAlterar);

module.exports = router;
