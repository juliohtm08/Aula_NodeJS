const express = require("express");
const uploadMiddlewares = require("./middlewares/upload-middleware");
const middlewareC = require("./middlewares/middleware-c"); // Middleware personalizado

const app = express();

/* 
// Aqui a gente NÃO está executando a função, mas sim passando a assinatura dela,
// ou seja, entregando uma função pronta que será chamada
// Tipo: Middleware de nível de aplicação
app.use(middlewareC);

// O use() é um método específico para registrar os middlewares
// Tipo: Middleware de nível de aplicação
app.use(function (req, res, next) {
  console.log("executando o middleware A");
  req.middlewareA = "OK!";
  next(); // Continua para o próximo middleware ou rota
});

// Tipo: Middleware de nível de aplicação
function middlewareB(req, res, next) {
  console.log("executando o middleware B");
  req.middlewareB = "ok!";
  next();
}

app.get("/testeA", (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB });
  throw new Error("algo deu errado na rota A"); // Simulação de erro para o middleware de tratamento de erros

  res.end();
});

// Tipo: Middleware de nível de aplicação (middlewareB é usado diretamente na rota)
app.get("/testeB", middlewareB, (req, res) => {
  console.log({ a: req.middlewareA, b: req.middlewareB });
  throw new Error("algo deu errado na rota B"); // Simulação de erro para o middleware de tratamento de erros

  res.end();
});

// Este middleware é ativado sempre que há um erro em uma rota ou em outros middlewares
// Tipo: Middleware de tratamento de erros
app.use(function (err, req, res, next) {
  if (err) {
    console.log(err.message);
    res.status(400).json({ message: err.message }); // Responde com um JSON contendo a mensagem de erro
  } else {
    next(); // Continua se não houver erro
  }
});
 */

// Middleware embutido/próprio do Express para servir arquivos estáticos
// Serve os arquivos da pasta "public" diretamente (como HTML, CSS, imagens, etc.)
// Tipo: Middleware embutido/próprio
app.use(express.static("public"));

// O .single() é uma função que retorna um middleware que processa um único arquivo associado a um determinado campo passado no formulário
// neste caso, estamos informando que na rota '/upload' vai vir um campo de upload de arquivos que terá o nome 'image'
// e ele é uma única imagem, logo irá retornar um middleware específico para converter/ler a imagem
// Tipo: Middleware de terceiros (Multer)
app.post("/upload", uploadMiddlewares.single("avatar"), (req, res) => {
  console.log(req.file, req.body);

  res.json({ message: "arquivo salvo com sucesso" });
});

const PORT = 3000;
app.listen(PORT, () => console.log("servidor iniciado"));
