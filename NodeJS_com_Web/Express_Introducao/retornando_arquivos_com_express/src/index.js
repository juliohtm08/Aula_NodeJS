/* 
    Objetivos da aula:
        => Entender quais são os arquivos estáticos de uma aplicação web e como servi-los de forma eficiente através do Express
        => Entender como servir arquivos HTML através de rotas específicas no Express
*/

const express = require("express");

const app = express();

// O use() quer dizer que a gente quer usar algum comportamento do nosso servidor
app.use(express.static("public")); //por padrão ele ja pega na raiz do projeto, mas também pode inserir outros caminhos(./...)

app.get("/", (req, res) => {
    // Aqui está retornando o nosso arquivo html no servidor
    res.sendFile(__dirname + "/views/index.html");
});

const PORT = 3000;

app.listen(PORT, () => console.log("Server iniciado!"));
