document.addEventListener('load', alert("Selamat Datang"));
const tombolSubmit = document.getElementById("tombolSubmit");
tombolSubmit.addEventListener("click", cekLogin)

function cekLogin() {
    const inputanUsername = document.getElementById("username").value;
    const inputanPassword = document.getElementById("password").value;

    if (inputanUsername == 'felyn' && inputanPassword == '123') {
        window.open("indeks.html");
    }
    
    else if (inputanUsername == 'irnanda' && inputanPassword == '456') {
        window.open("indeks.html")
    }

    else {
        alert("silahkan gunakan username = felyn, password = 123")
    }
}