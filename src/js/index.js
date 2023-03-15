 /*  
 
  OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

  Passo 1 - Dar um jeito de pegar os elementos HTML dos botões 

  Passo 2 - Dar um jeito de identificar o clique do usuário no botão

  Passo 3 - Desmarcar o botão selecionado anterior 

  Passo 4 - Marcar o botão clicado como se estivesse selecionada 

  Passo 5 - Esconder a imagem anterior 

  Passo 6 - Fazer aparecer a imagem correspondente ao botão clicado 
 
 */ 


// Passo 1 - Dar um jeito de pegar os elementos HTML dos botões 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - Dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao,indice) => {
    botao.addEventListener('click',() => {
          
            //Refatorei o código    
            desativarBotaoSelecionado();

            selecionarBotaoCarrossel(botao);

            esconderImagemAtiva();
                    
            mostrarImagemDeFundo(indice);
    
        })
}) 

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

