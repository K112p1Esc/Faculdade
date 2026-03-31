-- 1. Realizar a modelagem lógica, comandos create table, insert into e join. 
-- 1 Pet tem no mínimo um dono e no máximo 1 dono e 1 dono é dono de pelo menos 1 Pet ou muitos Pets.
-- 1 Pet tem 1 mãe Pet e 1 mãe Pet é mãe de no mínimo 0 e no máximo n pets.
CREATE DATABASE pet;
USE pet;

CREATE TABLE mae (
	idMae INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
	idade INT
);

CREATE TABLE pet (
	idPet INT, -- Entidade fraca
	nomePet VARCHAR(45),
    fkMae INT,
    CONSTRAINT pkComposta PRIMARY KEY (idPet, fkMae),
    CONSTRAINT FKMae FOREIGN KEY (fkMae)
		REFERENCES mae(idMae)
);

INSERT INTO mae VALUES
	(default, 'Rita',52),
    (default, 'Dirce',82);

INSERT INTO pet VALUES
	(1, 'Budweiser',1),
    (2,'Bane',1),
    (3,'Belinha',2);
    
SELECT mae.nome AS 'Mae', nomePet AS 'Pet'FROM mae
	JOIN pet 
		ON fkMae = idMae;