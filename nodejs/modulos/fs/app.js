// importando o modulo fs (file system)
const fs = require('fs');

// Lendo um arquivo de forma assincrona
fs.readFile('myfile.txt', 'utf8', (err, data) => {
  if (err) {
    //retornando o erro no console 
    console.error('Error reading file: ' + err);
    //retornando para não executar o console.log abaixo
    return;
  }
  //se não houver erro, exibindo o conteúdo do arquivo
  console.log('File content: ' + data);
});
//imprimindo uma mensagem antes da leitura do arquivo
console.log('Reading file... (this runs first!)');