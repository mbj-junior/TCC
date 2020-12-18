================================================================
GET: /ajuda --- retorna todas ajudas
Response:
    [
        {
            "help_id": 1,
            "description": "Até 100 caracteres", --- precisa aumetar a qde de letras no banco
            "user_id": 1,
            "allow_phone_number": true ou false,
            "professor_id": 1,
            "language_id": 1,
            "created_at": TIMESTAMP,
            "accepted_at": TIMESTAMP,
            "closed_at": TIMESTAMP
        },
        {...}
    ]
----------------------
GET: /ajuda?usuarioId=1 --- retorna todas ajudas de UM usuário 
Nota: esse get por usuário tem um problema 
-- não usar ainda pq vai mudar a URL
Response:
    [
        {
            "help_id": 1,
            "description": "Até 100 caracteres", --- precisa aumetar a qde de letras no banco
            "user_id": 1,
            "allow_phone_number": true ou false,
            "professor_id": 1,
            "language_id": 1,
            "created_at": TIMESTAMP,
            "accepted_at": TIMESTAMP,
            "closed_at": TIMESTAMP
        },
        {...}
    ]
----------------------
GET: /ajuda/:id --- retorna UMA ajuda
Response:
    {
        "help_id": 1,
        "description": "Até 100 caracteres", --- precisa aumetar a qde de letras no banco
        "user_id": 1,
        "allow_phone_number": true ou false,
        "professor_id": 1,
        "language_id": 1,
        "created_at": TIMESTAMP,
        "accepted_at": TIMESTAMP,
        "closed_at": TIMESTAMP
    }
----------------------
POST: /ajuda --- salva UMA ajuda
    body: 
    { ---- kde o title?
        "description": "Até 100 caracteres", --- precisa aumentar a qde de letras no banco
        "user_id": 1,
        "allow_phone_number": true ou false,
        "professor_id": 1,
        "language_id": 1
    }
----------------------
DELETE: /ajuda/:id --- deleta UMA ajuda
Response:
    {
        "code": "OK",
        "mensagem": "Ajuda Deletada!"
    }

================================================================
GET: /linguagem --- retorna todas linguagens
Response:
    [
        {
            "language_id": "1",
            "language_name": "blablabla"
        },
        {...}
    ]
----------------------
GET: /linguagem/:id --- retorna uma linguagem
Response:
    {
        "language_id": "1",
        "language_name": "blablabla"
    }
----------------------
POST: /linguagem --- salva uma linguagem
    body: 
        {
            "language_name": "blabla"
        }
================================================================
GET: /usuário/:id --- retorna um usuário
Response:
    {
        "user_id": 1,
        "name": "JOsé",
        "lastname": "de Abreu",
        "type": "P" ou "A"
        "phone": "valor criptografado", ----depois precisa alterar no banc0 p aceitar um varchar
        "created_at": TIMESTAMP
    }
----------------------
POST: /usuario --- salva um usuário
    body: 
    {
        "user_id": 1,
        "name": "JOsé",
        "lastname": "de Abreu",
        "type": "P" ou "A"
        "phone": "valor criptografado" ----depois precisa alterar no banc0 p aceitar um varchar
    }
================================================================
POST: login --- faz login
    body: 
    {
        "token": "dadfasdkfmskalgm"
    }
Nota: token gerado pelo cript do email + senha cript
----------------------
POST: /login/new --- Cria um login
    body: 
    {
        "token": "dadfasdkfmskalgm"
    }
    Nota: token gerado pelo cript do email + senha cript
