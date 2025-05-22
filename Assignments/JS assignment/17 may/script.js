let timer;
let isRunning = false;
let isPaused = false;

let workDuration, shortBreakDuration, longBreakDuration, cyclesBeforeLong;
let currentCycle = 0;
let currentSession = 'work';
let remainingSeconds = 0;

const timerDisplay = document.getElementById("timer");
const sessionType = document.getElementById("sessionType");
const indicator = document.getElementById("indicator");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDurationsFromInputs() {
  workDuration = parseInt(document.getElementById("workDuration").value) * 60;
  shortBreakDuration = parseInt(document.getElementById("shortBreakDuration").value) * 60;
  longBreakDuration = parseInt(document.getElementById("longBreakDuration").value) * 60;
  cyclesBeforeLong = parseInt(document.getElementById("cyclesBeforeLong").value);
}

function updateTimerDisplay() {
  let min = Math.floor(remainingSeconds / 60);
  let sec = remainingSeconds % 60;
  timerDisplay.textContent = `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function updateSessionDisplay() {
  sessionType.textContent = `Session: ${currentSession === 'work' ? 'Work' : currentSession === 'short' ? 'Short Break' : 'Long Break'}`;
}

function updateIndicators() {
  let dots = "";
  for (let i = 0; i < cyclesBeforeLong; i++) {
    dots += i < currentCycle ? "🔴 " : "⚪ ";
  }
  indicator.textContent = dots.trim();
}

function startTimer() {
  if (isRunning) return;
  updateDurationsFromInputs();

  if (!isPaused) {
    if (currentSession === 'work') {
      remainingSeconds = workDuration;
    } else if (currentSession === 'short') {
      remainingSeconds = shortBreakDuration;
    } else {
      remainingSeconds = longBreakDuration;
    }
  }

  isRunning = true;
  timer = setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateTimerDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      handleSessionEnd();
    }
  }, 1000);
}

function handleSessionEnd() {
  if (currentSession === 'work') {
    currentCycle++;
    if (currentCycle >= cyclesBeforeLong) {
      currentSession = 'long';
      currentCycle = 0;
    } else {
      currentSession = 'short';
    }
  } else {
    currentSession = 'work';
  }

  updateSessionDisplay();
  updateIndicators();
  isPaused = false;
  startTimer();
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = true;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  isPaused = false;
  currentCycle = 0;
  currentSession = 'work';
  updateDurationsFromInputs();
  remainingSeconds = workDuration;
  updateSessionDisplay();
  updateTimerDisplay();
  updateIndicators();
}

// Initial state
window.onload = () => {
  updateDurationsFromInputs();
  remainingSeconds = workDuration;
  updateSessionDisplay();
  updateTimerDisplay();
  updateIndicators();
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
