function mudarTexto() {
    // vai no html e pega o elemento pelo id   .innerHTML = Altere o conteúdo da tag para o que eu escrever aqui
    document.getElementById('texto').innerHTML = 'Texto novo ao clicar no botão :D'
}


function mostrarNome() {
    // value quer dizer VALOR
    const nome = document.getElementById('nome').value

    document.getElementById('resultado').innerHTML = `Olá ${nome}`

}