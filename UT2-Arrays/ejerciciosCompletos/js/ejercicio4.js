function ejercicio4() {
    // Coge el cuerpo de la tabla (sin la cabecera)
    let cuerpo = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    // Coge todas las filas del cuerpo y las convierte en array
    let filas = Array.from(cuerpo.getElementsByTagName("tr"));

    // Convierte cada fila en un objeto con el nombre y el array de notas
    let alumnos = filas.map(fila => {
        // Coge las celdas de la fila y las convierte en array
        let celdas = Array.from(fila.getElementsByTagName("td"));
        // Quita la primera celda (el nombre) y se queda solo con las notas
        let celdasNotas = celdas.slice(1);
        // Pasa el texto de cada nota a número
        let notas = celdasNotas.map(celda => Number(celda.textContent));
        return {
            nombre: celdas[0].textContent,
            notas: notas
        };
    });

    // Añade la media a cada alumno
    let alumnosConMedia = alumnos.map(a => {
        return {
            nombre: a.nombre,
            notas: a.notas,
            media: calcularMedia(a.notas)
        };
    });

    // Prepara los datos para la tabla de consola, con la media a 2 decimales
    let datosTabla = alumnosConMedia.map(a => {
        return {
            alumno: a.nombre,
            media: a.media.toFixed(2)
        };
    });
    // Muestra las medias por consola en formato tabla
    console.table(datosTabla);

    // Saca solo las medias de los alumnos en un array
    let medias = alumnosConMedia.map(a => a.media);
    // Calcula la media de toda la clase
    let mediaClase = calcularMedia(medias);
    // Muestra la media de la clase por consola
    console.log("Media de la clase: " + mediaClase.toFixed(2));

    // Filtra los alumnos con media de 5 o más
    let aprobados = alumnosConMedia.filter(a => a.media >= 5);
    // Filtra los alumnos con media menor que 5
    let suspensos = alumnosConMedia.filter(a => a.media < 5);
    // Se queda solo con los nombres de los aprobados
    let nombresAprobados = aprobados.map(a => a.nombre);
    // Se queda solo con los nombres de los suspensos
    let nombresSuspensos = suspensos.map(a => a.nombre);
    // Muestra aprobados separados por comas y suspensos separados por guiones
    alert("Aprobados: " + nombresAprobados.join(", ") + "\nSuspensos: " + nombresSuspensos.join(" - "));

    // Busca al alumno con la media más alta, comparando de uno en uno
    let mejor = alumnosConMedia.reduce((mejorHastaAhora, a) => {
        // Si este alumno tiene mejor media, pasa a ser el mejor
        if (a.media > mejorHastaAhora.media) {
            return a;
        }
        // Si no, se queda el que ya estaba
        return mejorHastaAhora;
    });
    // Muestra el alumno con mejor media
    alert("Mejor media: " + mejor.nombre + " (" + mejor.media.toFixed(2) + ")");

    // Comprueba si todos los alumnos tienen media de 5 o más
    let todosAprobados = alumnosConMedia.every(a => a.media >= 5);
    // Comprueba si algún alumno tiene media de 9 o más
    let algunoNueve = alumnosConMedia.some(a => a.media >= 9);
    // Muestra los dos resultados
    alert("¿Han aprobado todos? " + todosAprobados + "\n¿Alguno tiene media de 9 o más? " + algunoNueve);

    // Pide el nombre de un alumno
    let nombre = prompt("Nombre del alumno:");
    // Comprueba que no ha pulsado Cancelar
    if (nombre !== null) {
        // Pasa lo escrito a minúsculas para no distinguir mayúsculas
        let nombreBuscado = nombre.trim().toLowerCase();
        // Busca al alumno con ese nombre (undefined si no existe)
        let encontrado = alumnosConMedia.find(a => a.nombre.toLowerCase() == nombreBuscado);
        if (encontrado == undefined) {
            // No hay ningún alumno con ese nombre
            alert("El alumno " + nombre.trim() + " no existe");
        } else {
            // Muestra sus notas y su media
            alert(encontrado.nombre + "\nNotas: " + encontrado.notas.join(", ") + "\nMedia: " + encontrado.media.toFixed(2));
        }
    }

    // Calcula la nota más alta de cada alumno
    let maximos = alumnosConMedia.map(a => calcularMaximo(a.notas));
    // Calcula la nota más alta de toda la evaluación
    let maximoGlobal = calcularMaximo(maximos);
    // Filtra los alumnos que sacaron esa nota (puede haber empate)
    let mejoresNotas = alumnosConMedia.filter(a => calcularMaximo(a.notas) == maximoGlobal);
    // Se queda solo con sus nombres
    let nombresMejoresNotas = mejoresNotas.map(a => a.nombre);
    // Muestra la nota más alta y quién la obtuvo
    alert("Nota más alta: " + maximoGlobal + " (" + nombresMejoresNotas.join(", ") + ")");
}

function calcularMedia(numeros) {
    // Suma todos los números del array
    let suma = numeros.reduce((a, b) => a + b);
    // Divide la suma entre la cantidad de números
    return suma / numeros.length;
}

function calcularMaximo(numeros) {
    // Se queda con el mayor de cada pareja hasta que solo queda uno
    return numeros.reduce((a, b) => Math.max(a, b));
}