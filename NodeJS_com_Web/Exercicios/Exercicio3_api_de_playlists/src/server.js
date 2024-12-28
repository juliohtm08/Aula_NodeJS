const express = require("express");
const playlistController = require("./controllers/playlist-controller");

const app = express();

app.use(express.json());

// Gerenciamento de playlist
app.get("/playlists", playlistController.index);
app.post("/playlists", playlistController.save);
app.get("/playlists/:id", playlistController.show);
app.patch("/playlists/:id", playlistController.update);
app.delete("/playlists/:id", playlistController.delete);

// Gerenciamento dos gêneros da playlist
app.post("/playlists/:id/genres", playlistController.addGenre);
app.patch("/playlists/:id/genres/:genre", playlistController.updateGenre);
app.delete("/playlists/:id/genres/:nameGenre", playlistController.deleteGenre);

// Gerenciamento das músicas da playlist
app.post("/playlists/:id/musics", playlistController.addMusic);
app.delete("/playlists/:id/musics/:idMusic", playlistController.deleteMusic);

const PORT = 3000;

app.listen(PORT, () => console.log("Servidor iniciado!"));
