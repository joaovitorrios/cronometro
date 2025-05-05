let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let isRunning = false;

function updateDisplay() {
  const format = (val) => (val < 10 ? '0' + val : val);
  document.getElementById('display').textContent = 
    `${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  pauseTimer();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}


document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);


updateDisplay();
