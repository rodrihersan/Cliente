
// Dirección del servidor
let URL = "http://localhost:3000";


// Cargar los países al iniciar la página
async function cargarPaises() {
    try {
        // Realizamos una petición GET
        let response = await fetch(URL + "/paises");

        // Comprobamos si la respuesta es correcta
        if (!response.ok) {
            throw new Error("Error al obtener los países");
        }

        // Convertimos la respuesta a JSON
        let paises = await response.json();

        // Recuperamos el select de países
        let selectPais = document.getElementById("pais");

        // Limpiamos las opciones anteriores
        selectPais.innerHTML = '<option value="">Selecciona un país</option>';

        // Añadimos los países al select
        for (let i = 0; i < paises.length; i++) {
            let opcion = document.createElement("option");
            opcion.value = paises[i].nombre;
            opcion.textContent = paises[i].nombre;
            selectPais.appendChild(opcion);
        }

    } catch (error) {
        alert(error.message);
    }
}


// Cargar las ciudades del país seleccionado
async function cargarCiudades() {
    try {
        let pais = document.getElementById("pais").value;
        let selectCiudad = document.getElementById("ciudad");

        // Limpiamos las ciudades anteriores debido a que primero hemos podido obtener como pais españa y ciudades salamanca y madrid
        //y si luego seleccionamos francia seguiran apareciendo las dosh ciudades anteriores
        selectCiudad.innerHTML = '<option value="">Selecciona una ciudad</option>';

        if (pais == "") {
            return;
        }

        // Solicitamos las ciudades del país seleccionado
        let response = await fetch(URL + "/ciudades?pais=" + encodeURIComponent(pais));

        if (!response.ok) {
            throw new Error("Error al obtener las ciudades");
        }

        let ciudades = await response.json();

        // Introducimos las ciudades en el select
        for (let i = 0; i < ciudades.length; i++) {
            let opcion = document.createElement("option");
            opcion.value = ciudades[i].nombre;
            opcion.textContent = ciudades[i].nombre;
            selectCiudad.appendChild(opcion);
        }

    } catch (error) {
        alert(error.message);
    }
}


// Mostrar los monumentos de la ciudad seleccionada
async function mostrarMonumentos() {
    try {
        let ciudad = document.getElementById("ciudad").value;

        if (ciudad == "") {
            alert("Selecciona una ciudad");
            return;
        }

        // Solicitamos los monumentos de la ciudad
        //el nombre después de ? debe coincidir con el nombre del campo que hay en el JSON.
        let response = await fetch(URL + "/monumentos?ciudad=" + encodeURIComponent(ciudad));

        if (!response.ok) {
            throw new Error("Error al obtener los monumentos");
        }

        let monumentos = await response.json();

        let tabla = document.getElementById("tablaMonumentos");

        // Limpiamos la tabla
        tabla.innerHTML = "";

        // Creamos una fila por cada monumento
        for (let i = 0; i < monumentos.length; i++) {
            let fila = document.createElement("tr");

            let celdaMonumento = document.createElement("td");
            let celdaCiudad = document.createElement("td");

            celdaMonumento.textContent = monumentos[i].nombre;
            celdaCiudad.textContent = monumentos[i].ciudad;

            fila.appendChild(celdaMonumento);
            fila.appendChild(celdaCiudad);

            tabla.appendChild(fila);
        }

        if (monumentos.length == 0) {
            tabla.innerHTML = "<tr><td colspan='2'>No hay monumentos</td></tr>";
        }

    } catch (error) {
        alert(error.message);
    }
}


// Enviar los datos del segundo formulario POST
async function enviarDatos() {

    // Recuperamos los datos introducidos
    let pais = document.getElementById("nuevoPais").value.trim();
    let ciudad = document.getElementById("nuevaCiudad").value.trim();
    let monumento = document.getElementById("nuevoMonumento").value.trim();

    // Validamos que los campos no estén vacíos
    if (pais == "" || ciudad == "" || monumento == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    try {

        // Comprobamos si el país ya existe
        let responsePaises = await fetch(URL + "/paises");

        if (!responsePaises.ok) {
            throw new Error("Error al consultar los países");
        }

        let paises = await responsePaises.json();
        let existePais = false;

        for (let i = 0; i < paises.length; i++) {
            if (paises[i].nombre.toLowerCase() == pais.toLowerCase()) {
                existePais = true;
                //no seria lo mismo si ponmeos paises[i].nombre = pais;
                //lo hacemos asi Porque queremos quedarnos 
                // con el nombre del país tal y como está guardado en el JSON
                pais = paises[i].nombre;
            }
        }

        // Si el país no existe, lo añadimos
        if (existePais == false) {

            let nuevoPais = {
                nombre: pais
            };

            let response = await fetch(URL + "/paises", {
                method: "POST",
                body: JSON.stringify(nuevoPais),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Error al guardar el país");
            }
        }


        // Comprobamos si la ciudad ya existe en ese país
        let responseCiudades = await fetch(URL + "/ciudades?pais=" + encodeURIComponent(pais));

        if (!responseCiudades.ok) {
            throw new Error("Error al consultar las ciudades");
        }

        let ciudades = await responseCiudades.json();
        let existeCiudad = false;

        for (let i = 0; i < ciudades.length; i++) {
            if (ciudades[i].nombre.toLowerCase() == ciudad.toLowerCase()) {
                existeCiudad = true;
                ciudad = ciudades[i].nombre;
            }
        }

        // Si la ciudad no existe, la añadimos
        if (existeCiudad == false) {

            let nuevaCiudad = {
                nombre: ciudad,
                pais: pais
            };

            let response = await fetch(URL + "/ciudades", {
                method: "POST",
                body: JSON.stringify(nuevaCiudad),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Error al guardar la ciudad");
            }
        }


        // Creamos el objeto del monumento
        let nuevoMonumento = {
            ciudad: ciudad,
            nombre: monumento
        };

        // Enviamos el monumento mediante POST
        let responseMonumento = await fetch(URL + "/monumentos", {
            method: "POST",
            body: JSON.stringify(nuevoMonumento),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!responseMonumento.ok) {
            throw new Error("Error al guardar el monumento");
        }

        // Si todo ha ido bien, mostramos un mensaje
        alert("Datos guardados correctamente");

        // Limpiamos los campos
        document.getElementById("nuevoPais").value = "";
        document.getElementById("nuevaCiudad").value = "";
        document.getElementById("nuevoMonumento").value = "";

        // Volvemos a cargar los países
        await cargarPaises();

    } catch (error) {
        alert(error.message);
    }
}


// Cargamos los países al abrir la página
cargarPaises();
