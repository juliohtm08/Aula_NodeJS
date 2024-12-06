import fs from "fs";

const fileName = "meuArquivo.txt";

export default function updateFile(content) {
    try {
        fs.writeFileSync(fileName, content, "utf-8");
        console.log("Arquivo atualizado com sucesso");
    } catch (error) {
        console.log(`Erro ao atualizar arquivo ${error.message}`);
    }
}
