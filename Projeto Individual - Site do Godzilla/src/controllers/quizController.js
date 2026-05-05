var quizModel = require("../models/quizModel"); // ajuste o caminho se necessário

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertadas = req.body.questoesAcertadasServer;
    var pontuacao = req.body.pontuacaoServer;
    var id = req.body.idServer;
 
    // Faça as validações dos valores
    if (acertadas == undefined) {
        res.status(400).send("Acertadas está undefined!");
    } else if (pontuacao == undefined) {
        res.status(400).send("Pontuacao está undefined!");
    } else if (id == undefined) {
        res.status(400).send("Id está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrar(acertadas, pontuacao, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}