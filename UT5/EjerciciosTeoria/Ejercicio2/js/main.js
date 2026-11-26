/*EJERCICIO 2
Siguiendo con el proyecto “TrabajarConDom”, abre la página en un navegador y realiza las
siguientes operaciones a través de la consola del mismo, documentando cada uno de los puntos
(Busca dos soluciones diferentes para ejecutar cada punto):
    1 Recupera el primer párrafo que hay dentro del div “seccionPrimera”.
    2 Recupera el tercer párrafo del div anterior.
    3 El último elemento de la lista.
    4 La label del input nombre. */

    //1
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