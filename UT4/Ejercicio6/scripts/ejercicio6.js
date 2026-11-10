const URL = "http://localhost:3000/"

async function verNuevoUsuario(){
    let datoSeleccionado = document.getElementById("nombre").value;
    
    datoSeleccionado.addEventListener('change', async function(){
        let usuarioCreado = obtenerNuevoUsuario();
        let init = {
                method: 'POST',
                body: JSON.stringify(usuarioCreado),
                headers: {'Content-Type': 'application/json'}
            };

            let respuestaNuevoUsuario = await fetch(URL + 'clientes', init);

            if (respuestaNuevoUsuario.ok) {
            let datos = await respuestaNuevoUsuario.json();
            console.log("Animal creado con éxito:", datos);
            } else {
            console.error("Error al enviar el animal. Código de estado:", respuestaNuevoUsuario.status);
            }
    })
}
verNuevoUsuario();

