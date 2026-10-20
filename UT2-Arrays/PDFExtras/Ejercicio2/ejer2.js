function ejercicio2A() {
    // Pide las dos palabras
    let palabra1 = prompt("Primera palabra:");
    let palabra2 = prompt("Segunda palabra:");

    // Guarda cuántas letras tiene cada una
    let letras1 = palabra1.length;
    let letras2 = palabra2.length;

    // Si la primera es más larga
    if (letras1 > letras2) {
        alert(palabra1 + " tiene " + (letras1 - letras2) + " letras más que " + palabra2);
    // Si la segunda es más larga
    } else if (letras2 > letras1) {
        alert(palabra2 + " tiene " + (letras2 - letras1) + " letras más que " + palabra1);
    // Si no es ninguna de las dos, tienen las mismas
    } else {
        alert("Las dos palabras tienen el mismo número de letras");
    }
}


