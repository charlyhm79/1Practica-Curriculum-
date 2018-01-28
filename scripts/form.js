


var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidoUnoInput=document.getElementById("Apellido1");
var apellidoDosInput=document.getElementById("Apellido2");

var emailinput = document.getElementById("email");
var telefonoinput = document.getElementById("telefono");


var submitButton = document.getElementById("enviar");
var indicaComoInput = document.getElementById("como");

var comoMeconocisteinput = {
    internet: document.getElementById("form_Opt1"),
    referencia: document.getElementById("form_Opt3"),
    otro: document.getElementById("form_Opt3")
};


 form.addEventListener("submit", function(event) {
   if (nombreInput.checkValidity() === false) {
       alert("Escribe tu nombre");
       nombreInput.focus();
       event.preventDefault();
       return false;

   }
   if (apellidoUnoInput.checkValidity() === false) {
    alert("Escribe tu Apellido");
    apellidoUnoInput.focus();
    event.preventDefault();
    return false;
}

});