let continuar = -1;
nextSlide()
function nextSlide() {
    if (continuar < nomes.length-1) {
        continuar++;
        filmeTraje.innerHTML = nomes[continuar];
        textoTraje.innerHTML = texto[continuar];
        imagemTraje.innerHTML = imagem[continuar];
        anoTraje.innerHTML = ano[continuar];
        if (continuar > 0) {
            document.querySelector('.btnVoltar').classList.add('visivel');    // exibir
        }
    }

    if(continuar == nomes.length-1){
        document.querySelector('.btnAvancar').classList.add('invisivel');    // exibir
    }
}

function previousSlide() {
    if (continuar != 0) {
        continuar--
        filmeTraje.innerHTML = nomes[continuar];
        textoTraje.innerHTML = texto[continuar];
        imagemTraje.innerHTML = imagem[continuar];
        anoTraje.innerHTML = ano[continuar];

        document.querySelector('.btnAvancar').classList.remove('invisivel');
        
        if (continuar == 0) {
            document.querySelector('.btnVoltar').classList.remove('visivel');    // exibir
        }
    }
}