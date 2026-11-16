function ejercicio6(){
    let accederDiv = document.getElementById("seccionPrimera");
    let accederP1 = accederDiv.firstElementChild();

    let claseP1 = accederP1.classList.add("ocultar");

    claseP1.textContent = ".ocultar {display: none};";
    


}