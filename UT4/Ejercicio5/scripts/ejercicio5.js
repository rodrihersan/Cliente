    function verAnimales(){
        let inputRadio = document.getElementById("radio1");
        
        inputRadio.addEventListener('change', async function(){
            let respuestaAnimales = await fetch("http://localhost:3000/animales");
            let datosAnimales = await respuestaAnimales.json();
            console.log(datosAnimales);

            mostrarDatos(datosAnimales);

        })

    }
    verAnimales();


function mostrarDatos(datosAnimales){
    
    datosAnimales.forEach(animal => {
        let nombreAnimales = document.createElement("p");
        nombreAnimales.textContent = animal.Nombre; 
        document.body.appendChild(nombreAnimales);
    });
}