function recuperarDatos() {
  let idUser = document.getElementById("idUser").value;
  if (isNaN(idUser) || idUser == "") {
    alert("Debes introducir un número");
  } else {
    fetch("https://jsonplaceholder.typicode.com/posts?" + "userId=" + idUser)
      .then((response) => response.json()) //En la ejecucuión del primer then, recuperamos los datos incluidos en la respuesta
      .then((infoPosts) => mostrarDatos(infoPosts))
      .catch((error) => console.error(error));
  }
}

function mostrarDatos(infoPosts) {
  let tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  infoPosts.forEach((post) => {
    const newPost = document.createElement("tr");
    newPost.innerHTML = `
                <td>${post.userId}</td>
                <td>${post.id}</td>
                <td>${post.title}</td>
                <td>${post.body}</td>`;
    tbody.appendChild(newPost);
  });
}

function comPorbarEjemplo3_1(){
  fetch("https://jsonplaceholder.typicode.com/users/1") //dame todo los datos de usuario con id=1
.then(response => { //se queda escuchando y cuando obtenga respuesta ejercuta la funcion flecha (respuesta servidor)
if (!response.ok) { //si no ha ido bien lanza un error
// Lanzamos un error explícito para que lo capture el .catch()
throw new Error(`Error HTTP: ${response.status} (${response.statusText})`); //error
}
return response.json(); // Devuelve una promesa si todo a ido bien
})
.then(datosUsuario => console.log(datosUsuario)) //seria el response de la segunda funcion flecha (datosUsuario se puede cambiar por response) y los sacaara por consola
.catch(error => console.error("Ocurrió un error:", error.message)); 
}

function ejemploPost(){
  //let URL = "http://localhost:3000/clientes";
  let URL = "https://jsonplaceholder.typicode.com/users/1";
  let nuevoUser = {
    nombre: "Diego",
    apellidos: "Garcia Rodriguez",
    DNI: "43127983D",
    fechaNac: "1977-11-02",
    Sexo: "H",
    preferencias: "ext_indv_int"
  };
  
  let init = {
    method: 'POST',
    body: JSON.stringify(nuevoUser), //stringify lo convierte automaticamente a json
    headers: { 'Content-Type': 'application/json' } //tipo mime de json
  };
  
  fetch(URL, init)
  .then(response => response.json()) //se ha dado de akta el  usuatio
  .then(datosRespuesta => alert(datosRespuesta.id)) 
  .catch(err => console.error(err));
}

async function mostrarTareas(){
  /*fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.log("Error: " + error))*/

  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
  let response2 = await response.json();
  console.log(response2);
}