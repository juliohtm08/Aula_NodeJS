// Os argumentos são interessantes para serem usados em casos de automatização
/* 
    EX: Os comandos já utilizados, como:
    node index.js => aqui estaria acionando o node e repassando o argumento 'index.js'
    npx ...
    npm ...
    yarn ...
    cd..
    mkdir teste
*/

const args = process.argv; //retorna os argumentos da linha de comando

//console.log("Argumentos informados:");
//console.log(args);
/* 
    retorno: 
    [
        'C:\\Program Files\\nodejs\\node.exe', => Aonde o node está instalado
        'C:\\Users\\jhtom\\Documents\\estudo-onebitcode\\NodeJS\\argumentos-de-linha-de-comando\\index.js' => Caminho so script atual
    ]
*/

/* 
    console:
    PS C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\argumentos-de-linha-de-comando> node .\index.js arg1 arg2 arg3
    retorno:
    [
        'C:\\Program Files\\nodejs\\node.exe',
        'C:\\Users\\jhtom\\Documents\\estudo-onebitcode\\NodeJS\\argumentos-de-linha-de-comando\\index.js',
        'arg1',
        'arg2',
        'arg3'
    ]
*/

const namedArguments = {};

process.argv.slice(2).forEach((arg, index, array) => {
    if (arg.startsWith("--")) {
        const argName = arg.slice(2); // pega o item atual
        const argValue = array[index + 1]; // pega o valor da posição seguinte
        namedArguments[argName] = argValue; // seta estes valores
    }
});

console.log(`Argumentos informados:`);
console.log(namedArguments);
/* 
    console:
        PS C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\argumentos-de-linha-de-comando> node .\index.js --name julio --job developer
    retorno:
        Argumentos informados:
        { name: 'julio', job: 'developer' }
*/
