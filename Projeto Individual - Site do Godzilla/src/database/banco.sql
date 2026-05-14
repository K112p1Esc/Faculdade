CREATE DATABASE bdGodzilla;

USE bdGodzilla;

CREATE TABLE tbUsuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(50),
    emailUsuario VARCHAR(50),
    senhaUsuario VARCHAR(50),
    tipoUsuario CHAR(1) DEFAULT "P",
    dataCadUsuario DATETIME DEFAULT NOW()
);

CREATE TABLE tbTentativa (
    idTentativa INT PRIMARY KEY AUTO_INCREMENT,
    quantiaAcertos INT,
    questoesAcertadas VARCHAR(40),
    fkUsuario INT,
    CONSTRAINT fkTentativaUsu FOREIGN KEY (fkUsuario) 
        REFERENCES tbUsuario(idUsuario)
);

CREATE TABLE tbPerfil (
    idPerfil INT PRIMARY KEY AUTO_INCREMENT,
    telefone VARCHAR(20),
    bio VARCHAR(200),
    fkUsuario INT UNIQUE,
    CONSTRAINT perfilUsu FOREIGN KEY (fkUsuario)
        REFERENCES tbUsuario(idUsuario)
);

INSERT INTO tbUsuario VALUES
    (default, 'Admin', 'admin@gmail.com', 'admin@1234!', 'A', NOW() - INTERVAL 7 DAY);

INSERT INTO tbUsuario VALUES 
    (default, 'Akira',  'akira@email.com',  'akira123',  default, NOW() - INTERVAL 6 DAY),
    (default, 'Renato', 'renato@email.com', 'renato123', default, NOW() - INTERVAL 5 DAY),
    (default, 'Moth',   'moth@email.com',   'moth123',   default, NOW() - INTERVAL 4 DAY);
INSERT INTO tbUsuario VALUES 
    (default, 'Kazuo',   'kazuo@email.com',   'kazuo123',   default, NOW() - INTERVAL 4 DAY),
    (default, 'Bianca',  'bianca@email.com',  'bianca123',  default, NOW() - INTERVAL 3 DAY),
    (default, 'Larissa', 'larissa@email.com', 'larissa123', default, NOW() - INTERVAL 3 DAY),
    (default, 'Tiago',   'tiago@email.com',   'tiago123',   default, NOW() - INTERVAL 2 DAY),
    (default, 'Fernanda','fernanda@email.com','fernanda123',default, NOW() - INTERVAL 2 DAY),
    (default, 'Bruno',   'bruno@email.com',   'bruno123',   default, NOW() - INTERVAL 1 DAY),
    (default, 'Camila',  'camila@email.com',  'camila123',  default, NOW());

-- Usuário 2 (Akira)
INSERT INTO tbTentativa VALUES
    (default, 8, '1,2,3,4,5,6,8,9', 2),
    (default, 7, '2,3,4,5,6,7,8', 2);

-- Usuário 3 (Renato)
INSERT INTO tbTentativa VALUES
    (default, 9, '1,2,3,4,5,6,7,8,9', 3),
    (default, 6, '2,4,5,6,7,8', 3);

-- Usuário 4 (Moth)
INSERT INTO tbTentativa VALUES
    (default, 5, '1,2,4,5,7', 4);

-- Usuário 5 (Kazuo)
INSERT INTO tbTentativa VALUES
    (default, 7, '2,3,4,5,6,8,9', 5),
    (default, 5, '2,4,5,7,8', 5),
    (default, 5, '2,4,5,7,10', 5);

-- Usuário 6 (Bianca)
INSERT INTO tbTentativa VALUES
    (default, 10, '1,2,3,4,5,6,7,8,9,10', 6),
    (default, 4,  '1,3,5,7', 6);

-- Usuário 7 (Larissa)
INSERT INTO tbTentativa VALUES
    (default, 6, '1,2,5,6,8,9', 7);

-- Usuário 8 (Tiago)
INSERT INTO tbTentativa VALUES
    (default, 3, '2,5,9', 8),
    (default, 8, '1,2,3,5,6,7,8,10', 8);

-- Usuário 9 (Fernanda)
INSERT INTO tbTentativa VALUES
    (default, 7, '2,3,4,5,6,8,10', 9),
    (default, 6, '3,4,5,6,7,10',   9);

-- Usuário 10 (Bruno)
INSERT INTO tbTentativa VALUES
    (default, 7, '2,3,4,5,6,8,10', 10);

-- Usuário 11 (Camilla)
INSERT INTO tbTentativa VALUES
    (default, 8, '1,2,3,4,5,6,8,9', 11),
    (default, 7, '2,3,4,5,6,7,8', 11);

SELECT * FROM tbUsuario;
SELECT * FROM tbTentativa;