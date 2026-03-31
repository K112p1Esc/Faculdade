-- 1 pessoa tem uma sombra (que é ela mesma) e a sombra é apenas de uma pessoa;
-- 1 pessoa tem 1 endereço e 1 endereço é apenas de uma pessoa

CREATE DATABASE sombra;
USE sombra;

CREATE TABLE pessoa (
	idPessoa INT PRIMARY KEY AUTO_INCREMENT,
    nomePessoa VARCHAR(45)
);

CREATE TABLE endereco (
	idEndereco INT,
    localEndereco VARCHAR(45), 
    fkPessoa INT,
    CONSTRAINT pkComposta1 PRIMARY KEY(idEndereco,fkPessoa),
    CONSTRAINT fkEndePe FOREIGN KEY (fkPessoa)
		REFERENCES pessoa(idPessoa)
);

CREATE TABLE sombra (
	idSombra INT,
	fkPessoa INT,
    CONSTRAINT pkComposta2 PRIMARY KEY(idSombra,fkPessoa),
    CONSTRAINT fkSomPe FOREIGN KEY (fkPessoa)
		REFERENCES pessoa(idPessoa)
);

INSERT INTO pessoa VALUES 
	(default,'João'),
	(default,'Maria');
INSERT INTO endereco VALUES 
	(1, 'Rua A', 1),
	(2, 'Rua B', 2);
INSERT INTO sombra VALUES 
	(1, 1),
	(2, 2);
    
SELECT nomePessoa, localEndereco,
	CASE
		WHEN idSombra IS NOT NULL THEN 'Tem Sombra'
        ELSE 'Não tem Sombra'
	END AS 'Sombra' FROM pessoa
    JOIN endereco
		ON endereco.fkPessoa = idPessoa
	JOIN sombra
		ON sombra.fkPessoa = idPessoa;