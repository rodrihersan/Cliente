function comenzarAccion(modificar){
    let modificar = document.getElementById("textArea").value;

    let listaModificada = texto.map(valor => valor+"ria");

    let mensajeUsuario = listaModificada.slice(-10);

    alert(mensajeUsuario);

    comenzarAccion(modificar);
    
}

function comenzarAccion(palabras){
    let palabras = document.getElementById("textArea").value;


    let listOrdenada = texto.sort((elem1, elem2) => {

        let a = elemn1.chatA

        if(elem1 < elem2){
            return -1;
        }

        if(elem1 > elem2){
            return 1;
        }

        return 0
    });

    alert(listOrdenada.join("_"));

}

function comenzarAccion(ocurrencias){
    let ocurrencias = document.getElementById("textArea").value;

    let palabraFiltrada = ocurrencias.filter(palabra => palabra[0] == "X");

    console.log(palabraFiltrada);

    let palabraMayor = palabraFiltrada.fitler(palabra => palabra.length > 5);

    console.log(palabraMayor)
}
