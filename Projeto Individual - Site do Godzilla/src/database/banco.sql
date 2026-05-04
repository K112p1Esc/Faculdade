CREATE DATABASE bdGodzilla;

USE bdGodzilla;

CREATE TABLE tbUsuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50),
    emailUsuario VARCHAR(50),
    senhaUsuario VARCHAR(50),
    tipoUsuario CHAR(1) DEFAULT "P"
);

CREATE TABLE tbTentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    quantiaAcertos INT,
    questoesAcertadas VARCHAR(40),
    fkUsuario INT,
    CONSTRAINT fkTentativaUsu FOREIGN KEY (fkUsuario) 
        REFERENCES tbUsuario(idUsuario)
);
-- Será adicionado no futuro no site!
CREATE TABLE tbPerfil (
    idPerfil INT PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20),
    bio VARCHAR(200),
    fkUsuario INT UNIQUE,
    CONSTRAINT perfilUsu FOREIGN KEY (fkUsuario)
        REFERENCES tbUsuario(idUsuario)
);


INSERT INTO tbUsuario VALUES
	(default, 'admin', 'admin@gmail.com','admin@1234!', 'A');
    
SELECT * FROM tbUsuario;