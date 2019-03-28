<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
date_default_timezone_set('America/Santiago');

require_once('./conexion.php');
	
function getDataTableSchool($conexion){

	try{
		$sql = mysql_query("CALL sp_getDataSchool()", $conexion)or die(mysql_error());
		$rows = array();
		while ($r = mysql_fetch_assoc($sql)) {
			$rows[] = $r;
		}

		return $rows;

	} catch (Exception $e){
		return "false";
	}
}

function createSchool($nameInstitution,$commune,$address,$telefono,$director,$emailDirector,$contac,$emailContac,$telePhoneContact,$conexion){
	
	try{

		mysql_query("CALL sp_createSchool('$nameInstitution','$commune','$address','$telefono','$director','$emailDirector','$contac','$emailContac','$telePhoneContact')",$conexion)or die(mysql_error());
			
			return "true";

		} catch (Exception $e){
			return "false";
		}
}

function updateDataSchool($IdSchool, $NameSchool, $CommuneSchool, $DireccionSchool, $TelefonoSchool, $DirectorScholl, $EmailDirSchool, $ContactSchool, $EmailContactSchool, $TelefonoConSchool, $conexion){

	try{
		mysql_query("CALL sp_updateSDatachool($IdSchool, '$NameSchool', '$CommuneSchool', '$DireccionSchool', $TelefonoSchool, '$DirectorScholl', '$EmailDirSchool', '$ContactSchool', '$EmailContactSchool', $TelefonoConSchool)",$conexion)or die(mysql_error());

		return "true";

	} catch (Exception $e){
		return "false";
	}
}
?>