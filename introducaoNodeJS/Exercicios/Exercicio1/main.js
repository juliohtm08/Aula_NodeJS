import createFile from "./createFile.mjs";
import delteFile from "./deleteFile.mjs";
import showFile from "./showFile.mjs";
import updateFile from "./updateFile.mjs";

const fileName = "meuArquivo.txt";

createFile("Conteúdo inicial do arquivo.\nCriado com o módulo fs do Node.js.");
showFile(fileName);
updateFile("Conteúdo modificado!");
showFile(fileName);
delteFile();
