const fs = require("fs");

// Gerando um novo arquivo de forma síncrona

/* try {
    // O 'writeFileSync' gera um novo arquivo contendo um texto e caso ja tenha, este arquivo será sobrescrito
    fs.writeFileSync("./arquivo.txt", "olá mundo", "utf-8");
    console.log("arquivo criado com sucesso");
} catch (error) {
    console.log("erro ao escrever arquivo", error.message);
} */

//Gerando um arquivo de forma assíncrona

const content = "Conteúdo do novo arquivo assíncrono";

fs.writeFile("./arquivo.txt", content, "utf-8", (err) => {
    if (err) {
        console.log("erro ao escrever arquivo", err.message);
        return;
    }
    console.log("arquivo criado com sucesso de forma assíncrona");
});
