document.addEventListener('DOMContentLoaded', () => {
    const botaoGerar = document.getElementById('botaoGerar');
    const botaoVoltar = document.getElementById('botaoVoltar');
    
    const secaoFormulario = document.getElementById('secao-formulario');
    const secaoCurriculo = document.getElementById('secao-curriculo');
  
    // Ação de Gerar o Currículo
    botaoGerar.addEventListener('click', () => {
      // 1. Captura os dados do formulário
      const nome = document.getElementById('entradaNome').value;
      const contato = document.getElementById('entradaContato').value;
      const resumo = document.getElementById('entradaResumo').value;
      const experiencia = document.getElementById('entradaExperiencia').value;
      const formacao = document.getElementById('entradaFormacao').value;
  
      // 2. Validação simples
      if (!nome || !contato || !resumo || !experiencia || !formacao) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      // 3. Alimenta o layout do currículo com as informações
      document.getElementById('curriculoNome').textContent = nome;
      document.getElementById('curriculoContato').textContent = contato;
      document.getElementById('curriculoResumo').textContent = resumo;
      document.getElementById('curriculoExperiencia').textContent = experiencia;
      document.getElementById('curriculoFormacao').textContent = formacao;
  
      // 4. Transição de telas: esconde formulário e mostra currículo
      secaoFormulario.classList.add('escondido');
      secaoCurriculo.classList.remove('escondido');
      
      // Rola a página para o topo de forma suave
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    // Ação de Voltar para o Formulário
    botaoVoltar.addEventListener('click', () => {
      secaoCurriculo.classList.add('escondido');
      secaoFormulario.classList.remove('escondido');
    });
  });