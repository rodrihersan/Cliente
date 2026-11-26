// Array que almacena el estado de las 9 casillas
let tablero = ["", "", "", "", "", "", "", "", ""];

// Variable para controlar el turno
let turno = 1;

// Variable para saber si la partida está en marcha
let partidaIniciada = false;

// Combinaciones posibles para conseguir tres en raya
let combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Función para iniciar la partida
function iniciarPartida() {

    // Recuperamos los nombres de los jugadores
    let nombre1 = document.getElementById("jugador1").value;
    let nombre2 = document.getElementById("jugador2").value;

    // Comprobamos que los dos jugadores hayan introducido sus nombres
    if (nombre1 == "" || nombre2 == "") {
        alert("Introduce el nombre de los dos jugadores");
        return;
    }

    // Reiniciamos el tablero y empezamos la partida
    reiniciarTablero();

    // Indicamos que la partida está iniciada
    partidaIniciada = true;

    // Habilitamos las 9 casillas
    for (let i = 0; i < 9; i++) {
        document.getElementById("casilla" + i).disabled = false;
    }

    // Empieza el jugador 1
    turno = 1;
}

// Función que se ejecuta al pulsar una casilla
function jugar(posicion) {

    // Comprobamos que la partida esté iniciada y la casilla vacía
    if (partidaIniciada == false || tablero[posicion] != "") {
        return;
    }

    // Recuperamos la casilla pulsada
    let casilla = document.getElementById("casilla" + posicion);

    // Comprobamos el turno del jugador
    if (turno == 1) {

        // Marcamos la casilla en azul
        tablero[posicion] = "X";
        casilla.textContent = "X";
        casilla.classList.add("azul");

        // Pasamos el turno al jugador 2
        turno = 2;

    } else {

        // Marcamos la casilla en verde
        tablero[posicion] = "O";
        casilla.textContent = "O";
        casilla.classList.add("verde");

        // Pasamos el turno al jugador 1
        turno = 1;
    }

    // Comprobamos si hay un ganador
    comprobarGanador();
}

// Función para comprobar si algún jugador ha ganado
function comprobarGanador() {

    // Recorremos todas las combinaciones posibles
    for (let i = 0; i < combinaciones.length; i++) {

        let a = combinaciones[i][0];
        let b = combinaciones[i][1];
        let c = combinaciones[i][2];

        // Comprobamos si las tres casillas tienen el mismo valor
        if (tablero[a] != "" && tablero[a] == tablero[b] && tablero[b] == tablero[c]) {

            // Obtenemos el nombre del ganador
            let ganador;

            if (tablero[a] == "X") {
                ganador = document.getElementById("jugador1").value;
            } else {
                ganador = document.getElementById("jugador2").value;
            }

            // Mostramos el mensaje de victoria
            alert("¡Ha ganado " + ganador + "!");

            // Terminamos la partida
            partidaIniciada = false;

            // Deshabilitamos todas las casillas
            deshabilitarTablero();

            return;
        }
    }

    // Comprobamos si todas las casillas están ocupadas
    let empate = true;

    for (let i = 0; i < 9; i++) {
        if (tablero[i] == "") {
            empate = false;
        }
    }

    // Si no quedan casillas libres, hay empate
    if (empate == true) {
        alert("¡La partida ha terminado en empate!");
        partidaIniciada = false;
        deshabilitarTablero();
    }
}

// Función para deshabilitar todas las casillas
function deshabilitarTablero() {

    for (let i = 0; i < 9; i++) {
        document.getElementById("casilla" + i).disabled = true;
    }
}

// Función para limpiar el tablero
function reiniciarTablero() {

    // Vaciamos el array
    tablero = ["", "", "", "", "", "", "", "", ""];

    // Limpiamos las casillas y quitamos sus colores
    for (let i = 0; i < 9; i++) {

        let casilla = document.getElementById("casilla" + i);

        casilla.textContent = "";
        casilla.classList.remove("azul");
        casilla.classList.remove("verde");
    }
}

// Función para reiniciar completamente la partida
function reiniciarPartida() {

    // Indicamos que la partida ya no está iniciada
    partidaIniciada = false;

    // Limpiamos el tablero
    reiniciarTablero();

    // Deshabilitamos las casillas
    deshabilitarTablero();

    // Volvemos al turno del jugador 1
    turno = 1;
}