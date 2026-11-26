
/*4. Crea una clase Empleado con 5 propiedades cualesquiera, entre ellos tipo de empleado. La
clase tendrá un método estático que devolverá los posibles valores de tipo de empleado
"programador junior", "programador senior" y "analista-programador"


class Empleado {
    constructor(nombre, primerApellido, segundoApellido, direccion, tipo) {
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.direccion = direccion;
        this.tipo = tipo;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    static getTiposEmpleado() {
        return ["programador junior", "programador senior", "analista-programador"];
    }
}
eliminado porque se necesita en el ejercicio 7 y para que no exista duplicidad
*/

/*5. Crea una clase NIF. Los atributos serán el número de DNI y la letra:
a. El constructor recibirá únicamente el número de DNI. Para calcular la letra llamará al
método correspondiente.
b. La clase contendrá un método que calcule la letra del NIF a partir del número de DNI.*/

class NIF {
    constructor(numDNI) {
        this.numDNI = numDNI;
        this.letraDNI = this.calcularLetra();
    }

    calcularLetra() {
        let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        let posicion = this.numDNI % 23;
        return letras.charAt(posicion);
    }

    getNumDNI() {
        return this.numDNI;
    }

    getLetraDNI() {
        return this.letraDNI;
    }

    toString() {
        return this.numDNI + this.letraDNI;
    }
}


/*6. Crea una clase Persona. Tendrá los atributos nombre, apellidos, fechaNacimiento que será
un objeto de tipo Fecha(clase creada en el ejercicio 5 de los apuntes) y dni que será de tipo
NIF(Clase creada en el ejercicio 5)*/

class Persona {
    constructor(nombre, apellidos, fechaNacimiento, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    getFechaNacimiento() {
        return this.fechaNacimiento;
    }

    setFechaNacimiento(fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }
}


/*7. Crea una página web con un botón para pedir por pantalla(mediante ventanas emergente,
formulario… lo que se quiera) los datos de un empleado. Tendrá además un botón para
mostrar los datos de los empleados ordenados por DNI y otro para mostrarlos ordenados
por un atributo cualquiera. Sigue las siguientes indicaciones:

    a. Modifica la clase Empleado del ejercicio 4 para que extienda de la clase Persona del ejercicio 6.

    b. Los datos de empleado solicitados se almacenarán en un array de objetos de tipo Empleado.

    c. En el momento de pedir el tipo de empleado se mostrará al usuario las opciones posibles indicando que introduzca:

        i. 1 para "programador junior".

        ii. 2 para "programador senior".

        iii. 3 para "analista-programador".

    d. Codifica la opción de ordenar los empleados por NIF.

    e. Codifica otra opción de ordenación por la que, esta vez, se ordenará por otra de las propiedades del objeto (elige el que quieras).

    f. NOTA: Para las opciones de ordenación, utiliza cualquiera de los recursos que conoces, de esta unidad y de unidades anteriores*/


/* EJERCICIO 4 y 7. Clase Empleado */

class Empleado extends Persona {
    constructor(nombre, apellidos, fechaNacimiento, dni, direccion, tipo) {
        super(nombre, apellidos, fechaNacimiento, dni);
        this.direccion = direccion;
        this.tipo = tipo;
    }

    getDireccion() {
        return this.direccion;
    }

    setDireccion(direccion) {
        this.direccion = direccion;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    static getTiposEmpleado() {
        return ["programador junior", "programador senior", "analista-programador"];
    }
}


/* EJERCICIO 7. Gestión de empleados */

let empleados = [];


/* Crear empleado */

function crearEmpleado() {

    let nombre = prompt("Introduce el nombre:");
    let apellidos = prompt("Introduce los apellidos:");

    let dia = Number(prompt("Introduce el día de nacimiento:"));
    let mes = Number(prompt("Introduce el mes de nacimiento:"));
    let anio = Number(prompt("Introduce el año de nacimiento:"));

    let fechaNacimiento = new Fecha(dia, mes, anio);

    let numDNI = Number(prompt("Introduce el número del DNI:"));
    let dni = new NIF(numDNI);

    let direccion = prompt("Introduce la dirección:");

    let tipos = Empleado.getTiposEmpleado();

    let opcion = Number(prompt(
        "Selecciona el tipo de empleado:\n" +
        "1. " + tipos[0] + "\n" +
        "2. " + tipos[1] + "\n" +
        "3. " + tipos[2]
    ));

    if (opcion < 1 || opcion > 3 || isNaN(opcion)) {
        alert("Tipo de empleado no válido");
        return;
    }

    let tipo = tipos[opcion - 1];

    let empleado = new Empleado(
        nombre,
        apellidos,
        fechaNacimiento,
        dni,
        direccion,
        tipo
    );

    empleados.push(empleado);

    alert("Empleado añadido correctamente");
}


/* Ordenar por DNI */

function ordenarPorDNI() {

    if (empleados.length === 0) {
        alert("No hay empleados registrados");
        return;
    }

    let empleadosOrdenados = empleados.slice();

    empleadosOrdenados.sort(function(a, b) {
        return a.dni.getNumDNI() - b.dni.getNumDNI();
    });

    mostrarEmpleados(empleadosOrdenados);
}


/* Ordenar por nombre */

function ordenarPorNombre() {

    if (empleados.length === 0) {
        alert("No hay empleados registrados");
        return;
    }

    let empleadosOrdenados = empleados.slice();

    empleadosOrdenados.sort(function(a, b) {
        return a.nombre.localeCompare(b.nombre);
    });

    mostrarEmpleados(empleadosOrdenados);
}


/* Mostrar empleados */

function mostrarEmpleados(lista) {

    let resultado = "";

    for (let i = 0; i < lista.length; i++) {

        resultado +=
            "Nombre: " + lista[i].nombre + "\n" +
            "Apellidos: " + lista[i].apellidos + "\n" +
            "DNI: " + lista[i].dni + "\n" +
            "Dirección: " + lista[i].direccion + "\n" +
            "Tipo: " + lista[i].tipo + "\n\n";
    }

    alert(resultado);
}