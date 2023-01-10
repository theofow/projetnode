DROP TABLE IF EXISTS `types`;
CREATE TABLE IF NOT EXISTS `types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) 
DROP TABLE IF EXISTS `region`;
CREATE TABLE IF NOT EXISTS `region` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) NOT NULL
)
DROP TABLE IF EXISTS `pokemon`;
CREATE TABLE IF NOT EXISTS `pokemon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `kanto___type_fk` (`type`)
)
//Pokémon : 
INSERT INTO pokemon (id, nom, type) VALUES (1, 'Bulbizarre', 1);
INSERT INTO pokemon (id, nom, type) VALUES (2, 'Herbizarre', 1);
INSERT INTO pokemon (id, nom, type) VALUES (3, 'Florizarre', 1);
INSERT INTO pokemon (id, nom, type) VALUES (4, 'Salamèche', 2);
INSERT INTO pokemon (id, nom, type) VALUES (5, 'Reptincel', 2);

//types :
INSERT INTO types (id, nom) VALUES (1, 'Plante');
INSERT INTO types (id, nom) VALUES (2, 'Feu');
INSERT INTO types (id, nom) VALUES (3, 'Eau');
INSERT INTO types (id, nom) VALUES (4, 'Psy');
INSERT INTO types (id, nom) VALUES (5, 'Poison');

//région : 
INSERT INTO `region`(`id`, `nom`) VALUES ('1','Kanto');
INSERT INTO `region`(`id`, `nom`) VALUES ('2','Johto');
INSERT INTO `region`(`id`, `nom`) VALUES ('3','Hoenn');
INSERT INTO `region`(`id`, `nom`) VALUES ('4','Sinnoh');
INSERT INTO `region`(`id`, `nom`) VALUES ('5','Unys');
