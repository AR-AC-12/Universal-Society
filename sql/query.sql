SELECT `usuarios`.`fullname` AS `name`, `usuarios`.`time_login` AS `birthday`, `usuarios`.`date` AS `date`
FROM `usuarios`
WHERE `usuarios`.`fullname` LIKE '%a%' AND `usuarios`.`time_login` LIKE '%200%' AND `usuarios`.`date` NOT LIKE '20';

SELECT `usuarios`.*, `areas`.*
FROM `usuarios`
	LEFT JOIN `areas` ON `usuarios`.`id_area` = `areas`.`id`;

SELECT `usuarios`.*, `areas`.*
FROM `usuarios`
	RIGHT JOIN `areas` ON `usuarios`.`id_area` = `areas`.`id`;

SELECT `usuarios`.*, `areas`.*
FROM `usuarios`
	INNER JOIN `areas` ON `usuarios`.`id_area` = `areas`.`id`;