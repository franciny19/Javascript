const clientesModel = require('../models/clientesModel');
module.exports = {

    clientes:(req, res) => {
        res.sendFile('clientes.html', { root: './views' });
    },   

    login: (req, res) => {
        res.sendFile('login.html', { root: './views' });
      },
    
        verificalogin: (req, res) => {
        const { login, senha } = req.body;
        const mensagem = clientesModel.gerarMensagem(login, senha);
        res.send(`<h1>${mensagem}</h1>`);
      }
};