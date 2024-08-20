class Digit {
    constructor(x, y, radius, speed) {
      this.x = x + radius
      this.y = y + radius
      this.radius = radius
      this.speed = speed
      this.clocks = []
      for (let yPos = 0; yPos < 6; yPos++) {
        for (let xPos = 0; xPos <5; xPos++) {
          this.clocks.push(new Clock(this.y + yPos*this.radius*2, this.x + xPos*this.radius*2, this.radius))
        }
      }
    }
    getTo(num) { // Will move the clock hands towards its destination at its speed (closer to desination = slower hands)
      for (let i = 0; i < this.clocks.length; i++) {
        let clock = this.clocks[i]
        let current = [clock.hours1, clock.hours2]
        let target = digitDisplays[num][i]
        this.clocks[i].addTime([(target[0] - current[0])/this.speed, (target[1] - current[1])/this.speed])
      }
    }
  }