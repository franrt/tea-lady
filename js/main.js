function validarDatos() {
    var valForm = document.getElementById("formulario");
    if (valForm.checkValidity() == false) {
        document.getElementById("demo").innerHTML = valForm.validationMessage;
    }
}

function capturarDatos() { //obtenemos el valor asignando un ID en el html a cada dato del form
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
    var direccion = document.getElementById("direccion").value;
    var tel = document.getElementById("tel").value;

    document.getElementById("resultado").innerHTML = "Muchas gracias por inscribirte." + "<br>" + "Datos:" + "<br>" + "Nombre: " + nombre + "<br>" + "Apellido: " + apellido + "<br>" + "eMail: " + email + "<br>"

}