CREATE TABLE `productsInfo`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `productName` CHAR(50) NOT NULL,
    `productCategory` CHAR(20) NOT NULL,
    `productType` CHAR(20) NOT NULL,
    `productPrice` INT NOT NULL,
    `productAdditionalfee` INT NOT NULL,
    `productCount` INT NOT NULL,
    `productImageurl` CHAR(255) NOT NULL,
    `productSize` CHAR(20) NOT NULL,
    `productIce` CHAR(20) NOT NULL,
    `productTemperature` CHAR(20) NOT NULL,
    `productEspressoroast` CHAR(25) NOT NULL,
    `productEspressoShot` INT NOT NULL,
    `productSyrup` CHAR(255) NOT NULL,
    `productSyrupcount` INT NOT NULL,
    PRIMARY KEY (`id`)
) AUTO_INCREMENT = 0;

INSERT INTO `productsInfo` VALUES (0, 'pineCocoGreenYogurtBlended', 'recommendation', 'iceBeverage', 5400, 0, 1, './images/recommendation/pineCocoGreenYogurtBlended.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'pinkCrystalChamomileTea', 'recommendation', 'iceTea', 4500, 0, 1, './images/recommendation/pinkCrystalChamomileTea.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'richGanacheCake', 'recommendation', 'bakery', 4800, 0, 1, './images/recommendation/richGanacheCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'berryDreamTeaLatte', 'recommendation', 'hotBeverage', 4600, 0, 1, './images/recommendation/berryDreamTeaLatte.jpg', 'short', 'noIce', 'hot', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'pinkMagnoliaLemonade', 'recommendation', 'iceBeverage', 4800, 0, 1, './images/recommendation/pinkMagnoliaLemonade.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'creamyLatte', 'recommendation', 'normalCoffee', 4900, 0, 1, './images/recommendation/creamyLatte.jpg', 'short', 'noIce', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'frenchAppleTartNitro', 'recommendation', 'iceBeverage', 5200, 0, 1, './images/recommendation/frenchAppleTartNitro.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceLavenderCafeBrevet', 'recommendation', 'iceCoffee', 5300, 0, 1, './images/recommendation/iceLavenderCafeBrevet.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'lavenderCafeBrevet', 'recommendation', 'hotCoffee', 5100, 0, 1, './images/recommendation/lavenderCafeBrevet.jpg', 'short', 'noIce', 'hot', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'velvetDarkMochaNitro', 'recommendation', 'iceCoffee', 5100, 0, 1, './images/recommendation/velvetDarkMochaNitro.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'sakeratoAvocado', 'recommendation', 'avocado', 6700, 0, 1, './images/recommendation/sakeratoAvocado.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'classicAvocado', 'recommendation', 'avocado', 6800, 0, 1, './images/recommendation/classicAvocado.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'coldBrewFloat', 'recommendation', 'iceCoffee', 4800, 0, 1, './images/recommendation/coldBrewFloat.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceVanillaBeanLatte', 'recommendation', 'iceCoffee', 5300, 0, 1, './images/recommendation/iceVanillaBeanLatte.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'sakeratoBiancoOverIce', 'recommendation', 'iceCoffee', 5100, 0, 1, './images/recommendation/sakeratoBiancoOverIce.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);

INSERT INTO `productsInfo` VALUES (0, 'blodeEspressoLatte', 'espresso', 'normalCoffee', 5100, 0, 1, './images/espresso/blodeEspressoLatte.jpg', 'short', 'noIce', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceBoldeVanillaMacchiato', 'espresso', 'iceCoffee', 5600, 0, 1, './images/espresso/iceBoldeVanillaMacchiato.jpg', 'short', 'ice', 'ice', 'blondeRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'cafeMocha', 'espresso', 'noramlCoffee', 5800, 0, 1, './images/espresso/cafeMocha.jpg', 'short', 'noIce', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'cafeLatte', 'espresso', 'hotCoffee', 5300, 0, 1, './images/espresso/cafeLatte.jpg', 'short', 'noIce', 'hot', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceCafeLatte', 'espresso', 'iceCoffee', 5500, 0, 1, './images/espresso/iceCafeLatte.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'caramelMacchiato', 'espresso', 'hotCoffee', 5500, 0, 1, './images/espresso/caramelMacchiato.jpg', 'short', 'noIce', 'hot', 'signatureRoast', 0, 'caramelSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceCaramelMacchiato', 'espresso', 'iceCoffee', 5700, 0, 1, './images/espresso/iceCaramelMacchiato.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'caramelSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'vanillaFlatWhite', 'espresso', 'normalCoffee', 5500, 0, 1, './images/espresso/vanillaFlatWhite.jpg', 'short', 'noIce', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'whiteChocolateMocha', 'espresso', 'normalCoffee', 5800, 0, 1, './images/espresso/whiteChocolateMocha.jpg', 'short', 'noIce', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'iceCafeAmericano', 'espresso', 'iceCoffee', 4500, 0, 1, './images/espresso/iceCafeAmericano.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'espressoConPanana', 'espresso', 'hotCoffee', 4500, 0, 1, './images/espresso/espressoConPanana.jpg', 'short', 'noIce', 'hot', 'signatureRoast', 0, 'vanillaSyrup', 0);

INSERT INTO `productsInfo` VALUES (0, 'brewingCoffee', 'coldBrew', 'normalCoffee', 4900, 0, 1, './images/coldBrew/brewingCoffee.jpg', 'short', 'ice', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'coldBrewReserve', 'coldBrew', 'iceCoffee', 5200, 0, 1, './images/coldBrew/coldBrewReserve.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'coldBrewOatLatte', 'coldBrew', 'iceCoffee', 6100, 0, 1, './images/coldBrew/coldBrewOatLatte.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'vanillaCreamBrew', 'coldBrew', 'iceCoffee', 6400, 0, 1, './images/coldBrew/vanillaCreamBrew.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'coldBrewReserveNitro', 'coldBrew', 'normalCoffee', 5800, 0, 1, './images/coldBrew/coldBrewReserveNitro.jpg', 'short', 'ice', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'nitroColdBrew', 'coldBrew', 'normalCoffee', 5700, 0, 1, './images/coldBrew/nitroColdBrew.jpg', 'short', 'ice', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'nitroVanillaCream', 'coldBrew', 'normalCoffee', 6100, 0, 1, './images/coldBrew/nitroVanillaCream.jpg', 'short', 'ice', 'normal', 'signatureRoast', 0, 'vanillaSyrup', 0);

INSERT INTO `productsInfo` VALUES (0, 'organicMatchaGreenTeaFrappuccino', 'frappuccino', 'iceBeverage', 6300, 0, 1, './images/frappuccino/organicMatchaGreenTeaFrappuccino.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'caramelFrappuccino', 'frappuccino', 'iceCoffee', 6000, 0, 1, './images/frappuccino/caramelFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'caramelSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'espressoChipFrappuccino', 'frappuccino', 'iceCoffee', 6400, 0, 1, './images/frappuccino/espressoChipFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'espressoFrappuccino', 'frappuccino', 'iceCoffee', 5600, 0, 1, './images/frappuccino/espressoFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'javaChipFrappuccino', 'frappuccino', 'iceCoffee', 6700, 0, 1, './images/frappuccino/javaChipFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'mochaFrappucino', 'frappuccino', 'iceCoffee', 6600, 0, 1, './images/frappuccino/mochaFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'whiteChocolateMochaFrappucino', 'frappuccino', 'iceCoffee', 6600, 0, 1, './images/frappuccino/whiteChocolateMochaFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'whiteTigerFrappuccino', 'frappuccino', 'iceCoffee', 6800, 0, 1, './images/frappuccino/whiteTigerFrappuccino.jpg', 'short', 'ice', 'ice', 'signatureRoast', 0, 'vanillaSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'vanillaCreamFrappuccino', 'frappuccino', 'iceBeverage', 6200, 0, 1, './images/frappuccino/vanillaCreamFrappuccino.jpg', 'short', 'ice', 'ice', 'noEspresso', 0, 'noSyrup', 0);

INSERT INTO `productsInfo` VALUES (0, 'mascarponeTiramisuCake', 'bakery', 'bakery', 6600, 0, 1, './images/bakery/mascarponeTiramisuCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, '7LayerGanacheCake', 'bakery', 'bakery', 5300, 0, 1, './images/bakery/7LayerGanacheCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'redVelvetCreamCheeseCake', 'bakery', 'bakery', 5800, 0, 1, './images/bakery/redVelvetCreamCheeseCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'cloudCheeseCake', 'bakery', 'bakery', 5600, 0, 1, './images/bakery/cloudCheeseCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'buntCheeseCake', 'bakery', 'bakery', 6500, 0, 1, './images/bakery/buntCheeseCake.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'baumkuchenFilledWithCreamPuffs', 'bakery', 'bakery', 6800, 0, 1, './images/bakery/baumkuchenFilledWithCreamPuffs.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'arugulaSandwich', 'bakery', 'bakery', 7100, 0, 1, './images/bakery/arugulaSandwich.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'ricottaCheeseBaguetteSandwich', 'bakery', 'bakery', 7500, 0, 1, './images/bakery/ricottaCheeseBaguetteSandwich.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'baconCheeseToast', 'bakery', 'bakery', 5800, 0, 1, './images/bakery/baconCheeseToast.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'barbecueChickenCheeseCiabatta', 'bakery', 'bakery', 8200, 0, 1, './images/bakery/barbecueChickenCheeseCiabatta.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);
INSERT INTO `productsInfo` VALUES (0, 'basilTomatoCreamCheeseBagel', 'bakery', 'bakery', 8400, 0, 1, './images/bakery/basilTomatoCreamCheeseBagel.jpg', 'defaultOption', 'noIce', 'normal', 'noEspresso', 0, 'noSyrup', 0);