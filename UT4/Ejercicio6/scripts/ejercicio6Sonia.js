async function altaNuevoCliente(){
    let nombreCliente = "Sonia";
    let apellidosCliente = "Gutierrez Garcia";
    let dniCliente = "709798W"
    let fechaCliente = "25/15/2000";
    let sexoCliente = "M";
    let preferenciasCliente = "equipo_text";

    let datosNuevosClientes = {
        nombre: nombreCliente,
        apellidos: apellidosCliente,
        DNI: dniCliente,
        fechaNac: fechaCliente,
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