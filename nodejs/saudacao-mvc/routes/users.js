var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Olá, esta é a rota de usuários!');
});

module.exports = router;
