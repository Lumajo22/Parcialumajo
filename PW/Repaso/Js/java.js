function saludar(){
    var nombre = document.getElementById('nombre').value;
    console.log("Hola" + nombre);
    alert("Hola " + nombre);
}
function CambiarContenido(){
    document.getElementById('mensaje').innerHTML = "TextoNuevo";
}
function cambiarValor (){
    document.getElementById('nombre').value = "PEPITO PEREZ;"
}

function validarEdad(){
    var edad = document.getElementById('edad').value;
    if (edad < 18)  {
        alert("Menor de edad");
} else if (edad >=18) {
    alert("Mayor de edad");
} else {
    alert ("Valor no permitido");
}
}
    let texto= "Curso de programacion web";
    let resultado = text.match(/[a-f]/g);
    alert(resultado);