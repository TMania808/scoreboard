let homeScoreDisplay = document.getElementById("homeScore")
let homeScoreBorder = document.getElementById("homeScoreBox")
let guestScoreDisplay = document.getElementById("guestScore")
let guestScoreBorder = document.getElementById("guestScoreBox")
let homeFouls = document.getElementById("homeFouls")
let guestFouls = document.getElementById("guestFouls")
let timerDisplay = document.getElementById("timerText")
let periodDisplay = document.getElementById("periodText")
let homeFoulDisplay = document.getElementById("homeFouls")
let guestFoulDisplay = document.getElementById("guestFouls")
let timerBtnDisplay = document.getElementById("startTimerBtn")
let clearScoreBtn = document.getElementById("clearScoreBtn")
let stopTimerBtn = document.getElementById("stopTimerBtn")

stopTimerBtn.hidden = true;


let homeScoreInt = 0
let guestScoreInt = 0
let periodInt = 1
let homeFoulInt = 0
let guestFoulInt = 0

const startingMinutes = 15
let time = startingMinutes * 60
const countDownEl = document.getElementById("timerText")
let timeRunning = false;

homeScoreDisplay.textContent = homeScoreInt
guestScoreDisplay.textContent = guestScoreInt
homeFoulDisplay.textContent = homeFoulInt
guestFoulDisplay.textContent = guestFoulInt
periodDisplay.textContent = periodInt

function timer() {
    if (timeRunning == false) {
        timerBtnDisplay.hidden = true
        stopTimerBtn.onclick = stopTimer
        stopTimerBtn.hidden = false;
        
            
        timeRunning = true;
        setInterval(updateTimer, 1000)
        function updateTimer() {
            const minutes = Math.floor(time/60)
            let seconds = time % 60
            
            seconds = seconds < 10 ? "0" + seconds : seconds
            
            countDownEl.textContent = `${minutes}:${seconds}` 
            time--
            if (seconds === 0) {
                updateTimer.stop();
            }
        }
    }
}

function stopTimer() {
    timeRunning = false;
    stopTimerBtn.hidden = true;
    timerBtnDisplay.hidden = false;
    console.log(timeRunning + " stopTimerBtn")
    console.log("Hello World")
}

function add1Home() {
    homeScoreInt += 1
    homeScoreDisplay.textContent = homeScoreInt
}

function add2Home() {
    homeScoreInt += 2
    homeScoreDisplay.textContent = homeScoreInt
}

function add3Home() {
    homeScoreInt += 3
    homeScoreDisplay.textContent = homeScoreInt
}

function add1Guest() {
    guestScoreInt += 1
    guestScoreDisplay.textContent = guestScoreInt
}

function add2Guest() {
    guestScoreInt += 2
    guestScoreDisplay.textContent = guestScoreInt
}

function add3Guest() {
    guestScoreInt += 3
    guestScoreDisplay.textContent = guestScoreInt
}

function clearScore() {
    homeScoreInt = 0
    guestScoreInt = 0
    homeScoreDisplay.textContent = homeScoreInt
    guestScoreDisplay.textContent = guestScoreInt
}

function setPeriod1() {
    periodInt = 1
    periodDisplay.textContent = periodInt
}

function setPeriod2() {
    periodInt = 2
    periodDisplay.textContent = periodInt
}

function setPeriod3() {
    periodInt = 3
    periodDisplay.textContent = periodInt
}

function setPeriod4() {
    periodInt = 4
    periodDisplay.textContent = periodInt
}

function addHomeFoul() {
    homeFoulInt += 1
    homeFoulDisplay.textContent = homeFoulInt
}

function addGuestFoul() {
    guestFoulInt += 1
    guestFoulDisplay.textContent = guestFoulInt
}
