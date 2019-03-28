<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');
require_once('./microServicio.php');

$accion = $_POST['accion'];

if ($accion == "tableSchool") {
	
	$arrayData[] = getDataTableSchool($conexion);
	$table = "<table class='table-school table-sm table-striped table-responsive' id='table-School'>
                <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Nombre</th>
                      <th scope='col'>Comuna</th>
                      <th scope='col'>Dirección</th>
                      <th scope='col'>Telefono</th>
                      <th scope='col'>Director</th>
                      <th scope='col'>E-mail</th>
                      <th scope='col'>Contacto</th>
                      <th scope='col'>E-mail Contacto</th>
                      <th scope='col'>Telefono Contacto</th>
                      <th scope='col'>Editar</th>
                      <th scope='col'>Eliminar</th>
                    </tr>
                </thead>
                <tbody>";	
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
	 				   <td><button id='editData' onClick='editDataSchool(".$arrayData[0][$i]["id_school"].")'><img src='./vendor/bootstrap/glyph-iconset-master/svg/si-glyph-edit.svg' style='width:16px;height:16px;'/></button></td>
	 				   <td><button id='eliminaData' onClick='eliminaDataSchool(".$arrayData[0][$i]["id_school"].")'><img src='./vendor/bootstrap/glyph-iconset-master/svg/si-glyph-delete.svg' style='width:16px;height:16px;'/></button></td>
	 			  </tr>";
	 }
	 $table .= "</tbody></table>";
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

if ($accion == "saveEditSchool") {
	
	$IdSchool = $_POST['save_id'];
	$NameSchool = $_POST['save_name'];
	$CommuneSchool = $_POST['save_commune'];
	$DireccionSchool = $_POST['save_direccion'];
	$TelefonoSchool = $_POST['save_telephone'];
	$DirectorScholl = $_POST['save_director'];
	$EmailDirSchool = $_POST['save_emailDir'];
	$ContactSchool = $_POST['save_contac'];
	$EmailContactSchool = $_POST['save_emailContac'];
	$TelefonoConSchool = $_POST['save_telephoneContac'];

	echo updateDataSchool($IdSchool, $NameSchool, $CommuneSchool, $DireccionSchool, $TelefonoSchool, $DirectorScholl, $EmailDirSchool, $ContactSchool, $EmailContactSchool, $TelefonoConSchool, $conexion);
}
?>