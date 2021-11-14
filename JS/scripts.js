jQuery('document').ready(function($){

var menuBtn = $('.menu-icon'),
    menu = $('.navegacion ul');

    menuBtn.click(function(){

    if(menu.hasClass('show')){

        menu.removeClass('show');

    } else {

        menu.addClass('show');
    }
});
});

function validar(){
debugger;
    document.getElementById("Error").innerHTML = "";
    var nombre = document.getElementById("Nombre").value;
    var apellido = document.getElementById("Apellido").value;
    var numero = document.getElementById("Telefono").value;

    var dia = document.getElementById("Fecha").value;;
    const now = new Date();
    const seleccionada = new Date(dia);

    var email = document.getElementById("Email").value;
    var servicio = document.getElementById("Servicios");
    var mensaje = document.getElementById("Mensaje").value;

    var expresionU = /^[a-zA-ZÀ-ÿ\s]{1,20}$/;
    var expresionC = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
    var expresionN = /^\d{7,14}$/

    var errores = [];
    var Correctas = [];

    var tipo = document.getElementsByName('Tipo');
    var rate_tipo;
    for(var i = 0; i < tipo.length; i++){
        if(tipo[i].checked){
            rate_tipo = tipo[i].value;
        }
    }

    var horario = document.getElementsByName('Horario');
    var rate_horario;
    for(var i = 0; i < horario.length; i++){
        if(horario[i].checked){
            rate_horario = horario[i].value;
        }
    }

    if(!expresionU.test(nombre)){
        errores.push("El Nombre no es válido.");
        document.getElementById("Nombre").style.border = "1px solid red";
    } else {
        document.getElementById("Nombre").style.border = "";
        Correctas.push("Nombre: " + nombre);
    }
    if(!expresionU.test(apellido)){
        errores.push("El Apellido no es válido.");
        document.getElementById("Apellido").style.border = "1px solid red";
    } else {
        document.getElementById("Apellido").style.border = "";
        Correctas.push("Apellido: " + apellido);
    }
    if(!expresionN.test(numero)){
        errores.push("El Telefono no es válido.");
        document.getElementById("Telefono").style.border = "1px solid red";
    } else {
        document.getElementById("Telefono").style.border = "";
        Correctas.push("Numero: " + numero);
    }
    if(!expresionC.test(email)){
        errores.push("El Correo no es válido.");
        document.getElementById("Email").style.border = "1px solid red";
    } else {
        document.getElementById("Email").style.border = "";
        Correctas.push("Email: " + email);
    }
    if(rate_tipo==undefined){
        errores.push("No selecciono un Tipo de Vehiculo.");
        document.getElementById("Tipo").style.color = "red";
        document.getElementById("Tipo").style.textDecoration= "underline";
    } else {
        document.getElementById("Tipo").style.color = "black";
        document.getElementById("Tipo").style.textDecoration= "none";
        Correctas.push("Tipo de Vehiculo: " + rate_tipo);
    }

    if(servicio.value==0||servicio.value==""){
        errores.push("No selecciono un Servicio.");
        document.getElementById("Fecha").style.border = "1px solid red";
    } else {
        document.getElementById("Fecha").style.border = "";
        if(servicio.value==1){
            Correctas.push("Servicio: asd");
        }
        if(servicio.value==2){
            Correctas.push("Servicio: dsa");
        }
    }
    if(seleccionada>=now){
        Correctas.push("Dia: " + dia);
        document.getElementById("Fecha").style.border = "";
    } else {
        errores.push("La Fecha seleccionada no es valida.");
        document.getElementById("Fecha").style.border = "1px solid red";
    }
    if(rate_horario==undefined){
        errores.push("No selecciono un Horario.");
        document.getElementById("Horario").style.color = "red";
        document.getElementById("Horario").style.textDecoration= "underline";
    } else {
        document.getElementById("Horario").style.color = "black";
        document.getElementById("Horario").style.textDecoration= "none";
        Correctas.push("Horario: " + rate_horario);
    }
    if(mensaje.length > 200){
        errores.push("El Mensaje debe contener menos de 200 caracteres.");
        document.getElementById("Mensaje").style.border = "1px solid red";
    } else {
        document.getElementById("Mensaje").style.border = "";
        Correctas.push("Mensaje: " + mensaje);
    }
    if(errores.length > 0){
        var cartel = "<ul>";
            for(var i = 0;i < errores.length; i++){
                cartel += "<li>" + errores[i] + "</li>";
            }
            cartel += "</ul>";
            document.getElementById("Error").innerHTML = cartel;
            document.querySelector(".Errores").style.visibility="visible";
            jQuery(".Errores").attr("tabindex",-1).focus();
            return false;
        }
        if(Correctas.length > 0){
            var carteles = "<ul>";
                for(var i = 0;i < Correctas.length; i++){
                    carteles += "<li>" + Correctas[i] + "</li>";
                }
                cartel += "</ul>";
                document.getElementById("Visitantes").innerHTML = carteles;
                document.querySelector(".contenedor").style.visibility="visible";
                document.querySelector(".mainform").style.display="none";
                document.querySelector(".Errores").style.visibility="hidden";
                jQuery("#Visitantes").attr("tabindex",-2).focus();
                return false;
        }
        return false;
}