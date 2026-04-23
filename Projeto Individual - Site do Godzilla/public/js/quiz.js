let continuar = 0;
let pontuacao = 0;
let nomePontuacao = '';
let questoesAcertadas = []

nextQuestion(continuar)

//DETALHE: SENDO IMPORTADO VIA HTML (ia fazer JS mas ia usar module...)

// Dando uma explicada na parte acima, a lógica é simples, eu salvo em vetores todas as perguntas e todas as 
// respostas junto do caminho da imagem respectiva, até ai, simples, correto? Bom, com isso feito, eu declaro
// uma variável global que é o continuar, para que assim, quando eu aumentar ela, eu ter sempre armazenada
// e com isso, facilitar a minha vida inteira por um motivo simples: Eu vou sempre poder usar ela para
// continuar carregando esse vetor e pegar as perguntas dele. Mesmo que seja mal otimizado isso até, funciona 
// relativamente bem para o que eu preciso, considerando que deve ser um quiz estático. Além disso, nomePontuacao
// é simples, o título daquela pontuação, poderia declarar em outro local? Sim, mas preferi como global apenas
// por organização. As questões Acertadas eu quero preservar, então faz sentido estar ali. Ela vai armazenar
// de 1 até 10 as questões que foram acertadas. 

function confirmation() {

    let selecionado = document.querySelector('input[name="pergunta"]:checked');

    if (!selecionado) {
        alert("Escolha uma resposta antes de continuar!");
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

// Confirmation é muito simples! Em resumo, eu seleciono na página quiz.html o input checado primeiramente e
// então começo uma de duas verificações: Ele esta selecionado? Se não, aviso que deve-se selecionar um. Caso
// esteja, pulo para próximo passo que é: O valor dele é IGUAL a 1? Caso seja, quer dizer que é a resposta 
// correta, caso não, é a resposta errada. Em ambos eu invoco a função nextQuestion(continuar) <- onde esse
// parametro é justamente a variável global que disse.

function nextQuestion(i) {

    if (i < 10) {
        qualPergunta.innerHTML = `${i + 1}º Pergunta`;
        tituloPergunta.innerHTML = titulo[i];
        imagemPergunta.innerHTML = `<img src='${imagem[i]}'>`;
        respostaPergunta1.innerHTML = respostaA[i];
        respostaPergunta2.innerHTML = respostaB[i];
        respostaPergunta3.innerHTML = respostaC[i];
        respostaPergunta4.innerHTML = respostaD[i];
    } else {
        quizArea.style.display = "none";
        resultadoArea.style.display = "flex";
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

        // ÁREA QUE VAI APARECER PONTUAÇÃO TODA BONITA!
        if (pontuacao == 0) {
            quantiaAcerto.innerHTML =
                `<div class="scoreBox">
                    <div class="scoreNumero">0 / 10</div>
                    <div class="scoreTexto">Nem com chute 🥹</div>
                </div>`;
        } else if (pontuacao == 1) {
            quantiaAcerto.innerHTML =
                `<div class="scoreBox">
                    <div class="scoreNumero">1 / 10</div>
                    <div class="scoreTexto">Você acertou 1 questão</div>
                </div>`;
        } else {
            quantiaAcerto.innerHTML =
                `<div class="scoreBox">
                    <div class="scoreNumero">${pontuacao} / 10</div>
                    <div class="scoreTexto">Você acertou ${pontuacao} questões</div>
                </div>`;
        }

        // ÁREA DAS QUESTÕES ACERTADAS TODAS LINDAS
        if (pontuacao == 0) {
            questoesCertas.innerHTML = `<p style="color:#888;">Nenhuma questão acertada</p>`;

        } else if (pontuacao == 1) {
            questoesCertas.innerHTML =
                `<p>Questão acertada:</p>
                <span class="questaoBolinha">${questoesAcertadas[0]}ª</span>`;

        } else {
            questoesCertas.innerHTML = `<p>Questões acertadas:</p>`;

            for (let i = 0; i < questoesAcertadas.length; i++) {
                questoesCertas.innerHTML += `<span class="questaoBolinha">${questoesAcertadas[i]}ª</span>`;
            }
        }

    }

    // A parte mais chata do código na minha opinião, por que mexe justamente com a questão de estilização do meu quiz.
    // Existem 3 grandes partes nele. A primeira é a mais simples: Exibição do quiz usando o vetores lá de cima.
    // A segunda e terceira parte é quando o quiz for finalizado. Em resumo, primeiramente eu vou guardar a parte do
    // nome daquela pontuação, para saber o que ela é. Depois disso, vou entrar em uma área de estilização da mesma
    // utilizando da scoreBox, scoreTexto e scoreNumero para falar qual possibilidade aconteceu, sendo 0, 1 e <1
    // Todos possuem a mesma estilização, no entanto, são diferentes em conteúdo. A última "grande parte" é mostrar
    // quais questões foram acertadas, que eu mostro dentro de uma bolinha. É simples a principio, mas eu tenho que
    // verificar da mesma maneira que a primeira para ficar decente. Poderia fazer com outra lógica? Sim, mas preferi
    // ir de uma maneira mais simples.
}