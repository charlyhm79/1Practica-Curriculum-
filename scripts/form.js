


var form = document.getElementsByName("contacto")[0];

var nombreInput = document.getElementById("nombre");
var apellidoUnoInput=document.getElementById("apellido1");
var apellidoDosInput=document.getElementById("apellido2");

var emailinput = document.getElementById("email");
var telefonoinput = document.getElementById("telefono");


var submitButton = document.getElementById("enviar");
var indicaComoInput = document.getElementById("como");
var comoInput = document.getElementById("como");

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
if (apellidoDosInput.checkValidity() === false) {
    alert("Escribe tu  segundo Apellido");
    apellidoDosInput.focus();
    event.preventDefault();
    return false;
}


    var regex =/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    var mailValidation = regex.test(emailinput.value);

if (mailValidation === false ){
    alert("tienes que escribir un email válido");
    emailinput.focus();
    event.preventDefault;
    return false;

}
if (telefonoinput.checkValidity() === false) {
    alert("Escribe un numero de telefono valido");
    telefonoinput.focus();
    event.preventDefault();
    return false;


}

if (comoMeconocisteinput.internet.checkValidity() === false ){
    alert("tienes que elegir una opcion");
    event.preventDefault;
    return false;

}

});

if (document.otro.checkValidity() === true ){
    alert('Tienes que completar el siguiente campo');
    comoInput.focus();
    event.preventDefault;
    return false;
}
