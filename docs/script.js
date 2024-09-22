modeActive = false
function SwitchMode () {
    var modes = document.getElementById("body");
    var modeslogo = document.getElementById("modes-logo")

    if (modeActive == false) {
        modes.style.backgroundColor = "#000000";
        modeslogo.setAttribute("src", "../public/nigth-mode.png");
        modeActive = true
    } else {
        modes.style.backgroundColor = "#ffffff";
        modeslogo.setAttribute("src", "../public/main-mode.png");
        modeActive = false
    }
}