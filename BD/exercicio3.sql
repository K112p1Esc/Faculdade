USE bdsprint1;

/*
Para ajudar Mário a organizar sua loja de jogos, um estudante da SPTech propôs
criar uma tabela chamada “jogo” que continha o id como número e chave primária
que se autoincrementa, o nome do jogo com tamanho máximo de 30 caracteres, o
nome do diretor do jogo com tamanho máximo de 30 caracteres, o gênero com
tamanho de 30 caracteres, a data de lançamento, a nota do jogo (entre 0-10) e um
campo para guardar a quantidade de unidades disponíveis.
*/

CREATE TABLE tbJogo (
	idJogo INT PRIMARY KEY AUTO_INCREMENT,
    nomeJogo VARCHAR(30),
    diretorJogo VARCHAR(30),
    generoJogo VARCHAR(30),
    dtLan DATE,
    notaJogo INT,
    quantJogo INT
);
-- 1. Insira pelo menos 5 registros para a tabela.
INSERT INTO tbJogo (nomeJogo, diretorJogo, generoJogo, dtLan, notaJogo, quantJogo) VALUES
	('Zelda: Ocarina of Time', 'Eiji Aonuma','Aventura','1998-11-21', 10, 230),
    ('Red Dead Redemption 2', 'Rob Nelson', 'Ação', '2018-10-26', 9, 600),
    ('The Last Of Us', 'Neil Druckmann', 'Horror','2013-07-20', 10, 350),
    ('God Of War', 'Cory Barlog', 'Ação', '2018-04-20', 8, 640),
    ('Persona 5', 'Katsura Hashino','RPG','2017-04-04', 10, 800);
-- 2. Altere a tabela para inserir uma coluna que represente o tipo de mídia que deve armazenar o tipo de jogo apenas com os valores “física” ou “digital”.
ALTER TABLE tbJogo ADD COLUMN
	midiaJogo VARCHAR(30);
ALTER TABLE tbJogo ADD 
	CONSTRAINT chkMidia CHECK (midiaJogo IN('fisica','digital'));
-- 3. Atualize os registros dos jogos inseridos anteriormente.
UPDATE tbJogo SET midiaJogo = 'fisica'
	WHERE idJogo=1;
UPDATE tbJogo SET midiaJogo = 'fisica'
	WHERE idJogo=2;
UPDATE tbJogo SET midiaJogo = 'digital'
	WHERE idJogo=3;
UPDATE tbJogo SET midiaJogo = 'fisica'
	WHERE idJogo=4;
UPDATE tbJogo SET midiaJogo = 'digital'
	WHERE idJogo=5;
-- 4. Exiba apenas os jogos com data de lançamento a partir de 2015.
SELECT * FROM tbJogo
	WHERE YEAR(dtLan) > 2014;
-- 5. Exiba os jogos que tenham a letra “a” em seu nome e são de mídia física.
SELECT * FROM tbjogo
	WHERE nomeJogo LIKE '%a%' AND midiaJogo = 'fisica';
-- 6. Exiba os jogos onde o nome do diretor não contenha a letra “e”.
SELECT * FROM tbjogo
	WHERE nomeJogo NOT LIKE '%e%';
-- 7. Altere a tabela para criar uma checagem na inserção da nota, onde o valor não pode ser menor que 0 e nem maior que 10.
ALTER TABLE tbJogo ADD	
	CONSTRAINT chkNota CHECK(notaJogo BETWEEN 0 AND 10);
-- 8. Exiba os jogos de um determinado gênero e que ainda esteja em estoque.
SELECT * FROM tbJogo
	WHERE generoJogo = 'ação' AND quantJogo > 0;
-- 9. Exclua os jogos que não têm mais unidades disponíveis em estoque.
DELETE FROM tbJogo 
	WHERE quantJogo < 1;
-- 10. Renomeie a coluna “diretor” para “criador” e exiba como ficou a estrutura da  tabela.
ALTER TABLE tbJogo RENAME COLUMN
	diretorJogo TO criadorJogo; 
    
/*
Eles criaram uma tabela chamada "esporte" que continha id como número e chave
primária que se autoincrementa, nome que armazena o nome do esporte com
limite de 40 caracteres, a categoria do esporte com limite de 20 caracteres que
aceita apenas ("Individual" ou "Coletivo"), o número de jogadores que podem
participar por equipe, estreia que armazena a data de quando o esporte estreou
nas Olimpíadas e o nome do país de origem do esporte com até 30 caracteres.
*/

CREATE TABLE tbEsporte (
	idEsporte INT PRIMARY KEY AUTO_INCREMENT,
    nomeEsporte VARCHAR(40),
    catEsporte VARCHAR(20),
    CONSTRAINT chkCategoria CHECK (catEsporte IN('individual','coletivo')),
    numJogEsporte INT,
    dtEstreiaEsporte DATE,
    paisEsporte VARCHAR(30)
);
-- 1. Insira pelo menos 5 registros na tabela.
INSERT INTO tbEsporte (nomeEsporte, catEsporte, numJogEsporte, dtEstreiaEsporte, paisEsporte) VALUES
('Futebol', 'coletivo', 11, '1900-05-20', 'Inglaterra'),
('Basquete', 'coletivo', 5, '1936-08-07', 'Estados Unidos'),
('Tênis', 'individual', 1, '1896-04-06', 'Inglaterra'),
('Vôlei', 'coletivo', 6, '1964-10-10', 'Estados Unidos'),
('Judô', 'individual', 1, '1964-10-15', 'Japão');
-- 2. Altere a tabela para adicionar uma coluna popularidade que armazene a popularidade do esporte como um valor decimal entre 0 e 10 e exiba como  ficou a estrutura da tabela.
ALTER TABLE tbEsporte ADD COLUMN
	popularidadeEsporte DECIMAL(3,1) CONSTRAINT chkPopularidade CHECK(popularidadeEsporte BETWEEN 0 AND 10);
-- 3. Atualize os registros para definir a popularidade dos esportes inseridos anteriormente.
UPDATE tbEsporte SET popularidadeEsporte = 10
	WHERE idEsporte = 1;
UPDATE tbEsporte SET popularidadeEsporte = 8.9
	WHERE idEsporte = 2;
UPDATE tbEsporte SET popularidadeEsporte = 7.3
	WHERE idEsporte = 3;
UPDATE tbEsporte SET popularidadeEsporte = 9.4
	WHERE idEsporte = 4;
UPDATE tbEsporte SET popularidadeEsporte = 6.7
	WHERE idEsporte = 5;
-- 4. Exiba os esportes ordenados por popularidade em ordem crescente.
SELECT * FROM tbEsporte
	ORDER BY popularidadeEsporte ASC;
-- 5. Exiba apenas os esportes que estrearam nas Olimpíadas a partir do ano 2000.
SELECT * FROM tbEsporte
	WHERE YEAR(dtEstreiaEsporte) >=  2000;
-- 6. Crie uma checagem para que não possa ser inserido valores dentro de estreia que seja menor que 06 de abril de 1896 e depois da data atual.
ALTER TABLE tbEsporte ADD
	CONSTRAINT chkEstreia CHECK(dtEstreiaEsporte BETWEEN '1896-04-06' AND curdate());
-- 7. Altere a tabela para excluir a regra de inserção de categoria, assim podendo colocar valores além de "Individual" ou "Coletivo".
ALTER TABLE tbEsporte DROP CONSTRAINT chkCategoria;
-- 8. Exiba apenas os esportes cujo nome do país de origem tenha "a" na segunda letra.
SELECT * FROM tbEsporte
	WHERE paisEsporte LIKE '_a%';
-- 9. Exiba os dados onde o número de jogadores por equipe esteja entre 4 e 11.
SELECT * FROM tbEsporte 
	WHERE numJogEsporte BETWEEN 4 AND 11;
-- 10. Remova os registros onde id seja 1, 3 e 5.
DELETE FROM tbEsporte
	WHERE idEsporte IN(1,3,5);
    
/*
Para atender a essa necessidade, você propôs a criação de uma tabela com os
seguintes campos: id, um número inteiro chave primária da tabela, este valor
deverá ser autoincrementado a partir do 10. Título, um campo de texto com
tamanho de 50 caracteres que armazenará o título do desenho animado. A data de
lançamento um campo que armazenará a data de lançamento do desenho. O
nome da emissora original, um campo de texto com tamanho de 50 caracteres.
Classificação, um campo que armazenará a classificação indicativa do desenho.
Status, um campo de texto com tamanho de 15 caracteres, que armazenará o
status do desenho. Nota, um campo que armazenará a avaliação do desenho,
permitindo valores de 1 a 5.
*/
CREATE TABLE tbCatalogo(
	idCatalogo INT PRIMARY KEY AUTO_INCREMENT,
    tituloCatalogo VARCHAR(50),
    dtLan DATE,
    emissoraCatalogo VARCHAR(50),
    classificacaoCatalogo INT,
    statusCatalogo VARCHAR(15),
    notaCatalogo INT,
    CONSTRAINT chkNotaCat CHECK(notaCatalogo BETWEEN 1 AND 5)
) auto_increment = 10;
INSERT INTO tbCatalogo (tituloCatalogo, dtLan, emissoraCatalogo, classificacaoCatalogo, statusCatalogo, notaCatalogo) VALUES
('Bob Esponja', '1999-05-01', 'Nickelodeon', 6, 'exibindo', 5),
('Os Simpsons', '1989-12-17', 'Fox', 16, 'exibindo', 5),
('Hora de Aventura', '2010-04-05', 'Cartoon Network', 10, 'Finalizado', 4),
('Dragon Ball Z', '1989-04-26', 'Fuji TV', 10, 'Finalizado', 5),
('Peppa Pig', '2004-05-31', 'Channel 5', 6, 'exibindo', 3),
('Caverna do Dragão', '1983-09-17', 'CBS', 6, 'Finalizado', 4),
('Rick and Morty', '2013-12-02', 'Adult Swim', 16, 'exibindo', 5),
('Futurama', '1999-03-28', 'Fox', 12, 'Finalizado', 4),
('Hora de Aventura: Finais', '2018-09-03', 'Cartoon Network', 10, 'Finalizado', 5),
('O Laboratório de Dexter', '1996-04-28', 'Cartoon Network', 6, 'Finalizado', 4),
('Os Padrinhos Mágicos', '2001-03-30', 'Nickelodeon', 6, 'Finalizado', 5),
('Bob Esponja: O Filme', '2004-11-19', 'Nickelodeon', 6, 'Finalizado', 5);
-- 1. Exibir todos os dados da tabela
SELECT * FROM tbCatalogo;
-- 2. Exibir todos os desenhos com a classificação menor ou igual a 14 anos
SELECT * FROM tbCatalogo
	WHERE classificacaoCatalogo <= 14;
-- 3. Exibir todos os desenhos de uma mesma emissora original
SELECT * FROM tbCatalogo
	WHERE emissoraCatalogo = 'Cartoon Network';
-- 4. Modificar o campo status, para que aceite apenas o status 'exibindo', 'finalizado', 'cancelado', tente inserir algum outro valor para ver se a regra foi aplicada
ALTER TABLE tbCatalogo ADD
	CONSTRAINT chkStatus CHECK(statusCatalogo IN('exibindo','finalizado','cancelado'));
-- 5. Modificar o status 'exibindo' para 'finalizado' de 2 desenhos pelo ID
UPDATE tbCatalogo SET statusCatalogo = 'finalizado'
	WHERE idCatalogo = 1;
UPDATE tbCatalogo SET statusCatalogo = 'finalizado'
	WHERE idCatalogo = 2;
-- 6. Deletar a linha do desenho de ID 12
DELETE FROM tbCatalogo
	WHERE idCatalogo = 12;
-- 7. Exibir apenas os desenhos que comecem com uma determinada letra
SELECT * FROM tbCatalogo
	WHERE tituloCatalogo LIKE 'o%';
-- 8. Renomear a coluna classificacao para classificacaoIndicativa
ALTER TABLE tbCatalogo RENAME COLUMN 
	classificacaoCatalogo TO classificacaoIndicativa;
-- 9. Atualizar a nota e data de lançamento do desenho de ID 11
UPDATE tbCatalogo SET notaCatalogo = 4
	WHERE idCatalogo = 11;
UPDATE tbCatalogo SET dtLan = '2001-12-30'
	WHERE idCatalogo = 11;
-- 10. Limpe todos os dados da tabela
TRUNCATE TABLE tbCatalogo;
-- 11. Remover a regra do status do desenho
ALTER TABLE tbCatalogo DROP CONSTRAINT chkStatus;

/*
Ele criou uma tabela chamada "MisteriosSA", que possui os campos id um número
inteiro chave primária, nome um campo de texto para armazenar o nome do
produto, data da compra para armazenar a data na qual o produto foi comprado,
preço valor numérico com casas decimais, peso um valor numérico que armazena
o peso em gramas e data de retirada para armazenar a data em que o produto foi
consumido.
*/
CREATE TABLE tbMisteriosSA (
    idMisterios INT PRIMARY KEY AUTO_INCREMENT,
    produtoMisterios VARCHAR(50),
    dtCompraMisterios DATETIME DEFAULT CURRENT_TIMESTAMP,
    valorMisterios DECIMAL(4,2),
    pesoMisterios INT,
    dtRetirada DATE
);
-- 1. Insira na tabela, no mínimo 5 compras de alimentos com datas diferentes. Por agora, não preencha a coluna referente a "data de retirada".
INSERT INTO tbMisteriosSA (produtoMisterios, dtCompraMisterios, valorMisterios, pesoMisterios) VALUES
('Cachorro-Quente', '2026-02-10', 25, 5),
('Biscoitos Scooby', '2026-02-12', 30.50, 2),
('Biscoitos Scooby', '2026-02-13', 10, 1),
('Cachorro-Quente', '2026-02-14', 40, 1),
('Biscoitos Scooby', '2026-02-15', 12, 2);
-- 2. Verifique se os valores foram inseridos corretamente.
SELECT * FROM tbMisteriosSA;
-- 3. Exiba os nomes, as datas de compra e retirada e o id dos alimentos ordenados a partir da data de compra mais antiga.
SELECT produtoMisterios, dtCompraMisterios, dtRetirada FROM tbMisteriosSA
	ORDER BY dtCompraMisterios ASC;
-- 4. Alguém comeu uma caixa de biscoitos, atualize a data de retirada da caixa de “Biscoitos Scooby” que foi comprada a mais tempo.
UPDATE tbMisteriosSA SET dtRetirada = '2026-02-23'
	WHERE idMisterios = 2;
-- 5. Altere o nome da coluna id para idComida.
ALTER TABLE tbMisteriosSA RENAME COLUMN
	idMisterios TO idComida;
-- 6. Altere o tipo do check para que os alimentos só possam ser “Biscoitos Scooby” ou “Cachorro-quente”.
ALTER TABLE tbMisteriosSA ADD
	CONSTRAINT chkAlimentos CHECK(produtoMisterios IN('Biscoitos Scooby','Cachorro-Quente'));
-- 7. Exiba os produtos onde o nome seja "Biscoitos Scooby" de forma que o nome das colunas dataCompra apareça como "data da compra" e dataRetirada apareça como "data da retirada".
SELECT produtoMisterios, dtCompraMisterios AS 'Data da Compra', dtRetirada AS 'data da Retirada';
-- 8. Exiba os alimentos que foram comprados antes do dia 25 de julho de 2024.
SELECT * FROM tbMisteriosSA 
	WHERE dtCompraMisterios <'2026-07-25';
-- 9. Exiba os alimentos que possuem um preço acima ou igual a 30.50.
SELECT * FROM tbMisteriosSA
	WHERE valorMisterios >= 30.50;
-- 10. Limpe a tabela.
TRUNCATE TABLE tbMisteriosSA;

/*
Crie uma tabela chamada “heroi”, onde terá um campo de nome contendo até 45
caracteres. O seu herói poderá ter uma versao, onde será armazenado o filme de
sua escolha, esse campo aceitará até 45 caracteres. Todo herói, tem uma
habilidade que se destaca entre os outros super-heróis. Todo herói tem uma
altura, esse campo aceitará valores inteiros representando centímetros. O id
deverá se autoincrementar.
*/
CREATE TABLE tbHeroi (
    idHeroi INT PRIMARY KEY AUTO_INCREMENT,
    nomeHeroi VARCHAR(45),
    versaoHeroi VARCHAR(45),
    destaqueHeroi VARCHAR(30),
    alturaHeroi INT
);
-- Insira 5 heróis para derrotar o vilão Doutor Destino
INSERT INTO tbHeroi (nomeHeroi, versaoHeroi, destaqueHeroi, alturaHeroi) VALUES
	('Hulk', 'O Incrível Hulk', 'Super-resistência', 340),
	('Thor', 'Thor: Ragnarok', 'Mjolnir', 198),
	('Superman', 'Man of Steel', 'Super-força', 191),
	('Mulher-Maravilha', 'Liga da Justiça', 'Super-força', 183),
	('Capitão Marvel', 'Shazam!', 'Raios', 180);
    
-- 1. Exiba os dados inseridos na tabela
SELECT * FROM tbHeroi;
-- 2. Adicione um campo de regeneração, onde ele aceitará apenas os valores booleanos de TRUE ou FALSE.
ALTER TABLE tbHeroi ADD COLUMN
	regeneracaoHeroi BOOLEAN;
ALTER TABLE tbHeroi ADD
	CONSTRAINT chkRegeneracao CHECK(regeneracaoHeroi IN(0,1));
-- 3. Modifique o campo versão para aceitar até 100 caracteres.
ALTER TABLE tbHeroi MODIFY COLUMN
	versaoHeroi VARCHAR(100);
-- 4. Remova o herói de id 3 pois ele se morreu em batalha.
DELETE FROM tbHeroi 
	WHERE idHeroi = 3;
-- 5. Chegou reforços, insira um novo herói para a equipe.
INSERT INTO tbHeroi (nomeHeroi, versaoHeroi, destaqueHeroi, alturaHeroi) VALUES
	('Motoqueiro Fantasma','Motoqueiro Fantasma 2','Olhar da Penitência',190);
-- 6. Exiba todos os dados inseridos na tabela onde o nome do herói começa com “C” ou “H”.
SELECT * FROM tbHeroi
	WHERE nomeHeroi LIKE 'C%' OR nomeHeroi LIKE 'H%';
-- 7. Exiba todos os dados inseridos na tabela onde o nome do herói não contém a letra “A” no campo nome.
SELECT * FROM tbHeroi
	WHERE nomeHeroi NOT LIKE '%A%';
-- 8. Exiba apenas o nome do herói onde a altura for maior que 190.
SELECT * FROM tbHeroi
	WHERE alturaHeroi > 190;
-- 9. Exiba todos os dados da tabela de forma decrescente pelo nome onde a altura do herói for maior que 180.
SELECT * FROM tbHeroi
	WHERE alturaHeroi > 180
		ORDER BY nomeHeroi DESC;
-- 10. Limpe os dados da tabela.    
TRUNCATE TABLE tbHeroi;