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

-- FALTA CREAR LA TABLA DE PRODUCTS Y LE AGREGAN LOS VALORES EN database/models
