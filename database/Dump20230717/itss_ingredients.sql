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
-- Table structure for table `ingredients`
--

DROP TABLE IF EXISTS `ingredients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `image` varchar(2555) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT NULL,
  `update_at` timestamp NULL DEFAULT NULL,
  `due_date` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredients`
--

LOCK TABLES `ingredients` WRITE;
/*!40000 ALTER TABLE `ingredients` DISABLE KEYS */;
INSERT INTO `ingredients` VALUES (1,'Gạo','https://th.bing.com/th/id/R.b7d3247b38f37afec64a87f1b60a8722?rik=It6gcV493cdQNw&pid=ImgRaw&r=0','Gạo là một loại ngũ cốc quan trọng và phổ biến trên toàn thế giới, đóng vai trò quan trọng trong lĩnh vực nông nghiệp và dinh dưỡng. ',1,'2023-06-26 17:00:00','2023-07-03 17:00:00',1),(2,'Thịt gà','https://photo-cms-tpo.epicdn.me/w890/Uploaded/2023/rkznae/2021_12_03/photo-1-16158774522971708629774-5166.jpg ','Thịt gà là một loại thực phẩm được chế biến từ gia cầm gà. Đây là một trong những loại thịt phổ biến và được ưa chuộng trên toàn thế giới. Thịt gà có màu trắng hoặc hồng nhạt, tùy vào loại gà và phần thịt. ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',2),(3,'Cà chua','https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2021/9/25/tac-dung-cua-ca-chua-doi-voi-suc-khoe-1-1632310636-831-width640height427-1632567723926-16325677242441321628137.jpg ','Trái cà chua có màu đỏ hoặc vàng, chua ngọt và giàu vitamin C. Dùng tươi hoặc chế biến thành sốt, salad, nước ép. ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',3),(4,'Hành tây','https://vinmec-prod.s3.amazonaws.com/images/20201228_031439_755031_hanhtay_wahf.max-1800x1800.jpg ','Có màu trắng hoặc tím, hành tây có vị cay nhẹ, dùng trong nấu ăn, xào, làm salad, nướng... ',1,'2023-06-26 17:00:00','2023-07-03 17:00:00',4),(5,'Tỏi',' https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/1/10/fresh-raw-garlic-ready-cook-scaled1-1673366730280487433643.jpg',' Tỏi có hương thơm đặc trưng, được dùng làm gia vị trong nấu ăn và có lợi cho sức khỏe.',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',5),(6,'Ớt','https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/6/18/cach-an-che-bien-bao-quan-ot-2-1655566236587196946971.jpg ','Ớt có vị cay, dùng để gia vị và làm nóng món ăn. ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',6),(7,'Mì','https://upload.wikimedia.org/wikipedia/commons/7/73/Mama_instant_noodle_block.jpg ','Ngũ cốc dùng để nấu mì sợi, mì ý, mì xào, mì ramen... ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',7),(8,'Cá hồi','https://cdn.tgdd.vn/Files/2021/01/19/1321272/tong-hop-nhung-cach-che-bien-ca-hoi-ngon-bo-duong-202112282310178876.jpg ','Loại cá biển có thịt thơm, giàu omega-3. Dùng để nướng, hấp, xào... ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',8),(9,'Rau muống','https://vnmedia.monkeyuni.net/upload/web/storage_web/27-06-2022_15:39:41_rau-muong-co-chat-dinh-duong-gi-0.jpg ',' Rau xanh giàu dinh dưỡng, dùng xào, luộc hoặc làm món canh. ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',9),(10,'Nấm hương','https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lentinula_edodes_20101113_a.jpg/1200px-Lentinula_edodes_20101113_a.jpg ','Loại nấm phổ biến có hương thơm đặc trưng. Sử dụng trong nấu ăn, xào, hấp... ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',10),(11,'Sữa tươi','https://gamek.mediacdn.vn/133514250583805952/2021/12/18/photo-1-1639800734447959976977.jpg ','Thức uống bổ dưỡng từ sữa bò, giàu canxi và vitamin D. ',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',11),(12,'Bơ','https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48_master.jpg ','Loại trái cây giàu dầu béo, mềm mịn, dùng để ăn sống, nấu ăn, làm kem bơ. ',1,'2023-06-27 14:00:00','2023-06-27 14:00:00',12),(13,'Chanh','https://vcdn1-suckhoe.vnecdn.net/2019/09/03/benefitsoflime-1567496996-9070-1567497249.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=LpPndYyqCShHL-Scv4JrJw ','  Quả có vị chua, giàu vitamin C, dùng nước ép, nấu ăn, làm món tráng miệng.',1,'2023-06-27 15:00:00','2023-06-27 15:00:00',13),(14,'Sườn non','https://ngon.life/wp-content/uploads/2021/09/suon-non.jpg ',' Phần thịt xương sườn của heo non, thơm ngon, dùng để nướng, xào...',1,'2023-06-26 17:00:00','2023-07-16 17:00:00',14),(15,'Bắp cải',' https://product.hstatic.net/200000423303/product/bap-cai-huu-co_203a09f5391b4cb59bbad82f94c1cd7d.jpg','Loại rau xanh giàu dinh dưỡng, dùng xào, luộc, nấu canh. ',1,'2023-06-27 03:30:00','2023-06-27 03:30:00',15),(16,'Trứng','https://cdn.tgdd.vn/2020/07/CookProductThumb/14-620x620-6.jpg ','Thực phẩm giàu protein, dùng nấu, hấp, chiên, luộc... ',1,'2023-06-27 04:30:00','2023-06-27 04:30:00',16),(17,'Bí đỏ',' https://vinmec-prod.s3.amazonaws.com/images/20200710_144301_558174_bi-ngo-1.max-1800x1800.jpg',' Loại quả có màu cam đỏ, dùng để nấu canh, xào, nấu cháo. ',1,'2023-06-27 05:30:00','2023-06-27 05:30:00',17),(18,'Đậu hũ','https://cdn.tgdd.vn/Files/2020/06/29/1266436/cach-lam-dau-hu-don-gian-tai-nha-khong-dung-thach-cao-dam-bao-an-toan-202006292315371703.jpg ','Sản phẩm từ đậu nành, giàu protein, dùng chế biến thành nhiều món ăn chay. ',1,'2023-06-27 06:30:00','2023-06-27 06:30:00',18),(19,'Cá thu','https://cdn.tgdd.vn/Files/2017/11/18/1042600/cach-chon-ca-thu-tuoi-ngon-dinh-duong-cho-chi-em-noi-tro-202206111324409221.jpg ','Loại cá biển có thịt ngon, giàu protein, nấu nướng đều thơm ngon. ',1,'2023-06-27 07:30:00','2023-06-27 07:30:00',19),(20,'Gừng','https://vfa.gov.vn/storage/news/640/cong-dung-cua-gung.jpg ',' Gia vị thảo dược có hương thơm đặc trưng, dùng để nấu ăn, chế biến thức uống.',1,'2023-06-27 08:30:00','2023-06-27 08:30:00',20),(30,'Đạt ','https://th.bing.com/th/id/OIP.0DmFWtLs_UM_4pIpwTS8igHaG6?pid=ImgDet&rs=1','gái xinh',1,'2023-07-02 17:00:00','2023-07-02 17:00:00',11);
/*!40000 ALTER TABLE `ingredients` ENABLE KEYS */;
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
