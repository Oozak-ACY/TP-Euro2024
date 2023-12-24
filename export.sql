-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Listage de la structure de la base pour eurofoot2024
CREATE DATABASE IF NOT EXISTS `eurofoot2024` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `eurofoot2024`;

-- Listage de la structure de table eurofoot2024. equipes
CREATE TABLE IF NOT EXISTS `equipes` (
  `name` varchar(255) DEFAULT NULL,
  `primary_color` varchar(255) DEFAULT NULL,
  `secondary_color` varchar(255) DEFAULT NULL,
  `fifa_ranking` int DEFAULT NULL,
  `code` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `hat` int DEFAULT NULL,
  `playoff` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table eurofoot2024.equipes : ~33 rows (environ)
INSERT INTO `equipes` (`name`, `primary_color`, `secondary_color`, `fifa_ranking`, `code`, `hat`, `playoff`) VALUES
	('Albania', '#E35169', '#18222F', 59, 'al', 2, NULL),
	('Austria', '#FFFFFF', '#18222F', 25, 'at', 2, NULL),
	('Bosnia Herzegovina', '#FFC23B', '#3399FF', 63, 'ba', 4, 'B'),
	('Belgium', '#E35169', '#18222F', 5, 'be', 1, NULL),
	('Switzerland', '#E35169', '#FFFFFF', 14, 'ch', 4, NULL),
	('Czech', '#E35169', '#0051FF', 41, 'cz', 3, NULL),
	('Germany', '#FFFFFF', '#18222F', 16, 'de', 1, NULL),
	('Denmark', '#E35169', '#FFFFFF', 19, 'dk', 2, NULL),
	('Estonia', '#FFFFFF', '#3399FF', 118, 'ee', 4, 'A'),
	('Spain', '#E35169', '#FFC23B', 8, 'es', 1, NULL),
	('Finland', '#FFFFFF', '#3399FF', 62, 'fi', 4, 'A'),
	('France', '#0000BA', '#E35169', 2, 'fr', 1, NULL),
	('England', '#FFFFFF', '#E35169', 4, 'gb-eng', 1, NULL),
	('Scotland', '#000080', '#FFFFFF', 34, 'gb-sct', 3, NULL),
	('Wales', '#FFFFFF', '#09BB75', 28, 'gb-wls', 4, 'A'),
	('Georgia', '#FFFFFF', '#E35169', 76, 'ge', 4, 'C'),
	('Greece', '#3399FF', '#FFFFFF', 51, 'gr', 4, 'C'),
	('Croatia', '#FFFFFF', '#E35169', 10, 'hr', 3, NULL),
	('Hungary', '#E35169', '#2ECDA7', 30, 'hu', 2, NULL),
	('Israël', '#FFFFFF', '#3399FF', 71, 'il', 4, 'B'),
	('Island', '#272CFF', '#E35169', 67, 'is', 4, 'B'),
	('Italy', '#3399FF', '#FFFFFF', 9, 'it', 4, NULL),
	('Kazakhstan', '#FFC23B', '#3399FF', 98, 'kz', 4, 'C'),
	('Luxembourg', '#E35169', '#3399FF', 87, 'lu', 4, 'C'),
	('Netherlands', '#FFA439', '#FFFFFF', 7, 'nl', 3, NULL),
	('Poland', '#FFFFFF', '#E35169', 31, 'pl', 4, 'A'),
	('Portugal', '#E35169', '#2ECDA7', 6, 'pt', 1, NULL),
	('Romania', '#FFC23B', '#005FFF', 48, 'ro', 2, NULL),
	('Serbia', '#E35169', '#0026FF', 29, 'rs', 4, NULL),
	('Slovenia', '#FFFFFF', '#E35169', 54, 'si', 3, NULL),
	('Slovakia', '#FFFFFF', '#E35169', 50, 'sk', 3, NULL),
	('Turkey', '#E35169', '#FFFFFF', 38, 'tr', 2, NULL),
	('Ukraine', '#FFC23B', '#3399FF', 22, 'ua', 4, 'B');

-- Listage de la structure de table eurofoot2024. matchresults
CREATE TABLE IF NOT EXISTS `matchresults` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code_equipe1` varchar(255) NOT NULL,
  `code_equipe2` varchar(255) NOT NULL,
  `score_equipe1` int NOT NULL,
  `score_equipe2` int NOT NULL,
  `phase` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb3;

-- Listage des données de la table eurofoot2024.matchresults : ~37 rows (environ)
INSERT INTO `matchresults` (`id`, `code_equipe1`, `code_equipe2`, `score_equipe1`, `score_equipe2`, `phase`) VALUES
	(66, 'sk', 'ge', 1, 2, 'pool'),
	(67, 'gb-eng', 'hu', 2, 1, 'groupeA'),
	(68, 'gb-eng', 'gb-sct', 1, 0, 'groupeA'),
	(69, 'gb-eng', 'ba', 3, 0, 'groupeA'),
	(70, 'hu', 'gb-sct', 2, 2, 'groupeA'),
	(71, 'hu', 'ba', 1, 0, 'groupeA'),
	(72, 'gb-sct', 'ba', 0, 1, 'groupeA'),
	(73, 'fr', 'ro', 2, 1, 'groupeB'),
	(74, 'fr', 'hr', 0, 0, 'groupeB'),
	(75, 'fr', 'gb-wls', 3, 1, 'groupeB'),
	(76, 'ro', 'hr', 1, 2, 'groupeB'),
	(77, 'ro', 'gb-wls', 2, 0, 'groupeB'),
	(78, 'hr', 'gb-wls', 0, 1, 'groupeB'),
	(79, 'de', 'at', 2, 0, 'groupeC'),
	(80, 'de', 'si', 1, 1, 'groupeC'),
	(81, 'de', 'ee', 3, 0, 'groupeC'),
	(82, 'at', 'si', 2, 2, 'groupeC'),
	(83, 'at', 'ee', 1, 0, 'groupeC'),
	(84, 'si', 'ee', 0, 1, 'groupeC'),
	(85, 'be', 'al', 3, 1, 'groupeD'),
	(86, 'be', 'cz', 2, 0, 'groupeD'),
	(87, 'be', 'fi', 1, 1, 'groupeD'),
	(88, 'al', 'cz', 0, 2, 'groupeD'),
	(89, 'al', 'fi', 2, 0, 'groupeD'),
	(90, 'cz', 'fi', 1, 0, 'groupeD'),
	(91, 'pt', 'dk', 2, 1, 'groupeE'),
	(92, 'pt', 'nl', 1, 2, 'groupeE'),
	(93, 'pt', 'ch', 3, 0, 'groupeE'),
	(94, 'dk', 'nl', 1, 0, 'groupeE'),
	(95, 'dk', 'ch', 2, 2, 'groupeE'),
	(96, 'nl', 'ch', 1, 1, 'groupeE'),
	(97, 'es', 'tr', 2, 0, 'groupeF'),
	(98, 'es', 'sk', 3, 1, 'groupeF'),
	(99, 'es', 'ge', 1, 1, 'groupeF'),
	(100, 'tr', 'sk', 0, 1, 'groupeF'),
	(101, 'tr', 'ge', 2, 0, 'groupeF'),
	(102, 'sk', 'ge', 1, 2, 'groupeF');

-- Listage de la structure de table eurofoot2024. matchs
CREATE TABLE IF NOT EXISTS `matchs` (
  `code_equipe1` varchar(50) DEFAULT NULL,
  `code_equipe2` varchar(50) DEFAULT NULL,
  `groupe` varchar(50) DEFAULT NULL,
  KEY `equipe1` (`code_equipe1`),
  KEY `equipe2` (`code_equipe2`),
  CONSTRAINT `equipe1` FOREIGN KEY (`code_equipe1`) REFERENCES `equipes` (`code`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `equipe2` FOREIGN KEY (`code_equipe2`) REFERENCES `equipes` (`code`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Listage des données de la table eurofoot2024.matchs : ~36 rows (environ)
INSERT INTO `matchs` (`code_equipe1`, `code_equipe2`, `groupe`) VALUES
	('gb-eng', 'dk', 'groupeA'),
	('gb-eng', 'hr', 'groupeA'),
	('gb-eng', 'ch', 'groupeA'),
	('dk', 'hr', 'groupeA'),
	('dk', 'ch', 'groupeA'),
	('hr', 'ch', 'groupeA'),
	('de', 'hu', 'groupeB'),
	('de', 'cz', 'groupeB'),
	('de', 'ee', 'groupeB'),
	('hu', 'cz', 'groupeB'),
	('hu', 'ee', 'groupeB'),
	('cz', 'ee', 'groupeB'),
	('es', 'ro', 'groupeC'),
	('es', 'gb-sct', 'groupeC'),
	('es', 'gb-wls', 'groupeC'),
	('ro', 'gb-sct', 'groupeC'),
	('ro', 'gb-wls', 'groupeC'),
	('gb-sct', 'gb-wls', 'groupeC'),
	('pt', 'at', 'groupeD'),
	('pt', 'nl', 'groupeD'),
	('pt', 'fi', 'groupeD'),
	('at', 'nl', 'groupeD'),
	('at', 'fi', 'groupeD'),
	('nl', 'fi', 'groupeD'),
	('fr', 'al', 'groupeE'),
	('fr', 'si', 'groupeE'),
	('fr', 'ba', 'groupeE'),
	('al', 'si', 'groupeE'),
	('al', 'ba', 'groupeE'),
	('si', 'ba', 'groupeE'),
	('be', 'tr', 'groupeF'),
	('be', 'sk', 'groupeF'),
	('be', 'ge', 'groupeF'),
	('tr', 'sk', 'groupeF'),
	('tr', 'ge', 'groupeF'),
	('sk', 'ge', 'groupeF');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
