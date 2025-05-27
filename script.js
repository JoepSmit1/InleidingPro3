// START GAME
// Met variabelen kun je data opslaan
// je geeft de opslaglocatie een naam en daar kun je de waarde in opslaan
// Deze opgeslagen data kun je ergens in je programma hergebruiken

// const gebruik je voor variable met een constante waarde
const scoreField = document.querySelector("#scoreVeld");
const image = document.querySelector("#image");
const countDownField = document.querySelector("#CountDown");
const audio = document.querySelector("#gejuig")
const randomNumber = Math.ceil(Math.random() * 5) + 5;

// let gebruik je voor variable die kunnen veranderen
let timeInSeconds = randomNumber;
let jouwScore = 0;
let elementH3 = document.querySelector("h3");
let timer = setInterval(countDown, 1000);
let button = document.querySelector("button");

// Vertel wat de functie doet
function countDown() {
	countDownField.textContent = "Tijd over: " + timeInSeconds;
	timeInSeconds -= 1;
   if (timeInSeconds < 0) {
      clearInterval(timer);
      countDownField.textContent = "De tijd is om!";
   }
}

//Bij deze functie wordt de score verhoogd als je op de foto klikt -> als de tijd boven de 0 is
//Klik je op de foto, maar is de tijd voorbij gaat de score omlaag.
function verhoogScore() {
   if (timeInSeconds >= 0) {
      jouwScore++;
   } else {
      jouwScore--;
   }
   scoreField.textContent = jouwScore;

}

// CC: ChatGPT - Niet in de les behandeld onderdeel
function playAudio() { 
   audio.play();
}

function veranderFotoTekst() {
   if (jouwScore >= 20) {
      document.body.style.backgroundColor = "green"
      elementH3.textContent = "Je hebt het gehaald! Jij bent de Klik Kampioen!"
      image.src = "image/gewonnen.gif"
      audio.play(); //CC: Chatgpt
   }
   else if (jouwScore >= 10) {
      document.body.style.backgroundColor = "yellow"
      elementH3.textContent = "Wat was je dichtbij, bijna gelukt!"
      image.src = "image/bijna.gif"
   }
   else {
      document.body.style.backgroundColor = "red"
      elementH3.textContent = "Je hebt nog een lange weg te gaan..."
      image.src = "image/verloren.gif"
   }
}


button.addEventListener('click', veranderFotoTekst);
image.addEventListener("click", verhoogScore);
