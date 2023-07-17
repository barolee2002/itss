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
-- Table structure for table `shopping_attribute`
--

DROP TABLE IF EXISTS `shopping_attribute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_attribute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `ingredients_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `buy_at` timestamp NULL DEFAULT NULL,
  `status` int NOT NULL,
  `exprided` timestamp NULL DEFAULT NULL,
  `measure` varchar(255) DEFAULT NULL,
  `quantity` decimal(10,0) DEFAULT NULL,
  `shopping_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `ingredients_id` (`ingredients_id`),
  KEY `shopping_id` (`shopping_id`),
  CONSTRAINT `shopping_attribute_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `shopping_attribute_ibfk_3` FOREIGN KEY (`ingredients_id`) REFERENCES `ingredients` (`id`),
  CONSTRAINT `shopping_attribute_ibfk_4` FOREIGN KEY (`shopping_id`) REFERENCES `shopping` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_attribute`
--

LOCK TABLES `shopping_attribute` WRITE;
/*!40000 ALTER TABLE `shopping_attribute` DISABLE KEYS */;
INSERT INTO `shopping_attribute` VALUES (1,1,1,'2023-07-04 17:00:00',1,'2023-07-05 17:00:00','kg',2,6),(2,2,2,'2023-07-03 17:00:00',1,'2023-07-05 17:00:00','kg',2,6),(3,3,3,'2023-07-03 17:00:00',1,'2023-07-06 17:00:00','quả',10,6),(4,4,4,'2023-07-03 17:00:00',1,'2023-07-07 17:00:00','gram',500,6),(5,5,5,NULL,0,NULL,'gram',300,6),(6,6,6,'2023-06-27 08:00:00',1,'2023-07-09 08:00:00','gram',200,6),(7,7,7,NULL,0,NULL,'gói',3,6),(8,8,8,NULL,0,NULL,'kg',1,6),(9,9,9,NULL,0,NULL,'kg',2,6),(10,10,10,'2023-07-03 17:00:00',1,'2023-07-13 17:00:00','cái',5,6),(11,11,11,'2023-07-03 17:00:00',1,'2023-07-14 17:00:00','gram',100,2),(12,12,12,'2023-06-27 14:00:00',1,'2023-07-15 14:00:00','quả',6,2),(13,13,13,'2023-06-27 15:00:00',1,'2023-07-16 15:00:00','gram',400,2),(14,14,14,'2023-06-27 16:00:00',1,'2023-07-17 16:00:00','quả',3,2),(15,15,15,'2023-06-27 03:30:00',1,'2023-07-18 03:30:00','kg',2,2),(16,16,16,'2023-06-27 04:30:00',1,'2023-07-19 04:30:00','quả',8,2),(17,17,17,'2023-06-27 05:30:00',1,'2023-07-20 05:30:00','kg',2,2),(18,18,18,'2023-06-27 06:30:00',1,'2023-07-21 06:30:00','gram',500,2),(19,19,19,'2023-06-27 07:30:00',1,'2023-07-22 07:30:00','gram',300,2),(20,20,20,'2023-06-27 08:30:00',1,'2023-07-23 08:30:00','gram',200,2),(26,3,3,NULL,0,NULL,'quả',10,NULL),(27,3,3,NULL,0,NULL,'quả',10,NULL),(28,3,3,NULL,0,NULL,'quả',10,NULL),(29,3,3,NULL,0,NULL,'quả',10,NULL),(30,7,3,NULL,0,NULL,'đơn vị tính',7,28),(31,8,3,NULL,0,NULL,'đơn vị tính',8,28),(32,3,3,NULL,0,NULL,'quả',10,NULL),(33,7,3,NULL,0,NULL,'đơn vị tính',7,29),(34,8,3,NULL,0,NULL,'đơn vị tính',8,29),(35,7,12,NULL,0,NULL,'đơn vị tính',7,30),(36,8,12,NULL,0,NULL,'đơn vị tính',8,30),(37,1,4,NULL,0,NULL,'đơn vị tính',1,31),(38,2,7,'2023-07-15 17:00:00',1,'2023-07-17 17:00:00','đơn vị tính',2,31),(45,1,7,'2023-07-15 17:00:00',1,'2023-07-16 17:00:00','đơn vị tính',2,35),(46,2,7,'2023-07-15 17:00:00',1,'2023-07-17 17:00:00','đơn vị tính',4,35),(47,7,27,'2023-07-15 17:00:00',1,'2023-07-22 17:00:00','đơn vị tính',21,38),(48,8,27,'2023-07-15 17:00:00',1,'2023-07-23 17:00:00','đơn vị tính',24,38),(49,17,27,'2023-07-15 17:00:00',1,'2023-08-01 17:00:00','đơn vị tính',68,38),(50,18,27,'2023-07-15 17:00:00',1,'2023-08-02 17:00:00','đơn vị tính',72,38),(51,1,1,'2023-07-15 17:00:00',1,'2023-07-16 17:00:00','đơn vị tính',1,39),(52,2,2,'2023-07-15 17:00:00',1,'2023-07-17 17:00:00','đơn vị tính',2,39),(53,7,3,'2023-07-15 17:00:00',1,'2023-07-22 17:00:00','đơn vị tính',28,39),(54,8,4,'2023-07-15 17:00:00',1,'2023-07-23 17:00:00','đơn vị tính',32,39),(55,13,5,'2023-07-15 17:00:00',1,'2023-07-28 17:00:00','đơn vị tính',26,39),(56,14,27,'2023-07-15 17:00:00',1,'2023-07-29 17:00:00','đơn vị tính',28,39),(57,17,27,'2023-07-15 17:00:00',1,'2023-08-01 17:00:00','đơn vị tính',85,39),(58,18,27,'2023-07-15 17:00:00',1,'2023-08-02 17:00:00','đơn vị tính',90,39),(59,1,27,'2023-07-15 17:00:00',1,'2023-07-16 17:00:00','kg',2,39),(60,12,27,'2023-07-15 17:00:00',1,'2023-07-27 17:00:00','quả',4,39),(61,4,27,'2023-07-15 17:00:00',1,'2023-07-19 17:00:00','gram',5,39),(62,13,27,'2023-07-15 17:00:00',1,'2023-07-28 17:00:00','gói',1,39),(63,7,26,NULL,0,NULL,'đơn vị tính',7,40),(64,8,26,NULL,0,NULL,'đơn vị tính',8,40),(65,2,26,NULL,0,NULL,'kg',2,40),(66,1,5,'2023-07-16 17:00:00',1,'2023-07-17 17:00:00','kg',1,41),(67,2,5,'2023-07-16 17:00:00',1,'2023-07-18 17:00:00','kg',2,41),(68,3,5,'2023-07-16 17:00:00',1,'2023-07-19 17:00:00','quả',6,41),(69,4,5,'2023-07-16 17:00:00',1,'2023-07-20 17:00:00','củ',8,41);
/*!40000 ALTER TABLE `shopping_attribute` ENABLE KEYS */;
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
