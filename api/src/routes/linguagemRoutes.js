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
        "linguagem": [
            {
                "language_id": 1,
                "language_name": "JAVA"
            },
            {
                "language_id": 2,
                "language_name": "JAVA SCRIPT"
            }
        ],
        "message": "Linguagens cadastradas."
    }
Se não houver linguagens cadastradas:
CODE: 404
    {
        "code": "EMPTY",
        "linguagem": null
        "message": "Não existem linguagens cadastradas."
    }
Se ocorrer ERRO:
CODE: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao buscar as linguagens."
    }
**/
router.get('/:id', controller.linguagemListar);
/**
RESPONSE:
Se houver linguagens cadastradas:
CODE: 200
    {
        "code": "OK",
        "linguagem": {
                    "language_id": 1,
                    "language_name": "JAVA"
                    },
        "message": "Linguagem buscada."
    }
Se não houver linguagens cadastradas:
CODE: 404
    {
        "code": "EMPTY",
        "linguagem": null,
        "message": "A linguagem buscada não existe."
    }
Se ocorrer ERRO:
CODE: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao buscar a linguagem."
    }
**/

router.post('/', controller.linguagemSalvar);
/**
BODY:
    {
        "language_name": "KOTLIN"
    }
Se salvar corretamente:
CODE: 201
    {
        "code": "OK",
        "usuario": {
            "user_id": 5
        },
        "message": "Linguagem criada."
    }
Se ocorrer ERRO:
CODE: 500
{
    "code": "ERROR",
    "usuario": null,
    "message": "Ocorreu algum erro ao salvar a linguagem."
}
**/



module.exports = router;