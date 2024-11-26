document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-proximo'); // Seleciona todos os botões
    const passos = document.querySelectorAll('.passo'); // Seleciona todas as etapas (passos)

    // Função para ocultar todos os passos
    function esconderPassos() {
        passos.forEach(passo => {
            passo.classList.remove('ativo'); // Remove a classe 'ativo' de todos os passos
        });
    }

    // Função para mostrar o próximo passo
    function mostrarPasso(proximoPasso) {
        const passo = document.getElementById('passo-' + proximoPasso);
        if (passo) {
            passo.classList.add('ativo'); // Adiciona a classe 'ativo' ao próximo passo
        }
    }

    // Adiciona um ouvinte de clique para cada botão
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const proximoPasso = this.getAttribute('data-proximo'); // Obtém o valor do próximo passo
            esconderPassos(); // Esconde todos os passos
            mostrarPasso(proximoPasso); // Mostra o próximo passo
        });
    });
});
