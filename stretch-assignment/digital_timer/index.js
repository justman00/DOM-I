const secsTens = document.querySelector("#secondTens");
const secsOnes = document.querySelector("#secondOnes");
const msHundreds = document.querySelector("#msHundreds");
const msTens = document.querySelector("#msTens");
const btn = document.querySelector("button");

let ms = 0;
let msH = 0;
let s = 0;
let tens = 0;

btn.onclick = start;
function start() {
  let timer = setInterval(() => {
    ms += 1;
    //   console.log(ms);
    msTens.textContent = ms.toString();
    if (ms == 10) {
      ms = 0;
      msH += 1;
      console.log(`${msH} msH`);
      msTens.textContent = "0";
      msHundreds.textContent = msH.toString();
    }
    if (msH == 10) {
      msH = 0;
      msHundreds.textContent = "0";
      s += 1;
      console.log(`${s} s`);
      secsOnes.textContent = s.toString();
    }
    if (s == 10) {
      secsOnes.textContent = "0";
      tens += 1;
      s = 0;
      console.log(`${tens} tens`);
      secsTens.textContent = tens.toString();
      // msTens.textContent = "0";
      // msH.textContent = "0";
      secsTens.style.color = "red";
      secsOnes.style.color = "red";
      msHundreds.style.color = "red";
      msTens.style.color = "red";
    }
  }, 10);

  setTimeout(() => {
    clearInterval(timer);
  }, 10000);
}
