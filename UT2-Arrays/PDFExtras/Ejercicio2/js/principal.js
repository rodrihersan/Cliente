function mostrarEstado(cola) {
  console.log(cola.join("--"));
  console.log(cola.length);
}

/*
CON IF/ELSE
function menu(cola, atendidos) {
  let opcion = prompt(
    "1-Atender al siguiente\n" +
    "2-Llega un cliente\n" +
    "3-Llega un cliente con prioridad\n" +
    "4-Se marcha el último de la cola\n" +
    "5-Consultar una persona\n" +
    "0-Salir"
  );

  if (opcion === "0" || opcion === null) {
    alert(atendidos.join(", "));
    return;
  }

  if (opcion === "1") {
    if (cola.length === 0) {
      alert("No queda nadie en la cola");
    } else {
      atendidos.push(cola.shift());
    }
    mostrarEstado(cola);
  } else if (opcion === "2") {
    cola.push(prompt("Nombre del cliente:").trim());
    mostrarEstado(cola);
  } else if (opcion === "3") {
    cola.unshift(prompt("Nombre del cliente con prioridad:").trim());
    mostrarEstado(cola);
  } else if (opcion === "4") {
    if (cola.length === 0) {
      alert("No queda nadie en la cola");
    } else if (confirm("¿Seguro que se marcha " + cola[cola.length - 1] + "?")) {
      cola.pop();
    }
    mostrarEstado(cola);
  } else if (opcion === "5") {
    let posicion = cola.indexOf(prompt("Nombre a consultar:").trim());
    if (posicion === -1) {
      alert("Esa persona no está en la cola");
    } else {
      alert("Tiene " + posicion + " personas delante");
    }
    mostrarEstado(cola);
  } else {
    alert("Opción no válida");
  }

  menu(cola, atendidos);
}
*/

function menu(cola, atendidos) {
  let opcion = prompt(
    "1-Atender al siguiente\n" +
    "2-Llega un cliente\n" +
    "3-Llega un cliente con prioridad\n" +
    "4-Se marcha el último de la cola\n" +
    "5-Consultar una persona\n" +
    "0-Salir"
  );

  switch (opcion) {
    case "1":
      if (cola.length === 0) {
        alert("No queda nadie en la cola");
      } else {
        atendidos.push(cola.shift());
      }
      break;

    case "2":
      cola.push(prompt("Nombre del cliente:").trim());
      break;

    case "3":
      cola.unshift(prompt("Nombre del cliente con prioridad:").trim());
      break;

    case "4":
      if (cola.length === 0) {
        alert("No queda nadie en la cola");
      } else if (confirm("¿Seguro que se marcha " + cola[cola.length - 1] + "?")) {
        cola.pop();
      }
      break;

    case "5":
      let posicion = cola.indexOf(prompt("Nombre a consultar:").trim());
      if (posicion === -1) {
        alert("Esa persona no está en la cola");
      } else {
        alert("Tiene " + posicion + " personas delante");
      }
      break;

    case "0":
    case null:
      alert(atendidos.join(", "));
      return;

    default:
      alert("Opción no válida");
  }

  mostrarEstado(cola);
  menu(cola, atendidos);
}

function iniciar() {
  let texto = document.getElementById("nombres").value;
  let cola = texto.split(",").map(n => n.trim());
  let atendidos = [];

  mostrarEstado(cola);
  menu(cola, atendidos);
}