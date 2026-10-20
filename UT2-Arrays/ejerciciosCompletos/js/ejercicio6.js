function ejercicio6() {
    // Recoge el texto y lo convierte a minúsculas
    let texto = document.getElementById("texto").value.toLowerCase();

    // Recoge la longitud mínima indicada
    let minLetras = Number(document.getElementById("minLetras").value);

    // Elimina los signos de puntuación
    texto = texto.replaceAll(".", "");
    texto = texto.replaceAll(",", "");
    texto = texto.replaceAll(";", "");
    texto = texto.replaceAll(":", "");
    texto = texto.replaceAll("!", "");
    texto = texto.replaceAll("¡", "");
    texto = texto.replaceAll("?", "");
    texto = texto.replaceAll("¿", "");
    texto = texto.replaceAll("(", "");
    texto = texto.replaceAll(")", "");
    texto = texto.replaceAll('"', "");
    texto = texto.replaceAll("'", "");

    // Separa el texto por espacios
    let palabras = texto.split(" ");

    // Quita los espacios del principio y del final de cada palabra
    let palabrasLimpias = palabras.map(p => p.trim());

    // Elimina los elementos vacíos
    palabras = palabrasLimpias.filter(p => p != "");

    // Comprueba que se haya introducido algún texto
    if (palabras.length == 0) {
        alert("No has introducido ningún texto");
        return;
    }

    // Muestra el número total de palabras
    console.log("Número total de palabras: " + palabras.length);

    // Elimina las palabras repetidas
    let distintas = palabras.filter((p, i) => palabras.indexOf(p) == i);

    // Muestra el número de palabras distintas
    console.log("Número de palabras distintas: " + distintas.length);

    // Busca la palabra más larga
    let masLarga = palabras[0];

    palabras.forEach(p => {
        if (p.length > masLarga.length) {
            masLarga = p;
        }
    });

    console.log("Palabra más larga: " + masLarga);

    // Busca la palabra más corta
    let masCorta = palabras[0];

    palabras.forEach(p => {
        if (p.length < masCorta.length) {
            masCorta = p;
        }
    });

    console.log("Palabra más corta: " + masCorta);

    // Filtra las palabras distintas que cumplen la longitud mínima
    let palabrasMinimas = distintas.filter(p => p.length >= minLetras);

    // Ordena las palabras alfabéticamente
    palabrasMinimas.sort();

    // Muestra las palabras separadas por comas
    console.log("Palabras con longitud mínima: " + palabrasMinimas.join(", "));

    // Convierte la primera letra de cada palabra a mayúscula
    let palabrasMayusculas = palabras.map(p => {
        return p.charAt(0).toUpperCase() + p.slice(1);
    });

    // Muestra el texto con cada palabra empezando por mayúscula
    console.log("Texto con mayúsculas: " + palabrasMayusculas.join(" "));

    // Busca las palabras distintas de 3 o más letras que sean palíndromas
    let palindromas = distintas.filter(p => {
        if (p.length >= 3) {
            let invertida = p.split("").reverse().join("");

            if (p == invertida) {
                return true;
            }
        }

        return false;
    });

    // Muestra las palabras palíndromas
    console.log("Palabras palíndromas: " + palindromas.join(", "));

    // Pide una palabra para buscarla en el texto
    let buscada = prompt("Introduce una palabra para buscar:");

    // Comprueba que el usuario no haya pulsado Cancelar
    if (buscada !== null) {
        // Convierte la palabra buscada a minúsculas y quita espacios
        buscada = buscada.trim().toLowerCase();

        // Elimina los signos de puntuación de la palabra buscada
        buscada = buscada.replaceAll(".", "");
        buscada = buscada.replaceAll(",", "");
        buscada = buscada.replaceAll(";", "");
        buscada = buscada.replaceAll(":", "");
        buscada = buscada.replaceAll("!", "");
        buscada = buscada.replaceAll("¡", "");
        buscada = buscada.replaceAll("?", "");
        buscada = buscada.replaceAll("¿", "");
        buscada = buscada.replaceAll("(", "");
        buscada = buscada.replaceAll(")", "");
        buscada = buscada.replaceAll('"', "");
        buscada = buscada.replaceAll("'", "");

        // Cuenta cuántas veces aparece la palabra
        let coincidencias = palabras.filter(p => p == buscada);

        // Comprueba si la palabra aparece en el texto
        if (coincidencias.length == 0) {
            alert("La palabra no aparece en el texto");
        } else {
            // Busca la primera y la última posición de la palabra
            let primera = palabras.indexOf(buscada);
            let ultima = palabras.lastIndexOf(buscada);

            // Muestra las veces que aparece y sus posiciones
            alert("La palabra aparece " + coincidencias.length + " veces" +
                  "\nPrimera posición: " + (primera + 1) +
                  "\nÚltima posición: " + (ultima + 1));
        }
    }
}