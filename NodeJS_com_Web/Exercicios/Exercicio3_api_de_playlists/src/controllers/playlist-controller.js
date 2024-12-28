let playLists = [
  {
    id: 1,
    name: "Churras",
    genres: ["sertanejo", "pagode"],
    musics: [
      {
        id: 1,
        title: "Então pode Ir/Hoje Sonhei Com Você/Então Valeu",
        year: "2024",
        artist: "Ícaro e Gilmar",
        album: "Sextou BB",
      },
      {
        id: 2,
        title: "Vai Me Dando Corda",
        year: "2024",
        artist: "Menos É Mais",
        album: "Churrasquino do Menos É Mais",
      },
    ],
  },
  {
    id: 2,
    name: "Eletrônica",
    genres: ["eletrônica"],
    musics: [
      {
        id: 1,
        title: "UNDERWATER",
        year: "2022",
        artist: "Harrison",
        album: "Underwater",
      },
      {
        id: 2,
        title: "Innerbloom",
        year: "2016",
        artist: "RUFUS DU SOL",
        album: "Bloom",
      },
    ],
  },
];

module.exports = {
  // GET playlists
  index: (req, res) => {
    res.json(playLists);
  },

  // POST /playlists
  save: (req, res) => {
    const { name, genres, musics } = req.body;

    const newPlaylist = {
      id: Math.floor(Math.random() * 999999),
      name,
      genres,
      musics: musics.map((music) => ({
        id: Math.floor(Math.random() * 999999),
        ...music,
      })),
    };

    playLists.push(newPlaylist);

    res.status(201).json(newPlaylist);
  },

  // GET /playlists/:id
  show: (req, res) => {
    const { id } = req.params;

    const playlist = playLists.find((playlist) => playlist.id === +id);

    if (!playlist) {
      res.status(404).json({ message: "Playlist Not found!" });
    }
    res.json(playlist);
  },

  // PATCH /playlists/:id
  update: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const playlistIndex = playLists.findIndex(
      (playlist) => playlist.id === +id
    );

    if (playlistIndex === -1) {
      return res.status(404).json("Playlist Not Found!");
    }

    if (typeof name === "string") {
      playLists[playlistIndex].name = name;
    }

    res.json(playLists[playlistIndex]);
  },

  // DELETE /playlits/:id
  delete: (req, res) => {
    const { id } = req.params;

    const playlistIndex = playLists.findIndex(
      (playlist) => playlist.id === +id
    );

    if (playlistIndex === -1) {
      return res.status(404).json("Playlist Not Found!");
    }

    playLists.splice(playlistIndex, 1);

    res.status(200).end();
  },

  // POST  /playlists/:id/genres/
  addGenre: (req, res) => {
    const { id } = req.params;
    const { newGenre } = req.body;

    const playlistIndex = playLists.findIndex((game) => game.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Genre not found!" });
    }

    if (
      typeof newGenre !== "string" ||
      !playLists[playlistIndex].genres.includes(newGenre)
    ) {
      return res.status(400).json("Invalid genre");
    }
    playLists[playlistIndex].genres.push(newGenre);

    res.json(playLists[playlistIndex]);
  },

  // PATCH /playlists/:id/genres/:genre
  updateGenre: (req, res) => {
    const { id, genre } = req.params;
    const { genres: newGenre } = req.body;

    const playlistIndex = playLists.findIndex(
      (playlist) => playlist.id === +id
    );

    if (playlistIndex === -1) {
      return res.status(404).json("Playlist Not Found!");
    }

    const genreIndex = playLists[playlistIndex].genres.indexOf(genre);

    if (genreIndex === -1) {
      return res.status(404).json("Genre Not Found!");
    }

    if (
      typeof genre !== "string" ||
      !playLists[playlistIndex].genres.includes(genre)
    ) {
      return res.status(400).json("Invalid genre");
    }
    playLists[playlistIndex].genres[genreIndex] = newGenre;

    res.json(playLists[playlistIndex]);
  },

  // DELETE /playlists/:id/genres/:nameGenre
  deleteGenre: (req, res) => {
    const { id, nameGenre } = req.params;

    const playlistIndex = playLists.findIndex((game) => game.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Genre not found!" });
    }

    playLists[playlistIndex].genres = playLists[playlistIndex].genres.filter(
      (genre) => genre !== nameGenre
    );

    res.status(200).json(playLists[playlistIndex]);
  },

  // POST /playlists/:id/musics
  addMusic: (req, res) => {
    const { id } = req.params;
    const { title, year, artist, album } = req.body;

    const playlistIndex = playLists.findIndex((game) => game.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Playlist not found!" });
    }

    const newMusic = {
      id: Math.floor(Math.random() * 999999),
      title,
      year,
      artist,
      album,
    };

    playLists[playlistIndex].musics.push(newMusic);

    res.status(201).json(newMusic);
  },

  // DELETE /playlists/:id/musics/:idMusic
  deleteMusic: (req, res) => {
    const { id, idMusic } = req.params;

    const playlistIndex = playLists.findIndex((game) => game.id === +id);

    if (playlistIndex === -1) {
      return res.status(404).json({ message: "Playlist not found!" });
    }

    if (!playLists[playlistIndex].musics) {
      return res.status(400).json("No music found in this playlist!");
    }

    const musicIndex = playLists[playlistIndex].musics.findIndex(
      (music) => music.id === +idMusic
    );

    if (musicIndex === -1) {
      return res.status(404).json({ message: "Music not found!" });
    }

    playLists[playlistIndex].musics.splice(musicIndex, 1);

    res.status(200).json(playLists[playlistIndex]);
  },
};
