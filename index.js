// You got this! 💫

// 💻 Work: 25 mins
let workTime = 25
let workTimeHasRun = false
// ☕️ Short break: 5 mins
let shortBreak = 5
let shortBreakHasRun = false
// 🌯 Long break: 15 mins
let longBreak = 15
let longBreakHasRun = false
//Long break interval
const longBreakInterval = 4
//seconds
let workSeconds = 0
let secondsStart = 0
let longBreakSeconds = 0

let workBtn = document.getElementById("work-btn")
let shortBreakBtn = document.getElementById("short-break-btn")
let longBreakBtn = document.getElementById("long-break-btn")
let message = document.getElementById("message")
let timeDisplay = document.getElementById("time-display")

workBtn.addEventListener("click", function () {
	let interval = setInterval(function () {
		if (workSeconds == 0 && workTime == 0) {
			clearInterval(interval)
			let workTime = 25
			let workSeconds = 0
			message.innerHTML = ""
			timeDisplay.innerHTML = "0" + " : " + "0"
		} else if (workSeconds <= 0) {
			workTime -= 1
			workSeconds = 59
			timeDisplay.innerHTML = workTime + " : " + workSeconds
		} else if (workSeconds > 0) {
			workSeconds -= 1
			timeDisplay.innerHTML = workTime + " : " + workSeconds
			message.innerHTML = "Work session is 25 minutes long!"
		}
	}, 1000)
})

shortBreakBtn.addEventListener("click", function () {
	let interval = setInterval(() => {
		if (secondsStart == 0 && shortBreak == 0) {
			clearInterval(interval)
			let shortBreak = 5
			let secondStart = 0
			timeDisplay.innerHTML = "0" + " : " + "0"
			message.innerHTML = ""
		} else if (secondsStart == 0) {
			shortBreak -= 1
			secondsStart = 59
			timeDisplay.innerHTML = shortBreak + " : " + secondsStart
		} else if (secondsStart > 0) {
			secondsStart -= 1
			timeDisplay.innerHTML = shortBreak + " : " + secondsStart
			message.innerHTML = "Enjoy the 5 minute short break!"
		}
	}, 1000)
})

longBreakBtn.addEventListener("click", function () {
	let interval = setInterval(() => {
		if (longBreakSeconds == 0 && longBreak == 0) {
			clearInterval(interval)
			let longBreak = 15
			let longBreakSeconds = 0
			timeDisplay.innerHTML = "0" + " : " + "0"
			message.innerHTML = ""
		} else if (longBreakSeconds == 0) {
			longBreak -= 1
			longBreakSeconds = 59
			timeDisplay.innerHTML = longBreak + " : " + longBreakSeconds
		} else if (longBreakSeconds > 0) {
			longBreakSeconds -= 1
			timeDisplay.innerHTML = longBreak + " : " + longBreakSeconds
			message.innerHTML = "Enjoy the 15 minute long break!"
		}
	}, 1000)
})
