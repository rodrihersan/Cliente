function ejercicio1() {
    // Evita que el formulario se envíe y se recargue la página
    window.event.preventDefault();

    // Lee el texto escrito en el campo con id "productos"
    let texto = document.getElementById("productos").value;
    // Separa por comas, quita espacios de los extremos y elimina los vacíos
    let lista = texto.split(",").map(p => p.trim()).filter(p => p != "");

    // Muestra por consola cuántos productos hay
    console.log("Número de productos: " + lista.length);

    // Ordena la lista alfabéticamente sin distinguir mayúsculas
    lista.sort((a, b) => {
        // Pasa los dos productos a minúsculas para compararlos
        let minusculaA = a.toLowerCase();
        let minusculaB = b.toLowerCase();
        // Si A va antes que B, devuelve negativo (A se queda delante)
        if (minusculaA < minusculaB) {
            return -1;
        }
        // Si A va después que B, devuelve positivo (A pasa detrás)
        if (minusculaA > minusculaB) {
            return 1;
        }
        // Si son iguales, no cambia el orden
        return 0;
    });
    // Muestra la lista ordenada separada por " | "
    alert(lista.join(" | "));

    // Pide productos nuevos (modifica la misma lista, porque los arrays se pasan por referencia)
    pedirProducto(lista);

    // Cuando termina de pedir productos, muestra la lista final por consola
    console.log(lista.join(", "));
}

function pedirProducto(lista) {
    // Pide un producto nuevo y guarda lo que escribe el usuario
    let valor = prompt("Introduce un nuevo producto (un número para terminar):");
    // Si pulsa Cancelar, prompt devuelve null: termina la función
    if (valor === null) {
        return;
    }

    // Quita los espacios del principio y del final
    let producto = valor.trim();
    // Si no está vacío y es un número, termina (así se sale del bucle)
    if (producto != "" && !isNaN(producto)) {
        return;
    }

    // Solo trabaja con el producto si ha escrito algo
    if (producto != "") {
        // Comprueba si ya existe en la lista, sin distinguir mayúsculas
        let existe = lista.some(p => p.toLowerCase() == producto.toLowerCase());
        if (existe) {
            // Avisa de que está repetido y no lo añade
            alert("El producto ya está en la lista");
        } else if (confirm("¿Quieres añadir " + producto + " a la lista?")) {
            // Si el usuario acepta, lo añade al final de la lista
            lista.push(producto);
        }
    }

    // Se llama a sí misma para volver a pedir otro producto (recursividad)
    pedirProducto(lista);
}