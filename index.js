function change() {
    if (document.getElementById("background").value == "light") {
        document.body.style.background = 'white';
    }
    if (document.getElementById("background").value == "dark") {
        document.body.style.background = 'black';
    }
    if (document.getElementById("background").value == "blue") {
        document.body.style.background = 'blue';
    }
}