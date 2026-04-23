function cadastrar() {
    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = inputNome.value;
    var emailVar = inputEmail.value;
    var senhaVar = inputSenha.value;
    var confirmacaoSenhaVar = inputSenhaConfir.value;

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == ""
    ) {
        // cardErro.style.display = "block";
        // mensagem_erro.innerHTML =
        //     "(Mensagem de erro para todos os campos em branco)";

        // finalizarAguardar();
        // return false;

    } else if (nomeVar.length <= 1) {
        alert('Nome com um ou menos caracteres')
    } else if (emailVar.indexOf('@') == -1) {
        alert('Não contém arroba');
    } else if (emailVar.indexOf('.') == -1) {
        alert('Não contém .');
    } else if (senhaVar.length <= 6) {
        alert('Senha com 6 ou menos digitos');
    } else if (senhaVar != confirmacaoSenhaVar) {
        alert('Não é igual a senha');
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                cardErro.style.display = "block";

                mensagem_erro.innerHTML =
                    "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

                setTimeout(() => {
                    window.location = "login.html";
                }, "2000");

                limparFormulario();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

// Listando empresas cadastradas 
function listar() {
    fetch("/empresas/listar", {
        method: "GET",
    })
        .then(function (resposta) {
            resposta.json().then((empresas) => {
                empresas.forEach((empresa) => {
                    listaEmpresasCadastradas.push(empresa);

                    console.log("listaEmpresasCadastradas")
                    console.log(listaEmpresasCadastradas[0].codigo_ativacao)
                });
            });
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}

function sumirMensagem() {
    cardErro.style.display = "none";
}