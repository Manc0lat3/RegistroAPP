-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2024 a las 00:41:48
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `aula_manager`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservas`
--

CREATE TABLE `reservas` (
  `id` int(11) NOT NULL,
  `idusuario` int(11) NOT NULL,
  `sala` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `horaini` time NOT NULL,
  `horafin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `reservas`
--

INSERT INTO `reservas` (`id`, `idusuario`, `sala`, `fecha`, `horaini`, `horafin`) VALUES
(5, 1, 'Auditorio', '2024-11-15', '10:00:00', '12:00:00'),
(6, 2, 'Sala 1', '2024-11-16', '14:00:00', '16:00:00'),
(7, 3, 'Taller 2', '2024-11-18', '13:00:00', '14:30:00'),
(8, 4, 'Musica', '2034-11-18', '15:00:00', '16:30:00'),
(9, 1, 'Salón Normal 1', '2024-11-21', '18:50:00', '19:50:00'),
(10, 1, 'Salón Taller 1', '2024-11-16', '20:00:00', '21:00:00'),
(11, 17, 'Salón Normal 5', '2024-11-26', '17:00:00', '17:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rol` varchar(20) DEFAULT 'alumno'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `rol`) VALUES
(1, 'Alex Puebla', 'alexpuebla@xmen.com', 'alex123', 'alumno'),
(2, 'Jose Valdivia', 'josevaldivia@xmen.com', 'jose123', 'alumno'),
(3, 'Janeth Gonzalez', 'janethgonzalez@xmen.com', 'janeth123', 'alumno'),
(4, 'Paz Valdivia', 'pazvaldivia@xmen.com', 'paz123', 'alumno'),
(16, 'Claudia Ramirez', 'claudiaramirez@xmen.com', 'claudia123', 'alumno'),
(17, 'Pepe Soto', 'pepesoto@xmen.com', 'pepe123', 'alumno');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idusuario` (`idusuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reservas`
--
ALTER TABLE `reservas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `reservas`
--
ALTER TABLE `reservas`
  ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
