//O path é a forma mais segura de interagir com o sistema de arquivos
const path = require("path");

/* 
    O join serve para juntar todos os argumentos passados
    Cada argumento é subentendido como partes de um caminho

    const fullPath = path.join("src", "scripts", "arquivo.js");
    console.log(fullPath);
 */

/* 
    // O __dirname é, basicamente, o caminho do arquivo em que ele está sendo executado
    const fullPath = path.join(__dirname);
    console.log(fullPath); // Retorno: C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\usando-o-path
*/

const dir = "src";
const file = "app.js";

const fullPath = path.join(__dirname, dir, file);
console.log(fullPath); // Retorno: C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\usando-o-path\src\app.js
/* 
    // O '.' representa que o comando está sendo executado no diretório atual
    const relativePath = path.join(".", dir, file);
    console.log(relativePath); // Retorno: src\app.js
*/

/* 
    // O __filename retorna caminho e o nome do arquivo, neste caso index.js, de onde o comando foi executado
    console.log(__filename); // Retorno: C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\usando-o-path\index.js
 */

const relativePath = "../arquivos/relatorio.pdf";

//O resolve() resolve/calcula o caminho e o retorna
//O resolve(), basicamente mostra o caminho do terminal de onde foi executado,
//neste caso o caminho foi:C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS
const absolutePath = path.resolve(__dirname, relativePath);
console.log(absolutePath); // Retorno: C:\Users\jhtom\Documents\estudo-onebitcode\NodeJS\arquivos\relatorio.pdf

// O basename() serve para retornar a última parte de um caminho
const fileName = path.basename(relativePath);
console.log(fileName); // Retorno: relatorio.pdf

// O extname() retorna a extenção de um arquivo
const ext = path.extname(absolutePath);
console.log(ext); // Retorno: .pdf
