function ejercicio6A() {
    // Pide los números, por ejemplo: 1$2$3$4$5
    let texto = prompt("Introduce números separados por $:");
    // Corta por $ y convierte cada trozo a entero
    let array1 = texto.split("$").map(n => parseInt(n));

    // Crea array2: cada posición = su valor + el valor siguiente
    // (i + 1) % length hace que tras la última posición vuelva a la 0
    let array2 = array1.map((n, i) => n + array1[(i + 1) % array1.length]);

    // Suma todos los valores del array1 y los divide entre cuántos hay = media
    let media = array1.reduce((total, n) => total + n, 0) / array1.length;
    // Math.max(...array2) saca el mayor del segundo array
    let maximo = Math.max(...array2);
    // Muestra ambos datos
    console.log("Media del primer array: " + media);
    console.log("Número más alto del segundo array: " + maximo);

    // Junta ambos arrays con spread, ordena de menor a mayor y une con *
    let resultado = [...array1, ...array2].sort((a, b) => a - b).join("*");
    // Muestra el resultado por pantalla
    alert(resultado);
}

function ejercicio6B() {
    // Pide y convierte igual que antes
    let array1 = prompt("Introduce números separados por $:").split("$").map(Number);

    // Variante para array2: usa el tercer parámetro de map (el propio array)
    let array2 = array1.map((n, i, arr) =>
        // Si es la última posición suma el primero; si no, suma el siguiente
        i == arr.length - 1 ? n + arr[0] : n + arr[i + 1]
    );

    // Variante de la media: suma con reduce
    let media = array1.reduce((a, b) => a + b) / array1.length;
    // Variante del máximo: reduce quedándose con el mayor en cada paso
    let maximo = array2.reduce((mayor, n) => n > mayor ? n : mayor);
    console.log("Media: " + media + " | Máximo: " + maximo);

    // Variante de la unión: concat en vez de spread
    let resultado = array1.concat(array2).sort((a, b) => a - b).join("*");
    alert(resultado);
}