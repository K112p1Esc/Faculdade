let continuar = -1;
nextSlide()
function nextSlide() {
    if (continuar < nomes.length-1) {
        continuar++;
        filmeTitulo.innerHTML = nomes[continuar];
        textoFilme.innerHTML = semSpoiler[continuar];
        textoSpoiler.innerHTML = comSpoiler[continuar];
        imagemFilme.innerHTML = imagem[continuar];
        trailerFilme.innerHTML = trailer[continuar];
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
        filmeTitulo.innerHTML = nomes[continuar];
        textoFilme.innerHTML = semSpoiler[continuar];
        textoSpoiler.innerHTML = comSpoiler[continuar];
        imagemFilme.innerHTML = imagem[continuar];
        trailerFilme.innerHTML = trailer[continuar];
        if (continuar == 0) {
            document.querySelector('.btnVoltar').classList.remove('visivel');    // exibir
        }
    }
}