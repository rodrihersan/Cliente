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

function ejercicio2(){
    
}
