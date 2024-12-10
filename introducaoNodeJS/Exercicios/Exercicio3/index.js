const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

userInteraction();

const notesDir = path.join(__dirname, "notes");

async function createFile() {
    try {
        const fileName = await new Promise((resolve) => {
            rl.question("Qual nome do arquivo deseja criar? ", (response) => {
                resolve(response.trim());
            });
        });

        const fileContent = await new Promise((resolve) => {
            rl.question("O que gostaria de anotar no arquivo? ", (response) => {
                resolve(response.trim());
                rl.close();
            });
        });

        if (!fs.existsSync(notesDir)) {
            fs.mkdirSync(notesDir);
            console.log("Pasta notes criada com sucesso!");
        }

        const filePath = path.join(notesDir, fileName);

        fs.writeFileSync(filePath, fileContent, "utf-8");
        console.log(
            `Arquivo '${fileName}' criado com sucesso!\nConteúdo: ${fileContent}`
        );
    } catch (error) {
        console.error(`Erro ao criar arquivo: ${error.message}`);
        process.exit(1);
    }
}

function listFiles() {
    try {
        const files = fs.readdirSync(notesDir);

        files.forEach((file) => {
            if (file.endsWith(".txt")) {
                console.log(file);
                rl.close();
            }
        });

        rl.close();
    } catch (err) {
        console.error(`Erro ao listar arquivos: ${err.message}`);
    }
}

async function readFile() {
    try {
        const fileName = await new Promise((resolve) => {
            rl.question(
                "Qual arquivo você gostaria de visualizar? ",
                (response) => {
                    resolve(response.trim());
                    rl.close();
                }
            );
        });

        const filePath = path.join(notesDir, fileName);

        const fileContent = fs.readFileSync(filePath, "utf-8");
        console.log(`Conteúdo do arquivo '${fileName}':\n${fileContent}`);

        rl.close();
    } catch (error) {
        console.error(`Erro ao ler arquivo: ${error.message}`);
    }
}

async function deleteFile() {
    try {
        const fileName = await new Promise((resolve) => {
            rl.question("Qual nome do arquivo deseja deletar? ", (response) => {
                resolve(response.trim());
            });
        });

        const filePath = path.join(notesDir, fileName);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
            console.log("Arquivo deletado com sucesso!");
        }
        process.exit(0);
    } catch (error) {
        console.log(`Erro ao deltar arquivo: ${error.message}`);
    }
}

function userInteraction() {
    console.log("------------");
    console.log("Exercício 3");
    console.log("------------\n");
    rl.question(
        "Opções:\n1 => Criar arquivo\n2 => Listar arquivos\n3 => Ler arquivo\n4 => Deletar arquivo\nresposta: ",
        (answer) => {
            switch (answer) {
                case "1":
                    return createFile();
                case "2":
                    return listFiles();
                case "3":
                    return readFile();
                case "4":
                    return deleteFile();
                default:
                    console.log("operação inválida");
                    break;
            }
        }
    );
}
