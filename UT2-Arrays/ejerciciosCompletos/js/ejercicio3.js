function ejercicio3() {
    // Coge el cuerpo de la tabla (sin la cabecera)
    let cuerpo = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    // Coge todas las filas del cuerpo y las convierte en array
    let filas = Array.from(cuerpo.getElementsByTagName("tr"));

    let clasificacion = filas.map(fila => {
    // Coge todas las casillas (td) de esta fila
    let celdas = fila.getElementsByTagName("td");

    // Lee el texto de cada casilla, una por una
    let textoEquipo = celdas[0].textContent;   // casilla 0: nombre del equipo
    let textoPuntos = celdas[1].textContent;   // casilla 1: puntos
    let textoGf = celdas[2].textContent;       // casilla 2: goles a favor
    let textoGc = celdas[3].textContent;       // casilla 3: goles en contra

    // El texto "25" no es un número, así que lo convertimos con Number
    let equipo = textoEquipo;                  // el nombre se queda como texto
    let puntos = Number(textoPuntos);
    let gf = Number(textoGf);
    let gc = Number(textoGc);

    // Calcula la diferencia de goles (a favor menos en contra)
    let dif = gf - gc;

    // Crea la "ficha" del equipo con todos los datos
    let ficha = {
        equipo: equipo,
        puntos: puntos,
        gf: gf,
        gc: gc,
        dif: dif
    };

    // Devuelve la ficha: map la guarda en el nuevo array
    return ficha;
});

    // Ordena de mayor a menor puntos y, si empatan, de mayor a menor diferencia
    clasificacion.sort((a, b) => {
        // Si los puntos son distintos, decide el que tiene más puntos
        if (a.puntos != b.puntos) {
            return b.puntos - a.puntos;
        }
        // Si hay empate a puntos, decide la diferencia de goles
        return b.dif - a.dif;
    });

    // Crea una línea de texto por equipo con su posición (posición = índice + 1)
    let lineas = clasificacion.map((equipo, i) => crearLinea(equipo, i + 1));
    // Muestra la clasificación por consola, un equipo por línea
    console.log(lineas.join("\n"));

    // Muestra el podio: los tres primeros
    alert("Podio:\n" + lineas.slice(0, 3).join("\n"));
    // Muestra los dos equipos que descienden: los dos últimos
    alert("Descienden:\n" + lineas.slice(-2).join("\n"));

    // Pide el nombre de un equipo
    let nombre = prompt("Nombre del equipo:");
    // Comprueba que no ha pulsado Cancelar
    if (nombre !== null) {
        // Pasa lo escrito a minúsculas para no distinguir mayúsculas
        let nombreBuscado = nombre.trim().toLowerCase();
        // Busca la posición del equipo en la clasificación (-1 si no existe)
        let posicion = clasificacion.findIndex(e => e.equipo.toLowerCase() == nombreBuscado);
        if (posicion == -1) {
            // No hay ningún equipo con ese nombre
            alert("El equipo " + nombre.trim() + " no existe");
        } else {
            // El índice empieza en 0, así que se suma 1 para dar la posición
            alert(clasificacion[posicion].equipo + " está en la posición " + (posicion + 1));
        }
    }

    // Hace una copia del array para no estropear el ordenado
    let copia = clasificacion.slice();
    // Da la vuelta a la copia, el original queda como estaba
    copia.reverse();
    // Crea las líneas de la copia; la posición real es el total menos el índice
    let lineasAlReves = copia.map((equipo, i) => crearLinea(equipo, copia.length - i));
    // Muestra la clasificación al revés por consola
    console.log(lineasAlReves.join("\n"));
}

function crearLinea(equipo, posicion) {
    // Los positivos llevan + delante; los negativos ya llevan su -
    let signo = "";
    if (equipo.dif > 0) {
        signo = "+";
    }
    // Monta el texto con el formato pedido
    return posicion + ". " + equipo.equipo + " – " + equipo.puntos + " puntos (dif " + signo + equipo.dif + ")";
}