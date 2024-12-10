const fs = require("fs");

//O método unlink serve para excluir um arquivo
fs.unlink("arquivoRenomeado.csv", (err) => {
    if (err) {
        console.log("erro ao excluir arquivo: ", err.message);
        return;
    }
    console.log("arquivo excluído com sucesso");
});
