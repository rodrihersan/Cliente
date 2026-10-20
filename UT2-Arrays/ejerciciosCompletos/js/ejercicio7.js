function ejercicio7() {
    // Recoge los datos de la agenda actual
    let textoAgenda = document.getElementById("agenda").value;

    // Recoge los contactos que se quieren importar
    let textoImportar = document.getElementById("importar").value;

    // Separa los contactos por líneas
    let lineasAgenda = textoAgenda.split("\n");
    let lineasImportar = textoImportar.split("\n");

    // Crea los arrays de contactos
    let agenda = [];
    let importar = [];

    // Convierte las líneas de la agenda en objetos
    lineasAgenda.forEach(linea => {
        if (linea.trim() != "") {
            let datos = linea.split(";");

            agenda.push({
                nombre: datos[0].trim(),
                telefono: datos[1].trim(),
                email: datos[2].trim()
            });
        }
    });

    // Convierte las líneas a importar en objetos
    lineasImportar.forEach(linea => {
        if (linea.trim() != "") {
            let datos = linea.split(";");

            importar.push({
                nombre: datos[0].trim(),
                telefono: datos[1].trim(),
                email: datos[2].trim()
            });
        }
    });

    // Añade los contactos importados a la agenda
    agenda = agenda.concat(importar);

    // Elimina los contactos que tengan el teléfono repetido
    let agendaSinRepetidos = [];
    let eliminados = 0;

    agenda.forEach(contacto => {
        let encontrado = agendaSinRepetidos.find(c => c.telefono == contacto.telefono);

        if (encontrado == undefined) {
            agendaSinRepetidos.push(contacto);
        } else {
            eliminados++;
        }
    });

    agenda = agendaSinRepetidos;

    // Informa de los contactos repetidos eliminados
    alert("Contactos eliminados por teléfono repetido: " + eliminados);

    // Ordena la agenda por nombre
    agenda.sort((a, b) => {
        if (a.nombre < b.nombre) {
            return -1;
        } else {
            return 1;
        }
    });

    // Muestra la agenda inicial
    console.log("Agenda inicial:");
    agenda.forEach(contacto => console.log(contacto));

    // Abre el menú de la agenda
    mostrarMenu(agenda);
}


// Muestra un título y un contacto por consola
function mostrar(titulo, ...contactos) {
    console.log(titulo);
    contactos.forEach(contacto => console.log(contacto));
}


// Muestra el menú hasta que el usuario decida salir
function mostrarMenu(agenda) {
    let valor = prompt(
        "1-Buscar\n" +
        "2-Añadir\n" +
        "3-Eliminar\n" +
        "4-Modificar email\n" +
        "5-Mostrar dominios de email\n" +
        "6-Exportar agenda\n" +
        "0-Salir"
    );

    // Si pulsa Cancelar, termina el menú
    if (valor === null) {
        return;
    }

    // Quita los espacios de la opción
    let opcion = valor.trim();

    switch (opcion) {
        case "1":
            // Pide el texto para buscar por nombre
            let texto = prompt("Introduce el texto que quieres buscar:");

            if (texto !== null) {
                // Busca los contactos que contienen el texto en el nombre
                let encontrados = agenda.filter(c =>
                    c.nombre.toLowerCase().includes(texto.trim().toLowerCase())
                );

                // Muestra los contactos encontrados
                console.log("Contactos encontrados:");
                encontrados.forEach(contacto => console.log(contacto));
            }
            break;

        case "2":
            // Pide los datos del nuevo contacto
            let nombre = prompt("Nombre:");
            let telefono = prompt("Teléfono:");
            let email = prompt("Email:");

            // Comprueba que no se haya cancelado ningún dato
            if (nombre !== null && telefono !== null && email !== null) {
                nombre = nombre.trim();
                telefono = telefono.trim();
                email = email.trim();

                if (nombre == "" || telefono == "" || email == "") {
                    alert("Todos los campos son obligatorios");
                } else {
                    // Comprueba si el teléfono ya existe
                    let encontrado = agenda.find(c => c.telefono == telefono);

                    if (encontrado != undefined) {
                        alert("Ya existe un contacto con ese teléfono");
                    } else {
                        // Añade el nuevo contacto
                        agenda.push({
                            nombre: nombre,
                            telefono: telefono,
                            email: email
                        });

                        // Ordena la agenda por nombre
                        agenda.sort((a, b) => {
                            if (a.nombre < b.nombre) {
                                return -1;
                            } else {
                                return 1;
                            }
                        });

                        // Muestra el contacto añadido
                        console.log("Contacto añadido:");
                        console.log(agenda.find(c => c.telefono == telefono));
                    }
                }
            }
            break;

        case "3":
            // Pide el teléfono del contacto que se quiere eliminar
            let telefonoEliminar = prompt("Teléfono del contacto que quieres eliminar:");

            if (telefonoEliminar !== null) {
                telefonoEliminar = telefonoEliminar.trim();

                // Busca el contacto por teléfono
                let contactoEliminar = agenda.find(c => c.telefono == telefonoEliminar);

                if (contactoEliminar == undefined) {
                    alert("No existe ningún contacto con ese teléfono");
                } else {
                    // Muestra el contacto seleccionado
                    console.log("Contacto seleccionado:");
                    console.log(contactoEliminar);

                    // Pide confirmación antes de eliminarlo
                    let confirmar = confirm("¿Quieres eliminar a " + contactoEliminar.nombre + "?");

                    if (confirmar) {
                        agenda = agenda.filter(c => c.telefono != telefonoEliminar);
                        alert("Contacto eliminado");
                    }
                }
            }
            break;

        case "4":
            // Pide el teléfono del contacto que se quiere modificar
            let telefonoModificar = prompt("Teléfono del contacto:");

            if (telefonoModificar !== null) {
                telefonoModificar = telefonoModificar.trim();

                // Busca el contacto por teléfono
                let contactoModificar = agenda.find(c => c.telefono == telefonoModificar);

                if (contactoModificar == undefined) {
                    alert("No existe ningún contacto con ese teléfono");
                } else {
                    // Pide el nuevo email
                    let nuevoEmail = prompt("Nuevo email:");

                    if (nuevoEmail !== null && nuevoEmail.trim() != "") {
                        contactoModificar.email = nuevoEmail.trim();

                        // Muestra el contacto modificado
                        console.log("Contacto modificado:");
                        console.log(contactoModificar);
                    }
                }
            }
            break;

        case "5":
            // Obtiene los dominios de email
            let dominios = agenda.map(c => c.email.split("@")[1]);

            // Elimina los dominios repetidos
            dominios = dominios.filter((d, i) => dominios.indexOf(d) == i);

            // Ordena los dominios alfabéticamente
            dominios.sort();

            // Muestra los dominios
            console.log("Dominios de email: " + dominios.join(", "));
            break;

        case "6":
            // Convierte los contactos al formato nombre;telefono;email
            let lineasExportar = agenda.map(c =>
                c.nombre + ";" + c.telefono + ";" + c.email
            );

            // Muestra la agenda exportada por consola
            console.log(lineasExportar.join("\n"));
            break;

        case "0":
            // Muestra la agenda final y termina
            console.log("Agenda final:");
            agenda.forEach(contacto => console.log(contacto));
            return;

        default:
            // Informa de que la opción no es válida
            alert("Opción no válida");
    }

    // Vuelve a mostrar el menú
    mostrarMenu(agenda);
}