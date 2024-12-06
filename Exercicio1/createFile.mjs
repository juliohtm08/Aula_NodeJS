import fs from "fs";

const fileName = "meuArquivo.txt";

export default function createFile(content) {
    try {
        fs.writeFileSync(fileName, content, "utf-8");
        console.log("Arquivo criado com sucesso");
    } catch (error) {
        console.log(`Erro ao escrever arquivo ${error.message}`);
    }
}
