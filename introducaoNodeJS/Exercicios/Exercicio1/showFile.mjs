import fs from "fs";

export default function showFile(fileName) {
    try {
        const data = fs.readFileSync(fileName, "utf-8");
        console.log(`Conteúdo do arquivo: ${data}`);
    } catch (error) {
        console.log(`Erro ao ler arquivo ${error.message}`);
    }
}
