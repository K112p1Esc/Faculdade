let nomes = [
    'Godzilla (1954)',
    'Godzilla Raids Again',
    'King Kong vs. Godzilla (1962)',
    'Mothra vs. Godzilla (1964)',
    'Ghidorah, the Three-Headed Monster',
    'Invasion of Astro-Monster',
    'Ebirah, Horror of the Deep',
    'Son of Godzilla',
    'Destroy All Monsters',
    `Godzilla's Revenge`,
    'Godzilla vs. Hedorah',
    'Godzilla vs. Gigan (1972)',
    'Godzilla vs. Megalon (1973)',
    'Godzilla vs. Mechagodzilla (1974)',
    'Terror of Mechagodzilla (1975)',
    'The Return of Godzilla (1984)',
    'Godzilla vs. Biollante (1989)',
    'Godzilla vs. King Ghidorah (1991)',
    'Godzilla vs. Mothra (1992)',
    'Godzilla vs. Mechagodzilla II (1993)',
    'Godzilla vs. SpaceGodzilla (1994)',
    'Godzilla vs. Destoroyah (1995)',
    'Godzilla (1998)',
    'Godzilla 2000: Millennium (1999)',
    'Godzilla vs. Megaguirus (2000)',
    'Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack (2001)',
    'Godzilla Against Mechagodzilla (2002)',
    'Godzilla: Tokyo S.O.S. (2003)',
    'Godzilla: Final Wars (2004)',
    'Godzilla (2014)',
    'Shin Godzilla (2016)',
    'Godzilla: King of the Monsters (2019)',
    'Godzilla: Singular Point (2021)',
    'Godzilla vs. Kong (2021)',
    'Monarch: Legacy of Monsters (Season 1 - 2023)',
    'Godzilla Minus One (2023)',
    'Godzilla x Kong: The New Empire (2024)',
]

let trailer = [
    // Godzilla 1954
    '<iframe src="https://www.youtube.com/embed/GuV-Vb1PlSU?controls=0&rel=0" allowfullscreen></iframe>',
    //Godzilla Raids Again
    '<iframe src="https://www.youtube.com/embed/4b179urNFlQ?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. King Kong 1962
    '<iframe src="https://www.youtube.com/embed/WtgFm2LxJx4?controls=0&rel=0" allowfullscreen></iframe>',
    // Mothra vs. Godzilla (1964)
    '<iframe src="https://www.youtube.com/embed/lRlttjvvvzE?controls=0&rel=0" allowfullscreen></iframe>',
    // Ghidorah, the Three-Headed Monster
    '<iframe src="https://www.youtube.com/embed/87lLDKzpw0o?controls=0&rel=0" allowfullscreen></iframe>',
    // Invasion of Astro-Monster
    '<iframe src="https://www.youtube.com/embed/2j7k5VpZJ7E?controls=0&rel=0" allowfullscreen></iframe>',
    // Ebirah, Horror of the Deep
    '<iframe src="https://www.youtube.com/embed/oP9juL09Cww?controls=0&rel=0" allowfullscreen></iframe>',
    // Son of Godzilla
    '<iframe src="https://www.youtube.com/embed/QWHCn5Y2WcQ?controls=0&rel=0" allowfullscreen></iframe>',
    // Destroy All Monsters
    '<iframe src="https://www.youtube.com/embed/lcdEtOA9ekI?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla's Revenge
    '<iframe src="https://www.youtube.com/embed/hVMK4BeQNBs?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Hedorah
    '<iframe src="https://www.youtube.com/embed/jdm8xgG5rR8?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Gigan (1972)
    '<iframe src="https://www.youtube.com/embed/7wuS1WS-0FY?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Megalon (1973)
    '<iframe src="https://www.youtube.com/embed/leqmMWzVJNI?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Mechagodzilla (1974)
    '<iframe src="https://www.youtube.com/embed/Q6nue5cHYJc?controls=0&rel=0" allowfullscreen></iframe>',
    // Terror of Mechagodzilla (1975)
    '<iframe src="https://www.youtube.com/embed/ZfbTB7bu6aI?controls=0&rel=0" allowfullscreen></iframe>',
    // The Return of Godzilla (1984)
    '<iframe src="https://www.youtube.com/embed/hhnPJ9wLTFI?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Biollante (1989)
    '<iframe src="https://www.youtube.com/embed/1tSl0A5oPz4?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. King Ghidorah (1991)
    '<iframe src="https://www.youtube.com/embed/IP3pN6S32Jk?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Mothra (1992)
    '<iframe src="https://www.youtube.com/embed/SHvrEdqYXHg?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Mechagodzilla II (1993)
    '<iframe src="https://www.youtube.com/embed/Lggl4LVqBag?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. SpaceGodzilla (1994)
    '<iframe src="https://www.youtube.com/embed/u0LTRmEoTjM?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Destoroyah (1995)
    '<iframe src="https://www.youtube.com/embed/NCNyFPRzI8c?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla (1998)
    '<iframe src="https://www.youtube.com/embed/TAfd8SaG4T8?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla 2000: Millennium (1999)
    '<iframe src="https://www.youtube.com/embed/mOr5vaQy9YM?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Megaguirus (2000)
    '<iframe src="https://www.youtube.com/embed/3_2bY-5olJQ?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack (2001)
    '<iframe src="https://www.youtube.com/embed/pbGLVLiGs0I-5olJQ?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla Against Mechagodzilla (2002)
    '<iframe src="https://www.youtube.com/embed/LZKZ4QJAjIM?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla: Tokyo S.O.S. (2003)
    '<iframe src="https://www.youtube.com/embed/bLWSYtXoacM?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla: Final Wars (2004)
    '<iframe src="https://www.youtube.com/embed/rXNM802ip-Q?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla (2014)
    '<iframe src="https://www.youtube.com/embed/HABPMSQYt-Y?controls=0&rel=0" allowfullscreen></iframe>',
    // Shin Godzilla (2016)
    '<iframe src="https://www.youtube.com/embed/M89VLZgo1Vg?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla: King of the Monsters (2019)
    '<iframe src="https://www.youtube.com/embed/wVDtmouV9kM?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla: Singular Point (2021)
    '<iframe src="https://www.youtube.com/embed/wUhyxRbLWbk?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla vs. Kong (2021)
    '<iframe src="https://www.youtube.com/embed/odM92ap8_c0?controls=0&rel=0" allowfullscreen></iframe>',
    // Monarch: Legacy of Monsters (Season 1 - 2023)
    '<iframe src="https://www.youtube.com/embed/JLHsM4bpfxY?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla Minus One (2023)
    '<iframe src="https://www.youtube.com/embed/Y58x0QOmdb8?controls=0&rel=0" allowfullscreen></iframe>',
    // Godzilla x Kong: The New Empire (2024)
    '<iframe src="https://www.youtube.com/embed/nWzEFE0KqRI?controls=0&rel=0" allowfullscreen></iframe>'
];

let imagem = [
    // 1.  Godzilla 1954
    '<img src="../img/carousel/gojiraSlide1.jpg" alt="">',
    // 2. Godzilla Raids Again
    '<img src="https://i.redd.it/8mm1tbfovc6a1.jpg">',
    // 3.  Godzilla vs. King Kong 1962
    '<img src="https://www.planocritico.com/wp-content/uploads/2017/03/king_kong_vs_godzilla_1962_plano_critico.jpg">',
    // 4. Mothra vs. Godzilla (1964)
    '<img src="https://i.ytimg.com/vi/lRlttjvvvzE/maxresdefault.jpg" alt="Mothra vs Godzilla 1964">',
    // 5. Ghidorah, the Three-Headed Monster
    '<img src="https://www.alternateending.com/wp-content/uploads/2019/12/5Hj5fPpmXbREYk8f1n7JFguSHHE.jpg" alt="Ghidorah">',
    // 6. Invasion of Astro-Monster
    '<img src="https://resizing.flixster.com/HFeyvcP4jlax2A_9bDxY1pzlbgw=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p3721_i_h10_ad.jpg" alt="Invasion of Astro-Monster">',
    // 7. Ebirah, Horror of the Deep
    '<img src="https://images.squarespace-cdn.com/content/v1/607d9bb64afcb51ff8ffa174/8e7f5640-5580-4d8f-96f8-7615972b999d/EBIRAH+HORROR+OF+THE+DEEP+%281966%29+fight.png" alt="Ebirah">',
    // 8. Son of Godzilla
    '<img src="https://i.sstatic.net/0X8Dh.jpg" alt="Son of Godzilla">',
    // 9. Destroy All Monsters
    '<img src="https://www.alternateending.com/wp-content/uploads/2019/12/kUhTp6ydM86HJSYtkc6x8Sv8b85.jpg" alt="Destroy All Monsters">',
    // 10. Godzilla's Revenge
    '<img src="https://www.syfy.com/sites/syfy/files/2019/05/ama2.jpg" alt="Godzillas Revenge">',
    // 11. Godzilla vs. Hedorah
    '<img src="https://i.redd.it/y0b5j0gp3xaa1.jpg" alt="Godzilla vs Hedorah">',
    // 12. Godzilla vs. Gigan (1972)
    '<img src="https://www.planocritico.com/wp-content/uploads/2020/01/plano-critico-godzilla-vs-gigan-kaiju-filme.jpg" alt="Godzilla vs Gigan">',
    // 13. Godzilla vs. Megalon (1973)
    '<img src="https://preview.redd.it/just-watched-godzilla-vs-megalon-for-the-first-time-v0-jsug4nhga4mg1.jpeg?width=640&crop=smart&auto=webp&s=b3fb843a818d203c3f2e5623d691a0c4c35cbb50" alt="Godzilla vs Megalon">',
    // 14. Godzilla vs. Mechagodzilla (1974)
    '<img src="https://preview.redd.it/just-watched-godzilla-vs-mechagodzilla-1974-ancient-v0-5piidmzg1hba1.jpg?width=1080&crop=smart&auto=webp&s=c01bb42101b1a089a36f91d0536dfc30fb50ce85" alt="Godzilla vs Mechagodzilla 1974">',
    // 15. Terror of Mechagodzilla (1975)
    '<img src="https://preview.redd.it/is-terror-of-mechagodzilla-actually-one-of-the-best-v0-00jbha1zy9431.jpg?width=640&crop=smart&auto=webp&s=8de06f7a6329fa72ce25f80c585ada5d3a1018ca" alt="Terror of Mechagodzilla">',
    // 16. The Return of Godzilla (1984)
    '<img src="https://m.media-amazon.com/images/M/MV5BMjk0MGIzMGQtM2EzYi00NGY4LThmMDEtMjBlNzU0ZTljZGE3XkEyXkFqcGc@._V1_.jpg" alt="Return of Godzilla">',
    // 17. Godzilla vs. Biollante (1989)
    '<img src="https://i.ytimg.com/vi/kYPuFrKhNkw/maxresdefault.jpg" alt="Godzilla vs Biollante">',
    // 18. Godzilla vs. King Ghidorah (1991)
    '<img src="https://i.redd.it/9ryega5kcli51.jpg" alt="Godzilla vs King Ghidorah 1991">',
    // 19. Godzilla vs. Mothra (1992)
    '<img src="https://i.ytimg.com/vi/SHvrEdqYXHg/maxresdefault.jpg" alt="Godzilla vs Mothra 1992">',
    // 20. Godzilla vs. Mechagodzilla II (1993)
    '<img src="https://m.media-amazon.com/images/S/pv-target-images/5f260d347a74384f9cb25572eb89ef63352970eaa0647719075696b04a4bc914.jpg" alt="Godzilla vs Mechagodzilla II">',
    // 21. Godzilla vs. SpaceGodzilla (1994)
    '<img src="https://s2.dmcdn.net/v/93IGJ1WUPGNlkaMFg/x1080" alt="Godzilla vs SpaceGodzilla">',
    // 22. Godzilla vs. Destoroyah (1995)
    '<img src="https://i.redd.it/a1wq1dkry8da1.jpg" alt="Godzilla vs Destoroyah">',
    // 23. Godzilla (1998)
    '<img src="https://portaln10.com.br/wp-content/uploads/2025/03/godzilla-de-1998-marketing-genial-e-a-nostalgia-de-um-classico-dos-anos-90-scaled-1.jpg" alt="Godzilla 1998">',
    // 24. Godzilla 2000: Millennium (1999)
    '<img src="https://www.alternateending.com/wp-content/uploads/2014/04/Godzilla2000MillenniumEra.jpg" alt="Godzilla 2000">',
    // 25. Godzilla vs. Megaguirus (2000)
    '<img src="https://i.ytimg.com/vi/SmuZO2R5kNQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBnSlWhVk7jEbQChGvTJIhFENyhew" alt="Godzilla vs Megaguirus">',
    // 26. Godzilla, Mothra and King Ghidorah: Giant Monsters All-Out Attack (2001)
    '<img src="https://static.wikia.nocookie.net/topstrongest/images/9/9d/GMK_Godzilla_Banner.png/revision/latest/scale-to-width-down/540?cb=20210924133749" alt="GMK">',
    // 27. Godzilla Against Mechagodzilla (2002)
    '<img src="https://preview.redd.it/just-watched-godzilla-vs-mechagodzilla-1974-ancient-v0-5piidmzg1hba1.jpg?width=1080&crop=smart&auto=webp&s=c01bb42101b1a089a36f91d0536dfc30fb50ce85" alt="Godzilla Against Mechagodzilla">',
    // 28. Godzilla: Tokyo S.O.S. (2003)
    '<img src="https://m.media-amazon.com/images/S/pv-target-images/1f1a18b6cd217f87194aef5272cd48e6c15298b84a13f856003ef80ee85b1372._SX1080_FMjpg_.jpg" alt="Godzilla Tokyo SOS">',
    // 29. Godzilla: Final Wars (2004)
    '<img src="https://i.ytimg.com/vi/6aTJzMmYN_Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB75q60khEu4m7hkhocbnda0WB6oA" alt="Godzilla Final Wars">',
    // 30. Godzilla (2014)
    '<img src="https://tokusatsu.blog.br/wp-content/uploads/2020/03/Godzilla-2014.jpg" alt="Godzilla 2014">',
    // 31. Shin Godzilla (2016)
    '<img src="https://ovicio.com.br/wp-content/uploads/2024/01/20240116-658f217f-cd30-42e8-b3fd-e2047b76ddd1-730x365.jpg" alt="Shin Godzilla">',
    // 32. Godzilla: King of the Monsters (2019)
    '<img src="https://static01.nyt.com/images/2019/05/30/arts/30godzillapixsub/merlin_155327172_4adc8a2b-61aa-41d6-b834-a437da724fd7-superJumbo.jpg" alt="Godzilla King of the Monsters">',
    // 33. Godzilla: Singular Point (2021)
    '<img src="https://gqcanimes.com.br/wp-content/uploads/2020/10/Godzilla-Singular-GQCA.jpg" alt="Godzilla Singular Point">',
    // 34. Godzilla vs. Kong (2021)
    '<img src="https://m.media-amazon.com/images/M/MV5BZWVjMmY4ODUtMmYzMC00NDdjLWE4MjMtOWUzMDBlNzczOGMwXkEyXkFqcGdeQWpnYW1i._V1_.jpg" alt="Godzilla vs Kong">',
    // 35. Monarch: Legacy of Monsters (Season 1 - 2023)
    '<img src="https://m.media-amazon.com/images/S/pv-target-images/ffbceb9b157ba06709cf2117d79a2b9951622af4e5e2bae654528d817976f278.jpg" alt="Monarch Legacy of Monsters">',
    // 36. Godzilla Minus One (2023)
    '<img src="https://cdn.ome.lt/RRM_RH0IgA0UlI2mSQZQQGlnNzM=/570x0/smart/filters:format(webp)/uploads/conteudo/fotos/GODZILLA_MINUS_ONE_18.jpg" alt="Godzilla Minus One">',
    // 37. Godzilla x Kong: The New Empire (2024)
    '<img src="https://i.ytimg.com/vi/LOIMD084NlE/maxresdefault.jpg" alt="Godzilla x Kong The New Empire">'
];

let semSpoiler = [

    'Dirigido por Ishiro Honda. O filme se inicia após testes nucleares americanos no Pacífico, um réptil pré-histórico de 50 metros de altura desperta e começa a destruir embarcações, chegando a atacar o Japão. O monstro, Godzilla, é imune a armas convencionais e deixa um rastro de radioatividade, servindo como uma metáfora direta para o medo nuclear pós-guerra. Enquanto a nação entra em pânico, o Professor Yamane insiste em estudar a criatura, enquanto as autoridades buscam um meio desesperado de pará-la antes que Tóquio seja totalmente destruída.',

    'Dois pilotos de reconhecimento aéreo pousam em uma ilha remota após uma falha mecânica e testemunham algo aterrorizante: um novo Godzilla está lutando contra um monstro quadrúpede espinhoso chamado Anguirus. A descoberta choca o Japão, que ainda se recuperava do ataque do primeiro Godzilla no ano anterior. Como o Dr. Serizawa morreu levando o segredo do Destruidor de Oxigênio para o túmulo, as autoridades precisam encontrar uma maneira convencional de lidar com não apenas uma, mas duas feras colossais que estão vindo em direção à cidade de Osaka',

    'Uma empresa farmacêutica japonesa, em busca de publicidade e de uma fruta exótica com propriedades medicinais, envia uma expedição à Ilha Faro para capturar o lendário deus gigante local, King Kong. Enquanto isso, o submarino nuclear Seahawk acidentalmente colide com o iceberg onde o segundo Godzilla estava congelado desde 1955, libertando o Rei dos Monstros. Godzilla começa a avançar em direção ao Japão, destruindo tudo em seu caminho, enquanto Kong é transportado para o continente. O governo japonês percebe que a única forma de deter a destruição causada por Godzilla é colocar as duas feras em uma rota de colisão épica.',

    'Após um terrível tufão, um ovo gigante e colorido aparece na costa do Japão. Em vez de ser entregue a cientistas, o ovo é comprado por empresários gananciosos que planejam transformá-lo em uma atração turística. Enquanto as pequenas fadas guardiãs da Ilha Infante, as Shobijin, tentam implorar pela devolução do ovo à sua legítima dona — a deusa mariposa Mothra —, o nível do mar baixa e revela que Godzilla estava enterrado na lama da costa desde seu último combate. O Rei dos Monstros desperta furioso e avança em direção ao ovo, forçando os humanos a pedirem ajuda à Mothra para proteger a nova vida que está prestes a nascer.',

    'Enquanto o Japão enfrenta uma onda de calor estranha e chuvas de meteoros, uma profetisa que afirma vir de Vênus surge alertando sobre a destruição iminente da Terra. Ao mesmo tempo, Godzilla e Rodan despertam e começam a lutar entre si, ignorando o perigo maior que vem do espaço. O meteoro principal se abre para revelar King Ghidorah, um dragão dourado de três cabeças que destruiu a civilização venusiana e agora ameaça o mundo. As pequenas fadas Shobijin pedem que Mothra convença Godzilla e Rodan a pararem de brigar e se unirem para enfrentar a ameaça espacial antes que o planeta seja aniquilado.',

    'No futuro próximo, astronautas viajam até o recém-descoberto Planeta X, localizado atrás de Júpiter, onde encontram uma raça alienígena avançada conhecida como Xiliens. Os habitantes do planeta vivem no subsolo para fugir dos ataques constantes do "Monstro Zero", que os humanos reconhecem como sendo King Ghidorah. Os Xiliens pedem permissão à Terra para "emprestar" Godzilla e Rodan para derrotar o dragão espacial, oferecendo em troca a cura para todas as doenças humanas. A Terra aceita o acordo, e os monstros são transportados pelo espaço, mas os astronautas logo começam a suspeitar que as intenções dos alienígenas escondem um plano de dominação galáctica muito mais sinistro.',

    'Um grupo de jovens em busca de um náufrago acaba parando em uma ilha isolada no Pacífico que serve de base para uma organização terrorista chamada Bamboo Vermelho. Os criminosos escravizam nativos da Ilha Infante para fabricar armas nucleares e utilizam um monstro marinho gigante, a lagosta Ebirah, para impedir que qualquer pessoa fuja ou se aproxime por mar. Enquanto tentam resgatar os prisioneiros, os protagonistas descobrem Godzilla dormindo em uma caverna profunda da ilha. Sem outra alternativa para derrotar o exército terrorista e o monstro das águas, eles decidem usar um para-raios improvisado para despertar o Rei dos Monstros com um choque elétrico.',

    'Uma equipe de cientistas instala uma base em uma ilha tropical remota para realizar experimentos de controle climático, com o objetivo de transformar desertos em terras férteis. No entanto, os testes dão errado, causando uma onda de calor radioativa que faz com que os louva-a-deus locais sofram mutações e cresçam a tamanhos gigantescos, tornando-se as temíveis Kamacuras. Durante o caos, os cientistas descobrem que as criaturas estão desenterrando um ovo colossal. De dentro do ovo nasce um bebê Godzilla, cujos gritos telepáticos de socorro atravessam o oceano e atraem o Rei dos Monstros para a ilha, dando início a uma jornada de proteção e "paternidade" em meio a um ecossistema hostil e predadores famintos.',

    'No final do século XX, a paz parece reinar na Terra. Todos os monstros gigantes foram capturados e confinados em uma reserva especial nas Ilhas Ogasawara, conhecida como "Ilha dos Monstros", onde vivem sob vigilância científica. No entanto, a tranquilidade é interrompida quando uma raça alienígena chamada Kilaaks assume o controle mental das criaturas e as liberta para atacar as maiores capitais do mundo. Com Godzilla destruindo Nova York, Mothra em Pequim e Rodan em Moscou, a humanidade precisa encontrar uma forma de quebrar o controle alienígena antes que o planeta seja completamente devastado.',

    'Ichiro é um garoto solitário que vive em uma zona industrial de Tóquio. Para lidar com a solidão e o bullying, ele usa sua imaginação para viajar até a Ilha dos Monstros. Lá, ele encontra Minilla, o filho de Godzilla, que estranhamente consegue falar com ele. Ambos compartilham o mesmo problema: Ichiro é perseguido por valentões na escola, e Minilla é atormentado por um monstro chamado Gabara. Enquanto observa Godzilla lutar contra diversas ameaças, Ichiro aprende lições de coragem com Minilla que precisará usar quando se deparar com criminosos reais em um prédio abandonado.',

    'A Terra enfrenta uma crise de poluição sem precedentes, e de todo esse lixo acumulado nos oceanos nasce uma forma de vida microscópica alienígena. Esse organismo, chamado Hedorah, começa a consumir fumaça, lixo e substâncias tóxicas, evoluindo rapidamente para uma massa gigantesca de lodo ácido. Capaz de disparar raios e liberar gases venenosos que derretem carne humana em segundos, Hedorah prova ser um dos adversários mais letais que Godzilla já enfrentou. Enquanto o Japão é coberto por uma névoa tóxica, Godzilla surge para tentar deter a criatura, mas logo percebe que ataques físicos convencionais não funcionam contra um monstro feito de pura lama poluída.',

    `Um desenhista de mangá consegue um emprego no "World Children's Land", um parque temático que tem como peça central uma torre gigantesca no formato do Godzilla. No entanto, ele logo descobre que seus empregadores são, na verdade, alienígenas em forma de barata vindos da "Nebulosa M" que planejam conquistar a Terra. Eles usam fitas magnéticas para controlar dois monstros espaciais: o dragão de três cabeças King Ghidorah e o temível Gigan, um ciborgue com ganchos nas mãos e uma serra circular no peito. Do outro lado, Godzilla e Anguirus percebem os sinais estranhos e nadam em direção ao Japão para impedir a invasão.`,

    `A civilização de Seatopia, um reino submarino que sofreu com os testes nucleares da humanidade, decide se vingar enviando seu deus guardião, Megalon, um inseto gigante com brocas nas mãos, para destruir a superfície. Para guiar o monstro, os Seatopianos roubam um robô humanoide avançado chamado Jet Jaguar. Os criadores do robô conseguem recuperar o controle sobre ele, e Jet Jaguar viaja até a Ilha dos Monstros para pedir a ajuda de Godzilla. Agora, o Japão se torna o palco de uma luta de duplas: Megalon recebe o reforço do ciborgue espacial Gigan, enquanto Godzilla e Jet Jaguar unem forças para salvar a Terra.`,

    `Uma profecia antiga na ilha de Okinawa prevê que um monstro aparecerá para destruir o mundo, mas será impedido por dois outros monstros. As coisas ficam confusas quando Godzilla surge de um vulcão e começa a atacar seu antigo aliado, Anguirus, de forma extremamente violenta. A confusão aumenta quando um segundo Godzilla aparece, revelando que o primeiro era um impostor. Durante a luta, a pele do impostor queima, revelando um esqueleto de metal reluzente: o Mechagodzilla. Criado por alienígenas semelhantes a macacos vindos do "Terceiro Planeta da Nebulosa Negra", o robô gigante é equipado com um arsenal de mísseis e lasers capaz de superar o verdadeiro Rei dos Monstros.`,

    `Um cientista desacreditado, Dr. Mafune, descobre uma maneira de controlar a mente dos dinossauros e se alia aos alienígenas da Nebulosa Negra (que sobreviveram ao filme anterior). Juntos, eles reconstroem o Mechagodzilla, agora mais potente e com um sistema de controle ligado à filha ciborgue do doutor, Katsura. Além do robô, eles libertam o Titanosaurus, um monstro marinho gigante controlado pelo Dr. Mafune. Godzilla se vê em uma desvantagem terrível, tendo que enfrentar simultaneamente o poder de fogo de sua versão metálica e a força bruta do dinossauro aquático, enquanto a Interpol tenta desesperadamente encontrar uma fraqueza no controle dos vilões.`,

    `Trinta anos após o ataque original a Tóquio, uma erupção vulcânica desperta um novo Godzilla, muito maior e mais imponente. O monstro ataca um submarino soviético, o que gera uma crise diplomática global, com a URSS e os EUA acreditando que se trata de um ataque nuclear inimigo. Para evitar uma guerra mundial, o Japão é forçado a revelar a existência da criatura. Enquanto o governo tenta lidar com a pressão das superpotências para usar armas nucleares contra o monstro, cientistas japoneses desenvolvem o Super X, uma nave de defesa aérea de última geração, e descobrem que Godzilla possui um instinto migratório guiado por impulsos magnéticos, similar ao das aves.`,

    `Anos após Godzilla ter sido selado no Monte Mihara, cientistas e corporações lutam para obter as "Células G" (amostras de pele do monstro) deixadas para trás. O Dr. Shiragami, um geneticista em luto pela morte de sua filha, combina o DNA dela com o de uma rosa e, em um ato de desespero para manter a planta viva, funde-a com o DNA de Godzilla. O resultado é Biollante, uma criatura híbrida vegetal que começa como uma rosa gigante, mas logo sofre uma mutação terrível. Enquanto isso, terroristas libertam Godzilla do vulcão, e o Rei dos Monstros segue o chamado instintivo de Biollante para um confronto que desafia a natureza.`,

    'Visitantes do ano 2212, conhecidos como "Futurians", chegam ao Japão atual em uma nave espacial. Eles afirmam que o Godzilla destruirá completamente o país no futuro e propõem um plano: viajar de volta a 1944, na Ilha Lagos, para remover o dinossauro que sofreria a mutação da bomba atômica antes que ele se torne o Godzilla. O plano é executado, e o dinossauro é teleportado para o fundo do mar, longe dos testes nucleares. No entanto, ao retornarem ao presente, os humanos descobrem que os Futurians tinham segundas intenções: eles deixaram três pequenas criaturas geneticamente modificadas, chamadas Dorats, no lugar do dinossauro. No presente, essas criaturas se fundiram e sofreram mutação, transformando-se no terrível King Ghidorah, que agora é usado pelos Futurians para controlar o Japão.',

    'Após a queda de um meteoro gigante no oceano, uma série de desastres ambientais começa a ocorrer. O impacto desperta não apenas Godzilla, mas também libera um ovo gigante em uma ilha remota e desperta uma criatura sombria chamada Battra. Battra é o "oposto" de Mothra: enquanto Mothra é a protetora da vida, Battra é o guardião da Terra que vê a humanidade como uma praga a ser eliminada. Enquanto a corporação Marutomo tenta explorar o ovo de Mothra para fins comerciais, as pequenas fadas Cosmos alertam que, se Mothra e Battra se enfrentarem, o mundo será devastado. Godzilla surge no meio desse conflito, forçando os dois insetos divinos a decidirem se lutam entre si ou contra o Rei dos Monstros.',

    'Utilizando a tecnologia futurista recuperada dos restos do Mecha-King Ghidorah, o exército japonês constrói a arma definitiva: Mechagodzilla, uma máquina de combate projetada para caçar e destruir o Rei dos Monstros. Enquanto isso, cientistas encontram um ovo gigante em uma ilha radioativa, protegida por Rodan. O ovo eclode, revelando um "Baby Godzilla", que é levado para um centro de pesquisas em Kyoto. Godzilla, sentindo a presença do filhote, avança em direção ao Japão, forçando o exército a implantar o Mechagodzilla para o confronto final.',

    'Células do Godzilla que foram levadas para o espaço (seja pelos esporos de Biollante ou por Mothra em suas viagens espaciais) acabam caindo em um buraco negro, onde sofrem uma mutação extrema ao serem expostas à energia de estrelas explodindo. O resultado é SpaceGodzilla, uma criatura cristalina, inteligente e perversa que viaja para a Terra com o objetivo de dominar o planeta e eliminar o Godzilla original. Enquanto isso, os humanos tentam uma abordagem dupla para lidar com Godzilla: o projeto de controle mental "T-Project" e a construção de um novo robô gigante transformável, o MOGUERA. SpaceGodzilla chega primeiro à Ilha Adonoa, onde sequestra o "Little Godzilla" (o filhote), prendendo-o em uma prisão de cristal, forçando Godzilla a ir até Fukuoka para o confronto final.',

    'Godzilla aparece com uma aparência aterrorizante: seu corpo está coberto de manchas vermelhas brilhantes e ele parece estar em chamas. Cientistas descobrem que o coração de Godzilla, que funciona como um reator nuclear, está sofrendo um "derretimento" (meltdown). Se a temperatura dele atingir 1.200°C, ele causará uma explosão que destruirá a atmosfera da Terra. Enquanto o mundo entra em pânico, uma nova ameaça surge em Tóquio: criaturas microscópicas, que sofreram mutação por causa do Destruidor de Oxigênio (a arma que matou o Godzilla original em 1954), evoluem para um monstro demoníaco chamado Destoroyah. Agora, um Godzilla moribundo precisa enfrentar o único monstro que carrega o DNA da arma que pode matá-lo.',

    'Após testes nucleares franceses no Pacífico Sul, uma criatura marinha gigantesca sofre mutações e viaja até Nova York, transformando a Ilha de Manhattan em seu território de caça e nidificação. O biólogo Dr. Nick Tatopoulos é recrutado pelo exército americano para entender a natureza da fera, que se move com uma agilidade impressionante e consegue se esconder entre os arranha-céus. Enquanto o exército tenta cercar a criatura, Nick descobre, com a ajuda de agentes do serviço secreto francês, que o perigo não é apenas o monstro gigante em si, mas algo muito mais reprodutivo e acelerado que ele trouxe consigo.',

    'Uma organização chamada "Godzilla Prediction Network" monitora os movimentos do monstro, tentando prever seus ataques para salvar vidas. Ao mesmo tempo, uma rocha gigante e misteriosa é encontrada no fundo do mar, permanecendo flutuando por milhões de anos. Quando a luz do sol a atinge, a rocha revela ser uma nave alienígena milenar que começa a escanear a tecnologia humana e o DNA de Godzilla. Os alienígenas buscam uma maneira de regenerar seus corpos físicos, que foram perdidos há eras, e percebem que o segredo está no "Organizer G-1", a substância nas células de Godzilla que permite sua regeneração instantânea.',

    'O governo japonês cria uma unidade de elite chamada "G-Graspers", dedicada exclusivamente a caçar o Godzilla. Eles desenvolvem uma arma experimental de última geração: o Dimension Tide, um canhão disparado do espaço capaz de criar buracos negros em miniatura para sugar o monstro para outra dimensão. Durante um teste da arma, uma fenda dimensional acaba ficando aberta por tempo suficiente para que uma libélula pré-histórica gigante atravesse para o nosso tempo. Ela deposita um ovo nos esgotos, que libera milhares de larvas chamadas Meganulon. Essas criaturas começam a drenar a energia de Godzilla para alimentar sua rainha, a terrível Megaguirus, uma criatura voadora hiperveloz que ameaça mergulhar o Japão em um pesadelo pré-histórico.',

    'Nesta continuidade, o Godzilla de 1954 foi o único a atacar o Japão, e o exército acredita que ele foi morto. No entanto, 50 anos depois, Godzilla retorna com uma aparência aterrorizante: olhos completamente brancos e sem pupilas. Ele não é apenas um animal sofrido pela radiação, mas uma força sobrenatural movida pelas almas vingativas daqueles que morreram na Segunda Guerra Mundial e foram esquecidos. Para combatê-lo, três monstros guardiões lendários da Terra — Baragon, Mothra e King Ghidorah — despertam de seu descanso milenar. Pela primeira vez na história, o dragão de três cabeças, Ghidorah, assume o papel de herói e protetor da humanidade contra a fúria implacável de Godzilla.',

    'Nesta linha do tempo, o governo japonês decide que a única forma de deter o Godzilla atual é construindo uma máquina usando os restos mortais do primeiro Godzilla (morto em 1954). Eles recuperam o esqueleto do fundo do mar e constroem um ciborgue bio-mecânico por cima dele: o Kiryu. Pilotado pela oficial Akane Yashiro, que busca redenção por um erro no passado, Kiryu é equipado com o "Absolute Zero Cannon", uma arma capaz de congelar e desintegrar matéria ao nível molecular. No entanto, durante a primeira batalha, algo sai do controle: o rugido de Godzilla desperta a memória genética no esqueleto dentro do robô, fazendo com que Kiryu perca o controle e comece a destruir a cidade por conta própria.',

    'Um ano após a batalha que deixou Godzilla e Kiryu (Mechagodzilla) gravemente feridos, as fadas Shobijin aparecem com um aviso sério: os humanos cometeram um erro ao usar o esqueleto do Godzilla de 1954 para construir o robô. Segundo elas, os mortos devem descansar, e a presença de Kiryu é o que está atraindo Godzilla de volta. Elas prometem que Mothra protegerá o Japão se o governo aceitar devolver os ossos ao mar e desativar Kiryu. O governo hesita, mas quando Godzilla ressurge na Baía de Tóquio — ainda com a cicatriz no peito da batalha anterior — a humanidade se vê forçada a decidir entre confiar em uma divindade da natureza ou em sua própria criação tecnológica.',

    'No futuro, a Terra estabeleceu a "Earth Defense Force" (EDF), uma organização militar que conta com humanos mutantes possessores de habilidades físicas sobre-humanas. De repente, monstros começam a atacar as principais capitais do mundo simultaneamente. Uma raça alienígena chamada Xiliens aparece, destruindo os monstros e afirmando vir em paz para salvar a humanidade de um asteroide. No entanto, tudo é um plano para escravizar a Terra e usar os humanos como gado. Quando os Xiliens liberam todos os monstros sob seu controle para aniquilar a resistência, a última esperança da humanidade é o navio voador Gotengo, que viaja até a Antártida para libertar o único ser que os alienígenas não podem controlar: o Rei dos Monstros, Godzilla, que estava congelado no gelo há décadas.',

    'Quinze anos após um incidente misterioso destruir uma usina nuclear no Japão, o engenheiro Joe Brody (Bryan Cranston) continua obcecado em provar que o desastre não foi um terremoto natural. Seu filho, Ford, um especialista em bombas da Marinha, acaba se envolvendo na descoberta de que o governo escondeu a existência de criaturas pré-históricas gigantes que se alimentam de radiação: os MUTOs. Quando essas criaturas despertam e começam a cruzar o oceano em direção aos EUA para se reproduzirem, um predador alfa ancestral emerge das profundezas para restaurar o equilíbrio da natureza. O filme foca no realismo e na escala, mostrando o ponto de vista humano diante de divindades vivas.',

    `O filme começa com um incidente estranho na Baía de Tóquio, que o governo inicialmente atribui a um vulcão submarino ou colapso térmico. No entanto, uma criatura bizarra, rastejante e com olhos arregalados emerge e começa a avançar pela cidade, evoluindo e mudando de forma em tempo real enquanto se adapta ao ambiente terrestre. Diferente de outras versões, este Godzilla é uma massa de células mutantes instáveis que emite radiação por onde passa. O foco da história não é em um herói individual, mas em como o sistema político japonês, cheio de protocolos e burocracia, tenta reagir a uma crise sem precedentes que desafia todas as leis da biologia.`,

    'A agência Monarch agora enfrenta o surgimento de dezenas de "Titãs" espalhados pelo globo, que estavam em hibernação. Uma ecoterrorista e uma cientista da Monarch utilizam um dispositivo chamado ORCA, que emite frequências bioacústicas para se comunicar com as criaturas. O plano delas é despertar os Titãs para "curar" a Terra dos danos humanos. No entanto, elas acabam despertando o "Monstro Zero" na Antártida: o lendário King Ghidorah. Ghidorah não é apenas mais um Titã, mas um invasor alienígena que assume o comando de todos os outros monstros para destruir o ecossistema terrestre. Godzilla surge como a única força capaz de desafiar a soberania do dragão de três cabeças.',

    'A história se passa em 2030 e acompanha dois jovens gênios: a pesquisadora Mei Kamino e o engenheiro Yun Arikawa. Eles começam a investigar uma canção misteriosa que parece estar ligada ao aparecimento de uma "Poeira Vermelha" e de várias criaturas (Kaijus) que estão surgindo ao redor do mundo, como os Rodans (que aqui parecem pterossauros menores) e o Anguirus. Godzilla surge não como um monstro comum, mas como uma entidade que desafia as leis da física, capaz de distorcer o tempo e o espaço. Mei e Yun precisam decifrar códigos matemáticos enviados do futuro para impedir que Godzilla cause uma "Catástrofe Singular" que destruiria a realidade.',

    'Anos após os eventos de Rei dos Monstros, Godzilla começa a atacar instalações da corporação Apex Cybernetics sem motivo aparente, fazendo o mundo acreditar que ele se tornou um vilão. Enquanto isso, Kong está sob vigilância da Monarch dentro de uma cúpula gigante na Ilha da Caveira. Para deter Godzilla, a Apex convence a Monarch a usar Kong como guia para encontrar uma fonte de energia ancestral na Terra Oca, o mundo de origem dos Titãs. O problema é que Godzilla sente a presença de outro "Alfa" e não vai parar até que Kong se submeta ou seja eliminado.',

    'A série se passa em dois períodos distintos que se entrelaçam. No passado (anos 50), acompanhamos o oficial Lee Shaw e os cientistas Keiko e Bill Randa nas primeiras missões para provar que monstros gigantes existem, antes mesmo da Monarch ser uma organização poderosa. No presente (2014), logo após o ataque de Godzilla em San Francisco, dois irmãos descobrem que seu falecido pai escondia segredos sobre essas criaturas. Eles acabam encontrando o Lee Shaw agora idoso (interpretado por Kurt Russell), que é a única ponte entre o início de tudo e o caos atual. O clima é de mistério, investigação e descoberta das origens do MonsterVerse.',

    'O filme se passa no Japão imediatamente após a Segunda Guerra Mundial. O país está em ruínas, no "ponto zero". É nesse cenário de trauma e reconstrução que surge Godzilla, uma criatura terrível e implacável que sofreu mutações devido a testes nucleares no mar. O protagonista é Shikishima, um piloto kamikaze que falhou em sua missão e vive atormentado pela culpa. Quando Godzilla avança em direção a Tóquio, o governo está impotente e sem recursos militares. Cabe aos civis e veteranos de guerra — homens que já perderam tudo — criar um plano desesperado para deter uma força da natureza que não pode ser morta por armas convencionais.',

    `Após os eventos em Hong Kong, Godzilla permanece na superfície protegendo seu território e "atualizando" sua energia para uma ameaça que ele sente que está vindo. Kong, agora vivendo na Terra Oca, descobre uma região inexplorada onde uma tribo perdida de grandes símios vive sob a ditadura de um tirano cruel chamado Skar King. Diferente de Kong, Skar King é ágil e usa um chicote feito da espinha de um monstro antigo para controlar uma criatura de gelo lendária: Shimo. Para impedir que o Skar King invada a superfície e traga uma nova era do gelo, Kong precisa da ajuda do único ser que ele jurou nunca mais enfrentar: Godzilla.`
]

let comSpoiler = [
    'Após Godzilla reduzir Tóquio a cinzas com seu sopro atômico, a única esperança reside no Oxygen Destroyer, uma substância química capaz de desintegrar organismos na água. Seu inventor, o Dr. Serizawa, teme que sua criação seja usada como arma de guerra e inicialmente se recusa a revelá-la. Ao ver a tragédia das vítimas, ele cede, mas toma uma decisão drástica: após mergulhar e ativar o dispositivo para matar Godzilla no fundo do mar, Serizawa corta a própria corda de segurança e morre com a criatura. Ele se sacrifica para garantir que o segredo de sua arma terrível morra com ele,enquanto o filme termina com um alerta sombrio de que novos testes nucleares podem despertar outros monstros.',

    'A tentativa de distrair os monstros falha tragicamente quando uma refinaria de petróleo explode, atraindo Godzilla e Anguirus para o coração de Osaka, onde destroem marcos históricos como o Castelo de Osaka em uma luta brutal. Godzilla vence o combate ao morder o pescoço de Anguirus e incinerar o rival com seu sopro atômico, retornando ao oceano logo em seguida. O monstro é localizado meses depois em uma ilha gelada no norte, onde os militares, liderados pelos pilotos sobreviventes, executam um plano de contenção em vez de extermínio. A força aérea bombardeia as encostas das montanhas ao redor da baía, provocando avalanches massivas que acabam por enterrar Godzilla vivo sob toneladas de gelo, deixando-o em animação suspensa por tempo indeterminado.',

    'Após ser levado ao Japão, Kong escapa e inicialmente é derrotado por Godzilla, que usa seu sopro atômico para manter o primata afastado. No entanto, o exército consegue capturar Kong novamente usando bagas anestésicas e o transporta via balões para o Monte Fuji, onde Godzilla está localizado. Durante a revanche, Kong é fortalecido por raios de uma tempestade elétrica, o que lhe dá o poder de desferir choques em Godzilla. A luta termina com os dois monstros despencando de um penhasco para dentro do mar. No final, apenas King Kong emerge das águas e começa a nadar de volta para sua ilha, enquanto o destino de Godzilla permanece um mistério, embora rugidos subaquáticos sugiram que ele sobreviveu à queda.',

    'Apesar de estar morrendo devido à idade avançada, Mothra voa até o Japão para proteger seu ovo e trava uma batalha aérea intensa contra Godzilla. Ela consegue arrastá-lo e usar suas asas para espalhar um pó venenoso, mas Godzilla eventualmente a derrota usando seu sopro atômico; Mothra cai sobre seu ovo e morre. Enquanto Godzilla continua sua destruição, o ovo finalmente choca, revelando duas larvas gêmeas de Mothra. As larvas perseguem Godzilla até uma ilha rochosa e, usando estratégia e trabalho em equipe, envolvem o monstro em um casulo de seda pegajosa. Incapaz de se mover e derrotado pelas larvas, Godzilla cai de um penhasco para dentro do mar, enquanto as pequenas Mothras retornam vitoriosas para a Ilha Infante.',

    'Inicialmente, Godzilla e Rodan se recusam a ajudar a humanidade, alegando que os humanos sempre os perseguiram, mas mudam de ideia ao verem a coragem da pequena larva de Mothra, que tenta enfrentar o dragão sozinha. Pela primeira vez na história, os três monstros terrestres unem forças: enquanto Mothra sobe nas costas de Rodan para atacar pelo alto, Godzilla enfrenta Ghidorah no chão. Após uma batalha intensa, Mothra envolve as cabeças do dragão em seda, permitindo que Godzilla o jogue de um penhasco. King Ghidorah é forçado a fugir para o espaço, derrotado pela cooperação dos monstros da Terra. O filme termina com Godzilla e Rodan observando Mothra partir, estabelecendo o novo papel de Godzilla como um protetor relutante do planeta.',

    'Após Godzilla e Rodan derrotarem King Ghidorah no Planeta X, os humanos descobrem que tudo era uma armadilha: os Xiliens já tinham o controle sobre Ghidorah e agora usam uma tecnologia de controle mental para dominar também Godzilla e Rodan. Os alienígenas exigem a rendição total da Terra, ameaçando destruir as cidades com os três monstros sob seu comando. No entanto, cientistas terrestres descobrem que o controle mental dos Xiliens é interrompido por um som de alta frequência. O sinal é transmitido globalmente, deixando os monstros atordoados e os alienígenas vulneráveis. Livre do controle, Godzilla e Rodan lutam contra Ghidorah novamente e os três caem no mar. Ghidorah foge para o espaço, enquanto Godzilla e Rodan desaparecem nas profundezas, salvando a Terra da invasão.',

    'Após ser despertado, Godzilla derrota Ebirah em uma batalha aquática, arrancando as garras da lagosta gigante e forçando-a a recuar. Em terra firme, ele destrói completamente a base e o exército do Bamboo Vermelho, que aciona um sistema de autodestruição nuclear para eliminar toda a ilha antes de fugir. Enquanto os nativos e os heróis são resgatados por Mothra, Godzilla fica para trás e precisa escapar da explosão iminente. No último segundo, Godzilla pula no oceano pouco antes da ilha ser pulverizada pela bomba atômica, sobrevivendo à destruição e nadando para longe. O filme é marcante por mostrar um Godzilla muito mais antropomorfizado, chegando a interagir com os humanos de forma quase curiosa.',

    'Minilla. Ele tenta ensinar o filho a lutar e a usar o sopro atômico, embora Minilla inicialmente só consiga soltar anéis de fumaça. A ameaça final surge com Kumonga, uma aranha gigante que prende os cientistas e Minilla em suas teias venenosas. Godzilla intervém e, com a ajuda do filho — que finalmente consegue disparar um jato de fogo real —, eles derrotam a aranha. No clímax, os cientistas conseguem finalmente ativar sua máquina climática para consertar o erro inicial, provocando uma nevasca artificial que congela a ilha inteira. Em uma cena emocionante, Godzilla e Minilla abraçam-se para se aquecer enquanto entram em um estado de hibernação profunda sob a neve, permitindo que os humanos escapem com segurança.',

    'Cientistas humanos conseguem hackear o dispositivo de controle dos Kilaaks, virando todos os monstros da Terra contra os invasores alienígenas. Em um ato de desespero, os Kilaaks convocam seu trunfo final: King Ghidorah. O que se segue é uma das batalhas mais icônicas da franquia, com Godzilla, Anguirus, Mothra, Rodan, Gorosaurus e outros monstros unindo forças para massacrar Ghidorah no Monte Fuji. Após a derrota do dragão de três cabeças e a destruição da base alienígena, os monstros recuperam seu livre arbítrio e retornam pacificamente para a ilha, deixando a humanidade reconstruir o que restou.',

    'O filme utiliza diversas cenas de produções anteriores para compor os sonhos de Ichiro. No clímax da fantasia, Minilla finalmente derrota Gabara após aprender a usar seu sopro atômico e as táticas de luta de seu pai. Na vida real, Ichiro é sequestrado por dois assaltantes, mas, inspirado pela bravura de Minilla, ele morde os criminosos e arma armadilhas para atrasá-los até a chegada da polícia. Ao final, o garoto confronta o líder dos valentões da vizinhança e prova que não é mais uma vítima, ganhando a amizade dos outros meninos e o orgulho de seus pais.',

    'A batalha atinge um nível bizarro de brutalidade quando Godzilla descobre que a única forma de ferir Hedorah é desidratando-o. Cientistas constroem gigantescos eletrodos para fritar a criatura, mas a energia falha. Em um dos momentos mais famosos (e estranhos) da franquia, Godzilla usa seu sopro atômico para voar (usando o jato como propulsão) e capturar Hedorah. No fim, Godzilla literalmente rasga o corpo de Hedorah, remove os núcleos internos do monstro e os eletrocuta até que virem pó seco. O filme termina com Godzilla lançando um olhar de profundo julgamento para os humanos, claramente culpando a nossa poluição pelo nascimento de tal horror, antes de retornar ao mar.',

    `Neste filme, Godzilla e Anguirus aparecem "conversando" através de balões de fala (ou sons distorcidos na versão americana), o que marca o ápice da era heróica e infantil do monstro. A batalha final é extremamente sangrenta para os padrões da época; Gigan usa sua serra peitoral para ferir gravemente Godzilla e Anguirus. Enquanto isso, os protagonistas humanos conseguem explodir a torre de controle alienígena usando uma carga massiva de dinamite. Sem o controle dos aliens, King Ghidorah e Gigan perdem a coordenação e acabam sendo expulsos da Terra pela dupla de monstros terrestres após uma luta exaustiva.`,

    `O filme é famoso por ser um dos mais "galhofas" e divertidos da franquia. Jet Jaguar surpreende a todos ao ignorar suas leis de programação e crescer até o tamanho de um kaiju por vontade própria para enfrentar os vilões. O clímax apresenta um dos momentos mais surreais da história do cinema: Godzilla executa um chute voador de cauda, deslizando sobre o rabo para atingir Megalon. Após uma surra coreografada, Gigan foge para o espaço e Megalon bate em retirada para as profundezas de Seatopia. No final, Jet Jaguar volta ao seu tamanho humano normal e se despede de seus criadores, enquanto Godzilla retorna ao mar como um herói definitivo.`,

    `Godzilla é gravemente ferido no primeiro encontro e recua para uma ilha para absorver a energia de uma tempestade elétrica, agindo como um para-raios humanoide. Enquanto isso, os protagonistas despertam o guardião lendário de Okinawa, King Caesar, através de uma canção ritualística. King Caesar luta bravamente, mas é Mechagodzilla quem domina a batalha com sua barragem infinita de mísseis. Godzilla retorna com um novo poder: ele transformou seu corpo em um eletroímã gigante. Ele usa esse magnetismo para atrair o Mechagodzilla, imobilizando o robô. Em um final brutal, Godzilla decapita a versão metálica com as próprias mãos. Os alienígenas são derrotados e Godzilla retorna ao oceano, enquanto King Caesar volta ao seu descanso eterno dentro de uma montanha.`,

    `O filme tem um tom visivelmente mais trágico e sombrio que os anteriores. A Interpol descobre que o ponto fraco de Titanosaurus é o som de ondas ultrassônicas, usando um oscilador para atordoá-lo. Enquanto Godzilla foca sua fúria em Mechagodzilla, a tragédia atinge Katsura: ela se sacrifica para destruir o centro de controle do robô que estava instalado em seu próprio peito cibernético. Com o Mechagodzilla desativado, Godzilla usa seu sopro atômico para destruir o robô de uma vez por todas e depois derrota Titanosaurus, que cai no mar. O filme termina com Godzilla nadando em direção ao pôr do sol, encerrando oficialmente a primeira grande era da franquia.`,

    `A batalha em Tóquio é devastadora. O Super X consegue paralisar Godzilla temporariamente disparando cadetes de cádmio em sua boca, mas o monstro é reativado quando um míssil nuclear soviético (lançado acidentalmente) explode na atmosfera, gerando uma tempestade elétrica que o reenergiza. Godzilla destrói o Super X esmagando-o com um prédio. No clímax, os cientistas utilizam um dispositivo que emite ondas magnéticas para atrair Godzilla até o topo do Monte Mihara, um vulcão ativo. O plano funciona: atraído pelo sinal, Godzilla cai na cratera, e o exército detona explosivos que prendem o monstro sob o magma, selando o vulcão e encerrando o terror, enquanto o grito de Godzilla ecoa enquanto ele desaparece nas profundezas.`,

    `Biollante evolui de sua forma de flor para uma criatura monstruosa com mandíbulas de crocodilo e tentáculos ácidos. Godzilla a derrota inicialmente, mas Biollante se dissolve em esporos de luz e retorna mais tarde para uma revanche brutal. O exército japonês utiliza o Super X2 e tenta infectar Godzilla com uma "Bactéria Anti-Energia Nuclear" (ANB) para enfraquecê-lo. A bactéria só faz efeito quando a temperatura do corpo de Godzilla sobe durante a luta intensa. No final, Biollante é novamente ferida e se dispersa no espaço, formando a imagem da filha falecida do doutor entre as estrelas. Godzilla, enfraquecido pela bactéria e exausto pela luta, consegue caminhar de volta ao mar e desmaia na água, sobrevivendo, mas temporariamente neutralizado.`,

    'O plano dos Futurians falha miseravelmente. Ao remover o dinossauro da Ilha Lagos, eles não impediram o nascimento do Godzilla; eles apenas mudaram o local onde ele surgiria. No presente, um submarino nuclear moderno acaba colidindo com o dinossauro no fundo do mar, transformando-o em um Godzilla ainda maior e mais poderoso (100 metros de altura). Godzilla surge e derrota King Ghidorah, decapitando a cabeça central do dragão. Para impedir que Godzilla agora destrua o Japão sem controle, uma das Futurians, que se arrependeu, volta ao futuro e recupera o corpo de Ghidorah, transformando-o em um ciborgue: o Mecha-King Ghidorah. Ela volta ao presente e trava uma batalha aérea épica em Tóquio. No fim, ela consegue carregar Godzilla para longe do Japão, caindo ambos no oceano. O filme termina com Godzilla despertando no fundo do mar, rugindo para mostrar que ainda está vivo.',

    'A batalha final acontece no parque de diversões Cosmo World, em Yokohama. Inicialmente, Mothra e Battra (agora em suas formas adultas e aladas) lutam um contra o outro, enquanto Godzilla ataca ambos. Percebendo que Godzilla é a maior ameaça ao equilíbrio do planeta, Mothra e Battra formam uma aliança improvável. Em um esforço conjunto, eles conseguem imobilizar Godzilla; Battra o agarra pela cabeça e Mothra pela cauda para carregá-lo de volta ao mar. No entanto, Godzilla morde o pescoço de Battra e dispara seu sopro atômico à queima-roupa, matando o guardião sombrio. Mothra deposita ambos no oceano e sela Godzilla sob um selo místico na água. No fim, Mothra voa para o espaço para interceptar um meteoro que ameaçaria a Terra no futuro, cumprindo uma promessa feita a Battra.',

    'O exército descobre que Godzilla possui um "segundo cérebro" localizado na base da cauda, que controla seu sistema nervoso. O Mechagodzilla, acoplado à nave Garuda (formando o Super Mechagodzilla), usa um arpão elétrico para perfurar esse cérebro, paralisando Godzilla e deixando-o à beira da morte. No entanto, Rodan, ferido mortalmente na batalha, pousa sobre Godzilla e sacrifica sua força vital, desintegrando-se em uma poeira radioativa que cura o cérebro de Godzilla e o torna ainda mais poderoso (o Fire Godzilla). Com seu novo sopro atômico espiral vermelho, Godzilla destrói o Mechagodzilla com facilidade. No fim, ele adota o Baby Godzilla e ambos caminham juntos para o oceano.',

    'SpaceGodzilla cria uma "fortaleza de cristais" no centro de Fukuoka, usando a Torre de Tóquio para canalizar a energia da Terra e manter seus poderes em nível máximo. Godzilla e o robô MOGUERA são forçados a uma aliança desconfortável para derrubar o invasor. Enquanto o MOGUERA foca em destruir os cristais de energia e os ombros de SpaceGodzilla, Godzilla usa sua força bruta. Após o sacrifício do robô MOGUERA, que é destruído no processo, Godzilla utiliza seu Sopro Espiral Vermelho (o Spiral Heat Beam) para sobrecarregar SpaceGodzilla. O clone espacial explode em poeira cósmica. No final, Godzilla retorna à sua ilha para libertar seu filho dos cristais que se derreteram, enquanto o Japão observa o Rei dos Monstros como seu salvador improvável, mas ainda temido.',

    'O filme é uma sucessão de momentos trágicos. "Little Godzilla" (agora chamado de Godzilla Junior) tenta lutar contra Destoroyah, mas é morto cruelmente pelo monstro. Ver o corpo do filho sem vida faz com que a temperatura de Godzilla suba ainda mais rápido, atingindo o estado crítico de Burning Godzilla. Em uma batalha final brutal, Godzilla usa seu sopro atômico vermelho infinito para devastar Destoroyah, enquanto o exército usa armas de gelo (o Super X3) para tentar resfriar os dois monstros. Destoroyah é finalmente destruído, mas o derretimento de Godzilla é inevitável. Godzilla morre enquanto seu corpo derrete em uma nuvem de radiação letal. No entanto, o sacrifício não é em vão: a radiação liberada pela morte do pai é absorvida pelo corpo de Godzilla Junior, que revive e cresce instantaneamente, assumindo o trono como o novo Rei dos Monstros.',

    'Diferente das versões japonesas, este Godzilla não possui sopro atômico (apenas um "sopro de vento" inflamável) e é vulnerável a armas convencionais. O grande terror é revelado quando Nick descobre que o monstro pôs centenas de ovos dentro do Madison Square Garden. Os filhotes nascem e começam a caçar os protagonistas em uma sequência que lembra muito Jurassic Park. O exército bombardeia o ginásio, destruindo a ninhada. O monstro pai, furioso pela morte dos filhotes, persegue Nick e seus amigos em um táxi pela ponte do Brooklyn, onde acaba ficando preso nos cabos de aço da ponte. Ele é finalmente abatido por mísseis disparados por jatos F-18 e morre no local. No entanto, a cena final mostra um único ovo sobrevivente eclodindo nas ruínas do estádio, deixando a porta aberta para a série animada que viria depois.',

    'A nave alienígena tenta absorver o DNA de Godzilla, mas o poder regenerativo é forte demais para eles controlarem, resultando em uma mutação grotesca e instável chamada Orga. Orga tenta literalmente engolir Godzilla para completar a absorção, mas Godzilla aproveita o momento em que está dentro da bocarra do alienígena para disparar um pulso nuclear massivo, explodindo Orga de dentro para fora. O filme termina de forma impactante: ao contrário da Era Heisei, onde ele era um "anti-herói", aqui Godzilla destrói grande parte de Shinjuku após a luta, lembrando ao mundo que ele ainda é uma força da natureza destrutiva e incontrolável.',

    'A batalha final entre Godzilla e Megaguirus é marcada pela velocidade da rainha inseto, que usa suas asas para criar ondas de choque e sua cauda para roubar a energia atômica de Godzilla. No entanto, Godzilla demonstra sua inteligência ao prever os movimentos da criatura e consegue arrancar o ferrão de Megaguirus com uma mordida, finalizando-a com seu sopro atômico. No clímax humano, os G-Graspers disparam o Dimension Tide enquanto Godzilla está vulnerável. O buraco negro é formado e parece consumir Godzilla completamente. No entanto, após os créditos, um tremor ocorre e o rugido icônico é ouvido, sugerindo que nem mesmo um buraco negro foi capaz de apagar a existência do Rei dos Monstros.',

    'Godzilla é retratado como um ser de pura maldade e quase indestrutível. Ele derrota Baragon e Mothra com facilidade. Quando King Ghidorah é morto, a alma de Mothra se funde a ele, transformando-o no King Ghidorah Milenar, mas mesmo assim Godzilla consegue vencê-lo. A vitória humana só ocorre quando um almirante da marinha, pilotando um submarino minúsculo, consegue entrar na boca de Godzilla e disparar um míssil perfurante por dentro do monstro. O míssil abre uma ferida no pescoço de Godzilla; quando o monstro tenta disparar seu sopro atômico, a energia escapa pelo buraco em seu pescoço, causando uma explosão interna que o desintegra. No entanto, a cena final desce até o fundo do oceano, onde vemos o coração de Godzilla, sozinho na escuridão, batendo forte, indicando que ele voltará.',

    'Após o sistema de Kiryu ser reiniciado e Akane assumir o controle manual, ocorre um confronto final épico. Akane consegue aproximar Kiryu o suficiente para disparar o Canhão Zero Absoluto à queima-roupa no meio do oceano. No entanto, a energia de Godzilla é tão vasta que o tiro não o mata; ele apenas causa uma ferida profunda em seu peito e gasta toda a energia do robô. Ferido e exausto, Godzilla desiste da luta e retorna para o mar, marcando a primeira vez que ele se retira por causa de um dano físico real causado pelos humanos. Kiryu sobrevive, mas fica seriamente danificado, preparando o terreno para a continuação direta.',

    'Mothra luta bravamente contra Godzilla em Tóquio, mas, enfraquecida pela idade, acaba morrendo para proteger suas duas larvas recém-nascidas. As larvas continuam a luta, enquanto o governo envia Kiryu (reparado e agora com uma broca no braço) para o combate. No clímax, Kiryu consegue perfurar a cicatriz no peito de Godzilla, enfraquecendo-o profundamente. No entanto, em vez de dar o golpe final, Kiryu recupera sua consciência através das memórias do esqueleto e decide ignorar as ordens humanas. Ele agarra Godzilla e, em um ato de auto-sacrifício, mergulha com o Rei dos Monstros no abismo da Fossa do Japão, garantindo que o ciclo de violência termine e que os ossos de 1954 finalmente descansem em paz no fundo do oceano.',

    'O filme é basicamente o Godzilla atravessando o globo e derrotando monstros em tempo recorde (incluindo uma luta hilária de 15 segundos em Sydney contra o Zilla, a versão americana de 1998). O confronto final ocorre em Tóquio contra o Monster X, que os Xiliens trouxeram escondido no asteroide. No meio da luta, o Monster X se transforma em sua forma real: Keizer Ghidorah, uma versão quadrupede e massiva do dragão de três cabeças que quase drena toda a vida de Godzilla. Com a ajuda do mutante Shinichi Ozaki, que transfere sua energia "Keizer" para o monstro, Godzilla explode as cabeças de Ghidorah e o lança no espaço. O filme termina com Godzilla poupando os humanos após a intervenção de seu filho (Minilla) e caminhando de volta ao mar, encerrando a Era Millennium em grande estilo.',

    'O filme apresenta dois MUTOs (um macho voador e uma fêmea maior). Eles usam pulsos eletromagnéticos (EMP) que desativam toda a tecnologia humana ao redor. Godzilla caça os dois até San Francisco. A batalha final é noturna e envolta em fumaça e destroços. Godzilla demonstra que, embora não seja um "aliado" dos humanos, ele foca exclusivamente nos monstros. Ele mata o macho com uma pancada da cauda e finaliza a fêmea de forma icônica: segurando suas mandíbulas e disparando o Sopro Atômico (que aqui tem um tom azul neon) diretamente na garganta dela, decapitando-a. Após a exaustiva batalha, Godzilla desmaia na cidade, mas desperta na manhã seguinte e retorna ao mar enquanto a mídia o chama de "Salvador da Cidade".',

    `A solução final, o Plano Yashiori, não envolve matá-lo com bombas (que poderiam causar uma explosão nuclear), mas sim injetar um agente coagulante em seu sistema sanguíneo para congelá-lo vivo. O plano funciona e Godzilla é transformado em uma estátua de gelo no meio de Tóquio. A cena final é uma das mais perturbadoras da franquia: a câmera foca na ponta da cauda de Godzilla, onde vemos criaturas humanoides com traços de Godzilla tentando emergir, sugerindo que a próxima fase de sua evolução seria se tornar uma legião de seres menores para dominar o mundo.`,

    `Filme traz batalhas colossais envolvendo Mothra e Rodan. Em um momento crítico, o exército americano dispara o "Destruidor de Oxigênio" (uma homenagem ao filme de 1954) em Godzilla e Ghidorah; o golpe quase mata Godzilla, mas Ghidorah, por ser alienígena, sai ileso. Para salvar Godzilla, o Dr. Serizawa se sacrifica detonando uma ogiva nuclear manualmente para "alimentar" o monstro com radiação. No clímax em Boston, Mothra se sacrifica para proteger Godzilla dos raios de Ghidorah, e suas cinzas caem sobre ele. Isso desperta o Burning Godzilla (versão MonsterVerse). Godzilla se torna um reator vivo, emitindo ondas de calor em forma de asas de Mothra que derretem tudo ao redor. Ele desintegra Ghidorah completamente, restando apenas uma cabeça (que é recuperada nos créditos). O filme termina com Rodan e os outros Titãs se curvando perante Godzilla, reconhecendo-o como o verdadeiro Rei dos Monstros.`,

    `O Godzilla desta série evolui através de várias formas, começando como um peixe gigante (Godzilla Aquatilis) até chegar à sua forma final, o Godzilla Ultima. Ele é cercado pela Poeira Vermelha, que na verdade é um material chamado "Arquétipo", capaz de manipular a luz e o tempo. O grande trunfo dos humanos é o robô Jet Jaguar, que possui uma inteligência artificial desenvolvida por Yun. No clímax, Jet Jaguar recebe um código de ativação enviado através do tempo (pela própria IA no futuro) que o permite crescer a um tamanho gigante e lutar contra Godzilla. Jet Jaguar se sacrifica para ativar o "Ortogonal Diagonalizador", transformando a Poeira Vermelha em cristais azuis inofensivos e neutralizando a presença de Godzilla na nossa dimensão. A cena pós-créditos revela que os humanos estão construindo uma versão robótica de um monstro clássico usando um esqueleto antigo... preparando o terreno para uma possível volta do Mechagodzilla.`,

    `A luta acontece em dois rounds principais. No mar, Godzilla vence com facilidade. Em Hong Kong, Kong usa um machado feito de uma placa dorsal de um Godzilla ancestral para lutar de igual para igual, mas Godzilla acaba dominando e deixando Kong à beira da morte. É então que o verdadeiro motivo dos ataques de Godzilla é revelado: a Apex construiu o Mechagodzilla, controlado remotamente através da consciência da cabeça decepada de Ghidorah. O robô sai de controle e começa a massacrar Godzilla. Kong é reanimado e os dois rivais formam uma aliança. Godzilla carrega o machado de Kong com seu sopro atômico, e Kong o usa para despedaçar o Mechagodzilla. No final, eles trocam um olhar de respeito mútuo: Godzilla continua como o Rei dos Monstros nos oceanos, e Kong se torna o rei de seu novo lar na Terra Oca.`,

    'A grande revelação é o Reino de Eixo (Axis Mundi), um lugar entre o nosso mundo e a Terra Oca onde o tempo passa de forma diferente. Descobrimos que a Dra. Keiko não morreu em 1959; ela caiu nesse reino e sobreviveu por décadas, embora para ela tenham se passado apenas alguns dias. No final da temporada, Godzilla aparece em uma batalha épica contra o Ion Dragon, provando que ele usa esses portais para se mover. Lee Shaw se sacrifica para fechar o portal e permitir que os outros escapem. Quando o grupo finalmente volta à superfície, descobrem que se passaram dois anos e que agora estão em uma instalação da Apex Cybernetics na Ilha da Caveira, onde damos de cara com o Kong.',

    `Godzilla aqui é uma força de puro horror, capaz de se regenerar quase instantaneamente. Seu Sopro Atômico é o mais devastador da história: ele funciona como uma explosão nuclear real, completa com uma nuvem de cogumelo e uma onda de choque que varre distritos inteiros de Tóquio. O plano final, chamado de "Operação Wada", consiste em envolver Godzilla com tanques de Freon para diminuir sua densidade e fazê-lo afundar rapidamente na Fossa de Sagami (causando uma compressão esmagadora), e depois inflar balões para trazê-lo de volta (causando uma descompressão explosiva). O plano falha parcialmente, mas Shikishima voa com um avião carregado de bombas diretamente na boca de Godzilla no momento em que ele carregava sua energia. O monstro se desintegra de dentro para fora. No final, Shikishima se reencontra com sua amada, Noriko, mas uma marca escura no pescoço dela e uma cena do tecido de Godzilla se regenerando no oceano indicam que a maldição ainda não terminou.`,

    `Para se preparar para a guerra, Godzilla ataca o monstro Tiamat no Ártico para absorver sua energia, evoluindo para a forma Godzilla Evolved (com placas dorsais e brilho cor-de-rosa, muito mais magro e ágil). Enquanto isso, Kong recebe um braço mecânico da Monarch (o B.E.A.S.T. Glove) após ser ferido pelo sopro congelante de Shimo. A batalha final acontece primeiro na Terra Oca e depois no Rio de Janeiro. Mothra ressurge para mediar a briga entre os dois e convencê-los a trabalhar juntos. Godzilla enfrenta Shimo, enquanto Kong derrota Skar King com a ajuda de Suko (o "Baby Kong"). No fim, Kong quebra o cristal que controlava Shimo, e a criatura de gelo acaba congelando seu próprio antigo mestre, que é então estraçalhado por Kong. O filme termina com Kong liderando os símios na Terra Oca e Godzilla voltando a dormir tranquilamente dentro do Coliseu, em Roma.`
]