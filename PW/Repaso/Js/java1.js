function saludar() {
    var nombre = document.getElementById("nombre").value;
    console.log("Hola " + nombre);
    alert("Hola " + nombre);
     }
    
     function cambiarContenido() {
    document.getElementById('mensaje').innerHTML = "Texto Nuevo";
    }
    
     function cambiarValor() {
     document.getElementById('nombre').value = "PEPITO PEREZ";
     }
    
     function validarEdad() {
       var edad = document.getElementById('edad').value;
     if (edad < 18 && edad >= 0) {
             alert("Menor de edad");
         } else if (edad >= 18) {
             alert("Mayor de edad");
         } else {
             alert("valor no permitido");
         }
     }
    
     function mostrar(index) {
         if (index == 1) {
             document.getElementById('foto').src = "https://img.freepik.com/foto-gratis/flor-rosa-fondo-blanco_1203-2127.jpg";
         } else {
             document.getElementById('foto').src = "https://i.pinimg.com/564x/56/d5/f5/56d5f554fdb1051adee7a6b3c23a5bd7.jpg";
         }
     }
    
     function bordear(index) {
         if (index == 1) {
            document.getElementById('foto').className = "estilo1";
        } else {
             document.getElementById('foto').className = "estilo2";
         }
     }
    
    
    
 let texto = "Curso de Programación Web";
 let resultado = texto.match(/[a-f]/g);
 alert(resultado);
    
    var ExpRegSoloLetras = "^[0-9a-zA-ZñÑáéíóúÁÉÍÓÚ]+$";
    
    //var expresion = "ABCDáéíó"; //Cadena de Solo Letras Valida
    var expresion = "43434ABCDáéíó"; //Cadena de Solo Letras Invalida
    
    //Evaluación de Cadena Valida de Solo Letras 
    if (expresion.match(ExpRegSoloLetras) != null)
        console.log("Letras Válido");
    
    //Evaluación de Cadena Invalida de Solo Letras     
    if (expresion.match(ExpRegSoloLetras) == null)
        console.log("Letras Invalido");