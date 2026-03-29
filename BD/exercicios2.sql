CREATE DATABASE BdSprint1;
USE BdSprint1;

-- Exércicio 1
/*
Escreva e execute os comandos para:
• Criar a tabela chamada Atleta para conter os dados: idAtleta (int e chave primária da
tabela), nome (varchar, tamanho 40), modalidade (varchar, tamanho 40), qtdMedalha
(int, representando a quantidade de medalhas que o atleta possui)
*/
CREATE TABLE tbAtleta (
    idAtleta INT PRIMARY KEY AUTO_INCREMENT,
    nomeAtleta VARCHAR(40),
    modalidadeAtleta VARCHAR(40),
    qtdMedalhaAtleta INT
);

/*
• Inserir dados na tabela, procurando colocar mais de um atleta para cada modalidade
e pelo menos 5 atletas.
*/
INSERT INTO tbAtleta (nomeAtleta, modalidadeAtleta, qtdMedalhaAtleta) VALUES
('Michael Phelps', 'Natação', 20),
('Antonio Tabet', 'Surfe', 7),
('Michele Antonella', 'Surfe', 3),
('Bruno Bianco', 'Tênis', 12),
('Michael Vitor', 'Natação', 3);

-- Exibir todos os dados da tabela.
SELECT * FROM tbAtleta;
-- Atualizar a quantidade de medalhas do atleta com id=1;
UPDATE tbAtleta SET qtdMedalhaAtleta = 21
	WHERE idAtleta = 1;
-- Atualizar a quantidade de medalhas do atleta com id=2 e com o id=3;
UPDATE tbAtleta SET qtdMedalhaAtleta = 3
	WHERE idAtleta IN (2,3);
-- Atualizar o nome do atleta com o id=4;
UPDATE tbAtleta SET nomeAtleta = 'Bruna Bianco'
	WHERE idAtleta = 4;
-- Adicionar o campo dtNasc na tabela, com a data de nascimento dos atletas, tipo date;
ALTER TABLE tbAtleta
	ADD COLUMN dtNascAtleta DATE;
-- Atualizar a data de nascimento de todos os atletas;
UPDATE tbAtleta SET dtNascAtleta = '1990-01-01' 
	WHERE idAtleta = 1;
UPDATE tbAtleta SET dtNascAtleta = '1992-11-21' 
	WHERE idAtleta = 2;
UPDATE tbAtleta SET dtNascAtleta = '2000-12-31' 
	WHERE idAtleta = 3;
UPDATE tbAtleta SET dtNascAtleta = '1990-04-12' 
	WHERE idAtleta = 4;
UPDATE tbAtleta SET dtNascAtleta = '1998-07-27' 
	WHERE idAtleta = 5;
-- Excluir o atleta com o id=5;
DELETE FROM tbAtleta
	WHERE idAtleta = 5;
-- Exibir os atletas onde a modalidade é diferente de natação;
SELECT * FROM tbAtleta
	WHERE modalidadeAtleta != 'natação';
-- Exibir os dados dos atletas que tem a quantidade de medalhas maior ou igual a 3;
SELECT * FROM tbAtleta
	WHERE qtdMedalhaAtleta >= 3;
-- Modificar o campo modalidade do tamanho 40 para o tamanho 60;
ALTER TABLE tbAtleta
	MODIFY COLUMN modalidadeAtleta VARCHAR(60);
-- Descrever os campos da tabela mostrando a atualização do campo modalidade;
DESCRIBE tbAtleta;
-- Limpar os dados da tabela;
TRUNCATE TABLE tbAtleta;

-- Exércicio 2
/*
Criar a tabela chamada Musica para conter os dados: idMusica, titulo (tamanho 40), artista
(tamanho 40), genero (tamanho 40), sendo que idMusica é a chave primária da tabela.
*/
CREATE TABLE tbMusica (
    idMusica INT PRIMARY KEY AUTO_INCREMENT,
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
-- Adicionar o campo curtidas do tipo int na tabela;
ALTER TABLE tbMusica
	ADD curtidasMusica INT;
-- Atualizar o campo curtidas de todas as músicas inseridas;
UPDATE tbMusica SET curtidasMusica = 1034138513 
	WHERE idMusica = 1;
UPDATE tbMusica SET curtidasMusica = 130551393 
	WHERE idMusica = 2;
UPDATE tbMusica SET curtidasMusica = 1935102 
	WHERE idMusica = 3;
UPDATE tbMusica SET curtidasMusica = 95394933 
	WHERE idMusica = 4;
UPDATE tbMusica SET curtidasMusica = 35938539 
	WHERE idMusica = 5;
UPDATE tbMusica SET curtidasMusica = 150023 
	WHERE idMusica = 6;
UPDATE tbMusica SET curtidasMusica = 203400 
	WHERE idMusica = 7;
-- Modificar o campo artista do tamanho 40 para o tamanho 80;
ALTER TABLE tbMusica
	MODIFY COLUMN artistaMusica VARCHAR(80);
-- Atualizar a quantidade de curtidas da música com id=1;
UPDATE tbMusica SET curtidasMusica = 19
	WHERE idMusica = 1;
-- Atualizar a quantidade de curtidas das músicas com id=2 e com o id=3;
UPDATE tbMusica SET curtidasMusica = 20
	WHERE idMusica IN (2,3);
-- Atualizar o nome da música com o id=5;
UPDATE tbMusica SET tituloMusica = 'Smooth Criminal'
	WHERE idMusica = 5;
-- Excluir a música com o id=4;
DELETE FROM tbMusica
	WHERE idMUsica = 4;
-- Exibir as músicas onde o gênero é diferente de funk;
SELECT * FROM tbMusica
	WHERE generoMusica != 'funk';
-- Exibir os dados das músicas que tem curtidas maior ou igual a 20;
SELECT * FROM tbMusica
	WHERE curtidasMusica >= 20;
-- Descrever os campos da tabela mostrando a atualização do campo artista;
DESCRIBE tbMusica;
-- Limpar os dados da tabela;
TRUNCATE TABLE tbMusica;

/*
Criar a tabela chamada Filme para conter os dados: idFilme, título (tamanho 50), genero
(tamanho 40), diretor (tamanho 40), sendo que idFilme é a chave primária da tabela.
*/
CREATE TABLE tbFilme (
    idFilme INT PRIMARY KEY AUTO_INCREMENT,
    tituloFilme VARCHAR(50),
    generoFilme VARCHAR(40),
    diretorFilme VARCHAR(40)
);

-- Exércicio 3
/*
Inserir dados na tabela, procurando colocar um gênero de filme que tenha mais de um
filme, e um diretor, que tenha mais de um filme cadastrado. Procure inserir pelo menos
uns 7 filmes.
*/
INSERT INTO tbFilme (tituloFilme, generoFilme, diretorFilme) VALUES
('O Enigma de Outro Mundo', 'Terror', 'John Carpenter'),
('Duro de Matar', 'Ação', 'John McTiernan'),
('Corra!', 'Terror', 'Jordan Peele'),
('Minha Mãe é uma Peça', 'Comédia', 'André Pellenz'),
('Star Wars Episódio IV', 'Ficção Científica', 'George Lucas'),
('O Iluminado', 'Suspense', 'Stanley Kubrick'),
('Hora do Pesadelo', 'Terror', 'John Carpenter');

-- Exibir todos os dados da tabela.
SELECT * FROM tbFilme;
-- Adicionar o campo protagonista do tipo varchar(50) na tabela;
ALTER TABLE tbFilme
	ADD COLUMN protagonistaFilme VARCHAR(50);
-- Atualizar o campo protagonista de todas os filmes inseridos;
UPDATE tbFilme SET protagonistaFilme = 'R.J MacReady' 
	WHERE idFilme = 1;
UPDATE tbFilme SET protagonistaFilme = 'John MacClane' 
	WHERE idFilme = 2;
UPDATE tbFilme SET protagonistaFilme = 'Cris Washington' 
	WHERE idFilme = 3;
UPDATE tbFilme SET protagonistaFilme = 'Dona Herminia' 
	WHERE idFilme = 4;
UPDATE tbFilme SET protagonistaFilme = 'Luke Skywalker' 
	WHERE idFilme = 5;
UPDATE tbFilme SET protagonistaFilme = 'Jack Torrence' 
	WHERE idFilme = 6;
UPDATE tbFilme SET protagonistaFilme = 'Nancy Thompson' 
	WHERE idFilme = 7;
-- Modificar o campo diretor do tamanho 40 para o tamanho 150;
ALTER TABLE tbFilme
	MODIFY COLUMN diretorFilme VARCHAR(150);
-- Atualizar o diretor do filme com id=5;
UPDATE tbFilme SET diretorFIlme = 'George Walton Lucas Jr'
	WHERE idFilme = 5;
-- Atualizar o diretor dos filmes com id=2 e com o id=7;
UPDATE tbFilme SET diretorFIlme = 'John McTiernan JR' 
	WHERE idFilme = 2;
UPDATE tbFilme SET diretorFIlme = 'John Howard Carpenter' 
	WHERE idFilme = 7;
-- Atualizar o título do filme com o id=6;
UPDATE tbFilme SET tituloFilme = 'Stephen King: O Iluminado'
	WHERE idFilme = 6;
-- Excluir o filme com o id=3;
DELETE FROM tbFilme
	WHERE idFilme = 3;
-- Exibir os filmes em que o gênero é diferente de drama;
SELECT * FROM tbFilme
	WHERE generoFilme != 'drama';
-- Exibir os dados dos filmes que o gênero é igual ‘suspense’;
SELECT * FROM tbFilme
	WHERE generoFilme = 'suspense';
-- Descrever os campos da tabela mostrando a atualização do campo protagonista e diretor;
DESCRIBE tbFilme;
-- Limpar os dados da tabela;
TRUNCATE TABLE tbFilme;

-- Exercício 4
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
-- Adicionar o campo funcao do tipo varchar(50), onde a função só pode ser ‘monitor’, ‘assistente’ ou ‘titular’.
/*
	Pesquisando sobre, descobri a condição "CHECK", pelo que entendi: ele é quase como uma condição em um banco de dados, onde você pode definir apenas o que foi colocado naquilo
Então por exemplo, caso eu quisesse que o gênero do filme pudesse ser só: Comédia, Terror e Ação, eu teria que fazer algo como: CHECK (generoFilme IN ('Comédia', 'Assistente', 'Titular')).
	Além disso, o IN significa "que a condição deve estar presente naquilo", ou seja, eu posso também usar em comparações para substituir um OR, por que ele também serve como um ou outro. 
E também pode ser usado como "NOT IN" para excluir registros. Então tudo que não pertencesse a lista de valores, iria aparecer. Então suponho que poderia ser feito assim:
*/
ALTER TABLE tbProfessor
	ADD COLUMN funcaoProfessor VARCHAR(50) 
		CHECK (funcaoProfessor IN ('monitor', 'assistente', 'titular'));
/*
Nisso eu adiciono primeiramente o funcaoProfessor como um varchar de 50, para então, criar a condição que deve estar presente nesse dado
https://www.freecodecamp.org/portuguese/news/comandos-basicos-em-sql-a-lista-de-consultas-e-instrucoes-de-banco-de-dados-que-voce-deve-conhecer/ usei esse site
https://didatica.tech/tudo-sobre-a-restricao-check-em-sql/ e esse aqui
Ai a partir dele, foi ver o IN
*/        
-- Atualizar os professores inseridos e suas respectivas funções.]
UPDATE tbProfessor SET funcaoProfessor = 'monitor'
	WHERE idProfessor = 1;
UPDATE tbProfessor SET funcaoProfessor = 'monitor'
	WHERE idProfessor = 2;
UPDATE tbProfessor SET funcaoProfessor = 'monitor'
	WHERE idProfessor = 3;
UPDATE tbProfessor SET funcaoProfessor = 'titular'
	WHERE idProfessor = 4;
UPDATE tbProfessor SET funcaoProfessor = 'titular'
	WHERE idProfessor = 5;
UPDATE tbProfessor SET funcaoProfessor = 'assistente'
	WHERE idProfessor = 6;
UPDATE tbProfessor SET funcaoProfessor = 'assistente'
	WHERE idProfessor = 7;
-- Inserir um novo professor.
INSERT INTO tbProfessor(nomeProfessor, especialidadeProfessor, dtNascProfessor, funcaoProfessor) VALUE
	('Noemi', 'Português', '1978-10-10', 'titular');
-- Excluir o professor onde o idProfessor é igual a 5.
DELETE FROM tbProfessor
	WHERE idProfessor = 5;
-- Exibir apenas os nomes dos professores titulares.
SELECT nomeProfessor FROM tbProfessor 
	WHERE funcaoProfessor = 'titular';
-- Exibir apenas as especialidades e as datas de nascimento dos professores monitores.
SELECT especialidadeProfessor, dtNascProfessor FROM tbProfessor 
	WHERE funcaoProfessor = 'monitor';
-- Atualizar a data de nascimento do idProfessor igual a 3.
UPDATE tbProfessor SET dtNascProfessor = '1950-12-08'
	WHERE idProfessor = 3;
-- Limpar a tabela Professor.
TRUNCATE TABLE tbProfessor;

-- Exercício 5
/*
Criar a tabela chamada Curso para conter os dados: idCurso, nome (tamanho 50), sigla
(tamanho 3), coordenador, sendo que idCurso é a chave primária da tabela.
*/
CREATE TABLE tbCurso (
	idCurso INT PRIMARY KEY AUTO_INCREMENT,
    nomeCurso VARCHAR(50),
    siglaCurso CHAR(3),
	coordenadorCurso varchar(50)
);
/*
Inserir dados na tabela, procure inserir pelo menos 3 cursos.
*/
INSERT INTO tbCurso (nomeCurso, siglaCurso, coordenadorCurso) VALUES
	('Introdução a Algebria e Tecnologias', 'IAT', 'Mauricio de Souza'),
    ('Biologia e Aréas Cerebrais', 'BAC', 'Jorge Ribeiro'),
    ('Terminologia e Conceitos Geometricos', 'TCG', 'Martinez Rodrigues'),
    ('Bandeiras e seus Conceitos e Ornamentos', 'BCO', 'Trevor Alton');
    
-- Exibir todos os dados da tabela.
SELECT * FROM tbCurso;
-- Exibir apenas os coordenadores dos cursos.
SELECT coordenadorCurso FROM tbCurso;
-- Exibir apenas os dados dos cursos de uma determinada sigla.
SELECT * FROM tbCurso
	WHERE siglaCurso = 'TCG';
-- Exibir os dados da tabela ordenados pelo nome do curso.
SELECT * FROM tbCurso
	ORDER BY nomeCurso;
-- Exibir os dados da tabela ordenados pelo nome do coordenador em ordem decrescente.
SELECT * FROM tbCurso
	ORDER BY coordenadorCurso DESC;
-- Exibir os dados da tabela, dos cursos cujo nome comece com uma determinada letra.
SELECT * FROM tbCurso
	WHERE nomeCurso LIKE 'B%';
-- Exibir os dados da tabela, dos cursos cujo nome termine com uma determinada letra.
SELECT * FROM tbCurso
	WHERE nomeCurso LIKE '%s';
-- Exibir os dados da tabela, dos cursos cujo nome tenha como segunda letra uma determinada letra.
SELECT * FROM tbCurso
	WHERE nomeCurso LIKE '_a%';
-- Exibir os dados da tabela, dos cursos cujo nome tenha como penúltima letra uma determinada letra.
SELECT * FROM tbCurso
	WHERE nomeCurso LIKE '%o_';
-- Elimine a tabela.
DROP TABLE tbCurso;

-- Exercicio 6
/*
Criar a tabela chamada Revista para conter os campos: idRevista (int e chave
primária da tabela), nome (varchar, tamanho 40), categoria (varchar, tamanho 30). Os
valores de idRevista devem iniciar com o valor 1 e ser incrementado automaticamente
pelo sistema.
*/
CREATE TABLE tbRevista (
	idRevista INT PRIMARY KEY AUTO_INCREMENT,
    nomeRevista VARCHAR(40),
    categoriaRevista VARCHAR(30)
);
/*
Inserir 4 registros na tabela, mas sem informar a categoria.
*/
INSERT INTO tbRevista(nomeRevista) VALUES
	('Veja'),
    ('Vogue Brasil'),
    ('Superinteressante'),
    ('Quatro Rodas'),
    ('Piauí'),
    ('Exame');
    
-- Exibir todos os dados da tabela.
SELECT * FROM tbRevista;
-- Atualize os dados das categorias das 3 revistas inseridas. Exibir os dados da tabela novamente para verificar se atualizou corretamente.
UPDATE tbRevista SET categoriaRevista = 'Notícias Gerais'
	WHERE idRevista = 1;
UPDATE tbRevista SET categoriaRevista = 'Moda'
	WHERE idRevista = 2;
UPDATE tbRevista SET categoriaRevista = 'Curiosidades'
	WHERE idRevista = 3;
-- Insira mais 3 registros completos.
INSERT INTO tbRevista(nomeRevista, categoriaRevista) VALUES
	('Claudia', 'Público Feminino'),
    ('Caras', 'Celebridades'),
    ('Galileu', 'Ciência');
-- Exibir novamente os dados da tabela.
SELECT * FROM tbRevista;
-- Exibir a descrição da estrutura da tabela.
DESCRIBE tbRevista;
-- Alterar a tabela para que a coluna categoria possa ter no máximo 40 caracteres.
ALTER TABLE tbRevista
	MODIFY COLUMN categoriaRevista VARCHAR(40);
-- Exibir novamente a descrição da estrutura da tabela, para verificar se alterou o tamanho da coluna categoria.
DESCRIBE tbRevista;
-- Acrescentar a coluna periodicidade à tabela, que é varchar(15).
ALTER TABLE tbRevista
	ADD COLUMN periocidadeRevista VARCHAR(15);
-- Exibir os dados da tabela.
SELECT * FROM tbRevista;
-- Excluir a coluna periodicidade da tabela.
ALTER TABLE tbRevista
	DROP COLUMN periocidadeRevista;
    
-- Exercício 7
/*
Criar a tabela chamada Carro para conter os campos: idCarro (int e chave primária da tabela), nome (varchar, tamanho 40), placa (char, tamanho 7). 
Os valores de idCarro devem iniciar com o valor 1000 e ser incrementado automaticamente pelo sistema.
*/
CREATE TABLE tbCarro (
	idCarro INT PRIMARY KEY AUTO_INCREMENT,
    nomeCarro VARCHAR(40),
    placaCarro CHAR(7)
);
ALTER TABLE tbCarro AUTO_INCREMENT=1000;
/*
Inserir 4 registros na tabela;
*/
INSERT INTO tbCarro(nomeCarro, placaCarro) VALUES
	('Fusca', 'ABC1234'),
    ('Gol', 'XYZ5678'),
    ('Civic', 'DEF9012'),
    ('Corolla', 'GHI3456');
-- Exibir todos os dados da tabela.
SELECT * FROM tbCarro;
-- Insira mais 3 registros sem a placa dos carros.
INSERT INTO tbCarro(nomeCarro) VALUES
	('Sandero'),
    ('Prisma'),
    ('Palio'),
    ('Celta');
-- Exibir novamente os dados da tabela.
SELECT * FROM tbCarro;
-- Exibir a descrição da estrutura da tabela.
DESCRIBE tbCarro;
-- Alterar a tabela para que a coluna nome possa ter no máximo 28 caracteres.
ALTER TABLE tbCarro
	MODIFY COLUMN nomeCarro VARCHAR(28);
-- Exibir novamente a descrição da estrutura da tabela, para verificar se alterou o tamanho da coluna.
DESCRIBE tbCarro;
-- Acrescentar a coluna ano à tabela, que é char(4).
ALTER TABLE tbCarro
	ADD COLUMN anoCarro CHAR(4);
-- Atualizar todos os dados nulos da tabela.
UPDATE tbCarro SET anoCarro = 2000
	WHERE idCarro = 1000;
UPDATE tbCarro SET anoCarro = 2023
	WHERE idCarro = 1001;
UPDATE tbCarro SET anoCarro = 2005
	WHERE idCarro = 1002;
UPDATE tbCarro SET anoCarro = 2012
	WHERE idCarro = 1003;
/*Ta certo funcionar com "," um UPDATE? Não me lembrava disso*/
UPDATE tbCarro SET placaCarro = 'GMK0943', anoCarro = 2014
	WHERE idCarro = 1004;
UPDATE tbCarro SET placaCarro = 'AGD0293', anoCarro = 2022
	WHERE idCarro = 1005;
UPDATE tbCarro SET placaCarro = 'LAK0923', anoCarro = 2018
	WHERE idCarro = 1006;
UPDATE tbCarro SET placaCarro = 'NKS1243', anoCarro = 2025
	WHERE idCarro = 1007;