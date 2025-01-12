module.exports = {
  // GET /welcome
  welcome: (req, res) => {
    const displayName = req.authenticatadedUser?.name ?? 'visitante';

    res.json({ message: `Seja bem vindo(a) ${displayName}` });
  },
};
