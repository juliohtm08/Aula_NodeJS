/* 
    // Esse process de saída é parecido com o 'console.log()',
    // porém o console.log() traz outros comportamentes e formatações
    process.stdout.write("Olá mundo"); //retorno no console: Olá mundo

    //process de entrada(input)
    process.stdin.on("data", (data) => {
        process.stdout.write(`Você digitou ${data}`);
    });
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
/* 
    // O método on() serve para adicionar um evento padrão do NodeJS, 
    // neste caso junto com o método write() adicionou o evento de escrita
    rl.on("line", (input) => {
        rl.write(`Você digitou ${input}`);
    });
 */

/* 
    // O método question() serve para realizar uma pergunta, parecido com o prompt
    rl.question("Qual é o seu nome?", (answer) => {
        rl.write(`Olá ${answer}\n`);
        rl.close();
    });

    // Quando o evento de close() for acionado está mensagem será exibida
    // O método once() serve para acionar um evento uma única vez
    rl.once("close", () => {
        rl.write("Saindo...");
        // process de finalização do terminal, se for 0 quer dizer que finalizou sem problemas,
        // já se for 1 representa que finalizou devido a algum problema
        //process.exit(0);
    });
*/
// Aqui está sendo adicionado um evento de quando o usuário encerrar o terminal
rl.on("SIGINT", () => {
    rl.question("Deseja realmente sair?(s/n)", (answer) => {
        if (answer.trim().toLowerCase() === "s") {
            process.exit(0);
        } else {
            rl.write("Você escolheu continuar.");
        }
    });
});
