// O módulo 'fs' serve para ler arquivos
const fs = require("fs"); // aqui também poderia estar como: require('node:fs')

console.log("inicio");

fs.readFile("./arquivo.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("fim");

/* 
Resultado:
    inicio
    fim
    hello word!
    estamos usando nodejs =)
*/

/* 
    Como o nodeJS trabalha com eventos não bloqueantes, 
    não é preciso que uma requisição seja finalizada para que
    outra seja inicializada em seguida. Logo, justifica o resultado
    do console logo acima.
 */

/* 
Módulos do NodeJS:
    fs   => Fornece métodos para manipular arquivos e diretórios, como leitura, escrita, criação, exclusão e renomeação.
    os   => Fornece métodos para acessar informações do sistema operacional, como plataforma, arquitetura, memória, rede, etc.
    http => Fornece funcionalidades para criar e manipular servidores e clientes HTTP.
*/

/* 
Funcionamento Básico do NodeJS:
    1.Gerencia a execução de tarefas assíncronas em JavaScrip;
    2.Permite que várias operações sejam executadas concorrentemente sem bloquear a thread princial;
    3.Opera em loop infinito, contantemente verificando e executando tarefas na fila de eventos

    * O que é uma thread?
        R= Simplificadamente, uma thread é como se fosse um processador virtual
        que irá processar uma determinada tarefa no computador.
*/
