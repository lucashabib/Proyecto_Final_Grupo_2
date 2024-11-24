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
	productId 				INT		UNSIGNED		PRIMARY KEY		AUTO_INCREMENT,
    productNombre			VARCHAR(100)	NOT NULL,
    productPrecio			VARCHAR(100)	NOT NULL,
    productDescripcion		VARCHAR(300)	NOT NULL,
    userId                  INT     UNSIGNED    NOT NULL,
    
    FOREIGN KEY (userId) REFERENCES users(id),
    
    -- COLUMNAS DE AUDITORIA
    createdAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    updatedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP,
    deletedAt	TIMESTAMP	DEFAULT	CURRENT_TIMESTAMP
);

INSERT INTO products (productNombre, productPrecio, productDescripcion, userId) VALUES
('River Plate Local 1986', '$60.000', 'Remera Local del Club Atletico River Plate del año 1986', 2),
('Boca Juniors Local 2003', '$60.000', 'Remera Local del Club Atletico Boca Juniors del año 2003', 1),
('Barcelona Visitante 2011', '$55.000', 'Remera Visitante del Fútbol Club Barcelona del año 2011', 3),
('Bayern Munich Alternativa 1998', '$70.000', 'Remera Alternativa del Fußball-Club Bayern München del año 1998', 2),
('Real Madrid Local 2000', '$65.000', 'Remera Local del Real Madrid Club de Fútbol del año 2000', 5);