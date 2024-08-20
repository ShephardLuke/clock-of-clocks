let standby = [2, 2]
let mode = 0 // 0 is time, 1 is stopwatch
let display

let stopwatch = {
  time: 0,
  interval: null,
  init: function() {
    this.startButton = createButton("Start").mousePressed(function() {stopwatch.start()})
    this.stopButton = createButton("Stop").mousePressed(function() {stopwatch.stop()})
    this.resetButton = createButton("Reset").mousePressed(function() {stopwatch.reset()})
  },
  start: function() {
    if (this.interval) {
        return;
    }
    this.interval = setInterval(function() {
      stopwatch.time++
      if (stopwatch.time > 359999) {
        stopwatch.time = 359999
        stopwatch.stop()
      }
    }, 1000)
  },
  stop: function() {
    if (this.interval != null) {
      clearInterval(this.interval)
      this.interval = null;
    }
  },
  reset: function() {
    this.stop()
    this.time = 0
  }
}

let timeButton
let stopwatchButton

function setup() {
  setupPage()
  createDisplay()
  timeButton = createButton("Current Time").mousePressed(function() {changeMode(0)})
  stopwatchButton = createButton("Stopwatch").mousePressed(function() {changeMode(1)})
  stopwatch.init()
  changeMode(0)
}

function setupPage() {
  createCanvas(1500, 300)
  background(255)
  angleMode(DEGREES)
  textSize(30)
  textAlign(CENTER, CENTER)
}

function createDisplay() {
  let tenHours = new Digit(0, 0, 25, 70)
  let hours = new Digit(250, 0, 25, 60)
  let colon = new Digit(500, 0, 25, 50)
  let tenMinutes = new Digit(750, 0, 25, 40)
  let minutes = new Digit(1000, 0, 25, 30)
  let tenSeconds = new Digit(1250, 150, 12.5, 20)
  let seconds = new Digit(1375, 150, 12.5, 10)
  
  display = new Display([tenHours, hours, colon, tenMinutes, minutes, tenSeconds, seconds])
}

function changeMode(changeTo) {
  mode = changeTo
  if (mode === 1) { // show/hide stopwatch buttons
    stopwatch.startButton.show()
    stopwatch.stopButton.show()
    stopwatch.resetButton.show()
    timeButton.show()
    stopwatchButton.hide()
  } else {
    stopwatch.startButton.hide()
    stopwatch.stopButton.hide()
    stopwatch.resetButton.hide()
    timeButton.hide()
    stopwatchButton.show()
  }
}

function draw() {
  background(255)
  updateDisplay()
}

function updateDisplay() {
  let date, hrs, mins, secs
  date = new Date()
  hrs = date.getHours()
  mins = date.getMinutes()
  secs = date.getSeconds()
  switch (mode) {
    case 0:
      display.getTo([floor(hrs/10), hrs%10, 10, floor(mins/10), mins%10, floor(secs/10), secs%10])
      break
    case 1:
      display.getTo([floor(stopwatch.time/36000)%10, floor(stopwatch.time/3600)%10, 10, floor(stopwatch.time/600)%6, floor((stopwatch.time/60)%10), floor(stopwatch.time/10)%6, stopwatch.time%10])
      break
  }
}
