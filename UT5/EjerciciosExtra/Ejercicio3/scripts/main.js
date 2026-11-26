// Creamos los 100 recuadros de la zona de dibujo
function crearCuadros() {

    let zona = document.getElementById("zonaDibujo");
    let contenido = "";

    // Creamos 100 recuadros mediante un bucle
    for (let i = 0; i < 100; i++) {
        contenido = contenido + '<div class="cuadro" onmouseover="pintar(' + i + ')"></div>';
    }

    // Introducimos los recuadros dentro de la zona de dibujo
    zona.innerHTML = contenido;
}

// Ejecutamos la función para crear los recuadros
crearCuadros();


// Función para aplicar el color seleccionado
function aplicarColor() {

    // Recuperamos el selector de color
    let selector = document.getElementById("selectorColor");

    // Obtenemos el color elegido
    let color = selector.value;

    // Recuperamos el recuadro que muestra el color actual
    let recuadro = document.getElementById("colorActual");

    // Cambiamos el color del recuadro
    recuadro.setAttribute("style", "background-color: " + color);
}


// Función para pintar los recuadros al pasar el ratón
function pintar(posicion) {

    // Recuperamos el color seleccionado
    let color = document.getElementById("selectorColor").value;

    // Recuperamos el recuadro sobre el que pasa el ratón
    let cuadro = document.getElementsByClassName("cuadro")[posicion];

    // Aplicamos el color al recuadro
    cuadro.setAttribute("style", "background-color: " + color);
}