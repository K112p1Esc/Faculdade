let imagem = ['../img/perguntas/pergunta1.png', '../img/perguntas/pergunta2.png', '../img/perguntas/pergunta3.png', '../img/perguntas/pergunta4.png', '../img/perguntas/pergunta5.png', '../img/perguntas/pergunta6.png', '../img/perguntas/pergunta7.png', '../img/perguntas/pergunta8.png', '../img/perguntas/pergunta9.png', '../img/perguntas/pergunta10.png',]

let titulo = ['Começando de maneira simples, qual foi a data de estreia do primeiro filme de Godzilla?', 'Godzilla possui eras muito bem definidas no cinema. Quais são elas?', 'No Monsterverse, temos uma organização secreta chamada "Monarch" que em 2023 recebeu sua própria série, retratando desde sua época de criação e também sobre o atual momento da organização. Em qual momento do Monsterverse a Monarch foi introduzida?']

let respostaA = [
    '<input type="radio" name="pergunta" id="a" value="1"><label for="a">A - 27/10/1954</label>',
    '<input type="radio" name="pergunta" id="a" value="1"><label for="a">A - Showa, Heisei, Millennium, Reiwa e MonsterVerse</label>',
    '<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Godzilla II: Rei dos Monstros</label>'
]

let respostaB = [
    '<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - 28/10/1954</label>',
    '<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - Showa, Heisei, Millennium, Reiwa e Taisho</label>',
    '<input type="radio" name="pergunta" id="b" value="1"><label for="b">B - Godzila</label>'
]

let respostaC = [
    '<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - 29/10/1954</label>',
    '<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Showa, Heisei, Millenium, MonsterVerse e Taisho</label>',
    '<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Monarch</label>'
]

let respostaD = [
    '<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - 24/10/1954</label>',
    '<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Showa, Heisei, Millennium, Shin e Reiwa.</label>',
    '<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Godzilla vs. Kong (2021)</label>'
]

let continuar = 0;
let pontuacao = 0;
let nomePontuacao = '';
let questoesAcertadas = []

nextQuestion(continuar)

function confirmation() {

    let selecionado = document.querySelector('input[name="pergunta"]:checked');

    if (!selecionado) {
        console.log("Nenhuma opção selecionada");
    } else if (selecionado.value == 1) {
        pontuacao++;
        questoesAcertadas.push(continuar + 1);
        console.log("Valor:", pontuacao, "Questões Acertadas", questoesAcertadas);
        continuar++;
        nextQuestion(continuar)
    } else {
        continuar++;
        nextQuestion(continuar);
    }

}

function nextQuestion(i) {

    if (i < 10) {
        qualPergunta.innerHTML = `${i + 1}º Pergunta`;
        tituloPergunta.innerHTML = titulo[i];
        imagemPergunta.innerHTML = `<img src='${ imagem[i]}'>`
        respostaPergunta1.innerHTML = respostaA[i];
        respostaPergunta2.innerHTML = respostaB[i];
        respostaPergunta3.innerHTML = respostaC[i];
        respostaPergunta4.innerHTML = respostaD[i];
    } else {
        apagar.innerHTML = '';
        if (pontuacao == 0) {
            nomePontuacao = `Nem com chute?`
        } else if (pontuacao <= 2) {
            nomePontuacao = `Você chutou bem né?`;
        } else if (pontuacao <= 5) {
            nomePontuacao = `Fã Iniciante`;
        } else if (pontuacao <= 7) {
            nomePontuacao = `Fã de Carteirinha`;
        } else if (pontuacao <= 9) {
            nomePontuacao = `Godzillaniaco`;
        } else {
            nomePontuacao = `Roteirista`
        }

        nomeTotal.innerHTML = nomePontuacao;

        if (pontuacao == 0) {
            quantiaAcerto.innerHTML = `Você errou todas as questões :(`;
        } else if (pontuacao == 1) {
            quantiaAcerto.innerHTML = `Você acertou ${pontuacao} questão`;
        } else {
            quantiaAcerto.innerHTML = `Você acertou ${pontuacao} questões`;
        }

        if (pontuacao == 0) {

        } else if (pontuacao == 1) {
            questoesCertas.innerHTML = `A questão acertada é: ${questaoAcertadas[i]}`
        } else {
            questoesCertas.innerHTML = `As questões acertadas são: `
            for (let i = 0; i < questoesAcertadas.length; i++) {
                questoesCertas.innerHTML += `${questoesAcertadas[i]}ª,`
            }
        }

    }
}