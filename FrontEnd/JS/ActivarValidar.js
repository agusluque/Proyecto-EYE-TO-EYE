$(document).ready(function () {

    $('.slider').slider();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('select').formSelect();

    $(".likeicon").click(function () {
        let send = {
        }
        if ($(this).html() == "favorite_border") {
            send = {
                elemento: $(this).attr("id"),
                estado: true
            }
            $(this).html("favorite");
            $(".likeicon").attr("data-tooltip","Deslikear");
        } else {
            send = {
                elemento: $(this).attr("id"),
                estado: false
            }
            $(this).html("favorite_border");
            $(".likeicon").attr("data-tooltip","Likear");
        }
        $.post("localhost:5000/like",send)
    });

    $(".coments").hide();
    $(".comentstrig").click(function(){
        $(".coments").show();
        $(".comentstrig").hide();
    });
    $(".comentsclose").click(function(){
        $(".coments").hide();
        $(".comentstrig").show();
    });

    $(".inputtextoalt").hide();
    $(".inputimagen").change(function(){
        var valor = $(".inputimagen").val();
        if (valor = ""){
            $(".inputtextoalt").hide();
        } else{
            $(".inputtextoalt").show();
        }
    });

});

function btnsiguiente() {

    var elem = document.querySelector('.slider');
    var instance = M.Slider.getInstance(elem);

    instance.next();

}

function btnanterior() {

    var elem = document.querySelector('.slider');
    var instance = M.Slider.getInstance(elem);

    instance.prev();

}

function validarNombre(parametro) {

    var patron = /^[a-zA-Z\s]*$/;

    if (parametro.search(patron)) {
        return false;
    } else {
        return true;
    }

}

function validarEspacioBlanco(parametro) {

    var patron = /^\s+$/;

    if (patron.test(parametro)) {
        return false;
    } else {
        return true;
    }
}

function deshabilitaboton() {

    var formulario = document.registro;
    var boton = document.getElementById("subregis");

    if (formulario.email.value == "" || validarEspacioBlanco(formulario.email.value) == false || formulario.first_name.value == "" || validarEspacioBlanco(formulario.first_name.value) == false || formulario.password.value == "" || validarEspacioBlanco(formulario.password.value) == false || formulario.confirmar.value == "" || validarEspacioBlanco(formulario.confirmar.value) == false) {
        boton.disabled = true;
    } else {
        boton.disabled = false;
    }

}

function validarRegistro() {

    var formulario = document.registro;

    /* if(formulario.email.value == "" || validarEspacioBlanco(formulario.email.value) == false){
         alert("el mail esta vacio");
         formulario.email.value = "";
         formulario.email.focus();
         return false;
     } else {
         
     } */

    if (formulario.password.value != formulario.confirmar.value) {
        alert("las contrasenias nos son iguales");
        formulario.password.value = "";
        formulario.confirmar.value = "";
        formulario.password.focus();
        return false;
    } else {

    }

    if (validarNombre(formulario.first_name.value) == false) {
        alert("el nombre tiene algun numero");
        formulario.first_name.focus();
        return false;
    } else {

    }

    formulario.submit();
}

function validarLogin() {

    var formularioo = document.login;
    var botonn = document.getElementById("subis");

    if (formularioo.email.value == "" || validarEspacioBlanco(formularioo.email.value) == false || formularioo.password.value == "" || validarEspacioBlanco(formularioo.password.value) == false) {
        botonn.disabled = true;
    } else {
        botonn.disabled = false;
    }

}

function enviarform() {

    var formulario2 = document.login;
    formulario2.submit();

}

