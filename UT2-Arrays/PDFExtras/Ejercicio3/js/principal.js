function clasificar() {

  // ---------- 1. LEER LA TABLA ----------
  let filas = Array.from(document.getElementsByTagName("tr"));
  filas.shift(); // quita la fila de cabecera

  let clasificacion = filas.map(fila => {
    let equipo = fila.cells[0].textContent;
    let puntos = Number(fila.cells[1].textContent);
    let gf = Number(fila.cells[2].textContent);
    let gc = Number(fila.cells[3].textContent);
    let dif = gf - gc;

    return { equipo: equipo, puntos: puntos, gf: gf, gc: gc, dif: dif };
  });


  // ---------- 2. ORDENAR ----------
  clasificacion.sort((a, b) => {
    if (a.puntos !== b.puntos) {
      return b.puntos - a.puntos; // más puntos primero
    }
    return b.dif - a.dif;         // empate: mayor diferencia primero
  });


  // ---------- 3. MOSTRAR POR CONSOLA ----------
  let lineas = clasificacion.map(formatear);

  lineas.forEach(linea => console.log(linea));


  // ---------- 4. PODIO Y DESCENSO ----------
  let podio = lineas.slice(0, 3);
  let descienden = lineas.slice(-2);

  alert("PODIO\n" + podio.join("\n"));
  alert("DESCIENDEN\n" + descienden.join("\n"));


  // ---------- 5. BUSCAR UN EQUIPO ----------
  let nombre = prompt("Nombre del equipo:").trim().toLowerCase();

  let indice = clasificacion.findIndex(e => e.equipo.toLowerCase() === nombre);

  if (indice === -1) {
    alert("Ese equipo no existe");
  } else {
    alert("Está en la posición " + (indice + 1));
  }


  // ---------- 6. CLASIFICACIÓN AL REVÉS ----------
  let copia = lineas.slice();
  copia.reverse();

  console.log("--- Al revés ---");
  copia.forEach(linea => console.log(linea));
}


// Convierte un equipo en una línea de texto: "1. Sevilla – 25 puntos (dif +15)"
function formatear(equipo, i) {
  let signo = "";

  if (equipo.dif >= 0) {
    signo = "+";
  }

  let posicion = i + 1;

  return posicion + ". " + equipo.equipo + " – " + equipo.puntos +
         " puntos (dif " + signo + equipo.dif + ")";
}