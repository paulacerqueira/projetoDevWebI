
var numero = Math.floor((Math.random() * 4) + 1);
var nickname = document.getElementById("nicknames");
if (numero == 1) {
    nickname.innerHTML = "<p>Campeão Brasileiro</p>";
}
else if (numero == 2) {
    nickname.innerHTML = "<p>Campeão Mineiro</p>";
}
else if (numero == 3) {
    nickname.innerHTML = "<p>Campeão da Copa do Brasil</p>";
}
else if (numero == 4){
    nickname.innerHTML = "<p>Triplice Coroa!</p>";
}

var email = document.getElementById("email");

    email.addEventListener('focus',()=>{
        email.innerHTML.borderColor = "#000000";
    });
    email.addEventListener('blur',()=>{
        email.innerHTML.borderColor = "#000000";
    });




