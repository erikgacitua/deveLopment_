$(document).ready(function () {

	$('[data-toggle="tooltip"]').tooltip(); 

	var dataTableSchool = $.post("bff.php", {accion: "tableSchool"},function(data, status){
		if (status == "success") {
			$("#tableRegisterSchool").append(data);
			$('#table-School').DataTable({

		      "language": {
		        "decimal":        ".",
		        "emptyTable":     "No hay datos para mostrar",
		        "info":           "del _START_ al _END_ (_TOTAL_ total)",
		        "infoEmpty":      "del 0 al 0 (0 total)",
		        "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
		        "infoPostFix":    "",
		        "thousands":      "'",
		        "lengthMenu":     "Mostrar _MENU_ entradas",
		        "loadingRecords": "Cargando...",
		        "processing":     "Procesando...",
		        "search":         "Buscar:",
		        "zeroRecords":    "No hay resultados",
		        "paginate": {
		          "first":      "Primero",
		          "last":       "Último",
		          "next":       "Siguiente",
		          "previous":   "Anterior"
		        },
		        "aria": {
		          "sortAscending":  ": ordenar de manera Ascendente",
		          "sortDescending": ": ordenar de manera Descendente ",
		        }
		      }

		    });
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

				var dataTableSchool = $.post("bff.php", {accion: "tableSchool"},function(data, status){
						if (status == "success") {
							$("#tableRegisterSchool").empty();
							$("#tableRegisterSchool").append(data);
							$('#table-School').DataTable({
							      "language": {
							        "decimal":        ".",
							        "emptyTable":     "No hay datos para mostrar",
							        "info":           "del _START_ al _END_ (_TOTAL_ total)",
							        "infoEmpty":      "del 0 al 0 (0 total)",
							        "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
							        "infoPostFix":    "",
							        "thousands":      "'",
							        "lengthMenu":     "Mostrar _MENU_ entradas",
							        "loadingRecords": "Cargando...",
							        "processing":     "Procesando...",
							        "search":         "Buscar:",
							        "zeroRecords":    "No hay resultados",
							        "paginate": {
							          "first":      "Primero",
							          "last":       "Último",
							          "next":       "Siguiente",
							          "previous":   "Anterior"
							        },
							        "aria": {
							          "sortAscending":  ": ordenar de manera Ascendente",
							          "sortDescending": ": ordenar de manera Descendente ",
							        }
							      }

							    });
						}else{
							console.log(data);
							console.log("Error interno o de conexión: acción: "+acción);
							alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
						}
					});
			}else{
				console.log(data);
				console.log("Error en el ms-createSchool");
				alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
			}
		});
	}
}
//Funcion para recorrer la tabla de creación de colegios y cargarlas en el modal de edición
function editDataSchool(val){
	
	$("#table-School tr").each(function(){
		var idTable = $(this).find("td").eq(0).html();
		if (idTable == val) {

			var name_ = $(this).find("td").eq(1).html();
			var commune_ = $(this).find("td").eq(2).html();
			var direccion_ = $(this).find("td").eq(3).html();
			var telePhone_ = $(this).find("td").eq(4).html();
			var director_ = $(this).find("td").eq(5).html();
			var email_ = $(this).find("td").eq(6).html();
			var contact_ = $(this).find("td").eq(7).html();
			var emailContac_ = $(this).find("td").eq(8).html();
			var telePhoneContact_ = $(this).find("td").eq(9).html();

			$("#edit_nameInstitution").val(name_);
			$("#edit_commune").val(commune_);
			$("#edit_address").val(direccion_);
			$("#edit_telePhone").val(telePhone_);
			$("#edit_director").val(director_);
			$("#edit_emailDirector").val(email_);
			$("#edit_contact").val(contact_);
			$("#edit_emailContac").val(emailContac_);
			$("#edit_telePhoneContact").val(telePhoneContact_);
			$(".modal").modal();
			$("#btnSaveEdit").attr("onclick","saveDataEdit("+val+")");
			
		}
	});
}

function saveDataEdit(val){
	console.log(val);
	var saveName = $("#edit_nameInstitution").val();
	var saveCommune = $("#edit_commune").val();
	var saveDireccion = $("#edit_address").val();
	var saveTelephone = $("#edit_telePhone").val();
	var saveDirector = $("#edit_director").val();
	var saveEmailDir = $("#edit_emailDirector").val();
	var saveContac = $("#edit_contact").val();
	var saveEmailContac = $("#edit_emailContac").val();
	var saveTelephoneContac = $("#edit_telePhoneContact").val();
	var accion = "saveEditSchool";

	var data = $.post("bff.php",{
									accion: accion,
									save_id: val,
									save_name: saveName,
									save_commune: saveCommune,
									save_direccion: saveDireccion,
									save_telephone: saveTelephone,
									save_director: saveDirector,
									save_emailDir: saveEmailDir,
									save_contac: saveContac,
									save_emailContac: saveEmailContac,
									save_telephoneContac: saveTelephoneContac}, 
		function(data, status){
			if (data == "true") {
				alert("Los datos (Colegio '"+saveName+"'') han sido modificados exitosamente!");
				$(".modal").modal("hide");
				var dataTableSchool = $.post("bff.php", {accion: "tableSchool"},function(data, status){
						if (status == "success") {
							$("#tableRegisterSchool").empty();
							$("#tableRegisterSchool").append(data);
							$('#table-School').DataTable({
							      "language": {
							        "decimal":        ".",
							        "emptyTable":     "No hay datos para mostrar",
							        "info":           "del _START_ al _END_ (_TOTAL_ total)",
							        "infoEmpty":      "del 0 al 0 (0 total)",
							        "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
							        "infoPostFix":    "",
							        "thousands":      "'",
							        "lengthMenu":     "Mostrar _MENU_ entradas",
							        "loadingRecords": "Cargando...",
							        "processing":     "Procesando...",
							        "search":         "Buscar:",
							        "zeroRecords":    "No hay resultados",
							        "paginate": {
							          "first":      "Primero",
							          "last":       "Último",
							          "next":       "Siguiente",
							          "previous":   "Anterior"
							        },
							        "aria": {
							          "sortAscending":  ": ordenar de manera Ascendente",
							          "sortDescending": ": ordenar de manera Descendente ",
							        }
							      }

							    });
						}else{
							console.log(data);
							console.log("Error interno o de conexión: acción: "+acción);
							alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
						}
					});
			}
		});
}

function eliminaDataSchool(val){
	
	var accion = "deleteDataTableSchool";
	var data = $.post("bff.php",{accion: accion, idSchool: val},

	function(data, status){
		console.log(data);
		console.log(status);
		if (data == "true") {
			$("#table-School tr").each(function(){
				var idTable = $(this).find("td").eq(0).html();
				if (idTable == val) {
					alert("Colegio '"+$(this).find("td").eq(1).html()+"' ha sido eliminado correctamente!");

					var dataTableSchool = $.post("bff.php", {accion: "tableSchool"},function(data, status){
						if (status == "success") {
							$("#tableRegisterSchool").empty();
							$("#tableRegisterSchool").append(data);
							$('#table-School').DataTable({
							      "language": {
							        "decimal":        ".",
							        "emptyTable":     "No hay datos para mostrar",
							        "info":           "del _START_ al _END_ (_TOTAL_ total)",
							        "infoEmpty":      "del 0 al 0 (0 total)",
							        "infoFiltered":   "(filtrado de todas las _MAX_ entradas)",
							        "infoPostFix":    "",
							        "thousands":      "'",
							        "lengthMenu":     "Mostrar _MENU_ entradas",
							        "loadingRecords": "Cargando...",
							        "processing":     "Procesando...",
							        "search":         "Buscar:",
							        "zeroRecords":    "No hay resultados",
							        "paginate": {
							          "first":      "Primero",
							          "last":       "Último",
							          "next":       "Siguiente",
							          "previous":   "Anterior"
							        },
							        "aria": {
							          "sortAscending":  ": ordenar de manera Ascendente",
							          "sortDescending": ": ordenar de manera Descendente ",
							        }
							      }

							    });
						}else{
							console.log(data);
							console.log("Error interno o de conexión: acción: "+acción);
							alert("Se ha producido un problema inesperado, favor intentelo mas tarde.");
						}
					});
				}		
			});
		}
	});
}