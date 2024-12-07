const os = require("os");

// O plataform() serve para retornar o sistema operacional da máquina
const plataform = os.platform();
console.log(`Plataforma do SO: ${plataform}`); // retorno: Plataforma do SO: win32

// O arch() serve para retornar a arquitetura da máquina, neste caso 64bits
const arch = os.arch();
console.log(`Arquitetura do SO: ${arch}`); // retorno: Arquitetura do SO: x64

// O cpus() retorna todos os processadores da máquina
const processadores = os.cpus();
//console.log(processadores);
/* 
retorno de um dos processadores: 
  {
    model: '12th Gen Intel(R) Core(TM) i5-12450H',
    speed: 2496,
    times: { user: 397593, nice: 0, sys: 392750, idle: 19881015, irq: 66687 }
  },
*/

const processadores_quantidade = os.cpus().length;
console.log(processadores_quantidade); // retorno: 12

const memoriaTotal = os.totalmem();
console.log(
    `Total de memória do PC: ${memoriaTotal / 1024 / 1024 / 1024} bytes`
); // retorno: Total de memória do PC: 15.710990905761719 bytes

// O freemem() retorna o total de memória livre da máquina
const memoria = os.freemem();
console.log(`Total de memória livre do PC: ${memoria / 1024 / 1024 / 1024} GB`); // retorno: Memória do PC: 7.649314880371094 GB
