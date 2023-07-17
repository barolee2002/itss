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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `verified_time` datetime DEFAULT NULL,
  `create_at` datetime NOT NULL,
  `status` int NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `update_at` datetime DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'nguyenvan1','nguyenvan1@example.com','2023-06-27 10:00:00','2023-06-27 10:00:00',1,'avatar1.jpg','Nguyễn Văn 1','Nam','Địa chỉ 1','password1',NULL,NULL),(2,'lethi2','lethi2@example.com','2023-06-27 11:00:00','2023-06-27 11:00:00',1,'avatar2.jpg','Lê Thị 2','Nữ','Địa chỉ 2','password2',NULL,NULL),(3,'phamquoc3','phamquoc3@example.com','2023-06-27 12:00:00','2023-06-27 12:00:00',1,'avatar3.jpg','Phạm Quốc 3','Nam','Địa chỉ 3','password3',NULL,NULL),(4,'tranthi4','tranthi4@example.com','2023-06-27 13:00:00','2023-06-27 13:00:00',1,'avatar4.jpg','Trần Thị 4','Nữ','Địa chỉ 4','password4',NULL,NULL),(5,'dovancuong5','dovancuong5@example.com','2023-06-27 14:00:00','2023-06-27 14:00:00',1,'https://img.upanh.tv/2023/07/17/340629549_241235961764036_7612227899968530811_n.jpg','Bảo Lê','Nam','Địa chỉ 5','password5',NULL,NULL),(6,'nguyenthikim6','nguyenthikim6@example.com','2023-06-27 15:00:00','2023-06-27 15:00:00',1,'avatar6.jpg','Nguyễn Thị Kim 6','Nữ','Địa chỉ 6','password6',NULL,NULL),(7,'hoangvan7','hoangvan7@example.com','2023-06-27 16:00:00','2023-06-27 16:00:00',1,'avatar7.jpg','Hoàng Văn 7','Nam','Địa chỉ 7','password7',NULL,NULL),(8,'maithi8','maithi8@example.com','2023-06-27 17:00:00','2023-06-27 17:00:00',1,'avatar8.jpg','Mai Thị 8','Nữ','Địa chỉ 8','password8',NULL,NULL),(9,'dinhquang9','dinhquang9@example.com','2023-06-27 18:00:00','2023-06-27 18:00:00',1,'avatar9.jpg','Đinh Quang 9','Nam','Địa chỉ 9','password9',NULL,NULL),(10,'phamhoang10','phamhoang10@example.com','2023-06-27 19:00:00','2023-06-27 19:00:00',1,'avatar10.jpg','Phạm Hoàng 10','Nam','Địa chỉ 10','password10',NULL,NULL),(11,'lethuy11','lethuy11@example.com','2023-06-27 20:00:00','2023-06-27 20:00:00',1,'avatar11.jpg','Lê Thuỳ 11','Nữ','Địa chỉ 11','password11',NULL,NULL),(12,'tranquang12','tranquang12@example.com','2023-06-27 21:00:00','2023-06-27 21:00:00',1,'avatar12.jpg','Trần Quang 12','Nam','Địa chỉ 12','password12',NULL,NULL),(13,'nguyenthimai13','nguyenthimai13@example.com','2023-06-27 22:00:00','2023-06-27 22:00:00',1,'avatar13.jpg','Nguyễn Thị Mai 13','Nữ','Địa chỉ 13','password13',NULL,NULL),(14,'hoangthanh14','hoangthanh14@example.com','2023-06-27 23:00:00','2023-06-27 23:00:00',1,'avatar14.jpg','Hoàng Thanh 14','Nam','Địa chỉ 14','password14',NULL,NULL),(15,'lamhuong15','lamhuong15@example.com','2023-06-27 10:30:00','2023-06-27 10:30:00',1,'avatar15.jpg','Lâm Hương 15','Nữ','Địa chỉ 15','password15',NULL,NULL),(16,'tranvanduc16','tranvanduc16@example.com','2023-06-27 11:30:00','2023-06-27 11:30:00',1,'avatar16.jpg','Trần Văn Đức 16','Nam','Địa chỉ 16','password16',NULL,NULL),(17,'nguyenthihong17','nguyenthihong17@example.com','2023-06-27 12:30:00','2023-06-27 12:30:00',1,'avatar17.jpg','Nguyễn Thị Hồng 17','Nữ','Địa chỉ 17','password17',NULL,NULL),(18,'phamdinh18','phamdinh18@example.com','2023-06-27 13:30:00','2023-06-27 13:30:00',1,'avatar18.jpg','Phạm Đình 18','Nam','Địa chỉ 18','password18',NULL,NULL),(19,'hoangthithu19','hoangthithu19@example.com','2023-06-27 14:30:00','2023-06-27 14:30:00',1,'avatar19.jpg','Hoàng Thị Thu 19','Nữ','Địa chỉ 19','password19',NULL,NULL),(20,'nguyenhuy20','nguyenhuy20@example.com','2023-06-27 15:30:00','2023-06-27 15:30:00',1,'avatar20.jpg','Nguyễn Huy 20','Nam','Địa chỉ 20','password20',NULL,NULL),(21,'lethi3',NULL,NULL,'2023-06-30 00:00:00',1,NULL,NULL,NULL,NULL,'password2',NULL,NULL),(22,'nguyenvan','nguyenvan@example.com','2023-06-30 23:47:50','2023-06-30 23:47:50',1,'path/to/avatar1.jpg','Nguyễn Văn Nam','nam','123 Đường ABC, Quận XYZ, TP HCM','12345678','2023-06-30 23:47:50','user'),(23,'nguyenthi','nguyenthi@example.com','2023-06-30 23:47:50','2023-06-30 23:47:50',1,'path/to/avatar2.jpg','Nguyễn Thị Nữ','nam','456 Đường XYZ, Quận ABC, TP HCM','abcdefgh','2023-06-30 23:47:50','user'),(24,'admin','admin@example.com','2023-06-30 23:47:50','2023-06-30 23:47:50',1,'path/to/avatar3.jpg','Nguyễn Thị Nữ','nam','456 Đường XYZ, Quận ABC, TP HCM','admin123','2023-06-30 23:47:50','admin'),(25,'datdq','datn@example.com','2023-07-02 15:57:16','2023-07-02 15:57:16',1,'path/to/avatar1.jpg','Đặng Quang Đạt','nam','123 Đường ABC, Quận XYZ, TP HCM','datdq','2023-07-02 15:57:16','user'),(26,'caocaokyky','',NULL,'2023-07-16 00:00:00',1,'https://img.upanh.tv/2023/07/17/349064618_214876881486978_8543521010222762760_n.jpg','caocaokyky','nam','','123',NULL,NULL),(27,'caocaokykyky','',NULL,'2023-07-16 00:00:00',1,'https://img.upanh.tv/2023/07/17/349064618_214876881486978_8543521010222762760_n.jpg','kykycaocao','nam','','123',NULL,NULL),(28,'phuongtrang','',NULL,'2023-07-17 00:00:00',1,'https://img.upanh.tv/2023/07/17/361610397_794622695496342_375135208016910290_n.jpg','Phương Trang','nữ','','123',NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
