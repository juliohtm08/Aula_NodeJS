// Objetivo: criar um script para 'escapar'(fazer correções) arquivos html

//EX: inserir a tag <span></span> sem que o navegador interprete como uma tag

const fs = require("fs"); // ler o arquivo html
const path = require("path"); // lidar com os caminhos de forma mais segura
const readline = require("readline"); // perguntar coisas ao usuário

run();

function escapeHtmlSpecialCaracters(text) {
    // função para escapar os caracteres: <> e &
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;"; // retorna o '<' no navegador
            case ">":
                return "&gt;"; // retorna o '>' no navegador
            case "&":
                return "&amp;"; // retorna o '&' no navegador
            default:
                return match;
        }
    });
}

//função para escapar o arquivo
function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, "utf-8");
        const escapeContent = escapeHtmlSpecialCaracters(fileContent);

        fs.writeFileSync(outputFilePath, escapeContent, "utf-8");

        console.log(`Arquivo escapado com sucesso ${outputFilePath}`);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
        process.exit(1);
    }
}

// Função para pegar o caminho do usuário
function askFilePath(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}

async function userInteraction() {
    // node html-escaper.js <inputPath> <outputPath>
    let inputPath = process.argv[2];
    if (!inputPath) {
        inputPath = await askFilePath(
            "Informe o caminho do arquivo de entrada: "
        );
    }
    inputPath = path.resolve(inputPath); //pegar o caminho absoluto do arquivo

    const defaultName = `escaped_${path.basename(inputPath)}.txt`;
    const answer = await askFilePath(
        `Informe o caminho do arquivo de saída (padrão: ${defaultName}): `
    );
    let outputPath = answer.length > 0 ? answer : defaultName;
    outputPath = path.resolve(outputPath);

    escapeHtmlFile(inputPath, outputPath);
}

function run() {
    if (process.argv.length >= 4) {
        escapeHtmlFile(
            path.resolve(process.argv[2]),
            path.resolve(process.argv[3])
        );
    } else {
        console.log("---------------------");
        console.log("HTML tag Escaper v1.0");
        console.log("---------------------\n");
        console.log(
            "Argumentos não informados, por favor informe os caminhos dos arquivos"
        );
        userInteraction();
    }
}
