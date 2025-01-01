module.exports = {
  dashboard: (req, res) => {
    console.log(req.session.authenticated);
    console.log(req.session.currentUser);

    res.render('dashboard', { user: req.session.currentUser });
  },
};
