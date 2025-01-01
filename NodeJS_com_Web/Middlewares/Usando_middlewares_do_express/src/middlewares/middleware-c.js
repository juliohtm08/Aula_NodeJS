module.exports = function (req, res, next) {
  console.log('executando o middleware C');
  req.middlewareC = 'Ok!';
  next();
};
