async function altaNuevoCliente(){
    let nombreCliente = document.getElementById("nombre").value;
    let apellidosCliente = document.getElementById("apellidos").value;
    let dniCliente = document.getElementById("dni").value;
    let fechaNacCliente = document.getElementById("fechaNac").value;
    let sexoCliente = document.querySelector("input[name='sexo' ] : checked").value;
    let elementosPreferenciasCliente = Array. from(document.querySelectorAll("input[name=' deportes']:checked"));

    let preferenciasClienteValores = elementosPreferenciasCliente.map(element => element. value);
    let preferenciasCliente = preferenciasClienteValores.join("_");
    
    let datosNuevosClientes = {
        nombre: nombreCliente,
        apellidos: apellidosCliente,
        DNI: dniCliente,
        fechaNac: fechaNacCliente,
        Sexo: sexoCliente,
        preferencias: preferenciasCliente
    }

    let init={
        method: 'POST',
        body: JSON.stringify(datosNuevosClientes),
        headers: {'Content-Type': 'application/json'}
    }
    
    let response = await fetch("http://localhost:3000/clientes", init);
    console.log(response);
    if(response.ok && response.status==201) {
        let datosClientesAlmacenados = await response.json();
        console.log("Animal creado con éxito:", datos);
    } else {
        console.error("Error al enviar el animal. Código de estado:", respuestaNuevoUsuario.status);
    }
}