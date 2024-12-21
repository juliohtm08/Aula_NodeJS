const express = require("express");
const gamesController = require("./controllers/games-controller");

const app = express();

app.post("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.get("/games", gamesController.index);
app.get("/games/:id", gamesController.show);

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor iniciado!"));

//terminal: curl http://localhost:3000/games
