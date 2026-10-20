function pedirProducto(lista) {
  let valor = prompt("Nuevo producto (un número para terminar):");

  if (valor === null || !isNaN(valor)) {
    return lista;
  }

  let producto = valor.trim();

  if (lista.includes(producto)) {
    alert("Ya está en la lista");
  } else if (confirm("¿Añadir " + producto + "?")) {
    lista.push(producto);
  }

  return pedirProducto(lista);
}

function procesar() {
  let texto = document.getElementById("lista").value;

  let lista = texto.split(",").map(p => p.trim());

  console.log(lista.length);

  lista.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  alert(lista.join(" | "));

  pedirProducto(lista);
  alert(lista.join(", "));
}

//document.getElementById("boton").onclick = procesar;