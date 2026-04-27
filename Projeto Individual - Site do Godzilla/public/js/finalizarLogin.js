const usuario = JSON.parse(sessionStorage.getItem('usuario'));

if (usuario && usuario.tipoUsuario == 'A') {
    quiz.innerHTML = 'Quiz'
    dashboard.innerHTML = `Dashboard`
    login.innerHTML = `Sair`
    login.href = "#"
}
else if (usuario && usuario.tipoUsuario == 'P') {
    quiz.innerHTML = 'Quiz'
    dashboard.innerHTML = ``
    login.innerHTML = `Sair`
    login.href = "#"
}


function logout() {
    sessionStorage.clear(); // apaga tudo de sessão

    window.location.href = "index.html"; // recarrega a página de maneira automatica
}

// Isso é um evento, ou seja, quando evento for de "click" aciona
login.addEventListener('click', function (e) { //Sempre que clicar no login e o usuario existir, ele vai ser deslogado automatico
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuario) {
        e.preventDefault(); // Vou impedir com isso de ir para qualquer outra página
        logout();
    }
});