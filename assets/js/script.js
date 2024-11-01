let skor = 0;

function bilgisayarHamlesi() {
  return ["Taş", "Kağıt", "Makas"][Math.floor(Math.random() * 3)];
}

function tasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle == "Kağıt") {
    score.innerText = skor;
    console.log("kaybettin");
  } else if (hamle == "Makas") {
    skor++;
    score.innerText = skor;
    console.log("kazandın");
  } else {
    score.innerText = skor;
    console.log("berabere");
  }
}

function kagitHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle === "Makas") {
    score.innerText = skor;
    console.log("kaybettin");
  } else if (hamle == "Taş") {
    skor++;
    console.log("kazandın");
    score.innerText = skor;
  } else {
    score.innerText = skor;
    console.log("berabere");
  }
}
function makasHamlesi() {
  const hamle = bilgisayarHamlesi();
  if (hamle == "Taş") {
    score.innerText = skor;
    console.log("kaybettin");
  } else if (hamle == "Kağıt") {
    skor++;
    console.log("kazandın");
    score.innerText = skor;
  } else {
    score.innerText = skor;
    console.log("berabere");
  }
}

tasBtn.addEventListener("click", tasHamlesi);
kagitBtn.addEventListener("click", kagitHamlesi);
makasBtn.addEventListener("click", makasHamlesi);
