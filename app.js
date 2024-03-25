const dice = document.querySelector(".card-dice");
const adviceID = document.getElementById("adviceID");
const adviceQuote = document.getElementById("advice-text");

loadQuote = () => {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        adviceID.innerHTML = data.slip.id;
        adviceQuote.innerHTML = data.slip.advice;
    })
    .catch(err => adviceID.innerHTML = err.message);
}

dice.addEventListener("click", loadQuote);