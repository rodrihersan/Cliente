function ejercicio7() {
    // El array de arrays del enunciado
    let arrayDeArrays = [
        [1, 2, 3],
        ["1", "2", "3", "4"],
        [true, false, false],
        ["uno", "dos", "tres"]
    ];

    // FORMA A: flat() "aplana" un nivel: saca los valores de dentro de cada array
    let planoA = arrayDeArrays.flat();
    // FORMA B: reduce va juntando (concat) cada array en uno solo
    let planoB = arrayDeArrays.reduce((total, arr) => total.concat(arr), []);
    // FORMA C: spread sobre concat: concat([1,2,3], [...], [...], [...])
    let planoC = [].concat(...arrayDeArrays);

    // a) Convierte cada valor a cadena (1 -> "1", true -> "true")
    let cadenas = planoA.map(valor => String(valor));
    // (otra forma: valor.toString(), o map(String) directamente)

    // b) Ordena por longitud de la cadena, de menor a mayor
    // length - length es negativo si a es más corta, así que va antes
    let ordenado = cadenas.sort((a, b) => a.length - b.length);

    // Muestra el resultado final
    console.log(ordenado);
}