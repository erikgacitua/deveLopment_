<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');
require_once('./microServicio.php');

$accion = $_POST['accion'];

if ($accion == "tableSchool") {
	
	$arrayData[] = getDataTableSchool($conexion);
	$table = "<tbody>";	
	for ($i=0; $i < count($arrayData[0]); $i++) { 
	 	$table .= "<tr>
	 				  <td>".$arrayData[0][$i]["id_school"]."</td>
	 				   <td>".$arrayData[0][$i]["nameSchool"]."</td>
	 				   <td>".$arrayData[0][$i]["commune"]."</td>
	 				   <td>".$arrayData[0][$i]["address"]."</td>
	 				   <td>".$arrayData[0][$i]["telephone"]."</td>
	 				   <td>".$arrayData[0][$i]["director"]."</td>
	 				   <td>".$arrayData[0][$i]["emailDirector"]."</td>
	 				   <td>".$arrayData[0][$i]["contact"]."</td>
	 				   <td>".$arrayData[0][$i]["emailContac"]."</td>
	 				   <td>".$arrayData[0][$i]["telephoneContac"]."</td>
	 			  </tr>";
	 }
	 $table .= "</tbody>";
	 echo $table; 
}

if ($accion == "createSchool") {
	
	$nameInstitution = $_POST['institución'];
	$commune = $_POST['comuna'];
	$address = $_POST['direccion'];
	$telefono = $_POST['telefono'];
	$director = $_POST['director'];
	$emailDirector = $_POST['emailDirector'];
	$contac = $_POST['contacto'];
	$emailContac = $_POST['emailContac'];
	$telePhoneContact = $_POST['telePhoneContact'];

	echo createSchool($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact,$conexion);
}

?>