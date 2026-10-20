function ejercicio4A() {
    // Pide el número límite
    let limite = Number(prompt("Introduce un número:"));
    // Dos cadenas vacías donde iremos acumulando
    let pares = "";
    let impares = "";

    // Recorre desde 1 hasta el límite, de uno en uno
    for (let i = 1; i <= limite; i++) {
        // Si el resto de dividir entre 2 es 0, es par
        if (i % 2 == 0) {
            pares += i + " ";
        } else {
            impares += i + " ";
        }
    }

    // Muestra primero los pares y luego, en otra cadena, los impares
    console.log("Pares: " + pares);
    console.log("Impares: " + impares);
}


function ejercicio4B() {
    // Pide el número límite
    let limite = Number(prompt("Introduce un número:"));
    // Crea un array [1, 2, 3, ..., limite]: Array.from crea "limite" huecos y rellena con i+1
    let numeros = Array.from({ length: limite }, (_, i) => i + 1);

    // Se queda con los pares y los une con espacios
    console.log("Pares: " + numeros.filter(n => n % 2 == 0).join(" "));
    // Se queda con los impares y los une con espacios
    console.log("Impares: " + numeros.filter(n => n % 2 != 0).join(" "));
}