let continuar = -1;

let perguntas = [
    'O gabinete é muitas vezes chamado desta maneira. Também é responsável por todos os processamentos que é divido inclusive em três partes principais.',
    'Área da CPU responsável por fazer todos os cálculos.',
    'É a memória mais rápida de um computador.',
    'É área de memória temporária de um computador.',
    'Memória que o armazenamento não pode ser mudado e são feitos apenas na fábrica.',
    'É a memória que retém nossos dados mesmo com o computador desligado.',
    'Evolução da memória Eprom e muito utilizada em pen-drives e celulares.',
    'Quando precisamos salvar uma grande quantia de dados de maneira permanente, conhecidos popularmente como HDs ou SSDs',
    'A maneira como alguns componentes do hardware usa para acessar a RAM sem a CPU.',
    'Informa que um dispositivo eletrônico específico vai ser ativado. Também sigla de um jogo famoso.',
    'Linhas físicas que indicam onde a CPU deve ler ou escrever. Dica: está em inglês o nome.',
    'Transporta os dados de verdade para o local desejado. Dica: está em inglês o nome.',
    'Linha intermediária da Intel conhecida pelo custo benefício e usável em jogos mais leves.',
    'Linha de alto desempenho da intel usado para jogos muitas vezes de última geração.',
    'Chip que possui dois núcleos independentes entre si.',
    'Chip que possui quatro núcleos independentes entre si'
]

let respostas = [
    'CPU',
    'ULA',
    'Registradores',
    'RAM',
    'ROM',
    'Eprom',
    'Flash',
    'Memória de Massa',
    'DMA',
    'CS',
    'Address Bus',
    'Data Bus',
    'I5',
    'I7',
    'Dual-core',
    'Quad-core'
]

validar();

function validar() {
    // Quando for o primeiro puxar, eu apenas construo isso para garantir que funcione aparecendo tudo!
    if (continuar == -1) {
        continuar++;
        perguntaVetor.innerHTML = perguntas[continuar];

        for (let i = 0; i < respostas[continuar].length; i++) {
            inputResposta.innerHTML += `<input type="text" maxlength="1" id="respostaPerg${i}" onkeyup="proximoInput(${i}, event)">`
        }
    } else {
        let verif = '';
        // Vou coletar tudo digitado pelo usuário
        for (let i = 0; i < respostas[continuar].length; i++) {
            let input = document.getElementById(`respostaPerg${i}`);    
            verif += input.value;
        }

        if (verif.toLowerCase() == respostas[continuar].toLowerCase()) {
            // Acertou a palavra inteira
            msg.innerHTML = 'Você acertou a pergunta!';
            msg.style.color = 'green';

            setTimeout(function () {
                msg.innerHTML = '';
                inputResposta.innerHTML = '';
                continuar++;

                // Ainda tem perguntas?
                if (continuar < perguntas.length) {
                    perguntaVetor.innerHTML = perguntas[continuar];

                    for (let i = 0; i < respostas[continuar].length; i++) {
                        inputResposta.innerHTML += `<input type="text" maxlength="1" id="respostaPerg${i}" onkeyup="proximoInput(${i}, event)">`
                    }
                } else {
                    perguntaVetor.innerHTML = '';
                    msg.innerHTML = 'Parabéns! Você completou todas as perguntas!';
                    msg.style.color = 'blue';
                }
            }, 1000);
        } else {
            // Não acertou, verificar tudo um por um 
            let respostaCerta = respostas[continuar].toLowerCase();
            let tentativa = verif.toLowerCase();

            // Marcar quais posições da resposta foi usado
            let posicoesUsadas = [];
            for (let i = 0; i < respostaCerta.length; i++) {
                posicoesUsadas.push(false); // Por padrão, tudo vai ser falso
            }

            // Existe alguma letra verde? (correto)
            for (let i = 0; i < tentativa.length; i++) {
                let input = document.getElementById(`respostaPerg${i}`);

                if (tentativa[i] == respostaCerta[i]) {
                    input.className = 'verde';
                    input.disabled = true; // Bloqueia o input
                    posicoesUsadas[i] = true; // Marquei como usado
                }
            }

            // Existe alguma letra em amarelo (certa, mas posição errada)
            for (let i = 0; i < tentativa.length; i++) {
                let input = document.getElementById(`respostaPerg${i}`);

                // Verificar só se não for verde né
                if (input.className != 'verde') {
                    let encontrou = false;

                    // Procura a letra em outras posições da resposta
                    for (let j = 0; j < respostaCerta.length; j++) {
                        // A letra existe mas não está na mesma posição?
                        // Ja apareceu alguma vez?
                        // É isso que faz o if
                        if (tentativa[i] == respostaCerta[j] && i != j && !posicoesUsadas[j]) {
                            encontrou = true;
                            posicoesUsadas[j] = true; // Marco como usado
                            break;
                        }
                    }

                    if (encontrou) {
                        input.className = 'amarelo';
                    } else {
                        input.className = 'vermelho';
                    }
                }
            }
        }
    }
}

function proximoInput(i, event) {
    // é basicamente o input atual
    let inputAtual = document.getElementById(`respostaPerg${i}`);

    // https://www.toptal.com/developers/keycode
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
    // Se for o Backspace (código 8) ou CapsLock (código 20) vou ignorar tudin
    if (event && (event.keyCode === 8 || event.keyCode === 20)) {
        return;
    }

    // Se realmente digitou algo
    if (inputAtual.value !== '') {
        // Avança para o próximo input
        let proximo = document.getElementById(`respostaPerg${i + 1}`);
        if (proximo) {
            // Se for verde
            if (proximo.disabled) {
                // Procuro o próximo
                let j = i + 2;
                let encontrou = false;
                while (!encontrou) {
                    let inputSeguinte = document.getElementById(`respostaPerg${j}`);
                    if (!inputSeguinte) {
                        break;
                    }
                    if (!inputSeguinte.disabled) {
                        inputSeguinte.focus();
                        encontrou = true;
                    }
                    j++;
                }
            } else {
                proximo.focus();
            }
        }
    }
}