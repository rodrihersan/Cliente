function ejercicio1A() {
    // Crea el array vacío donde guardaremos los números
    let numeros = [];
    // Pide el primer valor al usuario
    let valor = prompt("Introduce un número (vacío para terminar):");

    // Repite mientras NO sea cadena vacía y NO haya pulsado Cancelar (null)
    while (valor !== "" && valor !== null) {
        // Convierte el texto a número y lo añade al final del array
        numeros.push(Number(valor));
        // Vuelve a pedir otro valor para la siguiente vuelta
        valor = prompt("Introduce un número (vacío para terminar):");
    }

    // Ordena de menor a mayor: a - b es negativo si a es menor, así que a va antes
    numeros.sort((a, b) => a - b);
    // Muestra el array ordenado
    alert("Array ordenado: " + numeros.join(", "));
}

//con recursividad
function ejercicio1B() {
    // Crea el array vacío y se lo pasa a la función que pide números
    let numeros = [];
    pedirNumero(numeros);
    // Cuando termina de pedir, ordena de menor a mayor
    numeros.sort((a, b) => a - b);
    // Muestra el resultado
    alert("Array ordenado: " + numeros.join(", "));
}

function pedirNumero(numeros) {
    // Pide un valor
    let valor = prompt("Introduce un número (vacío para terminar):");
    // Si es vacío o Cancelar, termina sin hacer nada más
    if (valor === "" || valor === null) {
        return;
    }
    // Si no, lo guarda como número al final del array
    numeros.push(Number(valor));
    // Se llama a sí misma para pedir el siguiente
    pedirNumero(numeros);
}