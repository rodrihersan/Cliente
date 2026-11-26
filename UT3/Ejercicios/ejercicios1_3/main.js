/*1. Crea una clase Contador con los métodos para incrementar y decrementar el contador. La
clase contendrá un constructor con parámetros, los métodos necesarios para incrementar y
decrementar el contador y los métodos getters y setters*/

class Contador {

    constructor(valor) {
        this.valor = valor;
    }

    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    getValor() {
        return this.valor;
    }

    setValor(valor) {
        this.valor = valor;
    }
}

/*Ejemplo de utilización:*/

let contador = new Contador(5); 

console.log(contador.getValor()); // 5 inicializa el contador con el valor recibido.

contador.incrementar();
console.log(contador.getValor()); // 6 aumenta el contador en una unidad.

contador.decrementar();
console.log(contador.getValor()); // 5 disminuye el contador en una unidad. Como antes era 6, ahora es 5.

contador.setValor(20);
console.log(contador.getValor()); // 20 modifica el valor del contador.


/*2. Implementa un solución para el siguiente supuesto:
        a. Crea una clase Cuenta con las propiedades ingreso, reintegro y transferencia. La clase contendrá un constructor con parámetros y los métodos getters y setters.

        b. Crea una página web con un botón, que cada vez que se pulse desencadenará la siguiente acción:

            i. Pedirá al usuario por pantalla cantidad a ingresar. Dicha cantidad se almacenará como valor numérico.

            ii. Preguntará al usuario si la cantidad introducida es para ingresar o para realizar una transferencia.

            iii. En caso de ingreso almacenará el valor en ingreso y lo sumará a lo que haya en el campo reintegro.

            iv. En caso de transferencia restará dicho valor a reintegro y lo almacenará en el campo transferencia.
        
        c. Recuerda hacer un tratamiento de errores en caso de que se produzcan.*/

class Cuenta {

    constructor(ingreso, reintegro, transferencia) {
        this.ingreso = ingreso;
        this.reintegro = reintegro;
        this.transferencia = transferencia;
    }

    getIngreso() {
        return this.ingreso;
    }

    setIngreso(ingreso) {
        this.ingreso = ingreso;
    }

    getReintegro() {
        return this.reintegro;
    }

    setReintegro(reintegro) {
        this.reintegro = reintegro;
    }

    getTransferencia() {
        return this.transferencia;
    }

    setTransferencia(transferencia) {
        this.transferencia = transferencia;
    }
}

let cuenta = new Cuenta(0, 0, 0);

function realizarOperacion() {

    let cantidad;
    
    do {
        cantidad = Number(prompt("Introduce la cantidad:"));
        
        if (isNaN(cantidad) || cantidad <= 0) {
            alert("Introduce una cantidad válida y mayor que cero");
        }
    } while (isNaN(cantidad) || cantidad <= 0);


    let operacion = prompt("¿Quieres realizar un ingreso o una transferencia?");

    if (operacion === null) {
        return;
    }

    operacion = operacion.toLowerCase();

    if (operacion === "ingreso") {

        cuenta.setIngreso(cantidad);

        let nuevoReintegro = cuenta.getReintegro() + cantidad;
        cuenta.setReintegro(nuevoReintegro);

        alert("Ingreso realizado correctamente");

    } else if (operacion === "transferencia") {

        if (cantidad > cuenta.getReintegro()) {
            alert("No tienes suficiente dinero en la cuenta");
            return;
        }

        cuenta.setTransferencia(cantidad);

        let nuevoReintegro = cuenta.getReintegro() - cantidad;
        cuenta.setReintegro(nuevoReintegro);

        alert("Transferencia realizada correctamente");

    } else {
        alert("Operación no válida");
    }

    console.log("Ingreso:", cuenta.getIngreso());
    console.log("Reintegro:", cuenta.getReintegro());
    console.log("Transferencia:", cuenta.getTransferencia());
}

/*3. Crea una clase Libro con las propiedades nombre, ISBN, fechaPubli y prestado(tomará los
valores true o false) y los métodos préstamo, devolución y toString. La clase contendrá,
además, un constructor con parámetros y los métodos getters y setters. El método toString
devolverá la cadena “El libro XXXXX con ISBN XXXXX está prestado/disponible” donde se
mostrará prestado o disponible dependiendo del valor de la propiedad prestado.*/

class Libro{
    constructor(nombre, ISBN, fechaPubli, prestado){
        this.nombre = nombre;
        this.ISBN = ISBN;
        this.fechaPubli = fechaPubli;
        this.prestado = prestado;
    }

    getNombre() {
        return this.nombre;
    }

    getISBN() {
        return this.ISBN;
    }

    getFechaPubli() {
        return this.fechaPubli;
    }

    getPrestado() {
        return this.prestado;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    setISBN(ISBN) {
        this.ISBN = ISBN;
    }

    setFechaPubli(fechaPubli) {
        this.fechaPubli = fechaPubli;
    }

    setPrestado(prestado) {
        this.prestado = prestado;
    }

    toString() {
        let estado;
        
        if (this.prestado === true) {
            estado = "prestado";
        } else {
            estado = "disponible";
        }
        
        return "El libro " + this.nombre + " con ISBN " + this.ISBN + " está " + estado;
    }

    prestamo(){
        this.prestado = true;
    }

    devolucion() {
        this.prestado = false;
    }
}