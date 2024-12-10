const http = require("http");

const server = http.createServer((request, response) => {
    /*     console.log(request);
    response.writeHead(200); // O writeHead() sete os headers(cabeçalhos) da resposta recebida
    response.write("Servidor HTTP em Node.Js funcionando!");
    response.end(); */

    const path = request.url;

    switch (path) {
        case "/":
            response.writeHead(200);
            response.write("Você está na página inicial");
            break;
        case "/artigos":
            response.writeHead(200);
            response.write("Você está na página de artigos");
            break;
        default:
            response.writeHead(404);
            response.write("caminho não encontrado");
            break;
    }
    response.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
