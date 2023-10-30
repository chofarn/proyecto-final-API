-- Crear una tabla llamada "Empleados"
CREATE TABLE Empleados (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50),
    Apellidos VARCHAR(50),
    Telefono VARCHAR(15),
    CorreoElectronico VARCHAR(100),
    Direccion VARCHAR(100)
);

-- Insertar 20 registros aleatorios en la tabla Empleados
INSERT INTO Empleados (Nombre, Apellidos, Telefono, CorreoElectronico, Direccion)
VALUES
('Patricia', 'Gómez', '555-123-4567', 'patricia.gomez@email.com', 'Calle 123, Ciudad A'),
('Javier', 'López', '555-234-5678', 'javier.lopez@email.com', 'Avenida 234, Ciudad B'),
('Isabel', 'Hernández', '555-345-6789', 'isabel.hernandez@email.com', 'Calle 345, Ciudad C'),
('Diego', 'Martínez', '555-456-7890', 'diego.martinez@email.com', 'Avenida 456, Ciudad D'),
('Valeria', 'Rodríguez', '555-567-8901', 'valeria.rodriguez@email.com', 'Calle 567, Ciudad E'),
('Ricardo', 'Pérez', '555-678-9012', 'ricardo.perez@email.com', 'Avenida 678, Ciudad F'),
('Sofía', 'Torres', '555-789-0123', 'sofia.torres@email.com', 'Calle 789, Ciudad G'),
('Eduardo', 'Ramírez', '555-890-1234', 'eduardo.ramirez@email.com', 'Avenida 890, Ciudad H'),
('Marta', 'Vargas', '555-901-2345', 'marta.vargas@email.com', 'Calle 901, Ciudad I'),
('Alejandro', 'Silva', '555-012-3456', 'alejandro.silva@email.com', 'Avenida 012, Ciudad J'),
('Carla', 'Díaz', '555-123-4567', 'carla.diaz@email.com', 'Calle 123, Ciudad K'),
('Pablo', 'Luna', '555-234-5678', 'pablo.luna@email.com', 'Avenida 234, Ciudad L'),
('Camila', 'García', '555-345-6789', 'camila.garcia@email.com', 'Calle 345, Ciudad M'),
('Luis', 'Flores', '555-456-7890', 'luis.flores@email.com', 'Avenida 456, Ciudad N'),
('Ana', 'Herrera', '555-567-8901', 'ana.herrera@email.com', 'Calle 567, Ciudad O'),
('Juan', 'Martínez', '555-678-9012', 'juan.martinez@email.com', 'Avenida 678, Ciudad P'),
('Gabriela', 'Ortega', '555-789-0123', 'gabriela.ortega@email.com', 'Calle 789, Ciudad Q'),
('Fernando', 'Gómez', '555-890-1234', 'fernando.gomez@email.com', 'Avenida 890, Ciudad R'),
('Lucía', 'Ramírez', '555-901-2345', 'lucia.ramirez@email.com', 'Calle 901, Ciudad S'),
('Manuel', 'Soto', '555-012-3456', 'manuel.soto@email.com', 'Avenida 012, Ciudad T');