let modeActive = false
function SwitchMode () {
    var modes = document.getElementById("body");
    var modeslogo = document.getElementById("boton-flotante")

    if (modeActive == false) {
        modes.style.backgroundColor = "#000000";
        modeslogo.style.backgroundImage = "url('https://reudys.github.io/ProyectoWeb/public/nigth-mode.png')";
        modeActive = true
    } else {
        modes.style.backgroundColor = "#ffffff";
        modeslogo.style.backgroundImage = "url('https://reudys.github.io/ProyectoWeb/public/main-mode.png')";
        modeActive = false
    }
}