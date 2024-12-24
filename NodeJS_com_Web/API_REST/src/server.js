const express = require("express");
const gamesController = require("./controllers/games-controller");

const app = express();

app.use(express.json()); // recebe o conteúdo em formato json e formata para um objeto javascript apropriado

app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/games", gamesController.index);
app.post("/games", gamesController.save);
app.get("/games/:id", gamesController.show);
app.post("/games/:id/genres", gamesController.addGenre);
app.put("/games/:id", gamesController.update);

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor iniciado!"));

//terminal: curl http://localhost:3000/games
