const os = require("os");
const fs = require("fs");
const path = require("path");

// Mapeamento das plataformas do sistema operacional para nomes amigáveis
const systemPlatformMap = {
    win32: "Windows",
    linux: "Linux",
    darwin: "MacOS",
    freebsd: "FreeBSD",
};

// Função para obter informações detalhadas do sistema
function getSystemInfo() {
    // Identifica o sistema operacional usando o mapeamento
    const system = systemPlatformMap[os.platform()];

    // Obtém a arquitetura do processador (ex.: x64, arm)
    const arch = os.arch();

    // Obtém o modelo do processador da primeira CPU
    const cpu = os.cpus()[0].model;

    // Calcula o tempo de atividade do sistema em dias, horas, minutos e segundos
    const uptimeDays = Math.floor(os.uptime() / 60 / 60 / 24); // Dias
    const uptimeDaysInSeconds = uptimeDays * 24 * 60 * 60;

    // Horas
    const uptimeHours = Math.floor(
        (os.uptime() - uptimeDaysInSeconds) / 60 / 60
    );
    const uptimeHoursInSeconds = uptimeHours * 60 * 60;

    // Minutos
    const uptimeMins = Math.floor(
        (os.uptime() - uptimeDaysInSeconds - uptimeHoursInSeconds) / 60
    );
    const uptimeMinsInSeconds = uptimeMins * 60;

    //Segundos
    const uptimeSecs = Math.floor(
        os.uptime() -
            uptimeDaysInSeconds -
            uptimeHoursInSeconds -
            uptimeMinsInSeconds
    );

    // Formata o tempo de atividade no formato "dias:horas:minutos:segundos"
    const uptime = `${uptimeDays}:${uptimeHours}:${uptimeMins}:${uptimeSecs}`;

    // Calcula o total de RAM em GB e o percentual de uso
    const ramTotal = os.totalmem() / 1024 / 1024 / 1024; // Total de RAM em GB
    const ramUsed = (os.totalmem() - os.freemem()) / 1024 / 1024 / 1024; // RAM usada em GB
    const ramUsedPercent = Math.round((ramUsed / ramTotal) * 100); // Percentual de RAM usada

    // Retorna um objeto com todas as informações do sistema
    return { system, arch, cpu, uptime, ramUsedPercent };
}

// Função para exibir os logs das informações do sistema no console
function printLog({ system, arch, cpu, uptime, ramUsedPercent }) {
    console.clear();
    console.log("DETALHES DO SISTEMA: ");
    console.log(`Sistema Operacional: ${system}`);
    console.log(`Arquitetura: ${arch}`);
    console.log(`Modelo do Processador: ${cpu}`);
    console.log(`Tempo de Atividade do Sistema: ${uptime}`);
    console.log(`Uso de Memória RAM: ${ramUsedPercent}%`);
}

// Função para salvar as informações do sistema em um arquivo de log
function saveLog({ system, arch, cpu, uptime, ramUsedPercent }) {
    // Cria o conteúdo do log com todas as informações do sistema
    const logContent = `
    DETALHES DO SISTEMA | Sistema Operacional: ${system} | Arquitetura: ${arch} | Modelo do Processador: ${cpu} | 
    Tempo de Atividade do Sistema: ${uptime} | Uso de Memória RAM: ${ramUsedPercent}%
    `;

    // Define o diretório onde o log será salvo
    const logDir = path.join("/", "log");

    // Verifica se o diretório existe, se não, cria o diretório
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir);
    }

    // Define o caminho do arquivo de log e salva o conteúdo no arquivo
    const logFilePath = path.join(logDir, "log.txt");
    fs.appendFileSync(logFilePath, logContent); // Adiciona as informações ao arquivo
}

// Define uma tarefa que será executada a cada segundo
setInterval(() => {
    const systemInfo = getSystemInfo(); // Obtém as informações do sistema
    printLog(systemInfo); // Exibe as informações no console
    saveLog(systemInfo); // Salva as informações no arquivo de log
}, 1000); // Intervalo de 1 segundo
