const express = require("express");
const router = express.Router();
const controller = require("../controllers/usuarioController");

router.get("/:id", controller.usuarioListar);
/**
RESPONSE:
Se usuário existir:
Code: 200
    {
        "code": "OK",
        "usuario": {
            "user_id": 1,
            "name": "José",
            "lastname": "Aquiles",
            "type": "P",
            "phone": 12987456321,
            "created_at": "2020-12-18T01:28:20.000Z"
        },
        "message": "Usuario criado."
    }

Se usuário não existir:
Code: 200
    {
        "code": "EMPTY",
        "usuario": null,
        "message": "Esse usuário não existe."
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
        "code": "ERROR",
        "usuario": {
                        user_id: 13
                    },
        "message": "Usuário criado."
        
    }
Se ocorrer erro no banco:
Code: 500
    {
        "code": "ERROR",
        "usuario": null,
        "message": "Ocorreu algum erro ao criar o usuário."
    }
 **/

module.exports = router;