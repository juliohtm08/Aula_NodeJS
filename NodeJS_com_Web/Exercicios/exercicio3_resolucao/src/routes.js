const express = require("express");
const playlistController = require("./controllers/playlist-controller");

const playlistsRouter = express.Router();

playlistsRouter.get("/", playlistController.index);
playlistsRouter.get("/:id", playlistController.show);
playlistsRouter.post("/", playlistController.save);
playlistsRouter.put("/:id", playlistController.update);
playlistsRouter.delete("/:id", playlistController.delete);
playlistsRouter.post("/:id/musics", playlistController.addMusic);
playlistsRouter.delete("/:id/musics/:musicId", playlistController.removeMusic);

module.exports = playlistsRouter;
