const express = require("express");
const router = express.Router();
const controller = require("../controllers/ajudaController");

router.get("/", controller.ajudasListar);
router.get("/", controller.ajudasUsuarioListar);
router.get("/:id", controller.ajudaListar);
router.post("/", controller.ajudaSalvar);
router.delete("/:id", controller.ajudaDeletar);

module.exports = router;
