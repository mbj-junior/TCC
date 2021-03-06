const express = require("express");
const router = express.Router();
const controller = require("../controllers/linguagensController");

router.get("/", controller.linguagensListar);
router.get("/:id", controller.linguagemListar);
router.post("/", controller.linguagemSalvar);

module.exports = router;
