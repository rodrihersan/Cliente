function ejercicio2() {
    // Evita que el formulario se envíe y se recargue la página
    window.event.preventDefault();

    // Lee el texto escrito en el textarea
    let texto = document.getElementById("cola").value;
    // Separa el texto en trozos cada vez que hay una coma
    let nombres = texto.split(",");
    // Quita los espacios del principio y del final de cada nombre
    let nombresLimpios = nombres.map(p => p.trim());
    // Elimina los nombres que hayan quedado vacíos
    let cola = nombresLimpios.filter(p => p != "");
    // Array vacío donde se guardarán los atendidos
    let atendidos = [];

    // Arranca el menú
    mostrarMenu(cola, atendidos);
}

function mostrarMenu(cola, atendidos) {
    // Muestra el menú y guarda lo que escribe el usuario
    let valor = prompt(
        "1-Atender al siguiente\n" +
        "2-Llega un cliente\n" +
        "3-Llega un cliente con prioridad\n" +
        "4-Se marcha el último de la cola\n" +
        "5-Consultar una persona\n" +
        "0-Salir"
    );

    // Si pulsa Cancelar, prompt devuelve null: lo tratamos como salir
    let opcion;
    if (valor === null) {
        opcion = "0";
    } else {
        // Quita espacios de lo que ha escrito
        opcion = valor.trim();
    }

    switch (opcion) {
        case "1":
            if (cola.length == 0) {
                // No hay nadie a quien atender
                alert("No queda nadie en la cola");
            } else {
                // Saca al primero de la cola
                let siguiente = cola.shift();
                // Lo guarda como atendido
                atendidos.push(siguiente);
            }
            break;

        case "2":
            // Pide el nombre del cliente que llega
            let nuevo = prompt("Nombre del cliente:");
            // Comprueba que no ha cancelado ni lo ha dejado vacío
            if (nuevo !== null && nuevo.trim() != "") {
                // Lo coloca al final de la cola
                cola.push(nuevo.trim());
            }
            break;

        case "3":
            // Pide el nombre del cliente con prioridad
            let prioritario = prompt("Nombre del cliente con prioridad:");
            // Comprueba que no ha cancelado ni lo ha dejado vacío
            if (prioritario !== null && prioritario.trim() != "") {
                // Lo coloca al principio, será el siguiente en ser atendido
                cola.unshift(prioritario.trim());
            }
            break;

        case "4":
            if (cola.length == 0) {
                // No hay nadie que pueda marcharse
                alert("No queda nadie en la cola");
            } else {
                // Guarda el nombre del último de la cola
                let ultimo = cola[cola.length - 1];
                // Pide confirmación antes de sacarlo
                let confirmar = confirm("¿Se marcha " + ultimo + "?");
                if (confirmar) {
                    // Lo saca de la cola sin guardarlo como atendido
                    cola.pop();
                }
            }
            break;

        case "5":
            // Pide el nombre de la persona a consultar
            let buscado = prompt("Nombre de la persona:");
            // Comprueba que no ha cancelado
            if (buscado !== null) {
                // Pasa el nombre a minúsculas para no distinguir mayúsculas
                let nombreBuscado = buscado.trim().toLowerCase();
                // Busca su posición en la cola (-1 si no está)
                let posicion = cola.findIndex(p => p.toLowerCase() == nombreBuscado);
                if (posicion == -1) {
                    alert(buscado.trim() + " no está en la cola");
                } else {
                    // La posición coincide con el número de personas que tiene delante
                    alert(buscado.trim() + " tiene " + posicion + " personas delante");
                }
            }
            break;

        case "0":
            // Muestra los atendidos en orden, separados por comas
            alert("Atendidos: " + atendidos.join(", "));
            // Termina la función y con ella se corta la repetición del menú
            return;

        default:
            // Cualquier otro valor es un error
            alert("Opción no válida");
    }

    // Muestra la cola por consola con -- entre personas
    console.log(cola.join("--"));
    // Muestra cuántas personas hay en la cola
    console.log("Personas en la cola: " + cola.length);

    // Vuelve a mostrar el menú
    mostrarMenu(cola, atendidos);
}