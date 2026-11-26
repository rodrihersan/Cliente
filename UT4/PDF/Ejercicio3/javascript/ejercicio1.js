// Dirección del servidor JSON Server
const URL = "http://localhost:3000";


// Iniciar sesión
async function iniciarSesion() {

    // Recuperamos los datos introducidos
    let usuario = document.getElementById("usuario").value.trim();
    let contrasena = document.getElementById("contrasena").value.trim();

    // Comprobamos que los campos no estén vacíos
    if (usuario == "" || contrasena == "") {
        alert("Introduce el usuario y la contraseña");
        return;
    }

    try {

        // Consultamos si existe el usuario
        let response = await fetch(URL + "/usuarios?usuario=" + encodeURIComponent(usuario));

        if (!response.ok) {
            throw new Error("Error al consultar los usuarios");
        }

        let usuarios = await response.json();

        // Comprobamos si existe el usuario
        if (usuarios.length > 0) {

            // Comprobamos si la contraseña es correcta
            if (usuarios[0].contrasena == contrasena) {

                mostrarContenido(usuario);

            } else {

                alert("Contraseña incorrecta");

                document.getElementById("contrasena").value = "";
            }

        } else {

            // Preguntamos si quiere registrarse
            let respuesta = confirm("El usuario no existe. ¿Quieres darte de alta?");

            if (respuesta == true) {

                // Creamos el objeto del nuevo usuario
                let nuevoUsuario = {
                    usuario: usuario,
                    contrasena: contrasena
                };

                // Enviamos los datos mediante POST
                let response = await fetch(URL + "/usuarios", {
                    method: "POST",
                    body: JSON.stringify(nuevoUsuario),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Error al registrar el usuario");
                }

                alert("Usuario registrado correctamente");

                // Mostramos el contenido de la página
                mostrarContenido(usuario);

            } else {

                // Limpiamos el formulario
                document.getElementById("usuario").value = "";
                document.getElementById("contrasena").value = "";

            }
        }

    } catch (error) {
        alert(error.message);
    }
}


// Mostrar el contenido después del login
function mostrarContenido(usuario) {

    // Ocultamos la sección de login
    document.getElementById("login").hidden = true;

    // Mostramos la sección de contenido
    document.getElementById("contenido").hidden = false;

    // Mostramos el mensaje de bienvenida
    document.getElementById("bienvenida").textContent = "Bienvenido, " + usuario;
}


// Buscar libros en OpenLibra
async function buscarLibros() {

    // Recuperamos la palabra clave
    let palabraClave = document.getElementById("palabraClave").value.trim();

    // Comprobamos que no esté vacía
    if (palabraClave == "") {
        alert("Introduce una palabra clave");
        return;
    }

    try {

        // Solicitamos los libros a la API de OpenLibra
        let response = await fetch("https://openlibrary.org/search.json?q=" + encodeURIComponent(palabraClave));

        if (!response.ok) {
            throw new Error("Error al obtener los libros");
        }

        // Convertimos la respuesta a JSON
        let libros = await response.json();

        // Recuperamos el contenedor de resultados
        let resultados = document.getElementById("resultados");

        // Limpiamos los resultados anteriores
        resultados.innerHTML = "";

        // Comprobamos si hay libros
        if (libros.length == 0) {

            resultados.textContent = "No se han encontrado libros";

        } else {

            // Recorremos los libros recibidos
            for (let i = 0; i < libros.length; i++) {

                // Creamos un contenedor para cada libro
                let libro = document.createElement("div");
                libro.className = "libro";

                // Creamos el nombre del libro
                let nombre = document.createElement("h3");
                nombre.textContent = libros[i].title;

                // Creamos el autor
                let autor = document.createElement("p");
                autor.textContent = "Autor: " + libros[i].author;

                // Creamos el enlace
                let enlace = document.createElement("a");
                enlace.textContent = "Ver libro";
                enlace.href = libros[i].url_details;
                enlace.target = "_blank";

                // Añadimos los elementos al contenedor
                libro.appendChild(nombre);
                libro.appendChild(autor);
                libro.appendChild(enlace);

                // Añadimos el libro a los resultados
                resultados.appendChild(libro);
            }
        }

    } catch (error) {
        alert(error.message);
    }
}