var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('<h1>Olá, esta é a rota de usuários!</h1>');
});

module.exports = router;
