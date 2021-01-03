const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get("/:id", controller.usuarioListar);
/**
RESPONSE:
Se usuário existir:
Code: 200
    {
        "usuario": {
            "id": 1,
            "name": "José",
            "lastname": "Aquiles",
            "type": "P",
            "phone": 12987456321,
            "createdAt": "2020-12-18T01:28:20.000Z"
        },
        "message": "Usuario buscado."
    }

Se usuário não existir:
Code: 404
    {
        "code": "EMPTY",
        "usuario": null,
        "message": "Esse usuário não existe."
    }

Se ocorrer erro no banco:
Code: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao buscar o usuário: [mensagem do erro]."
    }

 */

router.post("/", controller.usuarioSalvar);
/**
BODY:
    {
        "name": "Tereza",
        "lastname": "Marques",
        "type": "P",
        "phone": 12988756333
    }
RESPONSE:
Se usuário criado corretamente:
Code: 201
    {
        "code": "OK",
        "usuario": {
            "id": 16,
            "name": null,
            "lastname": null,
            "type": null,
            "phone": null,
            "createdAt": null
        },
        "message": "Usuario criado."
    }

Se ocorrer erro no banco:
Code: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao criar o usuário: [mensagem do erro]."
    }
 **/

router.put("/:id", controller.usuarioAlterar);
/**
BODY:
    {
        "name": "Joséba",
        "lastname": "Aquiles",
        "type": "P",
        "phone": 12987456321
    }

RESPONSE:
Se usuário alterado corretamente:
Code: 200
    {
        "code": "OK",
        "message": "Usuario alterado."
    }
Se não existir o usuário no banco:
Code: 404
    {
        "code": "WARNING",
        "message": "Não existe nenhum usuário cadastrado com esse id."
    }

Se ocorrer erro no banco:
Code: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao criar o usuário: [mensagem do erro]."
    }
 **/

module.exports = router;
