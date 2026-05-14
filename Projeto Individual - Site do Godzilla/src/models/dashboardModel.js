var database = require("../database/config")

function buscar_top10_acertos() {
    var instrucaoSql = `
        SELECT u.nomeUsuario, SUM(t.quantiaAcertos) AS totalAcertos FROM tbUsuario u
            JOIN tbTentativa t ON t.fkUsuario = u.idUsuario
            GROUP BY u.idUsuario, u.nomeUsuario, u.dataCadUsuario
            ORDER BY totalAcertos DESC, u.nomeUsuario ASC, u.dataCadUsuario DESC
            LIMIT 10;
    `;
    return database.executar(instrucaoSql);
}
function buscar_usuarios_7dias() {
    var instrucaoSql = `
        SELECT DATE(dataCadUsuario) AS dia, COUNT(*) AS total FROM tbUsuario
            WHERE dataCadUsuario >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)
            GROUP BY DATE(dataCadUsuario)
            ORDER BY dia ASC;
    `;
    return database.executar(instrucaoSql);
}

function buscar_tentativas() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente.")
    var instrucaoSql = `
        SELECT idTentativa, quantiaAcertos, questoesAcertadas, fkUsuario FROM tbTentativa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
} 

function quantia_usuario() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n")
    var instrucaoSql = `
        SELECT COUNT(idUsuario) AS totalUsuarios FROM tbUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantia_quiz() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n")
    var instrucaoSql = `
        SELECT COUNT(idTentativa) AS totalTentativas FROM tbTentativa;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscar_top10_acertos,
    buscar_tentativas,
    quantia_usuario,
    quantia_quiz,
    buscar_usuarios_7dias
};