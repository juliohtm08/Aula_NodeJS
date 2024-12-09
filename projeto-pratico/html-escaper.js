// Objetivo: criar um script para 'escapar'(fazer correções) arquivos HTML

// Exemplo: inserir a tag <span></span> sem que o navegador interprete como uma tag HTML

// Importa o módulo fs para leitura e gravação de arquivos
const fs = require("fs");

// Importa o módulo path para manipular caminhos de arquivos de forma segura
const path = require("path");

// Importa o módulo readline para interagir com o usuário via terminal
const readline = require("readline");

// Inicia a execução principal do programa
run();

// Função para escapar caracteres especiais HTML como <, > e &
function escapeHtmlSpecialCaracters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case "<":
                return "&lt;"; // Escapa o símbolo '<'
            case ">":
                return "&gt;"; // Escapa o símbolo '>'
            case "&":
                return "&amp;"; // Escapa o símbolo '&'
            default:
                return match; // Retorna o caractere original se não corresponder a nenhum caso
        }
    });
}

// Função para escapar conteúdo de um arquivo HTML
function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        // Lê o conteúdo do arquivo de entrada como texto
        const fileContent = fs.readFileSync(inputFilePath, "utf-8");

        // Escapa os caracteres especiais do conteúdo
        const escapeContent = escapeHtmlSpecialCaracters(fileContent);

        // Escreve o conteúdo escapado no arquivo de saída
        fs.writeFileSync(outputFilePath, escapeContent, "utf-8");

        console.log(`Arquivo escapado com sucesso: ${outputFilePath}`);
    } catch (error) {
        // Exibe uma mensagem de erro e encerra o programa
        console.error(`Erro: ${error.message}`);
        process.exit(1);
    }
}

// Função para solicitar um caminho de arquivo ao usuário via terminal
function askFilePath(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // Retorna uma Promise para facilitar o uso assíncrono
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer); // Resolve a resposta do usuário
            rl.close(); // Fecha a interface de leitura
        });
    });
}

// Função para interagir com o usuário e solicitar caminhos de arquivos
async function userInteraction() {
    // Verifica se o caminho de entrada foi passado como argumento na execução do script
    let inputPath = process.argv[2];
    if (!inputPath) {
        inputPath = await askFilePath(
            "Informe o caminho do arquivo de entrada: "
        );
    }
    inputPath = path.resolve(inputPath); // Obtém o caminho absoluto do arquivo de entrada

    // Define um nome padrão para o arquivo de saída
    const defaultName = `escaped_${path.basename(inputPath)}.txt`;
    const answer = await askFilePath(
        `Informe o caminho do arquivo de saída (padrão: ${defaultName}): `
    );

    // Usa o nome padrão se o usuário não fornecer nenhum
    let outputPath = answer.length > 0 ? answer : defaultName;
    outputPath = path.resolve(outputPath); // Obtém o caminho absoluto do arquivo de saída

    // Escapa o conteúdo do arquivo de entrada e salva no arquivo de saída
    escapeHtmlFile(inputPath, outputPath);
}

// Função principal que inicia o programa
function run() {
    // Verifica se os caminhos de entrada e saída foram passados como argumentos
    if (process.argv.length >= 4) {
        escapeHtmlFile(
            path.resolve(process.argv[2]), // Caminho do arquivo de entrada
            path.resolve(process.argv[3]) // Caminho do arquivo de saída
        );
    } else {
        // Exibe informações sobre o programa e solicita caminhos ao usuário
        console.log("---------------------");
        console.log("HTML Tag Escaper v1.0");
        console.log("---------------------\n");
        console.log(
            "Argumentos não informados. Por favor, informe os caminhos dos arquivos."
        );
        userInteraction(); // Inicia a interação com o usuário
    }
}
