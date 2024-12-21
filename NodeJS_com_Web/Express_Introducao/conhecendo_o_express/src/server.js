// Framework => basicamente é uma caixa de ferramentas/biblioteca/conjunto de bibliotecas
// para que possamos trabalhar durante o desenovlvimento

// O Express é um framework para resolvermos aplicações web(criar servidores HTTP)

const express = require("express");

const server = express(); // aqui está sendo criado o nosso server

server.get("/", (request, response) => {
    response.send("Servidor Express funcionando!\nVocê está na página inicial");
});

server.get("/arquivos", (req, res) => {
    res.send("Você está na página de arquivos");
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor Express iniciado em http://localhost:${PORT}`);
});
