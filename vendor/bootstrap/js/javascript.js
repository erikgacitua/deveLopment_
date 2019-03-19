$(document).ready(function () {

	$('[data-toggle="tooltip"]').tooltip(); 

	var dataTableSchool = $.post("bff.php", {accion: "tableSchool"},function(data, status){
		if (status == "success") {
			$("#table-School").append(data);
		}else{
			console.log(data);
			console.log("Error interno o de conexión: acción: "+acción);
			alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
		}
	});
});

function expressionRegularEmail(valueEmail){
	
     valueEmail = valueEmail.toString()
     patron = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
     response = patron.test(valueEmail);
     return response;
}

function expressionRegularTelephon(valueTel){

	valueTel = valueTel.toString()
	patron = /^[0]?[256789]\d{8}$/
	response = patron.test(valueTel);
	return response;
}

//Acciín del botón para crear instituciones o colegios
function createSchool(){
	
	var nameInstitution = $("#nameInstitution").val();
	var commune = $("#commune option:selected").val();
	var address = $("#address").val();
	var telePhone = $("#telePhone").val();
	var director = $("#director").val();
	var emailDirector = $("#emailDirector").val();
	var contact = $("#contact").val();
	var emailContac = $("#emailContac").val();
	var telePhoneContact = $("#telePhoneContact").val();
	var accion = "createSchool";
	//Se validan los campos obligatorios
	if (nameInstitution == "") {
		alert("Favor ingresar el nombre del colegio o institución");
		$("#nameInstitution").focus();
	}else if (commune == 0){
		alert("Favor seleccionar la comuna del colegio o la institución!");
		$("#commune").focus();
	}else if (address == "") {
		alert("Favor ingresar dirección del establecimiento!");
		$("#address").focus();
	}else if (telePhone == "") {
		alert("Favor ingresar numero de telefono del colegio o institución!");
		$("#telePhone").focus();
	}else if(telePhone != "" && expressionRegularTelephon(telePhone) == false){
		alert("Favor ingresar un numero de telefono (Móvil o Fijo) correcto. Ej: Fijo 2 12345678, Móvil (5 o 6 o 7 o 8 o 9) 12345678");
		$("#telePhone").focus();
	}else if (director == "") {
		alert("Favor ingresar nombre del director!");
		$("#director").focus();
	}else if (emailDirector == "") {
		alert("Favor ingresar correo del director!");
		$("#emailDirector").focus();
	}else if(emailDirector != "" && expressionRegularEmail(emailDirector) == false){
			alert("Favor ingresar Email con formato correcto. Ej: prueba@mail.com");
			$("#emailDirector").focus();
	}else if(contact == ""){
		alert("Favor ingresar numero de telefono del contacto!");
		$("#contact").focus();
	}else if(emailContac == ""){
		alert("Favor ingresar un correo del contacto!");
		$("#emailContac").focus();
	}else if(emailContac != "" && expressionRegularEmail(emailContac) == false){
			alert("Favor ingresar Email con formato correcto. Ej: prueba@mail.com");
			$("#emailContac").focus();
	}else if(telePhoneContact == ""){
		alert("Favor ingresar un telefono del contacto!");
		$("#telePhoneContact").focus();
	}else if(telePhoneContact != "" && expressionRegularTelephon(telePhoneContact) == false){
			alert("Favor ingresar un numero de telefono (Móvil o Fijo) correcto. Ej: Fijo 2 12345678, Móvil 9 12345678");
			$("#telePhoneContact").focus();
	}else{

		var data = $.post("bff.php", { 
										institución: nameInstitution, 
										comuna: commune, 
										direccion: address, 
										telefono: telePhone, 
										director: director, 
										emailDirector: emailDirector, 
										contacto: contact, 
										emailContac: emailContac, 
										telePhoneContact: telePhoneContact, 
										accion: accion}, 
		function(data, status){
			if (data == "true") {
				alert("Colegio o institución fue creado correctamente!");
				$("#nameInstitution").val("");
				$("#commune").val("");
				$("#address").val("");
				$("#telePhone").val("");
				$("#director").val("");
				$("#emailDirector").val("");
				$("#contact").val("");
				$("#emailContac").val("");
				$("#telePhoneContact").val("");
				$("#nameInstitution").focus();
			}else{
				console.log(data);
				console.log("Error en el ms-createSchool");
				alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
			}
		});
	}
}
