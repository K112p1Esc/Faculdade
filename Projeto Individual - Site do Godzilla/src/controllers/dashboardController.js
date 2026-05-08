var dashboardModel = require("../models/dashboardModel");

function consulta(req, res) {
    dashboardModel.buscar_tentativas()
        .then(
            function (resultadoconsulta) {
                console.log(`\nResultados encontrados: ${resultadoconsulta.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoconsulta)}`);

                if (resultadoconsulta.length > 0) {
                    res.json(resultadoconsulta); // retorna todos os resultados
                } else {
                    res.status(404).send("Nenhuma tentativa encontrada");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function consulta2(req, res) {
    dashboardModel.buscar_tentativas2()
        .then(
            function (resultadoconsulta) {
                console.log(`\nResultados encontrados: ${resultadoconsulta.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoconsulta)}`);

                if (resultadoconsulta.length > 0) {
                    res.json(resultadoconsulta); // retorna todos os resultados
                } else {
                    res.status(404).send("Nenhuma tentativa encontrada");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function consulta3(req, res) {
    dashboardModel.quantia_usuario()
        .then(
            function (resultadoconsulta) {
                console.log(`\nResultados encontrados: ${resultadoconsulta.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoconsulta)}`);

                if (resultadoconsulta.length > 0) {
                    res.json(resultadoconsulta); // retorna todos os resultados
                } else {
                    res.status(404).send("Nenhuma tentativa encontrada");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function consulta4(req, res) {
    dashboardModel.quantia_quiz()
        .then(
            function (resultadoconsulta) {
                console.log(`\nResultados encontrados: ${resultadoconsulta.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoconsulta)}`);

                if (resultadoconsulta.length > 0) {
                    res.json(resultadoconsulta); // retorna todos os resultados
                } else {
                    res.status(404).send("Nenhuma tentativa encontrada");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("\nHouve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    consulta,
    consulta2,
    consulta3,
    consulta4
}