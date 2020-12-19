const express = require('express');
const router = express.Router();
const controller = require("../controllers/ajudaController");

router.get('/', controller.ajudasListar);
router.get('/', controller.ajudasUsuarioListar); //precisa mudar p request param
router.get('/:id', controller.ajudaListar);
router.post('/', controller.ajudaSalvar);
/**
BODY:
{
    "title": "titulo",
    "description": "description",
    "userId": 1,
    "allowPhoneNumber": false,
    "professorId": null,
    "languageId": 1
}
Se criado corretamente:
RESPONSE:
Code: 201
BODY:
{
    "code": "OK",
    "ajudas": {
        "ajudaId": 4
    },
    "message": "Ajuda cadastrada."
}
Se ocorrer um erro:
CODE: 500
BODY:
{
    "code": "ERROR",
    "ajudas": null,
    "message": "Ocorreu algum erro ao cadastrar a ajuda: [descrição do erro do banco]."
}
**/
router.delete('/:id', controller.ajudaDeletar);

module.exports = router;