// 'DOM Content Loaded' Espera toda página ser carregada
document.addEventListener('DOMContentLoaded', () => {

    //COLOCANDO O HTML EM VARIÁVEIS PARA MANIPULAR
    const botaoGerar = document.getElementById('botaoGerar')
    const botaoVoltar = document.getElementById('botaoVoltar')

    const secaoFormulario = document.getElementById('secao-formulario')
    const secaoCurriculo = document.getElementById('secao-curriculo')

    // QUANDO CLICAR NO BOTÃO, ELE VAI PEGAR OS VALORES DO INPUT E SALVAR NAS VARIÁVEIS :DD PRA MANIPULAR DIPOIS
    botaoGerar.addEventListener('click', () => {
        const nome = document.getElementById('entradaNome').value
        const contato = document.getElementById('entradaContato').value
        const resumo = document.getElementById('entradaResumo').value
        const experiencia = document.getElementById('entradaExperiencia').value
        const formacao = document.getElementById('entradaFormacao').value

        // ALT 124 = |
        // VERIFICA SE TODOS OS CAMPOS FORAM PREENCHIDOS, SE NÃO, MANDA MENSAGEM DE ERRO
        if (!nome || !contato || !resumo || !experiencia || !formacao) {
            alert('Preencha todos os campos')
            return
        }

        // MANDAR DADOS RECEBIDOS PARA A PÁGINA DE CURRICULO
        document.getElementById('curriculoNome').textContent = nome
        document.getElementById('curriculoContato').textContent = contato
        document.getElementById('curriculoResumo').textContent = resumo
        document.getElementById('curriculoExperiencia').textContent = experiencia
        document.getElementById('curriculoFormacao').textContent = formacao


        // MUDA A CLASSE DO FORMULÁRIO PARA A CLASSE DA PÁGINA ESCONDIDA DO CURRICULO
        secaoFormulario.classList.add('escondido')
        secaoCurriculo.classList.remove('escondido')

        // ROLA A PÁGINA PARA O INICIO BEM DEVAGAR
        window.scrollTo({top: 0, behavior: 'smooth'})

        // MUDA A CLASSE DE ESCONDIDO PARA A CLASSE ANTERIOR, NO CASO SERIA  A CLASSE DO FORMULÁRIO
        botaoVoltar.addEventListener('click',()=>{
            secaoCurriculo.classList.add('escondido')
            secaoFormulario.classList.remove('escondido')
        })
    })

})