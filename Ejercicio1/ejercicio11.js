function ejercicio1() {
    let numero = Number(prompt("Introduse un numero: "));

    if(numero >= 0){
        alert("numero positive");
    }else if(numero < 0){
        alert("numero negative");
    }else{
        alert("numero nulo")
    }
}
ejercicio1();

function ejercicio2(){
    let palabra = prompt("Introduce euros o dolares: ");

    if(palabra === "euros"){
        let cantidadEuros = Number(prompt("Introduce la cantidad a convertir: "));
        alert("La cantidad en euros es: " + cantidadEuros*1.16);
    }else if (palabra === "dolares"){
        let cantidadDolares = Number(prompt("Introduce la cantidad a convertir: "));
        alert("La cantidad en dolares es: " + cantidadDolares*0.87);
    }else{
        alert("Palabra mal introducida")
    }
}
ejercicio2();

function operar(operacion) {
let valor1 = document.getElementById("num1").value;
let valor2 = document.getElementById("num2").value;

if (operacion === "m") {
multiplicar(valor1, valor2);
} else {
dividir(valor1, valor2);
}

if(isNaN(valor1) || valor1 < 0){
    document.getElementById("num1").value = null;
    return;
}

if(isNaN(valor2) || valor2 < 0){
    document.getElementById("num2").value = null;
    return;
}
}

function dividir(valor1, valor2){
let elementoResultado = document.getElementById("resultado");
let resultado = valor1 / valor2;

elementoResultado.setAttribute("value", resultado);
}

function multiplicar (valor1, valor2) {
let elementoResultado = document.getElementById("resultado");
let resultado = valor1 * valor2;

elementoResultado. setAttribute("value", resultado);
}