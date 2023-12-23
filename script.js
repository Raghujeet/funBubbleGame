function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 105; i++) {
    let randomNum = Math.floor(Math.random() * 51);
    clutter += `<div class="bubble">${randomNum}</div>`;
  }

  document.querySelector("#bottom").innerHTML = clutter;
}
makeBubble();

var time = 60;
function runTimer() {
  var timer = setInterval(() => {
    if (time > 0) {
      time--;
      document.querySelector("#timerVal").textContent = time;
    } else {
      clearInterval(timer);
      document.querySelector("#bottom").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 1000);
}
runTimer();

var hitRn = 0;
function forHit() {
  hitRn = Math.floor(Math.random() * 100);
  document.querySelector("#Hit").textContent = hitRn;
}
forHit();

var score = 0;
function getScore() {
  score += 5;
  document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#bottom").addEventListener("click", (details) => {
  var clickNum = Number(details.target.textContent);
  if (hitRn === clickNum) {
    getScore();
    makeBubble();
    forHit();
  }
});
