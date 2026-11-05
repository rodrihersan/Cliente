async function buscarDatosAnimales(){
    let tipoSeleccionado = document.getElementById("tipoAnimal").value;
    let respuestaAnimales = await fetch("http://localhost:3000/animales?Tipo=" + tipoSeleccionado);
    let datosAnimales = await respuestaAnimales.json();
    console.log(datosAnimales);

    mostrarDatos(datosAnimales);
}

function mostrarDatos(datosAnimales){
    let tablaAnimales = document.createElement("table");
    datosAnimales.forEach(animal => {
        let fila = document.createElement("tr");
        let celda1 = document.createElement("td");
        celda1.textContent = animal.Nombre;
        let celda2 = document.createElement("td");
        celda2.textContent = animal.Rasgos;
        fila.appendChild(celda1);
        fila.appendChild(celda2);

        tablaAnimales.appendChild(fila); 
    });
    document.body.appendChild(tablaAnimales);
}