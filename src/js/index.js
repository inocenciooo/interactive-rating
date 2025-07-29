const card = document.getElementsByClassName("card")[0];
const score = document.querySelectorAll(".score");
const submit = document.getElementById("button");
const backButton = document.getElementById("back");
const scorePlace = document.getElementById("score-place");

score.forEach((scoreNumber) => {
  scoreNumber.addEventListener("click", () => {
    score.forEach((scoreNumber) => {
      scoreNumber.classList.remove("select");
    });

    scoreNumber.classList.add("select");
    card.classList.add("numberSelected");
    scorePlace.textContent = scoreNumber.textContent;
  });
});

submit.addEventListener("click", enviarNota);

backButton.addEventListener("click", () => {
  card.classList.remove("numberSelected");
  card.classList.remove("submit");

  score.forEach((scoreNumber) => {
    scoreNumber.classList.remove("select");
  })

})

function enviarNota() {
  if (card.classList.contains("numberSelected")) {
    card.classList.toggle("submit");
  } else {
    alert("Please select a rating!");
  }
}