-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: itss
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `fridge_ingredients`
--

DROP TABLE IF EXISTS `fridge_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fridge_ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fridge_id` int DEFAULT NULL,
  `ingredients_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `measure` varchar(255) DEFAULT NULL,
  `exprided` datetime DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ingredients_id` (`ingredients_id`),
  KEY `fridge_id` (`fridge_id`),
  CONSTRAINT `fridge_ingredients_ibfk_1` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`),
  CONSTRAINT `fridge_ingredients_ibfk_2` FOREIGN KEY (`fridge_id`) REFERENCES `fridge` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fridge_ingredients`
--

LOCK TABLES `fridge_ingredients` WRITE;
/*!40000 ALTER TABLE `fridge_ingredients` DISABLE KEYS */;
INSERT INTO `fridge_ingredients` VALUES (22,10,9,200,'gram','2023-08-05 00:00:00','2023-07-09 00:00:00'),(25,10,7,28,'đơn vị tính','2023-07-30 00:00:00','2023-07-09 00:00:00'),(27,NULL,7,7,'đơn vị tính','2023-08-06 00:00:00','2023-07-16 00:00:00'),(28,NULL,1,8,'đơn vị tính','2023-07-19 00:00:00','2023-07-16 00:00:00'),(29,NULL,2,22,'đơn vị tính','2023-07-22 00:00:00','2023-07-16 00:00:00'),(30,NULL,8,24,'đơn vị tính','2023-08-09 00:00:00','2023-07-16 00:00:00'),(34,30,2,4,'đơn vị tính','2023-07-22 00:00:00','2023-07-16 00:00:00'),(35,30,1,2,'kg','2023-07-19 00:00:00','2023-07-16 00:00:00'),(36,30,18,71,'đơn vị tính','2023-09-08 00:00:00','2023-07-16 00:00:00'),(42,10,1,1,'kg','2023-07-20 00:00:00','2023-07-17 00:00:00'),(43,10,3,12,'quả','2023-07-26 00:00:00','2023-07-17 00:00:00');
/*!40000 ALTER TABLE `fridge_ingredients` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17  2:24:49
