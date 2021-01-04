# Trabalho de conclusão - TADS IFSP

Plataforma web para conectar monitores e estudantes de linguagem de programação

## Requerimentos

- Node.js

``` bash
sudo apt install nodejs
```

- MySQL

``` bash
sudo apt install Mysql-server
```

## Como executar

### Copie o link do repositório do Git e faça a clonagem

```bash
git clone https://github.com/mbj-junior/TCC
```

### Instalando o banco MySql

Crie o banco

```SQL
CREATE DATABASE oumeajuda_db;
```

Crie o usuario e atribua permissões

```SQL
CREATE USER 'oumeajuda'@'localhost' IDENTIFIED BY 'oumeajuda';
GRANT ALL PRIVILEGES ON * . * TO 'oumeajuda'@'localhost';
ALTER USER 'oumeajuda'@'localhost' IDENTIFIED WITH mysql_native_password BY 'oumeajuda';
FLUSH PRIVILEGES;
```

Instalar o tabelas conforme especificado no arquivo

```bash
TCC/api/db/oumeajuda_db
```

### Iniciando a API

Entre na pasta

```bash
cd TCC/api
```

Instale o gerenciado de pacotes NPM

```javascript
npm install
```

Inicie a aplicação

```javascript
npm start
```

### Iniciando a serviço WEB

Entre na pasta

```bash
cd TCC/oumeajuda
```

Instale o gerenciado de pacotes NPM

```javascript
npm install
```

Inicie a aplicação

```javascript
npm start
```

### Autor

- [Marcio Junior](https://github.com/mbj-junior)
