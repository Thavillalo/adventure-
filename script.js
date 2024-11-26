let textoHistoria = document.getElementById("texto-historia");
let imagemHistoria = document.getElementById("imagem-historia");

function escolherEsquerda() {
    textoHistoria.innerHTML = "Você escolheu o caminho à esquerda. O ambiente fica mais sombrio. Você escuta sons estranhos ao longe...";
    imagemHistoria.src = "floresta-sombria.jpg"; // Imagem de floresta escura
    atualizarOpcoes("Continuar", "Voltar", "esquerda");
}

function escolherDireita() {
    textoHistoria.innerHTML = "Você escolheu o caminho à direita. O sol brilha através das árvores, e você vê um lago à frente.";
    imagemHistoria.src = "floresta-lago.jpg"; // Imagem do lago na floresta
    atualizarOpcoes("Sentar e descansar", "Voltar", "direita");
}

function atualizarOpcoes(opcao1, opcao2, caminho) {
    let opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = `
        <button onclick="prosseguir('${caminho}', '1')">${opcao1}</button>
        <button onclick="voltar()">Voltar</button>
    `;
}

function prosseguir(caminho, escolha) {
    if (caminho === "esquerda" && escolha === "1") {
        textoHistoria.innerHTML = "Você se aproxima de uma cabana misteriosa. O que você fará agora?";
        imagemHistoria.src = "cabana-misteriosa.jpg"; // Imagem da cabana
        atualizarOpcoes("Entrar na cabana", "Voltar", "esquerda");
    } else if (caminho === "direita" && escolha === "1") {
        textoHistoria.innerHTML = "Você decide descansar à beira do lago, sentindo a tranquilidade do lugar.";
        imagemHistoria.src = "lago-descanso.jpg"; // Imagem do lago para descanso
        atualizarOpcoes("Continuar explorando", "Voltar", "direita");
    }
}

function voltar() {
    textoHistoria.innerHTML = "Você está de volta à encruzilhada. Há dois caminhos à sua frente: um à esquerda, outro à direita.";
    imagemHistoria.src = "floresta.jpg"; // Volta à imagem inicial da floresta
    document.getElementById("opcoes").innerHTML = `
        <button onclick="escolherEsquerda()">Ir para a esquerda</button>
        <button onclick="escolherDireita()">Ir para a direita</button>
    `;
}
