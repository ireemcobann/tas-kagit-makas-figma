let skor = 0;
let userMove;

const images = {
  Taş: "assets/img/rock.svg",
  Kağıt: "assets/img/paper.svg",
  Makas: "assets/img/scissors.svg",
};

const score = document.querySelector("#score");
const resultScreen = document.querySelector(".result-screen-container");
const gameContainer = document.querySelector(".game-container");

function bilgisayarHamlesi() {
  return ["Taş", "Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}

function tasHamlesi() {
  userMove = "Taş";
  const pchamle = bilgisayarHamlesi();
  oyna(pchamle, userMove);
}

function kagitHamlesi() {
  userMove = "Kağıt";
  const pchamle = bilgisayarHamlesi();
  oyna(pchamle, userMove);
}

function makasHamlesi() {
  userMove = "Makas";
  const pchamle = bilgisayarHamlesi();
  oyna(pchamle, userMove);
}

function oyna(pchamle, userMove) {
  resultScreen.style.display = "block";
  gameContainer.style.display = "none";

  let resultText = "";
  if (userMove === pchamle) {
    resultText = "BERABERE";
  } else if (
    (userMove === "Taş" && pchamle === "Makas") ||
    (userMove === "Kağıt" && pchamle === "Taş") ||
    (userMove === "Makas" && pchamle === "Kağıt")
  ) {
    skor++;
    resultText = "YOU WIN";
  } else {
    resultText = "YOU LOSE";
  }

  resultScreen.innerHTML = `
    <div class="resultScreen">
      <div>
        <img src="${images[userMove]}" alt="Your choice" />
        <h4>YOU PICKED</h4>
      </div>
      <div>
        <img src="${images[pchamle]}" alt="Computer choice" />
        <h4>THE HOUSE PICKED</h4>
      </div>
    </div>
    <div class="resultText">
      <h1>${resultText}</h1>
      <button onclick="resetGame()">PLAY AGAIN</button>
    </div>
  `;

  score.innerText = skor;
}

function resetGame() {
  resultScreen.style.display = "none";
  gameContainer.style.display = "block";
}

const tasBtn = document.querySelector("#tasBtn");
const kagitBtn = document.querySelector("#kagitBtn");
const makasBtn = document.querySelector("#makasBtn");

tasBtn.addEventListener("click", tasHamlesi);
kagitBtn.addEventListener("click", kagitHamlesi);
makasBtn.addEventListener("click", makasHamlesi);




const container = document.querySelector('.container')
const rules = document.querySelector(".rules");
const rulesBtn = document.querySelector(".rules-btn");
rulesBtn.addEventListener("click", rulesView);



function rulesView() {
    dialogContent.innerHTML = `
    <h1>RULES</h1>
     <img src="assets/img/rulesimg.svg" alt="">
   <button class="closeBtn">
        <img src="assets/img/close.svg" alt="">
      </button>
 `;
 rules.showModal()
 const closeBtn = document.querySelector('.closeBtn');
 closeBtn.addEventListener('click', rulesClose);

}

function rulesClose() {

rules.close()
}





