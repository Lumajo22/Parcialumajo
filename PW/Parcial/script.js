function cancelarRegistro() {
  // Redireccionar al usuario a la página de inicio u otra página deseada
  window.location.href = "inicio.html";
}

document.getElementById("registroForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var apellidos = document.getElementById("apellidos").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var estrato = document.getElementById("estrato").value;
  var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  var grupoSanguineo = document.getElementById("grupoSanguineo").value;
  var genero = document.querySelector('input[name="genero"]:checked').value;
  var actividad = document.getElementById("actividad").value;

  // Aquí puedes realizar acciones con los datos del formulario, como enviarlos a un servidor o almacenarlos localmente
  // Por ahora, simplemente mostraremos los datos en la consola
  console.log("Nombre:", nombre);
  console.log("Apellidos:", apellidos);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
  console.log("Estrato:", estrato);
  console.log("Fecha de Nacimiento:", fechaNacimiento);
  console.log("Grupo Sanguíneo:", grupoSanguineo);
  console.log("Género:", genero);
  console.log("Actividad Favorita:", actividad);

  // Aquí podrías enviar los datos del formulario a un servidor con una solicitud AJAX o realizar otra acción
});

function irARegistro() {
  window.location.href = "registro.html";
}

function irAInicio() {
  window.location.href = "inicio.html";
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validar el usuario y contraseña (simulado)
  if (username === "usuario" && password === "contraseña") {
    console.log("Inicio de sesión exitoso para el usuario:", username);
    // Aquí podrías redirigir al usuario a otra página o realizar otras acciones
  } else {
    console.log("Inicio de sesión fallido. Usuario o contraseña incorrectos.");
    // Aquí podrías mostrar un mensaje de error al usuario
  }
});
