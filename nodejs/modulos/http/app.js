//Importando modulo http
const http = requise ('http');

//criando um servidor que responde com "Hello Wolrd"
http.createServer((req, res) => {
    //Definindo o cabecalho da resposta com status 200 (OK) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando a resposta "Hello World!"
    res.end('Hello World!');
    //adicinonando um log no console para cada requisicao recebida
}).listen(8080)
