const express = require("express");
const path = require("path");

const app = express();

// O método set() server para setarmos algumas configurações e posteriormente definí-las
app.set("view engine", "ejs"); // Aqui define o EJS como a view engine(motor que vai renderizar o HTML)

// O primeiro 'views' é o nome da configuração do método 'set()', em que define o conteúdo que sera renderizado
app.set("views", path.join(__dirname, "views")); // Aqui define que os templates estão neste caminho (caminho atual + a pasta views)

app.get("/", (req, res) => {
    const title = "Homepage";
    const message = "Mensagem dinâmica inserida pelo EJS";

    // O método render() vai renderizar uma view/template, neste caso o index.ejs
    res.render("index", { title, message }); // Adicionando o segundo parâmetro é possivel usar estas variáveis no arquivo .ejs
});

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor Iniciado!"));
