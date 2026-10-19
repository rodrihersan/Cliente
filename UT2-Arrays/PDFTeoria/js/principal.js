function ejercicio1(){
  let arrayVacio = [];
  let numero;
  let nombrePersona;
  
  do{
    numero = Number(prompt("Introduce un numero: "));
     if(isNaN(numero)){
      break;
    }
    
    nombrePersona = prompt("Introduce un nombre: ");
    
    let confirmacion = confirm("Quieres confirmar y añadir el nombre: " + nombrePersona);
    
    if(confirmacion == true){
      if(numero >= 0){
        arrayVacio.splice(numero, 0, nombrePersona);
      }else{
        arrayVacio.push(nombrePersona);
      }
    }else{
      if(numero >= 0){
        arrayVacio.splice(numero, 1);
      }else{
        arrayVacio.shift();
      }
    }    
  }while(true);
  
  console.log(arrayVacio);
}


//----------------------------------------------------------------------------------------------------------


  // EJERCICIO 2
function ejercicio2() {
  // Ejemplos de slice y splice del PDF
  let deportes = ["futbol", "baloncesto", "balonmano", "tenis"];
  let deportes2 = deportes.slice(1, 3);
  let deportes3 = deportes.slice(-2);
  let deportes4 = deportes.slice(0, -2);
  console.log(deportes2, deportes3, deportes4);
  deportes.splice(1, 2);
  console.log(deportes);

  deportes.splice(3, 0, "frontón", "bailes de salón");
  console.log(deportes);

  deportes.splice(2, 2, "halterofilia");
  console.log(deportes);

  deportes.splice(2, 1, "natación", "waterpolo");
  console.log(deportes);

  // Lista de costura
  let costura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];  
  console.log(costura);

  // Elimina el bies
  costura.splice(1, 1);
  console.log(costura);

  // Añade, entre hilo y tijeras, hilo torzal
  costura.splice(2, 0, "hilo torzal");
  console.log(costura);

  // Quita tijeras y sustitúyelas por cúter rotatorio y mesa de corte
  costura.splice(3, 1, "cúter rotatorio", "mesa de corte");
  console.log(costura);

  // Dos nuevos arrays: tres primeros elementos y del cuarto al sexto
  let primeros = costura.slice(0, 3);
  console.log(costura);
  let segundo = costura.slice(3, 6);
  console.log(costura);

  // En el segundo: remalladora en la primera posición
  segundo.splice(0, 0, "remalladora");
  console.log(costura);
  // cinta métrica en la penúltima posición
  segundo.splice(segundo.length - 1, 0, "cinta métrica");
  console.log(costura);

  console.log(costura);
  console.log(primeros);
  console.log(segundo);
}
ejercicio2();



//----------------------------------------------------------------------------------------------------------

// EJERCICIO 3 (ejercicio 2 actualizado: se ordena el original por nº de caracteres, de mayor a menor)
function ejercicio3() {
  let costura = ["tela", "bies", "hilo", "tijeras", "máquina de coser", "botón"];

  costura.splice(1, 1);
  console.log(costura);

  costura.splice(2, 0, "hilo torzal");
  console.log(costura);

  costura.splice(3, 1, "cúter rotatorio", "mesa de corte");
  console.log(costura);

  let primeros = costura.slice(0, 3);
  let segundo = costura.slice(3, 6);

  segundo.splice(0, 0, "remalladora");
  segundo.splice(segundo.length - 1, 0, "cinta métrica");

  //Ordenar el array original de mayor a menor número de caracteres
  costura.sort(function (elem1, elem2) {
    return elem2.length - elem1.length;
  });

  console.log(costura);
  console.log(primeros);
  console.log(segundo);
}


//----------------------------------------------------------------------------------------------------------

// EJERCICIO 4
function ejercicio4() {
  let texto = prompt("Introduce valores numéricos separados por /");
  let valores = texto.split("/");

  valores.sort(function (num1, num2) {
    return num1 - num2;
  });

  alert(valores.join("-"));
}

/*
Resumen del flujo
prompt devuelve siempre cadena.
"5/3/8"  →  split("/")  →  ["5","3","8"]  →  sort  →  ["3","5","8"]  →  join("-")  →  "3-5-8"
*/


//----------------------------------------------------------------------------------------------------------

// EJERCICIO 5
function ejercicio5() {
  let notas = [3, 7, 5.5, 9, 4, 10, 6, 2, 8, 5, 1, 7.5, 6.5, 4.5, 9.5];

  // Solo aprobados
  let aprobados = notas.filter(nota => nota >= 5);
  console.log(aprobados);

  // Posición de la nota 5.5 en ambos (-1 si no existe)
  console.log(notas.findIndex(nota => nota == 5.5));
  console.log(aprobados.findIndex(nota => nota == 5.5));

  // ¿Todos aprobados en el original?
  console.log(notas.every(nota => nota >= 5));

  // 12 palabras: solo las de menos de 6 caracteres
  let palabras = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón", "libro", "mesa", "perro", "camino", "sol"];
  let cortas = palabras.filter(palabra => palabra.length < 6);
  console.log(cortas);

  // Primer elemento cuya última letra sea una o
  let terminaEnO = palabras.find(palabra => palabra[palabra.length - 1] == "o");
  console.log(terminaEnO);

  // 8 teléfonos: ¿alguno termina en 3?
  let telefonos = ["600111222", "611222333", "622333444", "633444555", "644555666", "655666777", "666777888", "677888999"];
  let alguno = telefonos.some(telefono => telefono[telefono.length - 1] == "3");
  console.log(alguno);
}


//----------------------------------------------------------------------------------------------------------

// EJERCICIO 6
function ejercicio6() {
  // Ejemplos de map y reduce del PDF
  let arrayPalabras = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón"];
  let arrayMayus = arrayPalabras.map(palabra => palabra[0].toLocaleUpperCase() + palabra.slice(1));
  console.log(arrayMayus);
  let cadenaUnica = arrayPalabras.reduce((valorAnt, valorAct) => valorAnt + valorAct);
  let cadenaUnica2 = arrayPalabras.reduce((valorAnt, valorAct) => valorAnt + valorAct, "Concatenados: ");
  console.log(cadenaUnica);
  console.log(cadenaUnica2);

  // 15 notas: media y nota más alta
  let notas = [3, 7, 5.5, 9, 4, 10, 6, 2, 8, 5, 1, 7.5, 6.5, 4.5, 9.5];
  let media = notas.reduce((valorAnt, valorAct) => valorAnt + valorAct) / notas.length;
  console.log(media);
  let maxima = notas.reduce((valorAnt, valorAct) => valorAnt > valorAct ? valorAnt : valorAct);
  console.log(maxima);

  // 12 precios: gasto total y precios con IVA (10%)
  let precios = [1.5, 2.3, 4, 0.99, 3.2, 5.5, 2, 1.25, 6.7, 3.4, 2.8, 1.1];
  let total = precios.reduce((valorAnt, valorAct) => valorAnt + valorAct);
  console.log(total);
  let preciosIva = precios.map(precio => precio * 1.1);
  console.log(preciosIva);
}


//----------------------------------------------------------------------------------------------------------

// EJERCICIO 7
function ejercicio7() {
  // Ejemplo forEach
  let arrayPalabras = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón"];
  arrayPalabras.forEach((elemento, i, arrayPalabras) => {
    arrayPalabras[i] = elemento + "!!";
    console.log("Valor en la posición " + i + ":" + elemento);
  });
  console.log(arrayPalabras);

  // Ejemplo includes
  let arrayPalabras2 = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón"];
  let palabra = "Estetoscopio";
  let existe = arrayPalabras2.includes("casa");
  let existe2 = palabra.includes("u");
  console.log(existe, existe2);
}

// Función del botón del ejercicio 7 (Array.from)
function mostrarTitulares() {
  let titulares = Array.from(document.getElementsByClassName("titularNoticia"));
  titulares.forEach(titular => {
    if (!titular.textContent.includes("tr")) {
      alert(titular.textContent);
    }
  });
}


//----------------------------------------------------------------------------------------------------------

// EJERCICIO 8
function ejercicio8() {
  // Ejemplo del PDF
  let palabra = "Estetoscopio";
  let arrayPalabras = ["casa", "abedul", "coche", "rio", "alameda", "alegría", "portón"];
  let palabraCopia = palabra;
  palabra = "Sauce";
  let arrayCopia1 = arrayPalabras;
  let arrayCopia2 = arrayPalabras.slice();
  arrayCopia1[2] = "autobús";
  arrayCopia2[3] = "bahía";
  console.log(palabra, palabraCopia);
  console.log(arrayPalabras, arrayCopia1, arrayCopia2);

  // Notas y precios
  let notas = [3, 7, 5.5, 9, 4, 10, 6, 2, 8, 5, 1, 7.5, 6.5, 4.5, 9.5];
  let precios = [1.5, 2.3, 4, 0.99, 3.2, 5.5, 2, 1.25, 6.7, 3.4, 2.8, 1.1];

  // Copias directas (referencias) y con métodos (copias independientes)
  let notasRef = notas;
  let notasSlice = notas.slice();
  let notasFrom = Array.from(notas);
  let preciosRef = precios;
  let preciosSlice = precios.slice();
  let preciosFrom = Array.from(precios);

  // Modificamos las copias
  notasRef[0] = 100;
  notasSlice[1] = 200;
  notasFrom[2] = 300;
  preciosRef[0] = 100;
  preciosSlice[1] = 200;
  preciosFrom[2] = 300;

  console.log(notas, notasRef, notasSlice, notasFrom);       // notas y notasRef cambian a la vez
  console.log(precios, preciosRef, preciosSlice, preciosFrom); // precios y preciosRef cambian a la vez
}