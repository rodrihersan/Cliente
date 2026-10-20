function ejercicio5() {
    let tabla = document.getElementById("tabla");
    let iva = Number(document.getElementById("iva").value);
    let descuento = Number(document.getElementById("descuento").value);

    let filas = Array.from(tabla.getElementsByTagName("tr"));
    filas.shift();

    let productos = filas.map(fila => {
        let celdas = fila.getElementsByTagName("td");
        return {
            producto: celdas[0].textContent,
            categoria: celdas[1].textContent,
            precio: Number(celdas[2].textContent),
            stock: Number(celdas[3].textContent)
        };
    });

    // Copia de seguridad ordenada por precio
    let copia = productos.slice();
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
    copia.sort((p1, p2) => p1.precio - p2.precio);
    console.log("Originales:", productos);
    console.log("Ordenados por precio:", copia);

    // Valor total del inventario
    let valores = productos.map(p => p.precio * p.stock);
    let total = valores.reduce((a, b) => a + b);
    console.log("Valor total del inventario: " + total.toFixed(2) + " €");

    // Agotados
    let agotados = productos.filter(p => p.stock == 0);
    let nombresAgotados = agotados.map(p => p.producto);
    console.log("Agotados: " + nombresAgotados.join(", "));
    console.log("¿Hay algún producto agotado? " + productos.some(p => p.stock == 0));
    console.log("¿Todos tienen precio mayor que 0? " + productos.every(p => p.precio > 0));

    // Precio final con IVA
    let preciosFinales = productos.map(p => {
        let final = p.precio * (1 + iva / 100);
        return p.producto + " - " + final.toFixed(2) + " €";
    });
    console.log(preciosFinales.join("\n"));

    // Categoría: se repite hasta que exista (recursividad, sin bucles)
    function pedirCategoria() {
        let categoria = prompt("Introduce una categoría:");
        let resultado = productos.filter(p => p.categoria.toLocaleLowerCase() == categoria.toLocaleLowerCase());
        if (resultado.length == 0) {
            alert("Esa categoría no existe");
            return pedirCategoria();
        }
        return resultado;
    }

    let deCategoria = pedirCategoria();
    deCategoria.sort((p1, p2) => p1.precio - p2.precio);
    let lineasCategoria = deCategoria.map(p => p.producto + " - " + p.precio + " €");
    console.log(lineasCategoria.join("\n"));

    // Descuento a esa categoría
    let aplicar = confirm("¿Aplicar el " + descuento + "% de descuento a esta categoría?");
    if (aplicar) {
        let rebajados = deCategoria.map(p => {
            return {
                producto: p.producto,
                precio: p.precio * (1 - descuento / 100),
                stock: p.stock
            };
        });
        let valoresAntes = deCategoria.map(p => p.precio * p.stock);
        let valoresDespues = rebajados.map(p => p.precio * p.stock);
        let antes = valoresAntes.reduce((a, b) => a + b);
        let despues = valoresDespues.reduce((a, b) => a + b);

        let lineasRebajadas = rebajados.map(p => p.producto + " - " + p.precio.toFixed(2) + " €");
        console.log(lineasRebajadas.join("\n"));
        console.log("El valor total del inventario baja " + (antes - despues).toFixed(2) + " €");
    }

    // Datos de un producto
    let nombre = prompt("Nombre del producto:");
    let encontrado = productos.find(p => p.producto.toLocaleLowerCase() == nombre.toLocaleLowerCase());
    if (encontrado == undefined) {
        alert("El producto no existe");
    } else {
        alert("Producto: " + encontrado.producto +
              "\nCategoría: " + encontrado.categoria +
              "\nPrecio: " + encontrado.precio + " €" +
              "\nStock: " + encontrado.stock);
    }

    // Tres más caros: copia está ordenada de menor a mayor
    let masCaros = copia.slice(-3);
    masCaros.reverse();
    let lineasCaros = masCaros.map(p => p.producto + " - " + p.precio + " €");
    console.log("Los tres más caros:\n" + lineasCaros.join("\n"));
}