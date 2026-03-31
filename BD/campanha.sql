/*Cada organizador organiza mais de uma campanha de doação.
 Cada campanha de doação é organizada por apenas um organizador.
 Sobre cada organizador, o sistema guarda um identificador, que identifica de forma única cada organizador. Esse identificador começa com o valor 30
 e é inserido de forma automática. Além desse identificador, o sistema guarda o nome, o endereço (composto pelo nome da rua e bairro) e o e-mail do organizador.
 
 Sobre cada campanha de doação, o sistema guarda um identificador, que identifica de forma única cada campanha. Esse identificador começa com o 
valor 500 e é inserido de forma automática. O sistema também guarda a categoria da doação (ex: alimento ou produto de higiene, ou máscaras de proteção, etc), a 
instituição para a qual será feita a doação (pode haver até 2 instituições) e a data final da campanha.

 Um organizador mais experiente orienta outros organizadores novatos. Cada organizador novato é orientado apenas por um organizador mais experiente. */
 
CREATE DATABASE campanha;
USE campanha;
-- DROP DATABASE campanha;
 
 CREATE TABLE organizador (
	idOrganizador INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    endereco VARCHAR(60),
    email VARCHAR(50),
    fkExperiente INT,
    CONSTRAINT fkExpeOrga FOREIGN KEY (fkExperiente) 
		REFERENCES organizador(idOrganizador)
 ); ALTER TABLE organizador AUTO_INCREMENT = 30;
 
 CREATE TABLE campanha (
	idCampanha INT PRIMARY KEY AUTO_INCREMENT,
	catDoacao VARCHAR(45),
    instituicao VARCHAR(45),
    instituicao2 VARCHAR(45),
    dataFinal DATE,
    fkOrganizador INT,
    CONSTRAINT fkOrgCamp FOREIGN KEY (fkOrganizador)
		REFERENCES organizador(idOrganizador)
 ); ALTER TABLE campanha AUTO_INCREMENT = 500;
 
INSERT INTO organizador VALUES
	(default, 'Matheus','Guaianazes', 'matheus@gmail.com',NULL),
	(default, 'Tawan','Santos', 'tawan@gmail.com',NULL),
    (default, 'Pietro','Higienopolis', 'pietro@gmail.com',30),
    (default, 'Andressa','São Mateus', 'andressa@gmail.com',30),
    (default, 'Elisandro','Vila Gustavo', 'elisandro@gmail.com',31);
    
INSERT INTO campanha VALUES
	(default, 'alimentos','Criança Esperança','Teleton','2026-12-31',30),
    (default, 'produtos de higiene','Cruz Vermelha',NULL,'2026-11-20',31),
    (default, 'máscaras','Hospital das Clínicas','Santa Casa','2026-10-15',32),
    (default, 'roupas','Exército da Salvação',NULL,'2026-09-30',33),
    (default, 'brinquedos','GRAACC','UNICEF','2026-12-10',34),
    (default, 'alimentos','Banco de Alimentos',NULL,'2026-08-25',30),
    (default, 'material escolar','Fundação Abrinq',NULL,'2026-07-15',31);
    
SELECT * FROM organizador;
SELECT * FROM campanha;

SELECT nome, catDoacao FROM organizador
	JOIN campanha 
		ON fkOrganizador = idOrganizador;
        
SELECT nome, catDoacao FROM organizador
	JOIN campanha 
		ON fkOrganizador = idOrganizador
			WHERE nome = 'Matheus';
            
SELECT novato.nome AS Novato, veterano.nome AS Veterano FROM organizador AS novato
	JOIN organizador AS veterano
		ON novato.fkExperiente = veterano.idOrganizador;
        
SELECT novato.nome AS Novato, veterano.nome AS Veterano,
    campanha.catDoacao AS 'Categoria da Doação', 
    campanha.dataFinal AS 'Data Final para Doação' FROM organizador AS novato
JOIN organizador AS veterano
    ON novato.fkExperiente = veterano.idOrganizador
JOIN campanha
    ON campanha.fkOrganizador = veterano.idOrganizador;
    
SELECT novato.nome AS Novato, veterano.nome AS Veterano,
    campanha.catDoacao AS 'Categoria da Doação', 
    campanha.dataFinal AS 'Data Final para Doação' FROM organizador AS novato
JOIN organizador AS veterano
    ON novato.fkExperiente = veterano.idOrganizador
JOIN campanha
    ON campanha.fkOrganizador = veterano.idOrganizador
		WHERE novato.nome = 'Andressa';
