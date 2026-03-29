CREATE DATABASE Sprint2;
USE Sprint2;
/*EXERCICIO 1*/

-- Criar a tabela chamada Atleta para conter os dados: idAtleta (int e chave
-- primária da tabela), nome (varchar, tamanho 40), modalidade (varchar, tamanho
-- 40), qtdMedalha (int, representando a quantidade de medalhas que o atleta
-- possui)

CREATE TABLE tbAtleta (
	idAtleta INT PRIMARY KEY AUTO_INCREMENT,
    nomeAtleta VARCHAR(40),
    modalidadeAtleta VARCHAR(40),
    qtdMedAtleta INT
);

-- Inserir dados na tabela, procurando colocar mais de um atleta para cada
-- modalidade e pelo menos 5 atletas.
INSERT INTO tbAtleta VALUES
	(default,'Michael Phelps', 'Natação', 28),
    (default,'Lionel Messi', 'Futebol', 21),
    (default, 'Cristiano Ronaldo', 'Futebol', 20),
    (default, 'Ian Thorpe', 'Natação', 12),
    (default, 'Faker', 'LoL', 5);
    
-- Criar uma tabela chamada País para conter os dados: idPais (int e chave primária
-- da tabela), nome (varchar, tamanho 30), capital (varchar, tamanho 40);    
CREATE TABLE tbPais (
	idPais INT PRIMARY KEY AUTO_INCREMENT,
    nomePais VARCHAR(30),
    capitalPais VARCHAR(40)
);

-- Inserir pelo menos 4 países na tabela país.
INSERT INTO tbPais VALUES
	(default, 'Estados Unidos', 'Washington'),
    (default, 'Austrália', 'Canberra'),
    (default, 'Argentina', 'Buenos Aires'),
    (default, 'Portugal', 'Lisboa'),
    (default, 'Coreia', 'Seul');

-- Criar a chave estrangeira na tabela correspondente conforme modelagem;
ALTER TABLE tbAtleta
	ADD COLUMN FKPais INT;
ALTER TABLE tbAtleta 
	ADD CONSTRAINT FKpais 
		FOREIGN KEY(FKPais) REFERENCES tbPais(idPais);

--  Atualizar o país de todos os atletas;
UPDATE tbAtleta SET FKPais = 1
	WHERE idAtleta = 1;
UPDATE tbAtleta SET FKPais = 2
	WHERE idAtleta = 4;
UPDATE tbAtleta SET FKPais = 3
	WHERE idAtleta = 2;
UPDATE tbAtleta SET FKPais = 4
	WHERE idAtleta = 3;
UPDATE tbAtleta SET FKPais = 5
	WHERE idAtleta = 5;
    
SELECT * FROM tbAtleta
	JOIN tbPais ON FKPais = tbPais.idPais;
    
SELECT nomeAtleta AS 'Nome do Atleta', nomePais AS 'Nome do Pais' FROM tbAtleta
	JOIN tbPais ON FKPais = tbPais.idPais;
    
SELECT nomeAtleta AS 'Nome do Atleta', nomePais AS 'Nome do Pais' FROM tbAtleta
	JOIN tbPais ON FKPais = tbPais.idPais
		WHERE capitalPais = 'Canberra';

/*EXERCÍCIO 2*/
-- Criar a tabela chamada Musica para conter os dados: idMusica, titulo (tamanho
-- 40), artista (tamanho 40), genero (tamanho 40), sendo que idMusica é a chave
-- primária da tabela.
CREATE TABLE tbMusica (
	idMusica INT PRIMARY KEY AUTO_INCREMENT,
    tituloMusica VARCHAR(40),
    artistaMusica VARCHAR(40),
    generoMusica VARCHAR(40)
);

-- Inserir dados na tabela, procurando colocar um gênero de música que tenha mais
-- de uma música, e um artista, que tenha mais de uma música cadastrada. Procure
-- inserir pelo menos umas 3 músicas.
INSERT INTO tbMusica VALUES
	(default, 'Bohemian Rhasposody', 'Queen', 'Rock'),
    (default, 'Killer Queen', 'Queen', 'Rock'),
    (default, 'Smooth Criminal', 'Michael Jackson', 'Pop');
    
-- Criar a tabela chamada Album para conter os dados: idAlbum, nome, tipo (digital
-- ou físico) e dtLancamento (DATE).
CREATE TABLE tbAlbum (
	idAlbum INT PRIMARY KEY AUTO_INCREMENT,
    nomeAlbum VARCHAR(40),
    tipoAlbum VARCHAR(7),
    CONSTRAINT chkTipo CHECK(tipoAlbum IN ('digital', 'físico')),
    dtLanAlbum DATE
);

-- Inserir pelo menos 2 albuns;
INSERT INTO tbAlbum VALUES 
	(default,'A Night at the Opera', 'físico', '1975-10-31'),
    (default,'Sheer Heart Attack', 'físico', '1974-11-11'),
    (default,'Bad', 'digital', '1987-08-31');
    
-- a) Exibir todos os dados das tabelas separadamente;
SELECT * from tbMusica;
SELECT * FROM tbAlbum;
-- b) Criar a chave estrangeira na tabela de acordo com a regra de negócio;
ALTER TABLE tbMusica
	ADD COLUMN FKAlbum INT;
ALTER TABLE tbMusica 
	ADD CONSTRAINT FKalbum 
		FOREIGN KEY(FKAlbum) REFERENCES tbAlbum(idAlbum);
-- c) Atualizar os álbuns de cada música;
UPDATE tbMusica SET FKAlbum = 1
	WHERE idMusica = 1;
UPDATE tbMusica SET FKAlbum = 2
	WHERE idMusica = 2;
UPDATE tbMusica SET FKAlbum = 3
	WHERE idMusica = 3;
-- d) Exibir as músicas e seus respectivos álbuns;
SELECT * FROM tbMusica
	JOIN tbAlbum ON FKAlbum = tbAlbum.idAlbum;
-- e) Exibir somente o título da música e o nome do seu respectivo álbum;
SELECT tituloMusica AS 'Nome da Música', nomeAlbum AS 'Nome do Álbum' FROM tbMusica
	JOIN tbAlbum ON FKAlbum = tbAlbum.idAlbum;
-- f) Exibir os dados das músicas e seu respectivo álbum, de um determinado tipo.
SELECT tituloMusica AS 'Nome da Música', nomeAlbum AS 'Nome do Álbum' FROM tbMusica
	JOIN tbAlbum ON FKAlbum = tbAlbum.idAlbum
		WHERE generoMusica = 'Rock';
        
/*EXERCÍCIO 3*/
-- Criar as tabelas;
CREATE TABLE tbPessoa(
	idPessoa INT PRIMARY KEY AUTO_INCREMENT,
    nomePessoa VARCHAR(45),
    cpfPessoa VARCHAR(11)
);

CREATE TABLE tbReserva (
	idReserva INT PRIMARY KEY AUTO_INCREMENT,
    dtReserva DATETIME,
    dtRetirada DATETIME,
    dtDevolucao DATETIME
);
-- Inserir 5 registros
INSERT INTO tbPessoa (nomePessoa, cpfPessoa) VALUES
	('João Silva', '12345678901'),
	('Maria Oliveira', '98765432100');
    
INSERT INTO tbReserva (dtReserva, dtRetirada, dtDevolucao) VALUES
	('2026-03-21 10:00:00', '2026-03-22 09:00:00', '2026-03-25 18:00:00'),
	('2026-03-22 14:30:00', '2026-03-23 08:00:00', '2026-03-26 17:00:00'),
	('2026-03-23 16:45:00', '2026-03-24 10:00:00', '2026-03-27 19:00:00');
-- Configurar chave estrangeira
ALTER TABLE tbReserva
	ADD COLUMN FKPessoa INT;
ALTER TABLE tbReserva 
	ADD CONSTRAINT FKpessoa 
		FOREIGN KEY(FKPessoa) REFERENCES tbPessoa(idPessoa);

UPDATE tbReserva SET FKPessoa = 1 
	WHERE idReserva = 1;
UPDATE tbReserva SET FKPessoa = 2 
	WHERE idReserva = 2;
UPDATE tbReserva SET FKPessoa = 1 
	WHERE idReserva = 3;
-- Exibir dados;
SELECT * FROM tbReserva
	JOIN tbPessoa ON FKPessoa = tbPessoa.idPessoa;
-- Exibir dados com AS;
SELECT idReserva AS 'Código da Reserva', nomePessoa AS Nome, dtRetirada AS Retirada FROM tbReserva
	JOIN tbPessoa ON FKPessoa = tbPessoa.idPessoa;
-- Exibir dados com CASE;
SELECT  idReserva, nomePessoa, dtDevolucao,
	CASE 
		WHEN dtDevolucao < NOW() THEN 'Finalizada'
		ELSE 'Em andamento'
	END AS 'Status da Reserva'
FROM tbReserva
JOIN tbPessoa ON FKPessoa = tbPessoa.idPessoa;
-- Exibir dados com IFNULL;
SELECT  idReserva AS 'Código da Reserva', IFNULL(nomePessoa, 'Sem cliente') AS 'Nome da Pessoa', dtReserva AS Reserva FROM tbReserva
	JOIN tbPessoa ON FKPessoa = tbPessoa.idPessoa;
    
    
/*EXERCÍCIO 4*/
-- Criar as tabelas;
CREATE TABLE tbPessoa1 (
	idPessoa1 INT PRIMARY KEY AUTO_INCREMENT,
    nomePessoa1 VARCHAR(45),
    dtNascPessoa1 DATE
);

CREATE TABLE tbPessoa2 (
	idPessoa2 INT PRIMARY KEY AUTO_INCREMENT,
    nomePessoa2 VARCHAR(45),
    dtNascPessoa2 DATE
);
-- Inserir 5 registros
INSERT INTO tbPessoa1 (nomePessoa1, dtNascPessoa1) VALUES
	('João Silva', '1990-05-10'),
	('Maria Oliveira', '1985-08-20'),
	('Carlos Souza', '2000-01-15'),
	('Ana Lima', '1998-12-03'),
	(NULL, '1992-07-25');

INSERT INTO tbPessoa2 (nomePessoa2, dtNascPessoa2) VALUES
	('Taliao Silva', '1970-02-10'),
	('Orfeu Oliveira', '1965-01-20'),
	('Serevino Souza', '2010-03-05'),
	('Maycon Lima', '1968-10-13'),
	('Leila Santos', '2000-01-01');
-- Configurar chave estrangeira
ALTER TABLE tbPessoa2
	ADD COLUMN FKPessoa1 INT UNIQUE;
ALTER TABLE tbPessoa2
	ADD CONSTRAINT FKpessoa1
		FOREIGN KEY (FKPessoa1) REFERENCES tbPessoa1(idPessoa1);
        
UPDATE tbPessoa2 SET FKPessoa1 = 1 
	WHERE idPessoa2 = 1;
UPDATE tbPessoa2 SET FKPessoa1 = 2 
	WHERE idPessoa2 = 2;
UPDATE tbPessoa2 SET FKPessoa1 = 3 
	WHERE idPessoa2 = 3;
UPDATE tbPessoa2 SET FKPessoa1 = 4 
	WHERE idPessoa2 = 4;
UPDATE tbPessoa2 SET FKPessoa1 = 5 
	WHERE idPessoa2 = 5;
-- Exibir dados;
SELECT * FROM tbPessoa2
	JOIN tbPessoa1 ON FKPessoa1 = tbPessoa1.idPessoa1;
-- Exibir dados com AS;
SELECT 
	idPessoa2 AS 'Código Pessoa2',
	nomePessoa2 AS Nome2,
	nomePessoa1 AS Nome1
FROM tbPessoa2
JOIN tbPessoa1 ON FKPessoa1 = tbPessoa1.idPessoa1;
-- Exibir dados com CASE;
SELECT idPessoa2, nomePessoa2, dtNascPessoa2,
	CASE 
		WHEN dtNascPessoa2 < '2000-01-01' THEN 'Maior de 25 anos'
        WHEN dtNascPessoa2 = '2000-01-01' THEN 'Igual a 25 anos'
		ELSE 'Menor a 25 anos'
	END AS 'Faixa Etária'
FROM tbPessoa2;
-- Exibir dados com IFNULL;
SELECT  IFNULL(nomePessoa1, 'Sem vínculo') AS 'Pessoa1', nomePessoa2 AS 'Pessoa2' FROM tbPessoa2
	JOIN tbPessoa1 ON FKPessoa1 = tbPessoa1.idPessoa1;
    
/*EXERCÍCIO 5*/
CREATE TABLE tbCandidato (
	idCandidato INT PRIMARY KEY AUTO_INCREMENT,
    nomeCandidato VARCHAR(45)
);

CREATE TABLE tbCarteira (
	idCarteira INT PRIMARY KEY AUTO_INCREMENT,
    tipoCarteira CHAR(5),
    CONSTRAINT chkCarteira CHECK(tipoCarteira IN('A','B','A e B')),
    validadeCarteira DATE
);

-- criar as tabelas
INSERT INTO tbCandidato VALUES
	(default, 'Jordana'),
	(default, 'Mariana'),
	(default, 'João'),
	(default, 'Sérgio'),
	(default, 'Mario'),
    (default, 'Perola');
    
INSERT INTO tbCarteira VALUES
	(default,'A','2031-10-22'),
    (default,'B','2026-10-13'),
    (default,'A e B','2029-11-15'),
    (default,'B','2030-03-02'),
    (default,'A','2027-12-31'),
    (default,NULL,'2030-10-22');
    
-- CONFIGURAR CHAVE ESTRANGEIRA
ALTER TABLE tbCandidato
	ADD COLUMN FKCarteira INT UNIQUE;
ALTER TABLE tbCandidato 
	ADD CONSTRAINT FKcarteira
		FOREIGN KEY (FKCarteira) REFERENCES tbCarteira(idCarteira);

UPDATE tbCandidato SET FKCarteira = 1
	WHERE idCandidato = 1;
UPDATE tbCandidato SET FKCarteira = 2
	WHERE idCandidato = 2;
UPDATE tbCandidato SET FKCarteira = 3
	WHERE idCandidato = 3;
UPDATE tbCandidato SET FKCarteira = 4
	WHERE idCandidato = 4;
UPDATE tbCandidato SET FKCarteira = 5
	WHERE idCandidato = 5;
UPDATE tbCandidato SET FKCarteira = 6
	WHERE idCandidato = 6;
    
-- EXIBIR DADOS
SELECT * FROM tbCarteira
	JOIN tbCandidato ON FKCarteira = tbCarteira.idCarteira;

-- DADOS AS
SELECT nomeCandidato AS 'Nome do Candidato', tipoCarteira 'Tipo da Carteira' FROM tbCarteira
	JOIN tbCandidato ON FKCarteira = tbCarteira.idCarteira;
    
-- DADOS CASE
SELECT nomeCandidato AS 'Nome do Candidato',
	CASE 
		WHEN tipoCarteira = 'A' THEN 'Você tem a Carteira A'
        WHEN tipoCarteira = 'B' THEN 'Você tem a Carteira B'
		ELSE 'Você tem ambas carteiras'
	END AS 'Carteiras possuidas'
FROM tbCarteira
JOIN tbCandidato ON FKCarteira = tbCarteira.idCarteira;

-- DADOS IFNULL
SELECT  IFNULL(tipoCarteira, 'Sem carteira') AS 'Tipo Carteira', nomeCandidato AS 'Nome do Candidato' FROM tbCarteira
	JOIN tbCandidato ON FKCarteira = tbCarteira.idCarteira;

/*EXERCÍCIO 6*/
-- 1 Farmácia tem no mínimo 1 e no máximo 1 endereço, 1 endereço é de no mínimo 1 farmácia e no máximo 1.
-- 1 Farmácia tem no mínimo 1 farmacêutico e no máximo n, 1 farmacêutico é de no mínimo 1 farmácia e no máximo 1.
CREATE TABLE tbFarmacia (
	idFarmacia INT PRIMARY KEY AUTO_INCREMENT,
    nomeFarmacia VARCHAR(45)
);

CREATE TABLE tbEndereco (
	idEndereco INT PRIMARY KEY AUTO_INCREMENT,
    localEndereco VARCHAR(45)
);

CREATE TABLE tbFarmaceutico (
	idFarmaceutico INT PRIMARY KEY AUTO_INCREMENT,
    nomeFarmaceutico VARCHAR(45)
);

-- Inserir 5 registros;

INSERT INTO tbFarmacia VALUES
(default, 'Farmácia Central'),
(default, 'Farmácia Viva');

INSERT INTO tbEndereco VALUES
(default, 'Rua A, 123'),
(default, 'Avenida Q, 456');

INSERT INTO tbFarmaceutico VALUES
(default, 'João'),
(default, 'Maria'),
(default, 'Carlos'),
(default, NULL);

-- - Configurar chave estrangeira;
ALTER TABLE tbFarmaceutico
	ADD COLUMN FKFarmacia INT;
ALTER TABLE tbFarmaceutico 
	ADD CONSTRAINT FKfarmacia
		FOREIGN KEY (FKFarmacia) REFERENCES tbFarmacia(idFarmacia);
        
ALTER TABLE tbEndereco
	ADD COLUMN FKFarmacia INT UNIQUE;
ALTER TABLE tbEndereco 
	ADD CONSTRAINT FKfarmaciaEnd
		FOREIGN KEY (FKFarmacia) REFERENCES tbFarmacia(idFarmacia);

UPDATE tbEndereco SET FKFarmacia = 1
	WHERE idEndereco = 1;
UPDATE tbEndereco SET FKFarmacia = 2
	WHERE idEndereco = 2;
UPDATE tbFarmaceutico SET FKFarmacia = 1
	WHERE idFarmaceutico = 1;
UPDATE tbFarmaceutico SET FKFarmacia = 1
	WHERE idFarmaceutico = 2;
UPDATE tbFarmaceutico SET FKFarmacia = 2
	WHERE idFarmaceutico = 3;
UPDATE tbFarmaceutico SET FKFarmacia = 2
	WHERE idFarmaceutico = 4;
    
-- DADOS
SELECT * FROM tbFarmacia
	JOIN tbEndereco ON tbEndereco.FKFarmacia = tbFarmacia.idFarmacia
		JOIN tbFarmaceutico ON tbFarmaceutico.FKFarmacia = tbFarmacia.idFarmacia;

-- Exibir dados com AS;
SELECT nomeFarmacia AS 'Nome da Farmacia', localEndereco AS 'Endereço', nomeFarmaceutico AS 'Nome do Farmaceutico' FROM tbFarmacia
	JOIN tbEndereco ON tbEndereco.FKFarmacia = tbFarmacia.idFarmacia
		JOIN tbFarmaceutico ON tbFarmaceutico.FKFarmacia = tbFarmacia.idFarmacia;
        
-- Exibir dados com CASE;
SELECT idFarmaceutico,
    CASE 
        WHEN nomeFarmaceutico IS NULL THEN 'Sem farmaceútico'
        ELSE nomeFarmaceutico
    END AS 'Nome Tratado'
FROM tbFarmaceutico;

-- - Exibir dados com IFNULL;
SELECT  IFNULL(nomeFarmaceutico,'Sem farmaceútico') AS 'Nome Farmaceútico' FROM tbFarmaceutico;

