CREATE DATABASE bdGodzilla

USE bdGodzilla

CREATE TABLE tbUsuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50),
    emailUsuario VARCHAR(50),
    senhaUsuario VARCHAR(50)
);

CREATE TABLE tbQuiz (
    idQuiz INT PRIMARY KEY AUTO_INCREMENT,
    quantiaAcertos INT,
    questoesAcertadas VARCHAR(40),
    fkUsuario INT,
    CONSTRAINT fkQuizUsu FOREIGN KEY (fkUsuario)
        REFERENCES tbUsuario(idUsuario)
);