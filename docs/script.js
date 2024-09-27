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

fetch('https://reudys.github.io/ProyectoWeb/pageContent/header.html')
.then(response => response.text())
.then(data => {document.getElementById('header').innerHTML = data;})

fetch('https://reudys.github.io/ProyectoWeb/pageContent/nav.html')
.then(response => response.text())
.then(data => {document.getElementById('nav').innerHTML = data;})

fetch('https://reudys.github.io/ProyectoWeb/pageContent/footer.html')
.then(response => response.text())
.then(data => {document.getElementById('footer').innerHTML = data;})

fetch('https://reudys.github.io/ProyectoWeb/pageContent/inicio.html')
.then(response => response.text())
.then(data => {document.getElementById('content').innerHTML = data;})