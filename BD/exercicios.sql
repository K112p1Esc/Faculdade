CREATE DATABASE bdSprint1;
USE bdSprint1;
-- Exercício 1:
/*Criar a tabela chamada Atleta para conter os dados: idAtleta (int e chave primária da
tabela), nome (varchar, tamanho 40), modalidade (varchar, tamanho 40), qtdMedalha
(int, representando a quantidade de medalhas que o atleta possui)*/
/* 
Nessa tabela, eu utilizei "Auto_increment" para eu não ter que fazer o id de maneira manuel e correr o risco de 
errar e estragar um código. Com isso, ele vai sempre crescer em números naturais.
*/
CREATE TABLE tbAtleta (
	idAtleta INT PRIMARY KEY NOT  NULL AUTO_INCREMENT, /*Eu crio uma coluna de identificação que se incrementa 
    em números inteiros automaticamente*/
    nomeAtleta VARCHAR(40),
    modalidadeAtleta VARCHAR(40),
    qtdMedalhaAtleta INT
);

-- Inserir dados na tabela, procurando colocar mais de um atleta para cada modalidade
/*
Tive que fazer de maneira diferente, afinal, se eu não especificasse que são ESSAS TRÊS, e só colocar como insert, vai dar o erro
"Error Code: 1136. Column count doesn't match value count at row 1", por que não estou inserindo nada no id tecnicamente. Mas com isso
eu consigo finalmente inserir sem causar o erro.
*/
INSERT INTO tbAtleta (nomeAtleta, modalidadeAtleta, qtdMedalhaAtleta) VALUES
	('Manuel','Surfe', 3),
    ('Luísa', 'Surfe', 7),
    ('Jorge', 'Futsal', 2),
    ('Ribeiro', 'Tênis', 12),
    ('Rafael', 'Futebol', 4),
    ('Geovani', 'Futebol', 0);

/*SELECTS ABAIXO*/
-- Exibir todos os dados da tabela.
SELECT * FROM tbAtleta;
-- Exibir apenas os nomes e quantidade de medalhas dos atletas.
SELECT nomeAtleta, qtdMedalhaAtleta FROM tbAtleta;
-- Exibir apenas os dados dos atletas de uma determinada modalidade.
SELECT * FROM tbAtleta
	WHERE modalidadeAtleta = 'Surfe';
-- Exibir os dados da tabela ordenados pela modalidade.
SELECT * FROM tbAtleta
	ORDER BY modalidadeAtleta;
-- Exibir os dados da tabela, ordenados pela quantidade de medalhas, em ordem decrescente.
SELECT * FROM tbAtleta
	ORDER BY qtdMedalhaAtleta DESC;
-- Exibir os dados da tabela, dos atletas cujo nome contenha a letra s
SELECT * FROM tbAtleta
	WHERE nomeAtleta LIKE '%s%';
-- Exibir os dados da tabela, dos atletas cujo nome comece com uma determinada letra.
SELECT * FROM tbAtleta
	WHERE nomeAtleta LIKE 'R%';
-- Exibir os dados da tabela, dos atletas cujo nome termine com a letra o.
SELECT * FROM tbAtleta
	WHERE nomeAtleta LIKE '%o';
-- Exibir os dados da tabela, dos atletas cujo nome tenha a penúltima letra r.
SELECT * FROM tbAtleta
	WHERE nomeAtleta  LIKE '%r_';
-- Eliminar a tabela.
DROP TABLE tbAtleta;

-- Exercício 2:
/*
Criar a tabela chamada Musica para conter os dados: idMusica, titulo (tamanho 40), artista
(tamanho 40), genero (tamanho 40), sendo que idMusica é a chave primária da tabela.
*/
CREATE TABLE tbMusica (
	idMusica INT PRIMARY KEY NOT  NULL AUTO_INCREMENT,
    tituloMusica VARCHAR(40),
    artistaMusica VARCHAR(40),
    generoMusica VARCHAR(40)
);
/*
Inserir dados na tabela, procurando colocar um gênero de música que tenha mais de uma
música, e um artista, que tenha mais de uma música cadastrada. Procure inserir pelo
menos umas 7 músicas.
*/
INSERT INTO tbMusica (tituloMusica, artistaMusica, generoMusica) VALUES
    ('Bohemian Rhapsody', 'Queen', 'Rock'),
    ('Don’t Stop Me Now', 'Queen', 'Rock'),
    ('Imagine', 'John Lennon', 'Rock'),
    ('Billie Jean', 'Michael Jackson', 'Pop'),
    ('Thriller', 'Michael Jackson', 'Pop'),
    ('Lana', 'Kamaitachi', 'Indie'),
    ('Julieta', 'Kamaitachi', 'Indie');

-- Exibir todos os dados da tabela.
SELECT * FROM tbMusica;
-- Exibir apenas os títulos e os artistas das músicas.
SELECT tituloMusica, artistaMusica FROM tbMusica;
-- Exibir apenas os dados das músicas de um determinado gênero.
SELECT * FROM tbMusica
	WHERE generoMusica = 'Rock';
-- Exibir apenas os dados das músicas de um determinado artista.
SELECT * FROM tbMusica
	WHERE artistaMusica = "Kamaitachi";
-- Exibir os dados da tabela ordenados pelo título da música.
SELECT * FROM tbMusica
	ORDER BY tituloMusica;
-- Exibir os dados da tabela ordenados pelo artista em ordem decrescente.
SELECT * FROM tbMusica
	ORDER BY artistaMusica DESC;
-- Exibir os dados da tabela, das músicas cujo título comece com uma determinada letra.
SELECT * FROM tbMusica
	WHERE tituloMusica LIKE 'B%';
-- Exibir os dados da tabela, das músicas cujo artista termine com uma determinada letra.
SELECT * FROM tbMusica
	WHERE artistaMusica LIKE '%i';
-- Exibir os dados da tabela, das músicas cujo gênero tenha como segunda letra uma determinada letra.
SELECT * FROM tbMusica
	WHERE generoMusica LIKE '_o%';
-- Exibir os dados da tabela, das músicas cujo título tenha como penúltima letra uma determinada letra.
SELECT * FROM tbMusica
	WHERE tituloMusica LIKE '%e_';
-- Elimine a tabela.
DROP TABLE tbMusica;

-- Exércicio 3:
/*
Criar a tabela chamada Filme para conter os dados: idFilme, título (tamanho 50), genero
(tamanho 40), diretor (tamanho 40), sendo que idFilme é a chave primária da tabela.
*/
CREATE TABLE tbFilme (
	idFilme INT PRIMARY KEY NOT  NULL AUTO_INCREMENT,
    tituloFilme VARCHAR(50),
    generoFilme VARCHAR(40),
    diretorFilme VARCHAR(40)
);
/*
Inserir dados na tabela, procurando colocar um gênero de filme que tenha mais de um
filme, e um diretor, que tenha mais de um filme cadastrado. Procure inserir pelo menos
uns 7 filmes.
*/
INSERT INTO tbFilme (tituloFilme, generoFilme, diretorFilme) VALUES
    ('Interestelar', 'Ficção Científica', 'Christopher Nolan'),
    ('A Origem', 'Ficção Científica', 'Christopher Nolan'),
    ('O Cavaleiro das Trevas', 'Ação', 'Christopher Nolan'),
    ('Pulp Fiction', 'Crime', 'Quentin Tarantino'),
    ('Kill Bill: Volume 1', 'Ação', 'Quentin Tarantino'),
    ('Bastardos Inglórios', 'Guerra', 'Quentin Tarantino'),
    ('Clube da Luta', 'Drama', 'David Fincher');

-- Exibir todos os dados da tabela.
SELECT * FROM tbFilme;
-- Exibir apenas os títulos e os diretores dos filmes.
SELECT tituloFilme, diretorFilme FROM tbFilme;
-- Exibir apenas os dados dos filmes de um determinado gênero.
SELECT * FROM tbFilme
	WHERE generoFilme = 'Ação';
-- Exibir apenas os dados dos filmes de um determinado diretor.
SELECT * FROM tbFilme
	WHERE diretorFilme = 'Quentin Tarantino';
-- Exibir os dados da tabela ordenados pelo título do filme.
SELECT * FROM tbFilme
	ORDER BY tituloFilme;
-- Exibir os dados da tabela ordenados pelo diretor em ordem decrescente.
SELECT * FROM tbFilme
	ORDER BY diretorFilme DESC;
-- Exibir os dados da tabela, dos filmes cujo título comece com uma determinada letra.
SELECT * FROM tbFilme
	WHERE tituloFilme LIKE 'A%';
-- Exibir os dados da tabela, dos filmes cujo diretor termine com uma determinada letra.
SELECT * FROM tbFilme
	WHERE diretorFilme LIKE '%o';
-- Exibir os dados da tabela, dos filmes cujo gênero tenha como segunda letra uma determinada letra.
SELECT * FROM tbFilme
	WHERE generoFilme LIKE '_ç%';
-- Exibir os dados da tabela, dos filmes cujo título tenha como penúltima letra uma determinada letra.
SELECT * FROM tbFilme
	WHERE tituloFilme LIKE '%e_';
-- Elimine a tabela.
DROP TABLE tbFilme;

-- Exércicio 4:
/*Criar a tabela chamada Professor para conter os dados: idProfessor, nome (tamanho 50),
especialidade (tamanho 40), dtNasc (date), sendo que idProfessor é a chave primária da
tabela. Exemplo do campo data: ‘AAAA-MM-DD’ - ‘1983-10-13’.*/
CREATE TABLE tbProfessor (
	idProfessor INT PRIMARY KEY NOT  NULL AUTO_INCREMENT,
    nomeProfessor VARCHAR(50),
    especialidadeProfessor VARCHAR(40),
    dtNascProfessor DATE
);
/*Inserir dados na tabela, procurando colocar uma especialista para mais de um professor.
Procure inserir pelo menos uns 6 professores.*/
INSERT INTO tbProfessor (nomeProfessor, especialidadeProfessor, dtNascProfessor) VALUES
    ('Ribeiro Tabet', 'Geografia', '1965-12-31'),
    ('Carlos Silva', 'Matemática', '1978-05-12'),
    ('Ana Paula Souza', 'Matemática', '1985-09-23'),
    ('Marcos Lima', 'História', '1972-11-03'),
    ('Fernanda Rocha', 'História', '1980-02-18'),
    ('Juliana Mendes', 'Biologia', '1990-07-30'),
    ('Ricardo Alves', 'Biologia', '1987-01-15');

-- Exibir todos os dados da tabela.
SELECT * FROM tbProfessor;
-- Exibir apenas as especialidades dos professores.
SELECT especialidadeProfessor FROM tbProfessor;
-- Exibir apenas os dados dos professores de uma determinada especialidade.
SELECT * FROM tbProfessor
	WHERE especialidadeProfessor = 'Matemática';
-- Exibir os dados da tabela ordenados pelo nome do professor.
SELECT * FROM tbProfessor
	ORDER BY nomeProfessor;
-- Exibir os dados da tabela ordenados pela data de nascimento do professor em ordem decrescente.
SELECT * FROM tbProfessor
	ORDER BY dtNascProfessor DESC;
-- Exibir os dados da tabela, dos professores cujo nome comece com uma determinada letra.
SELECT * FROM tbProfessor
	WHERE nomeProfessor LIKE 'R%';
-- Exibir os dados da tabela, dos professores cujo nome termine com uma determinada letra.
SELECT * FROM tbProfessor
	WHERE nomeProfessor LIKE '%a';
-- Exibir os dados da tabela, dos professores cujo nome tenha como segunda letra uma determinada letra.
SELECT * FROM tbProfessor
	WHERE nomeProfessor LIKE '_a%';
-- Exibir os dados da tabela, dos professores cujo nome tenha como penúltima letra uma determinada letra.
SELECT * FROM tbProfessor
	WHERE nomeProfessor LIKE '%e_';
-- Elimine a tabela.
DROP TABLE tbProfessor;

-- Exércicio 5:
/*
Criar a tabela chamada Jogo para conter os dados: idJogo, nome (tamanho 50), comentario (tamanho 200), 
ranking (número inteiro), sendo que idJogo é a chave primária da tabela.
*/
CREATE TABLE tbJogo (
	idJogo INT PRIMARY KEY NOT  NULL AUTO_INCREMENT,
    nomeJogo VARCHAR(50),
    comentarioJogo VARCHAR(200),
    rankingJogo INT
);
/*
Inserir dados na tabela.
Procure inserir pelo menos 5 jogos.
*/
INSERT INTO tbJogo (nomeJogo, comentarioJogo, rankingJogo) VALUES
    ('Minecraft', 'Jogo de sobrevivência e construção SANDBOX.', 95),
    ('FIFA 23', 'Simulação de futebol realista com opção de jogo online.', 88),
    ('The Witcher 3', 'RPG de fantasia com elementos sombrios em um mundo medieval.', 97),
    ('Among Us', 'Jogo multiplayer de interação e dedução baseado em comportamentos.', 85),
    ('League of Legends', 'MOBA competitivo com uma gigantesca comunidade conhecida por ser pouco receptiva.', 90),
    ('Cyberpunk 2077', 'RPG futurista com mundo aberto e narrativa extremamente complexa.', 80),
    ('Valorant', 'FPS tático com foco em trabalho em equipe, poderes e estratégia.', 89),
    ('Animal Crossing', 'Simulação de vida tranquila e personalização de vilarejo produzido pela nintendo.', 92);

-- Exibir todos os dados da tabela.
SELECT * FROM tbJogo;
-- Exibir apenas os nomes dos jogos.
SELECT nomeJogo FROM tbJogo;
-- Exibir apenas o comentário de um determinado jogo.
SELECT comentarioJogo FROM tbJogo
	WHERE nomejogo = 'Valorant';
-- Exibir os dados da tabela ordenados pelo nome do jogo.
SELECT * FROM tbJogo
	ORDER BY nomeJogo;
-- Exibir os dados da tabela ordenados pelo ranking em ordem decrescente.
SELECT * FROM tbJogo
	ORDER BY rankingJogo DESC;
-- Exibir os dados da tabela, dos jogos cujo nome comece com uma determinada letra.
SELECT * FROM tbJogo
	WHERE nomeJogo LIKE 'A%';
-- Exibir os dados da tabela, dos jogos cujo nome termine com uma determinada letra.
SELECT * FROM tbJogo
	WHERE nomeJogo LIKE '%t';
-- Exibir os dados da tabela, dos jogos cujo nome tenha como segunda letra uma determinada letra.
SELECT * FROM tbJogo
	WHERE nomeJogo LIKE '_i%';
-- Exibir os dados da tabela, dos jogos cujo nome tenha como penúltima letra uma determinada letra.
SELECT * FROM tbJogo
	WHERE nomeJogo LIKE '%f_';
-- Exibir os dados da tabela, dos jogos cujo nome seja diferente de Minecraft.
SELECT * FROM tbJogo
	WHERE nomeJogo != 'Minecraft';
-- Elimine a tabela.
DROP TABLE tbJogo;

