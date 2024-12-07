const fs = require("fs");

//const streamLeitura = fs.createReadStream("arquivo.txt");
const streamLeitura = fs.createReadStream("vaiDormir.jpeg");
const buffer = [];

streamLeitura.on("data", (chunk) => {
    buffer.push(chunk);
    console.log("Um chunk foi processado");
});

streamLeitura.on("end", () => {
    //cada byte retornado representa um caracter do arquivo.txt
    console.log("Buffer: \n", buffer); // retorno: Buffer: [ <Buffer 4f 6c 61 20 6d 75 6e 64 6f> ]
    //const dadosCompletos = Buffer.concat(buffer).toString();
    //console.log("Dados lidos:\n", dadosCompletos); // retorno: Dados lidos: Ola mundo
});
