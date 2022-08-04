CREATE TABLE `userInfo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(255) NOT NULL,
  `mobilePhoneNumber` CHAR(13) NOT NULL,
  `points` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`mobilePhoneNumber`)
) AUTO_INCREMENT = 0;

INSERT INTO `userInfo` VALUES (0, 'yejeungJi', '010-4820-1962', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user00', '010-0000-0000', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user01', '010-1111-1111', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user02', '010-2222-2222', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user03', '010-3333-3333', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user04', '010-4444-4444', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user05', '010-5555-5555', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user06', '010-6666-6666', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user07', '010-7777-7777', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user08', '010-8888-8888', 9999999);
INSERT INTO `userInfo` VALUES (0, 'user09', '010-9999-9999', 9999999);