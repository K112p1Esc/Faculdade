let buscar1 = [];
function buscarDados() {
    fetch("/dashboard/consulta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            buscar1 = dados;
            let labels = [];
            let valores = [];
            // Transformo em string, pego o tempo que foi feito o cadastro para então boomm, transformar em uma data usavel como label
            for (let i = 0; i < buscar1.length; i++) {
                // aqui em resumo, eu to tentando OBRIGAR para virar uma string
                let dataStr = buscar1[i].dia.toString().substring(0, 10); // pega só "2025-05-03" por exemplo
                let partes = dataStr.split("-");
                let dataFormatada = partes[2] + "/" + partes[1];// vira "03/05"
                labels.push(dataFormatada);
                valores.push(buscar1[i].total);
            }
            // Atualiza o gráfico
            graficoGodzilla.data.labels = labels;
            graficoGodzilla.data.datasets[0].data = valores;
            graficoGodzilla.update();
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

let buscar2 = [];
function buscarDados2() {
    fetch("/dashboard/consulta2", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            console.log("Dados de todos os Quizes feitos:", dados);
            buscar2 = dados;
            // Contagem de acerto por questão (de 1 a 10)
            let contagemQuestoes = [];
            for (let i = 1; i <= 10; i++) {
                contagemQuestoes[i] = 0;
            }
            // Vou percorrer agora cada tentativa pega acima e contar os acertos
            for (let i = 0; i < buscar2.length; i++) {
                if (buscar2[i].questoesAcertadas) {
                    let questoes = buscar2[i].questoesAcertadas.split(",");
                    for (let j = 0; j < questoes.length; j++) {
                        let numero = parseInt(questoes[j].trim()); //.trim() remove espaço em branco
                        if (numero >= 1 && numero <= 10) {
                            contagemQuestoes[numero]++;
                        }
                    }
                }
            }
            console.log("Contagem por questão:", contagemQuestoes);
            // A partir daqui tentarei encontrar a mais e menos acertada
            let QMais = null;
            let QMenos = null;
            let maxAcertos = -1;
            let minAcertos = Infinity; // só para ajudar na contagem, pq qualquer número é menor que inifinito.
            for (let questao in contagemQuestoes) { // Só para lembrar: percorro o contagem questao para ficar acessando ele
                let acertos = contagemQuestoes[questao];
                if (acertos > maxAcertos) {
                    maxAcertos = acertos;
                    QMais = questao;
                }
                if (acertos < minAcertos) {
                    minAcertos = acertos;
                    QMenos = questao;
                }
            }

            let totalAcertos = 0;
            for (let i = 1; i <= 10; i++) { // Com isso eu pego o total de vezes que x questão foi acertada e vou somando
                totalAcertos += contagemQuestoes[i];
            }
            let mediaUsuarios = totalAcertos / buscar2.length; // faço a média
            mediaUsuarios = mediaUsuarios.toFixed(2)

            console.log("Média de acertos por usuário:", mediaUsuarios);
            console.log(`Questão mais acertada: ${QMais} (${maxAcertos} acertos)`);
            console.log(`Questão menos acertada: ${QMenos} (${minAcertos} acertos)`);
            maisAcertada.innerHTML = `${QMais} | (${maxAcertos}x)`;
            menosAcertada.innerHTML = `${QMenos} | (${minAcertos}x)`;
            mediaAcerto.innerHTML = mediaUsuarios;
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

let buscar3 = []
function buscarDados3() {
    fetch("/dashboard/consulta3", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            console.log("Total de Usuários:", dados);
            buscar3 = dados;
            totalUsu.innerHTML = buscar3[0].totalUsuarios;
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

buscar4 = []
function buscarDados4() {
    fetch("/dashboard/consulta4", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            console.log("Quantia de Quizes feitos:", dados);
            buscar4 = dados;
            quantiaQuiz.innerHTML = buscar4[0].totalTentativas;
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

let buscar5 = [];
function buscarDados5() {
    fetch("/dashboard/consulta5", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            if (resposta.ok) {
                return resposta.json();
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            console.log("Ranking", dados);
            buscar5 = dados;
            for (let i = 0; i < buscar5.length; i++) {
                let posicao = i + 1;
                let nome = buscar5[i].nomeUsuario;
                let acertos = buscar5[i].totalAcertos;
                listaRanking.innerHTML += `
                <div class="ranking">
                    <div class="pessoaRanking">${posicao}º ${nome}</div>
                    <div class="quantiaAcertada">${acertos}</div>
                </div>
            `;
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

buscarDados();
buscarDados2();
buscarDados3();
buscarDados4();
buscarDados5();


// =================== GRÁFICO =================== //
const ctx = document.getElementById('grafico').getContext('2d');

const graficoGodzilla = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // vazio, por padrão agora preenchido pelo fetch
        datasets: [{
            label: 'Usuários cadastrados',
            data: [], // Por Padrão é vazio, preenchido agora pelo fetch
            borderColor: '#395ab5',
            backgroundColor: 'rgba(57, 90, 181, 0.08)',
            pointBackgroundColor: '#fff',
            pointBorderColor: '#395ab5',
            pointBorderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: '#395ab5',
            fill: true,
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#ccc',
                    boxWidth: 12,
                    boxHeight: 12,
                }
            },
            tooltip: {
                backgroundColor: '#1a1a1a',
                borderColor: '#444',
                borderWidth: 2,
                padding: 10,
            }
        },
        scales: {
            x: {
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#aaa', font: { size: 12 } },
            },
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: {
                    color: '#aaa',
                    font: { size: 12 },
                }
            },
        }
    }
});