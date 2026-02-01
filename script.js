
let score = 0;
let timeLeft = 10;
let timerStarted = false;
let timer;

const button = document.getElementById("clickBtn");
const scoreText = document.getElementById("score");
const timeText = document.getElementById("time");



button.addEventListener("click", () => {

  
  if (!timerStarted) {
    startTimer();
    timerStarted = true;
  }

  score++;
  scoreText.textContent = score;

  
  button.style.left = Math.random() * 200 + "px";
  button.style.top = Math.random() * 200 + "px";

  if (score === 10) {
    alert("Level Up 🔥");
  }
});

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeText.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timer);
      button.disabled = true;
      alert("Game Over! Score: " + score);
    }
  }, 1000);
}
