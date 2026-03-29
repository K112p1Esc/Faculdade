USE sprint2;
-- 1 funcionário tem no mínimo um supervisor, que também é funcionário e no máximo 1 supervisor;
-- 1 supervisor supervisiona no mínimo 1 funcionário e no máximo muitos;
-- 1 funcionário trabalha em somente uma área da empresa, exemplo: marketing, financeiro, TI;
-- 1 área tem muitos funcionários;

CREATE TABLE tbArea (
	idArea INT PRIMARY KEY AUTO_INCREMENT,
    nomeArea VARCHAR(45)
);

CREATE TABLE funcionario (
	idFuncionario INT PRIMARY KEY AUTO_INCREMENT,
    nomeFuncionario VARCHAR(45),
    cargoFuncionario VARCHAR(45),
    CONSTRAINT fkcargoFuncionario CHECK(cargoFuncionario IN('Funcionario','Supervisor')),
    fkCargo INT,
    fkArea INT,
	CONSTRAINT fkCargo FOREIGN KEY (fkCargo)
		REFERENCES funcionario(idFuncionario),
	CONSTRAINT fkArea FOREIGN KEY (fkArea)
		REFERENCES tbArea(idArea)
);

-- Inserir dados;
INSERT INTO tbArea VALUES
	(default,'marketing'),
    (default,'TI'),
    (default,'Telemarketing');
    
INSERT INTO funcionario VALUES 
	(default, 'Matheus','Supervisor',NULL,2),
    (default, 'Anthony','Supervisor',NULL,1),
    (default, 'Tawan','Funcionario',1,2),
    (default, 'Gustavo','Funcionario',2,2),
    (default, 'Hiago','Supervisor',1,1);
    
-- SELECT com JOIN
SELECT f.nomeFuncionario AS 'Nome do Funcionário', s.nomeFuncionario AS 'Nome do Supervisor', nomeArea FROM funcionario AS f
	    JOIN funcionario as s
			ON f.fkCargo = s.idFuncionario
		JOIN tbArea
			ON f.fkArea = idArea;
            
-- SELECT com JOIN e WHERE
SELECT f.nomeFuncionario AS 'Nome do Funcionário', s.nomeFuncionario AS 'Nome do Supervisor', nomeArea FROM funcionario AS f
	    JOIN funcionario as s
			ON f.fkCargo = s.idFuncionario
		JOIN tbArea
			ON f.fkArea = idArea
		WHERE s.nomeFuncionario = 'Matheus';

-- SELECT com JOIN e CASE
SELECT f.nomeFuncionario AS 'Nome do Funcionário', s.nomeFuncionario AS 'Nome do Supervisor', 
	CASE
    WHEN nomeArea = 'marketing' THEN 'Vai ser demitido'
    WHEN nomeArea = 'TI' THEN 'Continua contratado'
    ELSE 'Demitido'
    END AS 'Demissões' 
FROM funcionario AS f
	JOIN funcionario as s
		ON f.fkCargo = s.idFuncionario
	JOIN tbArea
		ON f.fkArea = idArea;


/*
1 usuário gerencia no mínimo 0 usuários e no máximo muitos usuários;
1 usuário é gerenciado por somente 1 usuário gerente;
1 usuário tem no mínimo 1 email e no máximo n emails;
1 email é somente de um usuário;
*/

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nomeUsuario VARCHAR(45),
    fkGerente INT,
    CONSTRAINT fkGerenteUsu FOREIGN KEY (fkGerente) 
		REFERENCES usuario(idUsuario)
);
CREATE TABLE email (
    idEmail INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    fkUsuario INT NOT NULL,
    CONSTRAINT fkUsuario FOREIGN KEY (fkUsuario) 
		REFERENCES usuario(idUsuario)
);

-- Inserir dados;
INSERT INTO usuario VALUES
    (default, 'Matheus', NULL),
    (default, 'Anthony', NULL),
    (default, 'Tawan', 1),
    (default, 'Gustavo', 2),
    (default, 'Hiago', 1);

INSERT INTO email VALUES
    (default, 'matheus@email.com', 1),
    (default, 'anthony@email.com', 2),
    (default, 'tawan@email.com', 3),
    (default, 'gustavo@email.com', 4),
    (default, 'hiago@email.com', 5);
-- SELECT com JOIN
SELECT u.nomeUsuario AS 'Usuário', g.nomeUsuario AS 'Gerente', e.email AS 'Email' FROM usuario AS u
    JOIN usuario AS g
        ON u.fkGerente = g.idUsuario
    JOIN email AS e
        ON u.idUsuario = e.fkUsuario;
-- SELECT com JOIN e WHERE
SELECT u.nomeUsuario AS 'Usuário', g.nomeUsuario AS 'Gerente', e.email AS 'Email' FROM usuario AS u
    JOIN usuario AS g
        ON u.fkGerente = g.idUsuario
    JOIN email AS e
        ON u.idUsuario = e.fkUsuario
	WHERE g.nomeUsuario = 'Matheus';
-- SELECT com JOIN e CASE
SELECT u.nomeUsuario AS 'Usuário', g.nomeUsuario AS 'Gerente', e.email AS 'Email',
    CASE
        WHEN g.nomeUsuario = 'Matheus' THEN 'Gerente Forte'
        WHEN g.nomeUsuario = 'Anthony' THEN 'Gerente Médio'
        ELSE 'Gerente Fraco'
    END AS 'Classificação'
FROM usuario AS u
    JOIN usuario AS g
        ON u.fkGerente = g.idUsuario
    JOIN email AS e
        ON u.idUsuario = e.fkUsuario;