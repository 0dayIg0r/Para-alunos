//COLOCA O ELEMENTO NUMA VARIÁVEL
const inputFoto = document.getElementById('inputFoto');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const galeria = document.getElementById('galeria');


// PEGA O BOTÃO E ESPERA O USUÁRIO CLICAR
botaoAdicionar.addEventListener('click', () => {
    // COLOCA O VALOR DO INPUT DENTRO DA VARIÁVEL
    const linkFoto = inputFoto.value;

    // VERIFICA SE O INPUT É DIFERENTE DE VAZIO( SE NÃO TEM NADA DENTRO )
    if(linkFoto !== '') {

        // CRIA UM NOVO ELEMENTO (TAG IMG)
        const novaImagem = document.createElement('img');

        // COLOCA O VALOR DO INPUT NO SRC DA TAG IMG
        novaImagem.src = linkFoto;

        // CRIA UM FILHO, NO CASO MAIS UMA TAG IMG 
        galeria.appendChild(novaImagem);

        // RETORNA O VALOR DO INPUT PARA VAZIO
        inputFoto.value = '';
    }

});