const express = require('express');
const router = express.Router();
const controller = require("../controllers/linguagensController");

router.get('/', controller.linguagensListar);
/**
RESPONSE:
Se houver linguagens cadastradas:
CODE: 200
    {
        "code": "OK",
        "linguagens": [
            {
                "languageId": 1,
                "languageName": "JAVA"
            },
            {
                "languageId": 2,
                "languageName": "JAVA SCRIPT"
            }
        ],
        "message": "Linguagens cadastradas."
    }
Se não houver linguagens cadastradas:
CODE: 404
    {
        "code": "EMPTY",
        "linguagens": null
        "message": "Não existem linguagens cadastradas."
    }
Se ocorrer ERRO:
CODE: 500
    {
        "code": "ERROR",
        "linguagens": null,
        "message": "Ocorreu algum erro ao buscar as linguagens: [mensagem do erro]."
    }
**/
router.get('/:id', controller.linguagemListar);
/**
RESPONSE:
Se houver linguagens cadastradas:
CODE: 200
    {
        "code": "OK",
        "linguagens": {
            "languageId": 1,
            "languageName": "JAVA"
        },
        "message": "Linguagem buscada."
    }
Se não houver linguagens cadastradas:
CODE: 404
    {
        "code": "EMPTY",
        "linguagens": null,
        "message": "A linguagem buscada não existe."
    }
Se ocorrer ERRO:
CODE: 500
    {
        "code": "ERROR",
        "linguagens": null,
        "message": "Ocorreu algum erro ao buscar a linguagem: [mensagem do erro]."
    }
**/

router.post('/', controller.linguagemSalvar);
/**
BODY:
    {
        "languageName": "JAVA"
    }
Se salvar corretamente:
CODE: 201
    {
        "code": "OK",
        "linguagens": {
            "languageId": 7,
            "languageName": null
        },
        "message": "Linguagem criada."
    }
Se ocorrer ERRO:
CODE: 500
    {
        "code": "ERROR",
        "linguagens": null,
        "message": "Ocorreu algum erro ao salvar a linguagem: [mensagem do erro]."
    }
**/



module.exports = router;