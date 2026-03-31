-- 1 Funcionário tem um supervisor que também é funcionário e 1 supervisor é pode ser de muitos funcionários.
-- 1 Empresa tem muitos funcionários e 1 funcionário é apenas de uma empresa
CREATE DATABASE empresa;
USE empresa;

CREATE TABLE empresa (
	idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    endereco VARCHAR(60)
);

CREATE TABLE funcionario (
	idFuncionario INT,
    nome VARCHAR(45),
    fkSupervisor INT,
	CONSTRAINT fkFuncSup FOREIGN KEY (fkSupervisor)
		REFERENCES funcionario(idFuncionario),
	fkEmpresa INT,
    CONSTRAINT pkComposta PRIMARY KEY (idFuncionario, fkEmpresa),
    CONSTRAINT fkFuncEmpresa FOREIGN KEY (fkEmpresa)
		REFERENCES empresa(idEmpresa)
);

INSERT INTO empresa VALUES
	(default,'Stefanini', 'Av Não Sei das Quantas'),
    (default,'Safra', 'Av Não Sei das Quantas');

INSERT INTO funcionario VALUES
	(1,'Gustavo',NULL,1),
    (2,'Leandro',1,1),
    (3,'Antonio',1,1),
    (4,'Figueiras',NULL,2);

SELECT funcionario.nome AS 'Funcionario', supervisor.nome AS 'Supervisor', empresa.nome AS 'Empresa' FROM empresa
	JOIN funcionario AS funcionario
		ON funcionario.fkEmpresa = idEmpresa
	JOIN funcionario AS supervisor
		ON funcionario.fkSupervisor = supervisor.idFuncionario;