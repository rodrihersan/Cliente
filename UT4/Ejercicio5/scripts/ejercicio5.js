const URL = "http://localhost:3000/";

function verAnimales(){
    let inputRadio1 = document.getElementById("radio1");
        
    inputRadio1.addEventListener('change', async function(){
        let respuestaAnimales = await fetch(URL + "animales");
        let datosAnimales = await respuestaAnimales.json();        
        mostrarDatos(datosAnimales);
        }
    )
}
verAnimales();


function mostrarDatos(datosAnimales){
    
    datosAnimales.forEach(animal => {
        let nombreAnimales = document.createElement("p");
        nombreAnimales.textContent = animal.Nombre;
        console.log(animal.Nombre); 
        document.body.appendChild(nombreAnimales);
    });
}

async function verNuevoAnimal(){
    let inputRadio2 = document.getElementById("radio2"); 
    
    inputRadio2.addEventListener('change', async function(){ 
        let animalCreado = obtenerNuevoAnimal();

            let init = {
                method: 'POST',
                body: JSON.stringify(animalCreado),
                headers: {'Content-Type': 'application/json'}
            };

        let respuestaNuevoAnimales = await fetch(URL + 'animales', init);
        
        if (respuestaNuevoAnimales.ok) {
            let datos = await respuestaNuevoAnimales.json();
            console.log("Animal creado con éxito:", datos);
        } else {
            console.error("Error al enviar el animal. Código de estado:", respuestaNuevoAnimales.status);
        }
    });
}
verNuevoAnimal();



function obtenerNuevoAnimal(){
    let nuevoAnimal = {
            Tipo: 'pajaro',
            Nombre: 'rafa',
            Observacion: 'Esta a medias',
            Ubicacion: 'Se encuentra en robledo cerca a la quintana',
            Rasgos: 'ñam que rico',
            Imagen: 'https://www.elpaisdelosjovenes.com/wp-content/uploads/2015/05/03_02.jpg'
    }

    return nuevoAnimal;
}