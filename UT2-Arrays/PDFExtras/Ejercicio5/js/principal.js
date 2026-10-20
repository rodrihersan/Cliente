function inventario() {

  // ---------- 1. LEER LOS DATOS ----------
  let iva = Number(document.getElementById("iva").value);
  let descuento = Number(document.getElementById("descuento").value);

  let filas = Array.from(document.getElementsByTagName("tr"));
  filas.shift(); // quita la fila de cabecera (primer elemento del array)

  let productos = filas.map(fila => {
    let celdas = fila.getElementsByTagName("td");

    return {
      nombre: celdas[0].textContent,
      categoria: celdas[1].textContent,
      precio: Number(celdas[2].textContent), //Ponemos number porque sino devuelve cadena de caracteres
      stock: Number(celdas[3].textContent)
    };
  });


  // ---------- 2. COPIA Y ORDENAR POR PRECIO ----------
  let copia = productos.slice();
  copia.sort((a, b) => a.precio - b.precio);
  /*
  LO MISMO
  copia.sort((a, b) => {
  if (a.precio < b.precio) {
    return 1;   // a es más barato: b va delante
  } else if (a.precio > b.precio) {
    return -1;  // a es más caro: a va delante
  } else {
    return 0;   // mismo precio: no cambia el orden
  }
});*/

  console.log("Originales:", productos);
  console.log("Ordenados por precio:", copia);


  // ---------- 3. VALOR TOTAL DEL INVENTARIO ----------
  let total = calcularTotal(productos);
  console.log("Valor total del inventario: " + total.toFixed(2) + " €");


  // ---------- 4. AGOTADOS ----------
  let agotados = productos.filter(p => p.stock === 0);

  console.log("Productos agotados:");
  agotados.forEach(p => console.log(p.nombre));

  console.log("¿Hay algún producto agotado? " + productos.some(p => p.stock === 0));
  console.log("¿Todos los precios son mayores que 0? " + productos.every(p => p.precio > 0));


  // ---------- 5. PRECIOS CON IVA ----------
  let preciosFinales = productos.map(p => {
    let precioIva = p.precio * (1 + iva / 100);
    return p.nombre + " - " + precioIva.toFixed(2) + " €";
  });

  preciosFinales.forEach(linea => console.log(linea));


  // ---------- 6. PRODUCTOS DE UNA CATEGORÍA ----------
  let deCategoria = pedirCategoria(productos);
  deCategoria.sort((a, b) => a.precio - b.precio);

  let nombreCategoria = deCategoria[0].categoria;

  console.log("Categoría " + nombreCategoria + " (de más barato a más caro):");
  deCategoria.forEach(p => console.log(p.nombre + " - " + p.precio + " €"));


  // ---------- 7. DESCUENTO A ESA CATEGORÍA ----------
  if (confirm("¿Aplicar el " + descuento + "% de descuento a " + nombreCategoria + "?")) {

    let rebajados = productos.map(p => {
      if (p.categoria === nombreCategoria) {
        return {
          nombre: p.nombre,
          categoria: p.categoria,
          precio: p.precio * (1 - descuento / 100),
          stock: p.stock
        };
      }
      return p;
    });

    let totalRebajado = calcularTotal(rebajados);
    console.log("El valor total baja " + (total - totalRebajado).toFixed(2) + " €");
  }


  // ---------- 8. BUSCAR UN PRODUCTO ----------
  let buscado = prompt("Nombre del producto:").trim().toLowerCase();
  let encontrado = productos.find(p => p.nombre.toLowerCase() === buscado);

  if (encontrado === undefined) {
    alert("Ese producto no existe");
  } else {
    alert("Producto: " + encontrado.nombre +
          " | Categoría: " + encontrado.categoria +
          " | Precio: " + encontrado.precio + " €" +
          " | Stock: " + encontrado.stock);
  }


  // ---------- 9. LOS TRES MÁS CAROS ----------
  let masCaros = copia.slice(-3);
  masCaros.reverse();

  console.log("Los tres más caros:");
  masCaros.forEach(p => console.log(p.nombre + " - " + p.precio + " €"));
}


// Suma precio x stock de todos los productos de la lista
function calcularTotal(lista) {
  return lista.reduce((total, p) => total + p.precio * p.stock, 0);
}


// Pide una categoría hasta que exista y devuelve sus productos
function pedirCategoria(productos) {
  let categoria = prompt("Categoría:").trim().toLowerCase();
  let deCategoria = productos.filter(p => p.categoria.toLowerCase() === categoria);

  if (deCategoria.length === 0) {
    alert("Esa categoría no existe, inténtalo de nuevo");
    return pedirCategoria(productos);
  }

  return deCategoria;
}