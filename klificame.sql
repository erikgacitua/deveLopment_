/*
Navicat MySQL Data Transfer

Source Server         : klificame
Source Server Version : 50560
Source Host           : localhost:3306
Source Database       : klificame

Target Server Type    : MYSQL
Target Server Version : 50560
File Encoding         : 65001

Date: 2019-03-28 17:37:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for school
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
  `state` int(1) NOT NULL,
  PRIMARY KEY (`id_school`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of school
-- ----------------------------
INSERT INTO `school` VALUES ('32', 'Erik Gacitua', '2', 'Pasaje Fosfato #1138', '957102720', 'Erik Gacitua Arenas', 'egacitua@gmail.com', 'Juan', 'j@gmail.com', '899779797', '1');
INSERT INTO `school` VALUES ('33', 'Evidencia de Update', '3', 'Los morros', '677778888', 'No lo se', 'l@gmail.com', 'Haber que pasa', 'Nose@gmail.com', '777777777', '1');
INSERT INTO `school` VALUES ('34', 'methosman sabe', '4', 'methodmansssssssssssssssh', '966666666', 'methodman', 'method@gmail.com', 'methodman', 'm@gmail.com', '777777777', '1');
INSERT INTO `school` VALUES ('35', 'Redman', '3', 'Redman brit city', '778787878', 'El bronx', 'b@gmail.com', 'Tshock', 't@gmail.com', '676767676', '1');
INSERT INTO `school` VALUES ('36', 'Nuevo colegio Benjamin', '1', 'Diego portales 3344 ', '898989898', 'Alvaro Cortez', 'a@gmail.com', 'Inostroza', 'j@gmail.com', '787897787', '0');
INSERT INTO `school` VALUES ('37', 'Colegio nuevo', '3', 'Colegio nuevo', '898989988', 'nnn', 'n@gmail.com', 'Coleguio nuevo', 'c@gmail.com', '898998898', '1');

-- ----------------------------
-- Procedure structure for sp_createSchool
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_createSchool`;
DELIMITER ;;
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
					telephoneContac,
					state)
			VALUES(nameInstitution,
				commune,
				address,
				telephone,
				director,
				emailDirector,
				contact,
				emailContac,
				telephoneContac,
				1);
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for sp_getDataSchool
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_getDataSchool`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_getDataSchool`()
BEGIN
SELECT * FROM klificame.school;
END
;;
DELIMITER ;

-- ----------------------------
-- Procedure structure for sp_updateSDatachool
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_updateSDatachool`;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_updateSDatachool`(IN IdSchool int, NameSchool VARCHAR(25), CommuneSchool VARCHAR(25), DireccionSchool VARCHAR(25), TelefonoSchool int, DirectorScholl VARCHAR(25), EmailDirSchool VARCHAR(25), ContactSchool VARCHAR(25), EmailContactSchool VARCHAR(25), TelefonoConSchool INT)
BEGIN

UPDATE klificame.school SET nameSchool = NameSchool, 
														commune = CommuneSchool,
														address = DireccionSchool ,
														telephone = TelefonoSchool,
														director = DirectorScholl,
														emailDirector = EmailDirSchool,
														contact = ContactSchool,
														emailContac = EmailContactSchool,
														telephoneContac = TelefonoConSchool,
														state = 1
WHERE id_school = IdSchool;

END
;;
DELIMITER ;
