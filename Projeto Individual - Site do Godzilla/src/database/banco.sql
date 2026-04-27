CREATE DATABASE bdGodzilla;

USE bdGodzilla;

CREATE TABLE tbUsuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50),
    emailUsuario VARCHAR(50),
    senhaUsuario VARCHAR(50),
    tipoUsuario CHAR(1) DEFAULT "P"
);

CREATE TABLE tbQuiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    quantiaAcertos INT,
    questoesAcertadas VARCHAR(40),
);

CREATE TABLE tbQuizUsuario (
    idQuizUsuario INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT fkUsu FOREIGN KEY (fkUsuario)
        REFERENCES tbUsuario(idUsuario)
    fkQuiz INT,
    CONSTRAINT fkQiz FOREIGN KEY (fkQuiz)
        REFERENCES tbQuiz(idQuiz)
);

INSERT INTO tbUsuario VALUES
	(default, 'admin', 'admin@gmail.com','admin@1234!', 'A');
    
SELECT * FROM tbUsuario;