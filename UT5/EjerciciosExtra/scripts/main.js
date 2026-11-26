// Función para mostrar u ocultar la contraseña
function verPassword() {

    // Recuperamos el campo de contraseña
    let password = document.getElementById("password");

    // Comprobamos si la contraseña está oculta
    if (password.type == "password") {

        // Cambiamos el tipo para mostrar la contraseña
        password.type = "text";

    } else {

        // Volvemos a ocultar la contraseña
        password.type = "password";
    }
}

