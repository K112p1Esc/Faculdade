function buscarDados() {
    fetch("/dashboard/consulta", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                return resposta.json(); // faz o retorno do json
            } else {
                throw "Houve um erro ao tentar realizar a consulta!";
            }
        })
        .then(function (dados) {
            console.log("Dados puxados com sucesso:", dados); // usa os dados recebidos 
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function buscarDados2() {
    fetch("/dashboard/consulta2", {
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
            console.log("Dados puxados com sucesso:", dados);
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
            console.log("Dados puxados com sucesso:", dados);
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
            console.log("Dados puxados com sucesso:", dados);
            buscar4 = dados;
            quantiaQuiz.innerHTML = buscar4[0].totalTentativas;
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

buscarDados();
buscarDados2();
buscarDados3();
buscarDados4();


// =================== GRÁFICO =================== //
const ctx = document.getElementById('grafico').getContext('2d');

const sensorDigital = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
        datasets: [{
            label: 'Usuários cadastrados', // Label de quando passar o mouse
            data: [10, 20, 30, 25, 40], // dado
            borderColor: '#395ab5',
            backgroundColor: 'rgba(57, 90, 181, 0.08)', // O background das linhas (o que fica embaixo dela)
            pointBackgroundColor: '#fff', // cor do fundo
            pointBorderColor: '#395ab5', // cor da borda do ponto
            pointBorderWidth: 2, // borda dentro do ponto
            pointRadius: 5, // Tamanho do ponto
            pointHoverRadius: 7, // tamanho do ponto quando colocarmos o mouse
            pointHoverBackgroundColor: '#395ab5', // cor de quando passarmos mouse
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
                backgroundColor: '#1a1a1a', // cor do fundo do que aparece quando passa mouse
                borderColor: '#444', // cor dessa borda
                borderWidth: 2, // tamanho dela
                padding: 10, // espaçamento interno
            }
        },
        scales: {
            x: { // em resumo, essas duas partes são relacionadas ao fundo de linhas de demarcação
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#aaa', font: { size: 12 } },
            },
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#aaa', font: { size: 12 } },
            }
        }
    }
});


// =================== KPI =================== //