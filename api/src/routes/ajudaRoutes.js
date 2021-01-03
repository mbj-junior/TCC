const express = require('express');
const router = express.Router();
const controller = require("../controllers/ajudaController");

router.get('/', controller.ajudasListar);
/**
Se ok:
CODE: 200
BODY: 
{
    "code": "OK",
    "ajudas": [
        {
            "id": 1,
            "title": "titulo1",
            "description": "description1",
            "userId": 1,
            "allowPhoneNumber": false,
            "professorId": null,
            "languageId": 1
        },
        {
            "id": 2,
            "title": "titulo2",
            "description": "description2",
            "userId": 1,
            "allowPhoneNumber": true,
            "professorId": null,
            "languageId": 1
        }
    ],
    "message": "Ajudas cadastradas."
}

Se não existir nenhuma ajuda cadastrada:
CODE: 404
BODY:
    {
        "code": "EMPTY",
        "ajudas": null,
        "message": "Não existem ajudas cadastradas."
    }

Se ocorrer algum erro interno:
CODE: 500
RESPONSE:
    {
        "code": "ERROR",
        "ajudas": null,
        "message": "Ocorreu algum erro ao buscar as ajudas: [mensagem do erro]."
    }
**/

router.get('/', controller.ajudasUsuarioListar); //precisa mudar p request param
router.get('/:id', controller.ajudaListar);
/**
Se ok:
CODE: 200
BODY:
    {
        "code": "OK",
        "ajudas": {
            "id": 2,
            "title": "titulo2",
            "description": "description2",
            "userId": 1,
            "allowPhoneNumber": false,
            "professorId": null,
            "languageId": 1
        },
        "message": "Ajuda buscada."
    }

Se não existir nenhuma ajuda cadastrada:
CODE: 404
BODY:
    {
        "code": "EMPTY",
        "ajudas": null,
        "message": "A ajuda buscadas não existe."
    }

Se ocorrer algum erro interno:
CODE: 500
RESPONSE:
    {
        "code": "ERROR",
        "ajudas": null,
        "message": "Ocorreu algum erro ao buscar a ajuda: [mensagem do erro]."
    }
**/
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
        "message": "Ocorreu algum erro ao cadastrar a ajuda: [mensagem do erro]."
    }
**/
router.delete('/:id', controller.ajudaDeletar);
/**
Se ok:
CODE: 200
BODY:
    {
        "code": "OK",
        "ajudas": null,
        "message": "Ajuda deletada."
    }

Se ocorrer algum erro interno:
CODE: 500
RESPONSE:
    {
        "code": "ERROR",
        "ajudas": null,
        "message": "Ocorreu algum erro ao deletar a ajuda: [mensagem do erro]."
    }
**/

module.exports = router;