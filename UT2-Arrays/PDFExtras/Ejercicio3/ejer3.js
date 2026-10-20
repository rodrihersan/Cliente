function ejercicio3A() {
    // Pide los tres números, por ejemplo: 4&4&7
    let texto = prompt("Introduce tres números separados por &:");
    // Corta por & y convierte cada trozo a número
    let [a, b, c] = texto.split("&").map(Number);

    // Si a=b y b=c, los tres son iguales
    if (a == b && b == c) {
        alert("Los tres números son iguales");
    // Si alguna pareja coincide, solo dos son iguales
    } else if (a == b || a == c || b == c) {
        alert("Solo dos números son iguales");
    // Si no, todos son diferentes
    } else {
        // Math.max devuelve el mayor de los que le pases
        alert("Todos son diferentes. El mayor es " + Math.max(a, b, c));
    }
}