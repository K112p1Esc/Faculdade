CREATE DATABASE AlunoProjeto;
USE AlunoProjeto;
-- DROP DATABASE AlunoProjeto;
-- Cada aluno participa apenas de um projeto.
-- Cada projeto pode ter a participação de um ou mais alunos.
-- Há alguns alunos que atuam como representantes de outros alunos. Qualquer problema ou queixa que os alunos tiverem, devem falar 
-- com o aluno que os representa. O aluno representante, por sua vez, reporta os problemas/queixas à equipe de socioemocional.
-- Cada aluno é representado apenas por um aluno.
-- Sobre os alunos, o sistema guarda o ra (chave primária), nome, telefone.
-- Sobre os projetos, o sistema guarda um identificador (chave primária), nome e a descrição do projeto.

CREATE TABLE aluno (
	ra CHAR(8) PRIMARY KEY,
    nome VARCHAR(45),
    tel CHAR(13),
    fkRepresentante CHAR(8),
    CONSTRAINT fkAlunRep FOREIGN KEY (fkRepresentante)
		REFERENCES aluno(ra),
	fkProjeto INT,
    CONSTRAINT fkAlunProj FOREIGN KEY (fkProjeto) 
		REFERENCES projeto(identificador)
);

CREATE TABLE projeto (
	identificador INT PRIMARY KEY,
	nome VARCHAR(45),
    descricao VARCHAR(100)
);

INSERT INTO aluno VALUES
	(01261001, 'Matheus','11 94755 0402', NULL,1),
    (01261002, 'Tawan','11 94756 0403', NULL,1);
INSERT INTO aluno VALUES 
    (01261003, 'Anthony','11 94757 0404', 01261001,2),
    (01261004, 'Andressa','11 94758 0405', 01261001,2),
    (01261005, 'Pietro','11 94759 0406', 01261002,3);
    
INSERT INTO projeto VALUES
	(1, 'Site', 'Site institucional lindo'),
    (2,'Cadeiras','Arrumar cadeiras'),
    (3,'Cozinha', 'Fazer uma cozinha');
    
SELECT * FROM aluno;
SELECT * FROM projeto;

SELECT aluno.nome, projeto.nome FROM aluno
	JOIN projeto
		ON identificador = fkProjeto;
        
SELECT aluno.nome, repre.nome FROM aluno AS aluno
	JOIN aluno AS repre
		ON aluno.fkRepresentante = repre.ra;
        
SELECT aluno.nome, projeto.nome FROM aluno
	JOIN projeto
		ON identificador = fkProjeto
			WHERE projeto.nome = 'Cadeiras';

