// Dirección del servidor
const URL = "http://localhost:3000";


// Guardar una factura
async function guardarFactura() {

    // Recuperamos los datos introducidos
    let descripcion = document.getElementById("descripcion").value.trim();
    let precio = document.getElementById("precio").value;
    let fecha = document.getElementById("fecha").value;

    // Comprobamos que todos los campos estén completos
    if (descripcion == "" || precio == "" || fecha == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {

        // Creamos el objeto de la factura
        let nuevaFactura = {
            descripcion: descripcion,
            precio: Number(precio),
            fecha: fecha
        };

        // Enviamos la factura mediante POST
        let response = await fetch(URL + "/facturas", {
            method: "POST",
            body: JSON.stringify(nuevaFactura),
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Comprobamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error("Error al guardar la factura");
        }

        alert("Factura guardada correctamente");

        // Limpiamos los campos del formulario
        document.getElementById("descripcion").value = "";
        document.getElementById("precio").value = "";
        document.getElementById("fecha").value = "";

        // Si la fecha seleccionada coincide, actualizamos la tabla
        if (document.getElementById("fechaConsulta").value == fecha) {
            mostrarFacturas();
        }

    } catch (error) {
        alert(error.message);
    }
}


// Mostrar las facturas de la fecha seleccionada
async function mostrarFacturas() {

    try {

        // Recuperamos la fecha seleccionada
        let fecha = document.getElementById("fechaConsulta").value;

        // Recuperamos el cuerpo de la tabla
        let tabla = document.getElementById("tablaFacturas");

        // Limpiamos la tabla
        tabla.innerHTML = "";

        // Si no hay fecha seleccionada, finalizamos
        if (fecha == "") {
            return;
        }

        // Solicitamos las facturas de esa fecha
        let response = await fetch(URL + "/facturas?fecha=" + fecha);

        // Comprobamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error("Error al obtener las facturas");
        }

        // Convertimos la respuesta a JSON
        let facturas = await response.json();

        // Ordenamos las facturas por precio, de menor a mayor
        facturas.sort(function(a, b) {
            return a.precio - b.precio;
        });

        // Recorremos las facturas
        for (let i = 0; i < facturas.length; i++) {

            // Creamos una fila
            let fila = document.createElement("tr");

            // Creamos las celdas
            let celdaID = document.createElement("td");
            let celdaDescripcion = document.createElement("td");
            let celdaPrecio = document.createElement("td");
            let celdaFecha = document.createElement("td");

            // Introducimos los datos en las celdas
            celdaID.textContent = facturas[i].id;
            celdaDescripcion.textContent = facturas[i].descripcion;
            celdaPrecio.textContent = facturas[i].precio;
            celdaFecha.textContent = facturas[i].fecha;

            // Añadimos las celdas a la fila
            fila.appendChild(celdaID);
            fila.appendChild(celdaDescripcion);
            fila.appendChild(celdaPrecio);
            fila.appendChild(celdaFecha);

            // Añadimos la fila a la tabla
            tabla.appendChild(fila);
        }

        // Si no hay facturas para esa fecha
        if (facturas.length == 0) {
            tabla.innerHTML = "<tr><td colspan='4'>No hay facturas para esta fecha</td></tr>";
        }

    } catch (error) {
        alert(error.message);
    }
}