/*
 Navicat Premium Data Transfer

 Source Server         : LocalHost
 Source Server Type    : MySQL
 Source Server Version : 50552
 Source Host           : localhost
 Source Database       : klificame

 Target Server Type    : MySQL
 Target Server Version : 50552
 File Encoding         : utf-8

 Date: 03/18/2019 21:10:27 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `school`
-- ----------------------------
DROP TABLE IF EXISTS `school`;
CREATE TABLE `school` (
  `id_school` int(11) NOT NULL AUTO_INCREMENT,
  `nameSchool` varchar(25) NOT NULL,
  `commune` varchar(25) NOT NULL,
  `address` varchar(25) NOT NULL,
  `telephone` int(9) DEFAULT NULL,
  `director` varchar(25) NOT NULL,
  `emailDirector` varchar(25) DEFAULT NULL,
  `contact` varchar(25) DEFAULT NULL,
  `emailContac` varchar(25) DEFAULT NULL,
  `telephoneContac` int(9) DEFAULT NULL,
  PRIMARY KEY (`id_school`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `school`
-- ----------------------------
BEGIN;
INSERT INTO `school` VALUES ('1', 'www', '', '', '0', '', null, null, null, null), ('2', 'nameInstitution', '', '', null, '', null, null, null, null), ('3', 'nameInstitution', '', '', null, '', null, null, null, null), ('4', '333', '', '', null, '', null, null, null, null), ('5', 'hola', '', '', null, '', null, null, null, null), ('6', 'Educadora Elena Rojas', 'La florida', 'Diego Portales 1138', '912345678', 'Erik', 'egacitua@gmail.com', 'Tupac', 'tupac@gmail.com', '512345678'), ('7', 'ijiojjijiojio', '1', 'jjppjp', '912345678', 'yuvuyggyu', 'y@gmail.com', 'gyguygyu', 'e@gmail.com', '912345678'), ('8', 'colegio excelsior', '1', 'sazie 355', '223456312', 'Juanita perez perez', 'jpp@gmail.com', 'Edith sobarzo maraboli', 'edithsobarzom@gmail.com', '931052362');
COMMIT;

-- ----------------------------
--  Procedure structure for `sp_createSchool`
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_createSchool`;
delimiter ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_createSchool`(IN nameInstitution VARCHAR(25), IN commune varchar(25), IN address varchar(25), IN telephone INT, In director varchar(25), IN emailDirector varchar(25), IN contact varchar(25), IN emailContac varchar(25), IN telephoneContac int)
BEGIN
	INSERT INTO klificame.school(nameSchool,
				     commune,
					address,
					telephone,
					director,
					emailDirector,
					contact,
					emailContac,
					telephoneContac)
			VALUES(nameInstitution,
				commune,
				address,
				telephone,
				director,
				emailDirector,
				contact,
				emailContac,
				telephoneContac);
END
 ;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
