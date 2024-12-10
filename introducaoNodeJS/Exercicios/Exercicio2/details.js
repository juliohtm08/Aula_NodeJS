const os = require("os");
const fs = require("fs");
const path = require("path");

// Função para obter detalhes do sistema
function getDetails() {
    const platform = os.platform();
    const arch = os.arch();
    const cpu = os.cpus();
    const upTimeSeconds = os.uptime();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    const usedMemory = totalMemory - freeMemory;
    const memoryUsagePercentage = ((usedMemory / totalMemory) * 100).toFixed(2);

    return [
        `Sistema operacional: ${platform}`,
        `Arquitetura do sistema: ${arch}`,
        `Modelo do processador: ${cpu[0].model}`,
        `Tempo de atividade do sistema: ${upTimeSeconds} segundos`,
        `Uso de memória: ${memoryUsagePercentage}%`,
    ];
}

// Função para exibir detalhes no console
/* function displayDetails() {
    const detailsArray = getDetails();
    let index = 0;

    const intervalId = setInterval(() => {
        console.clear();
        console.log(detailsArray[index]);
        index++;

        if (index === detailsArray.length) {
            clearInterval(intervalId);
        }
    }, 1000);
} */

// Função para registrar detalhes no arquivo log.txt
function logDetailsToFile() {
    const logPath = path.join(path.sep, "log", "log.txt");

    // Certifique-se de que a pasta "log" exista
    fs.mkdir(path.dirname(logPath), { recursive: true }, (err) => {
        if (err) {
            console.error("Erro ao criar a pasta de log:", err);
            return;
        }

        const detailsArray = getDetails();
        let index = 0;

        const intervalId = setInterval(() => {
            const detail = detailsArray[index];
            const logEntry = `${detail}\n\n`; // Adiciona uma linha em branco após cada entrada

            // Acrescenta o detalhe no arquivo
            fs.appendFile(logPath, logEntry, (err) => {
                if (err) {
                    console.error("Erro ao escrever no arquivo de log:", err);
                }
            });

            index++;

            if (index === detailsArray.length) {
                clearInterval(intervalId);
            }
        }, 1000);
    });
}

// Executa ambas as funções
//displayDetails();
logDetailsToFile();
