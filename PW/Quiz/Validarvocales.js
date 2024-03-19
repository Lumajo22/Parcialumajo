
function Validarvocales(texto) {
    var nombre = document.getElementById("nombre").value;
    return texto.match(/[aeiouáéíóú]/gi).length;
}

console.log(Validarvocales('Hola '));   
console.log(Validarvocales('Estado'));  
console.log(Validarvocales('JAVASCRIPT'));  