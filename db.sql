/*
SQLyog Professional v12.09 (64 bit)
MySQL - 10.1.21-MariaDB : Database - wish
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`wish` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `wish`;

/*Table structure for table `wish` */

DROP TABLE IF EXISTS `wish`;

CREATE TABLE `wish` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `content` text,
  `time` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;

/*Data for the table `wish` */

insert  into `wish`(`ID`,`username`,`content`,`time`) values (1,'我是qqq','hello wish','2017-06-10 18:21'),(2,'我是qqq','hello wish','2017-06-10 18:21'),(3,'我是qqq','hello wish','2017-06-10 18:21'),(4,'我是qqq','hello wish','2017-06-10 18:21'),(5,'我是qqq','hello wish','2017-06-10 18:21'),(6,'我是qqq','hello wish','2017-06-10 18:21'),(7,'我是qqq','hello wish','2017-06-10 18:21'),(8,'我是qqq','hello wish','2017-06-10 18:21'),(9,'我是qqq','hello wish','2017-06-10 18:21');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
