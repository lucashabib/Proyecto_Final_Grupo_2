CREATE SCHEMA maquina_retro;

use maquina_retro;

-- TABLA USERS

create table users (
	id 				INT		UNSIGNED		PRIMARY KEY		AUTO_INCREMENT,
    nombre			VARCHAR(100)	NOT NULL,
    email			VARCHAR(100)	NOT NULL,
    contrasena		VARCHAR(300)	NOT NULL,
    
    -- COLUMNAS DE AUDITORIA
    createdAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    updatedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    deletedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP
);

INSERT INTO users (nombre, email, contrasena) VALUES 
('Pedro', 'pedro@gmail.com', 'hashed1_ejemplo'),
('Lucas', 'lucas@gmail.com', 'hashed2_ejemplo'),
('Gero', 'gero@gmail.com', 'hashed3_ejemplo'),
('Juan', 'juan@gmail.com', 'hashed4_ejemplo'),
('Carlos', 'carlos@gmail.com', 'hashed5_ejemplo');

-- TABLA PRODUCTS

CREATE TABLE products (
	id		 				INT		UNSIGNED		PRIMARY KEY		AUTO_INCREMENT,
    nombre			VARCHAR(100)	NOT NULL,
    precio			VARCHAR(100)	NOT NULL,
    descripcion		VARCHAR(300)	NOT NULL,
    imagen			VARCHAR(500)	NOT NULL,
    userId                  INT     UNSIGNED    NOT NULL,
    
    FOREIGN KEY (userId) REFERENCES users(id),
    
    -- COLUMNAS DE AUDITORIA
    createdAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    updatedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    deletedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP
);

INSERT INTO products (nombre, precio, descripcion, imagen, userId) VALUES
('River Plate Local 1996', '$60.000', 'Remera Local del Club Atletico River Plate del año 1996', 'river96.jpg', 2),
('Boca Juniors Local 2000', '$60.000', 'Remera Local del Club Atletico Boca Juniors del año 2000', 'boca00.jpg', 1),
('Barcelona Visitante 2011', '$55.000', 'Remera Visitante del Fútbol Club Barcelona del año 2011', 'barca11.jpg', 3),
('Bayern Munich Alternativa 1998', '$70.000', 'Remera Alternativa del Fußball-Club Bayern München del año 1998', 'bayern98.jpg', 2),
('Real Madrid Local 2005', '$65.000', 'Remera Local del Real Madrid Club de Fútbol del año 2005', 'madrid05.jpg', 5),
('Argentina Visitante 1994', '$75.000', 'Remera Visitante de la Seleccion Argentina de Fútbol del año 1994', 'argentina94.jpg', 4),
('Brasil Local 2002', '$70.000', 'Remera Local de la Seleccion de Fútbol de Brasil del año 2002', 'brasil02.jpg', 3),
('Chelsea Local 2007', '$60.000', 'Remera Local del Chelsea Football Club del año 2007', 'chelsea07.jpg', 2),
('Manchester United Visitante 1990', '$70.000', 'Remera Visitante del Manchester United Football Club del año 1990', 'manunited90.jpg', 1);