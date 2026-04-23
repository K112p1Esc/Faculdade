let imagem = ['../img/perguntas/pergunta1.png', '../img/perguntas/pergunta2.png', '../img/perguntas/pergunta3.png', '../img/perguntas/pergunta4.png', '../img/perguntas/pergunta5.png', '../img/perguntas/pergunta6.png', '../img/perguntas/pergunta7.png', '../img/perguntas/pergunta8.png', '../img/perguntas/pergunta9.png', '../img/perguntas/pergunta10.png',]

let titulo = [
    'Começando de maneira simples, qual foi a data de estreia no Japão do primeiro filme de Godzilla?',

    'Considerando todas as fases e universos cinematográficos de Godzilla, quais são elas?',

    'No Monsterverse, temos uma organização secreta chamada "Monarch" que em 2023 recebeu sua própria série, retratando desde sua época de criação e também sobre o atual momento da organização. Em qual momento do Monsterverse a Monarch foi introduzida?',

    'O Japão possui algumas outras enormes franquias, como Ultraman e Kamen Rider que junto de Godzilla, receberam o chamado "Shin Universe", onde esses três junto de evagelion tiveram suas franquias revitalizadas. Entretanto, diferente de Godzilla, Ultraman e Kamen Rider nunca obtiveram em sua cronologia a Era Millenium, por que apenas nosso Kaiju favorito tem essa separação?',

    'Qual foi o primeiro filme em que Godzilla lutou contra King Ghidorah?',

    'Qual versão do Mechagodzilla foi construída a partir dos ossos do Godzilla original de 1954?',

    'Qual filme apresenta o Godzilla como uma ameaça puramente destrutiva, sem papel de herói ou anti-herói moderno?',

    'Qual kaiju é conhecido como "a rainha dos monstros" e frequentemente retratada como aliada de Godzilla?',

    'Em Godzilla Final Wars, qual é o nome da raça alienígena responsável por controlar vários kaijus?',

    'Até os tempos atuais, o Japão é dividido por Eras, sendo a atual a era Reiwa. Desta maneira, também foi dividido os filmes de Godzilla, iniciando justamente pela Era Showa, marcado pelo lançamento do primeiro filme e o início das batalhas  de outros monstros contra Godzilla. Qual a ordem dos embates dessa era de filmes?'
]

let respostaA = [
    `<input type="radio" name="pergunta" id="a" value="1"><label for="a">A - 27/10/1954</label>`,

    `<input type="radio" name="pergunta" id="a" value="1"><label for="a">A - Showa, Heisei, Millennium, Reiwa e MonsterVerse</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Godzilla II: Rei dos Monstros</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A -Na realidade, Kamen Rider e Ultraman, nunca receberam tal cronologia devido a sua alta audiência. Ou seja, não viram necessidade de criar-se uma nova era para eles.</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Godzilla vs Gigan</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Mechagodzilla (1974)</label>`,

    `<input type="radio" name="pergunta" id="a" value="1"><label for="a">A - Shin Godzilla</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Biollante</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Nebulans</label>`,

    `<input type="radio" name="pergunta" id="a" value="0"><label for="a">A - Anguirus, King Kong, Mothra, King-Ghidorah, Rodan, Ebirah, Kamacuras e Kumonga, King-Ghidorah, Gabara, Hedorah, Gigan e King-Ghidorah, Megalon e Gigan, Mecha Godzilla, Mecha Godzilla e Titanossauros</label>`,
]

let respostaB = [
    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - 28/10/1954</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - Showa, Heisei, Millennium, Reiwa e Taisho</label>`,

    `<input type="radio" name="pergunta" id="b" value="1"><label for="b">B - Godzila (2014)</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - A afirmação da pergunta está incorreta, na realidade Shin Kamen Rider e Shin Ultraman são considerados como o período millenium destas séries, mesmo que seja apenas um filme.</label>`,

    `<input type="radio" name="pergunta" id="b" value="1"><label for="b">B - Ghidorah, the Three-Headed Monster</label>`,

    `<input type="radio" name="pergunta" id="b" value="1"><label for="b">B - Kiryu</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - Godzilla vs Kong (2021)</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - Rodan</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - Kilaaks</label>`,

    `<input type="radio" name="pergunta" id="b" value="0"><label for="b">B - B - Anguirus, King Kong, Mothra, King-Ghidorah, King-Ghidorah, Kumonga, Kamacuras e Kumonga, King-Ghidorah, Gabara, Hedorah, Gigan e King-Ghidorah, Megalon e Gigan, Mecha Godzilla, Mecha Godzilla e Titanossauros</label>`,

]

let respostaC = [
    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - 29/10/1954</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Showa, Heisei, Millenium, MonsterVerse e Taisho</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Monarch</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - O período millenium não existe na cronologia de filmes de Ultraman e Kamen Rider, diferente de Godzilla, pelo motivo de serem apenas séries televisivas.</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Destroy All Monsters</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Mechagodzilla City</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Godzilla: King of the Monsters (2019)</label>`,

    `<input type="radio" name="pergunta" id="c" value="1"><label for="c">C - Mothra</label>`,

    `<input type="radio" name="pergunta" id="c" value="0"><label for="c">C - Seatopians</label>`,

    `<input type="radio" name="pergunta" id="c" value="1"><label for="c">C - Anguirus, King Kong, Mothra, King-Ghidorah, King-Ghidorah, Ebirah, Kamacuras e Kumonga, King-Ghidorah, Gabara, Hedorah, Gigan e King-Ghidorah, Megalon e Gigan, Mecha Godzilla, Mecha Godzilla e Titanossauros</label>`,
]

let respostaD = [
    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - 24/10/1954</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Showa, Heisei, Millennium, Shin e Reiwa.</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Godzilla vs. Kong (2021)</label>`,

    `<input type="radio" name="pergunta" id="d" value="1"><label for="d">D - Inicialmente não havia uma "Era Millennium" formalmente definida. Após o reboot de 1999, com filmes independentes entre si, o período passou a ser identificado como "Millennium", nome que acabou sendo consolidado e adotado oficialmente pela Toho.</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Godzilla vs Mechagodzilla (1974)</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Super Mechagodzilla</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Godzilla Final Wars</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Anguirus</label>`,

    `<input type="radio" name="pergunta" id="d" value="1"><label for="d">D - Xiliens</label>`,

    `<input type="radio" name="pergunta" id="d" value="0"><label for="d">D - Anguirus, King Kong, Mothra, King-Ghidorah, King-Ghidorah, Ebirah, Kamacuras e Kumonga, King-Ghidorah, Gabara, Hedorah, Megalon e King-Ghidorah, Megalon e Gigan, Mecha Godzilla, Mecha Godzilla e Titanossauros</label>`,
]
