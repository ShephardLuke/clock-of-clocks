class Hand {
    constructor(length, width, perHour) {
      this.x = 0
      this.y = 0
      this.length = length
      this.width = width
      this.perHour = perHour
    }
    update(timeValue) {
      this.x = sin(timeValue * 360/this.perHour) * this.length
      this.y = -cos(timeValue * 360/this.perHour) * this.length
      strokeWeight(this.width)
      stroke(255)
      line(0, 0, this.x, this.y)
    }
  }