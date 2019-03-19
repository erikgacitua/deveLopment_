<?php
$conexion = mysql_connect("localhost", "root", "egacitua")or die('No se conectar: '.mysql_error());
$db = mysql_select_db("klificame", $conexion);

?>