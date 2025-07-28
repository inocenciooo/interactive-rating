const card = document.getElementsByClassName("card")[0];
const submit = document.getElementById("button");

submit.addEventListener("click", enviarNota)


function enviarNota() {
    card.classList.toggle("submit");
}