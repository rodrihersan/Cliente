/*EJERCICIO 2
Siguiendo con el proyecto “TrabajarConDom”, abre la página en un navegador y realiza las
siguientes operaciones a través de la consola del mismo, documentando cada uno de los puntos
(Busca dos soluciones diferentes para ejecutar cada punto):
    1 Recupera el primer párrafo que hay dentro del div “seccionPrimera”.
    2 Recupera el tercer párrafo del div anterior.
    3 El último elemento de la lista.
    4 La label del input nombre. */

   /* //1
    //opcion1
    let divPrimero = document.getElementById("seccionPrimera");
    let parrafoPrimero = divPrimero.getElementsByTagName("p")[0];
    console.log(parrafoPrimero);

    //opcion2
    let divPrimero_v2 = document.getElementById("seccionPrimera");
    let parrafoPrimero_v2 = divPrimero_v2.firstElementChild;
    console.log(parrafoPrimero_v2);

    //2
    //opcion1
    let divPrimero_v3 = document.getElementById("seccionPrimera");
    let parrafoTercero = divPrimero_v3.getElementsByTagName("p")[2];
    console.log(parrafoTercero);

    //opcion2
    let divPrimero_v4 = document.getElementById("seccionPrimera");
    let parrafoTercero_v2 = divPrimero_v4.lastElementChild;
    console.log(parrafoTercero_v2);

    //3
    //opcion1
    let divLista = document.getElementById("seccionLista");
    let accesoLista = divLista.lastElementChild;
    let accesoLi = accesoLista.lastElementChild;
    console.log(accesoLi);

    //opcion2
    let accesoLista_v2 = document.getElementsByClassName("impar")[2];

    //4
    //opcion1
    let divForm = document.getElementById("seccionFormulario");
    let divUltimoHijo = divForm.lastElementChild;
    let inputName = divUltimoHijo.querySelectorAll('label[for="nombre"]');

    //opcion2
    let form = document.querySelector('form[action="#"]');
    let label = form.firstElementChild;

/*EJERCICIO 3
A Continuando con el ejercicio2:
    1.Recupera el innerHTML del elemento ul y su textContent.
    2.Compara los resultados de las dos recuperaciones del punto anterior.
    3.Recupera el valor del primero input radio de sexo.
    4.Busca como recuperar el valor del sexo que está seleccionado.
B Crea el archivo trabajarConDom.js y programa la siguiente funcionalidad:
    1.Al pulsar el botón Aceptar, se dará el foco a la caja del nombre.
    2.Al pulsar el botón Cancelar, el foco se quitará de la caja del nombre. */
/*
    //A.1
    let inner = accesoLista.innerHTML;
    console.log(inner);

    //A.1
    let text = accesoLista.textContent;
    console.log(text);

    //A.3
    let valorRadio = document.getElementById("seccionFormulario").lastElementChild.querySelector('input[name="sexo"]').value;
    console.log(valorRadio); 
    
    //A.4
    let valorRadio2 = document.getElementById("seccionFormulario").lastElementChild.querySelector('input[name="sexo"]:checked').value;
    
    if (valorRadio2) {
        console.log(valorRadio2.value);// Imprime "masculino", "femenino", etc.
    } else {
        console.log("No se ha seleccionado ningún sexo");
    } 


    //B
    let nombre = document.getElementById("nombre");
    let botonAceptar = document.getElementById("boton1");
    let botonCancelar = document.getElementById("boton2");

    //B.1
    botonAceptar.onclick = function() {
        nombre.focus();
    }

    //B.2
    botonCancelar.onclick = function() {
        nombre.blur();
    }*/


/*EJERCICIO 4
Continúa trabajando con el proyecto de ejercicios anteriores. En el documento
trabajandoConDom.js crea una función para cada una de las siguientes tareas:
    1.Cuando se pulse sobre el primer párrafo de la sección “seccionTercera”, crea un
elemento de tipo h2 con el texto “Lorem Ipsum de nuevo” e inclúyelo como
primer elemento hijo de dicha sección.

    2.El tercer párrafo del div seccionPrimera pasará a ser el primero del div
seccionTercera (sin eliminar ninguno de los que ya tiene esta última). Esta acción
se desencadenará cuando se pulse en ese tercer párrafo.

    3.Cuando se haga click sobre el encabezado “Frase inicial párrafos Lorem Ipsum”, se
desencadenará la siguiete acción: Se creará un div nuevo, se añadirá dicho div
tras el div seccionSegunda (como hermano posterior). Tras esto se clonará (con
todos sus descendientes) el elemento div que contiene la lista y se añadirá como
elemento hijo del nuevo div creado.

    4.Elimina la última fila de la lista nueva. Esta acción se desencadenará al pasar el
ratón por encima del encabezado h1 que hay en la página.*/

//1
function primerParrafo() {
    let div = document.getElementById("seccionTercera");

    let creacionH2 = document.createElement("h2");
    let añadirTextoH2 = document.createTextNode("Lorem Ipsum de nuevo");

    creacionH2.appendChild(añadirTextoH2);
    div.prepend(creacionH2);
}

//2 (de esta manera lo recreo)
function tercerParrafo(){
    let divPrimero = document.getElementById("seccionPrimera");
    let parrafoTercer = divPrimero.lastElementChild;
    parrafoTercer.remove();

    let creacionP = document.createElement("p");
    let añadirTextoP = document.createTextNode("Duis vulputate condimentum massa sit amet pulvinar. Sed sollicitudin mauris in laoreet condimentum. Pellentesque congue mauris libero, in scelerisque leo sodales sed. Phasellus tristique sodales consectetur. Morbi porttitor mattis nibh. Nulla quis erosvitae dolor porttitor placerat ac eu nisl. Proin mattis ultrices tellus, eget pharetra nibh pulvinar quis. In vitae ligula mi. Sed commodo commodo purus, nec dictum neque semper in. Donec molestie libero leo, et hendrerit mauris efficitureget. Nulla molestie bibendum blandit. Curabitur sed porttitor mi. Sed aliquam felis et lacus pretium consectetur.");
    creacionP.appendChild(añadirTextoP);

    let pasarSitio = document.getElementById("seccionTercera");
    pasarSitio.prepend(creacionP);

    /* de esta manera lo traslado. Prepend lo "elimina"
    function tercerParrafo() {
    let divPrimero = document.getElementById("seccionPrimera");
    let parrafoTercer = divPrimero.lastElementChild;

    let pasarSitio = document.getElementById("seccionTercera");
    pasarSitio.prepend(parrafoTercer);
    }
    */
}

//3
function crearDiv() {
    let divNuevo = document.createElement("div");

    let divSegundo = document.getElementById("seccionSegunda");
    divSegundo.after(divNuevo);

    let divLista = document.getElementById("seccionLista");
    let clonarLista = divLista.cloneNode(true);

    divNuevo.appendChild(clonarLista);
}

//4
function eliminarUltimo() {
    let divNuevo = document.body.lastElementChild;

    let divClonado = divNuevo.firstElementChild;
    let lista = divClonado.lastElementChild;

    lista.lastElementChild.remove();
}

/*
EJERCICIO 5
Continúa con el proyecto TrabajarConDom. Incluye el código adecuado para que:
1.Cuando se pulse sobre el primer elemento h2:
    o En caso de que estén visibles los párrafos segundo y quinto de la página,
    desaparezcan.
    o En caso contrario, aparecerán en su posición original.
    o Se añada al valor del atributo size, de los input de tipo texto, 5.
2.Cuando se pase el ratón por encima del texto “Escoge el sexo”:
    o Se quite el atributo name a los radio buttons. Comprueba cómo se
    comportan ahora.
3.Cuando pase el ratón por encima del título del formulario:
    o Se añada un nuevo atributo name para los radio button, con un valor
    diferente al que tuvieran de inicio.
*/


function ocultarMostrar() {
    let parrafos = document.getElementsByTagName("p");

    if (parrafos[1].classList.contains("oculto")) {
        parrafos[1].classList.remove("oculto");
        parrafos[4].classList.remove("oculto");
    } else {
        parrafos[1].classList.add("oculto");
        parrafos[4].classList.add("oculto");
    }

    let inputs = document.querySelectorAll('input[type="text"]');

    //querySelectorAll de arriba devuelve una coleccion y luego con el .length sabemos el numero exacto de la coleccion
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].size = inputs[i].size + 5;
    }
}

function añadirName() {
    let radios = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < radios.length; i++) {
        radios[i].setAttribute("name", "sexoNuevo");
    }
}

/*Partiendo del proyecto resultado del ejercicio 6, incluye el código necesario para:
➢ Incluye una nueva regla de estilo en el documento css para el selector
.parrafosNormal. Dale el color de fondo y tipo de letra que quieras.
➢ Incluye otra regla para el selector .parrafosEspecial. Asígnale un color de fondo
diferente al anterior y la letra que sea en negrita.
➢ Asigna a todos los párrafos del documento el estilo establecido para
.parrafosNormal.
➢ Utilizando DOM, cuando se haga doble click sobre el primer párrafo de la página:
o Asigna a todos los párrafos del documento, cuya posición entre los
párrafos sea múltiplo de 3(posición física en la página), el estilo
establecido para la clase parrafosEspecial (eliminando cualquier otro
estilo anteriormente asignado).
o Para los elementos de la lista, cambia el color de fondo a los que tengan
asignada la clase par. */


// 1. Asignar el estilo normal a todos los párrafos

let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].classList.add("parrafosNormal");
}


// 2. Al hacer doble click, cambiar el estilo de los párrafos
// cuya posición sea múltiplo de 3

function cambiarParrafos() {
    let parrafos = document.getElementsByTagName("p");

    for (let i = 0; i < parrafos.length; i++) {
        if ((i + 1) % 3 == 0) {
            parrafos[i].className = "parrafosEspecial";
        }
    }

    // 3. Cambiar el fondo de los elementos de lista
    // que tengan la clase par

    let elementosPar = document.getElementsByClassName("par");

    for (let i = 0; i < elementosPar.length; i++) {
        elementosPar[i].classList.add("fondoPar");
    }
}