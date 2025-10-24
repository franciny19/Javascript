module.exports = {
  
    gerarMensagem: (login, senha) => {
    let acesso; 

    if (login === "Franciny" && senha === "1234") {
        acesso = "Acesso Permitido!";
    } else {
        acesso = "Acesso Negado!";
    }   
    return `Olá, ${login}! Seu acesso foi ${acesso}`;
}

};