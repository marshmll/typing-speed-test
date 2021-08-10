const words = [
  "pais",
  "varanda",
  "ferida",
  "aldeia",
  "não",
  "gôndolas",
  "engrenagem",
  "cor",
  "cereja",
  "morse",
  "hora",
  "escurecer",
  "altura",
  "piada",
  "podre",
  "ruim",
  "mordomo",
  "prender",
  "movimento",
  "procurar",
  "cobertor",
  "eclipse",
  "gosto",
  "piratas",
  "estômago",
  "coro",
  "juntos",
  "penas",
  "inverno",
  "carnaval",
  "aposta",
  "Menino",
  "Sabor",
  "Forquilha",
  "Comida",
  "Impressora",
  "Grã-Bretanha",
  "Crocodilo",
  "Holanda",
  "Cerco",
  "Cuecas",
  "Pilha",
  "Local",
  "Muito",
  "Salsa",
  "Amizade",
  "Mariana",
  "Evaporar",
  "Acreditar",
  "Galinha",
  "Programa",
  "Diretor",
  "Amputar",
  "Aquecimento",
  "Abrigo",
  "Voar",
  "Ousar",
  "Cerveja",
  "Enteada",
  "Calafrios",
  "Avestruz",
  "Microfone",
  "Skis",
  "Esquiador",
];
const output = document.querySelector("#output");
const startButton = document.querySelector("#start-button");
const userInput = document.querySelector("#user-input");
const counter = document.querySelector("#counter");
const result = document.querySelector("#result");
let startWasPressed = false;
let correctlyTypedWords = 0;
let wronglyTypedWords = 0;
let totalTypedWords = 0;
let secondsRemaining = 30;
let secondsCounter = 0;
let secondsInterval;

startButton.addEventListener("click", () => {
  if (startWasPressed) return;
  startWasPressed = true;
  output.value = getRandomWord();
  userInput.value = "";
  userInput.focus();
  secondsInterval = setInterval(() => {
    if (secondsRemaining == 0) {
      clearSettedInterval(secondsInterval);
      startWasPressed = false;
      secondsRemaining = 30;
      result.innerHTML = 
        `<h2 class="result-topic">Palavras por minuto: ${totalTypedWords * 2} PPM</h2>
        <h2 class="result-topic">Precisão: ${((correctlyTypedWords / totalTypedWords) * 100).toFixed(2)}%</h2>
        `;
        console.log("counter stopped");
        return;
      }
    secondsRemaining--;
    secondsCounter++;
    counter.innerHTML = `00:${secondsRemaining}`;
  }, 1000);
});

function generateRandomNumber(min, max) {
  let randomNumber;
  while (true) {
    randomNumber = Math.round(Math.random() * max);
    if (randomNumber >= min) break;
  }
  return randomNumber;
}

function getRandomWord() {
  return words[generateRandomNumber(0, words.length - 1)].toLowerCase();
}

function clearSettedInterval(interval) {
  clearInterval(interval);
}

document.onkeydown = (event) => {
  if (
    event.key == " " &&
    userInput.value &&
    startWasPressed &&
    secondsRemaining > 0
  ) {
    totalTypedWords++;
    output.value == userInput.value.replace(" ", "")
      ? correctlyTypedWords++
      : wronglyTypedWords++;
    output.value = getRandomWord();
    userInput.value = "";
    userInput.focus();
  }
};
