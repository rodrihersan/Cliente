// Variables para controlar el temporizador
let idInterval = null;
let segundos = 0;

// Función que se ejecuta cuando se carga la página
function iniciarEjercicio() {

    // Después de 5 segundos, cambia el texto del diálogo y lo muestra
    setTimeout(function() {
        let parrafo = document.getElementById("textoAviso");
        parrafo.textContent = "Han pasado 5 segundos. ¡Este es un mensaje de aviso!";

        let dialogo = document.getElementById("ventanaAviso");
        dialogo.showModal();
    }, 5000);

    // Después de 7 segundos, muestra un mensaje de bienvenida
    setTimeout(function() {
        alert("¡Bienvenido a nuestra página!");
    }, 7000);
}

// Función que inicia o detiene el temporizador al pulsar el botón
function controlarTemporizador() {

    // Si no hay ningún intervalo en marcha, lo iniciamos
    if (idInterval == null) {
        segundos = 0;

        idInterval = setInterval(function() {
            segundos = segundos + 3;
            console.log("Han pasado " + segundos + " segundos");
        }, 3000);

    } else {
        // Si ya está en marcha, detenemos el intervalo
        clearInterval(idInterval);
        idInterval = null;
    }
}


//Ejercicio8
// Creamos el objeto usuario con sus tres propiedades
let usuario = {
    nombre: "Rodrigo",
    rol: "Estudiante",
    ultimoAcceso: "26/11/2026"
};

// Convertimos el objeto a formato JSON
let usuarioJSON = JSON.stringify(usuario);

// Guardamos el JSON en localStorage con la clave "datosSesion"
localStorage.setItem("datosSesion", usuarioJSON);

// Recuperamos los datos guardados en localStorage
let datosRecuperados = localStorage.getItem("datosSesion");

// Convertimos el JSON recuperado de nuevo a un objeto JavaScript
let usuarioRecuperado = JSON.parse(datosRecuperados);

// Mostramos por consola el nombre del usuario recuperado
console.log(usuarioRecuperado.nombre);


/*Ejercicio9
Muestra la URL completa de la página actual.
location.href


Obtén el nombre del dominio de la página.
location.hostname


Muestra la anchura y altura de la pantalla.
screen.width
screen.height


Muestra la anchura y altura de la ventana del navegador.
window.innerWidth
window.innerHeight


Muestra por consola la URL de la página actual, el dominio, la resolución de pantalla y las dimensiones de la ventana del navegador.

Podrías resolverlo así:
console.log("URL completa: " + location.href);
console.log("Host: " + location.hostname);

console.log("Anchura pantalla: " + screen.width);
console.log("Altura pantalla: " + screen.height);

console.log("Anchura ventana: " + window.innerWidth);
console.log("Altura ventana: " + window.innerHeight);


*/