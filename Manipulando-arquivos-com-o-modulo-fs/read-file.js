const fs = require("fs");

// para usar métodos síncronos não é necessário criar uma função de Callback

/* try {
    const data = fs.readFileSync("./arquivo.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.log("erro ao ler arquivo", error.message);
} */

// Para arquivos assíncronos é necessário criar uma função de Callback contendo parâmetros!
/* fs.readFile("arquivo.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("erro ao ler arquivo", err.message);
        return;
    }
    //console.log(data);

    const entries = data.split(","); // Faz a separação de cada texto através das vírgulas
    console.log(entries);
    entries.forEach((entry) => console.log(entry)); // Imprime cada texto em linhas diferentes
}); */

const fileName = "arquivo.csv";

// O existsSync verifica se o arquivo exite no repositório
const exists = fs.existsSync(fileName);
if (exists) {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.log("erro ao ler arquivo", err.message);
            return;
        }
        //console.log(data);

        const entries = data.split(","); // Faz a separação de cada texto através das vírgulas
        console.log(entries);
        entries.forEach((entry) => console.log(entry)); // Imprime cada texto em linhas diferentes
    });
} else {
    console.log("O arquivo não existe!");
}
