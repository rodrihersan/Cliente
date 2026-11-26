/*Descarga el proyecto “TrabajarConDom” que encontrarás en el Aula Virtual y abre la página
en un navegador. Realiza las siguientes operaciones a través de la consola (Ve guardando todo lo
que hagas en un archivo):
    1 Recupera el elemento con id “apellido1”.
    2 Recupera todos los párrafos de una vez.
    3 Recupera, de una sola vez, todos los párrafos del div con id “seccionTercera”.
    4 Recupera todos los elementos de tipo input.
    5 Recupera los elementos de tipo input con nombre “sexo”.
    6 Recupera los elementos de la lista de la clase “par”. */

function Ejercicio1(){
    //1
    let elemento1 = document.getElementById("apellido1");
    console.log(elemento1);

    //2
    let parrafos = document.getElementsByTagName("p");
    console.log(parrafos);

    //3
    let parrafoDiv = document.getElementById("seccionTercera").getElementsByTagName("p");
    console.log(parrafoDiv);

    //4
    let elementoInput = document.getElementsByTagName("input");
    console.log(elementoInput);

    //5
    //opcion1
    let elementoInputSex = document.getElementsByName("sexo");
    console.log(elementoInputSex);

    //opcion2
    let elementoInputSexo = document.querySelectorAll('input[name="sexo"]'); //atributo mas valor. Si queremos solo atributo [name]
    console.log(elementoInputSexo);

    //6
    let lista = document.getElementsByClassName("par");
    console.log(lista);
}