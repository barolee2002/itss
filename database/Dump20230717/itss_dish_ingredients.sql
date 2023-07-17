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
-- Table structure for table `dish_ingredients`
--

DROP TABLE IF EXISTS `dish_ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dish_ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dish_id` int NOT NULL,
  `ingredients_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `measure` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ingredients_id` (`ingredients_id`),
  KEY `dish_id` (`dish_id`),
  CONSTRAINT `dish_ingredients_ibfk_2` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`),
  CONSTRAINT `dish_ingredients_ibfk_3` FOREIGN KEY (`dish_id`) REFERENCES `dish` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish_ingredients`
--

LOCK TABLES `dish_ingredients` WRITE;
/*!40000 ALTER TABLE `dish_ingredients` DISABLE KEYS */;
INSERT INTO `dish_ingredients` VALUES (1,1,1,1,'kg'),(2,1,2,2,'kg'),(3,2,3,3,'quả'),(4,2,4,4,'củ'),(5,3,5,5,'củ'),(7,4,7,7,'gói'),(8,4,8,8,'kg'),(9,5,9,9,'bó'),(10,5,10,10,'kg'),(11,6,11,2,'hộp'),(12,6,14,3,'kg'),(13,7,13,13,'quả'),(14,7,14,14,'kg'),(16,8,16,16,'quả'),(17,9,17,17,'quả'),(18,9,18,18,'hộp'),(19,10,19,19,'kg'),(20,10,20,20,'củ'),(25,25,1,25,'kg'),(26,25,6,26,'quả'),(27,25,8,27,'kg'),(28,5,6,28,'quả'),(29,11,1,3,'kg'),(30,11,11,3,'hộp'),(31,12,2,4,'kg'),(32,12,5,6,'củ'),(33,12,15,1,'bó'),(34,13,14,2,'kg'),(35,13,13,1,'quả'),(36,14,6,1,'quả'),(37,14,8,20,'kg'),(38,15,9,4,'bó'),(39,15,19,9,'kg'),(40,16,20,5,'củ'),(41,16,17,4,'quả'),(42,17,2,4,'kg'),(43,17,14,10,'kg'),(44,18,3,10,'quả'),(45,18,5,3,'củ'),(46,18,10,8,'kg'),(47,19,8,1,'kg'),(48,19,16,5,'quả'),(49,19,19,4,'kg'),(50,20,16,4,'quả'),(51,20,1,4,'kg'),(52,20,2,4,'kg');
/*!40000 ALTER TABLE `dish_ingredients` ENABLE KEYS */;
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
