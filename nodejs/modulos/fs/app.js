// importando o modulo fs (file system)
//const fs = require('fs');
import fs from 'fs';

// Lendo um arquivo de forma assincrona
fs.readFile('myfile.txt', 'utf8', (erro, dados) => {
  if (erro) {
    //retornando o erro no console 
    console.error('Error reading file: ' + erro);
    //retornando para não executar o console.log abaixo
    return;
  }
  //se não houver erro, exibindo o conteúdo do arquivo
  console.log('File content: ' + dados);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Reading file... (this runs first!)');