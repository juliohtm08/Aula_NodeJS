import fs from "fs";

const fileName = "meuArquivo.txt";

export default function delteFile() {
    fs.unlink(fileName, (err) => {
        if (err) {
            console.log(`Erro ao excluir arquivo ${err.message}`);
            return;
        }
        console.log("arquivo excluído com sucesso!");
    });
}
