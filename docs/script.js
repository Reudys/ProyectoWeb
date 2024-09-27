let modeActive = false;
function SwitchMode() {
    var modes = document.getElementById("body");
    var modeslogo = document.getElementById("boton-flotante");
    var texto = document.getElementsByClassName("text-card");

    if (modeActive == false) {
        modes.style.backgroundColor = "#000000";
        modeslogo.style.backgroundImage = "url('https://reudys.github.io/ProyectoWeb/public/nigth-mode.png')";

        // Recorrer la colección de elementos y cambiar el color
        for (var i = 0; i < texto.length; i++) {
            texto[i].style.color = "#ffffff";
        }

        modeActive = true;
    } else {
        modes.style.backgroundColor = "#ffffff";
        modeslogo.style.backgroundImage = "url('https://reudys.github.io/ProyectoWeb/public/main-mode.png')";

        // Recorrer la colección de elementos y cambiar el color
        for (var i = 0; i < texto.length; i++) {
            texto[i].style.color = "#000000";
        }

        modeActive = false;
    }
}

const inicio = 'https://reudys.github.io/ProyectoWeb/pageContent/inicio.html'
const reservaciones = 'https://reudys.github.io/ProyectoWeb/pageContent/reservaciones.html'

//HEADER
fetch('https://reudys.github.io/ProyectoWeb/pageContent/header.html')
.then(response => response.text())
.then(data => {document.getElementById('header').innerHTML = data;})

//NAV
fetch('https://reudys.github.io/ProyectoWeb/pageContent/nav.html')
.then(response => response.text())
.then(data => {document.getElementById('nav').innerHTML = data;})


//CONTENT
fetch(inicio)
.then(response => response.text())
.then(data => {document.getElementById('content').innerHTML = data;})

//FOOTER
fetch('https://reudys.github.io/ProyectoWeb/pageContent/footer.html')
.then(response => response.text())
.then(data => {document.getElementById('footer').innerHTML = data;})

//Funciones para Botones

function btnInicio() {
    fetch(inicio)
    .then(response => response.text())
    .then(data => {document.getElementById('content').innerHTML = data;}) 
}

function btnReservaciones() {
    fetch(reservaciones)
    .then(response => response.text())
    .then(data => {document.getElementById('content').innerHTML = data;}) 
}