const express = require("express");
const path = require("path");

const app = express();

const storedUsers = [];

// Configuração do EJS

// O método set() server para setarmos algumas configurações e posteriormente definí-las
app.set("view engine", "ejs"); // Aqui define o EJS como a view engine(motor que vai renderizar o HTML)

// O primeiro 'views' é o nome da configuração do método 'set()', em que define o conteúdo que sera renderizado
app.set("views", path.join(__dirname, "views")); // Aqui define que os templates estão neste caminho (caminho atual + a pasta views)

// Configuração do body

// O urlencoded() é um método que trabalha com dados vindo da url, neste caso os dados vindo de form.ejs
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const title = "Homepage";
    const message = "Mensagem dinâmica inserida pelo EJS";

    // O método render() vai renderizar uma view/template, neste caso o index.ejs
    res.render("index", { title, message }); // Adicionando o segundo parâmetro é possivel usar estas variáveis no arquivo .ejs
});

// Método GET para renderizar a página do formulário
app.get("/formulario", (req, res) => {
    res.render("form");
});

// Método POST em que envia os dados do formulário
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    //console.log(req.body);
    //console.log(username);

    storedUsers.push({ username, password });

    // Redirecionando os dados para a página usuarios
    res.redirect("/usuarios");

    app.get("/usuarios", (req, res) => {
        res.render("users", { users: storedUsers });
    });
});

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor Iniciado!"));
