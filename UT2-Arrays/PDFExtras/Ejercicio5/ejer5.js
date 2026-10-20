function ejercicio5A() {
    // Pide el límite (por ejemplo 55)
    let limite = Number(prompt("Introduce un número:"));
    // a y b son los dos números "actuales" de la serie
    let a = 0;
    let b = 1;
    // Aquí guardaremos los números que vayan saliendo
    let serie = [];

    // Mientras el número actual no se pase del límite
    while (a <= limite) {
        // Lo guarda en la serie
        serie.push(a);
        // Avanza: el nuevo a es b, y el nuevo b es la suma de los dos
        [a, b] = [b, a + b];
    }

    // Une los números con espacios y los muestra
    console.log("Serie de Fibonacci: " + serie.join(" "));
}


//recursividad

function ejercicio5B() {
    // Pide el límite
    let limite = Number(prompt("Introduce un número:"));
    // Llama a la función recursiva empezando con a=0, b=1 y la serie vacía
    let serie = fibonacci(limite, 0, 1, []);
    // Muestra el resultado
    console.log("Serie de Fibonacci: " + serie.join(" "));
}

function fibonacci(limite, a, b, serie) {
    // Caso base: si ya nos pasamos del límite, devuelve lo que llevamos
    if (a > limite) {
        return serie;
    }
    // Añade el número actual a la serie
    serie.push(a);
    // Se llama a sí misma con la siguiente pareja (b, a+b)
    return fibonacci(limite, b, a + b, serie);
}