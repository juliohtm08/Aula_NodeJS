const express = require("express");
const path = require("path");

const app = express();

const storedEmails = [];

// configuração do EJS
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// configuração do body
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("form");
});

app.post("/register", (req, res) => {
    const email = req.body.email;

    storedEmails.push({ email });

    res.redirect("/success");

    app.get("/success", (req, res) => {
        const email = storedEmails[storedEmails.length - 1];
        res.render("success", { email });
    });

    app.get("/listEmails", (req, res) => {
        res.render("listEmails", { emails: storedEmails });
    });
});

app.post("/deleteEmail", (req, res) => {
    const emailToDelete = req.body.email;

    const index = storedEmails.findIndex(
        (email) => email.email === emailToDelete
    );
    if (index !== -1) {
        storedEmails.splice(index, 1);
    }

    res.redirect("/listEmails");
});

const PORT = 3000;

app.listen(PORT, () => console.log("Server funcionando!"));
