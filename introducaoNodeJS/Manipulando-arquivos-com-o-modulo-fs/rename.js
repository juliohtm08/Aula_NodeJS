const fs = require("fs");

//O método rename serve para renomear arquivos e até mesmo alterar seus tipos, como .txt para .csv
fs.rename("arquivo.txt", "arquivoRenomeado.csv", (err) => {
    if (err) {
        console.log("erro ao renomear arquivo: ", err.message);
        return;
    }
    console.log("arquivo renomeado com sucesso");
});
