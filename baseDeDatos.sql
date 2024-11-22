CREATE SCHEMA maquina_retro;

use maquina_retro;

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


-- FALTA CREAR LA TABLA DE PRODUCTS Y LE AGREGAN LOS VALORES EN database/models CREARLE 5 VALORES POR DEFAULT (ES CONSIGNA DEL TP QUE YA TENGA 5 VALORES)
