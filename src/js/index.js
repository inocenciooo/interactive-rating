const card = document.getElementsByClassName("card")[0];
const score = document.querySelectorAll(".score");
const submit = document.getElementById("button");

score.forEach((scoreNumber) => {
  scoreNumber.addEventListener("click", () => {
    score.forEach((scoreNumber) => {
      scoreNumber.classList.remove("select");
    });

    scoreNumber.classList.add("select");
    card.classList.add("numberSelected");
  });
});


submit.addEventListener("click", enviarNota);


function enviarNota() {
  if (card.classList.contains("numberSelected")) {
    card.classList.toggle("submit");
  } else {
    alert("Please select a rating!");
  }
}
