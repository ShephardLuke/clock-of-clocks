class Clock {
    constructor(y, x, radius) {
      this.x = x
      this.y = y
      this.radius = radius
      this.hours1 = 0
      this.hours2 = 0
      this.hourHand1 = new Hand(this.radius, this.radius*0.1, 12)
      this.hourHand2 = new Hand(this.radius, this.radius*0.1, 12)
    }
    addTime(time) { // Adds hours to its current hours
      fill(0)
      strokeWeight(this.radius*0.1)
      circle(this.x, this.y, this.radius*2)
      push()
      fill(255)
      translate(this.x, this.y)
      
      textSize(this.radius*0.3)
    
      this.hourHand1.update(this.hours1 + time[0])
      this.hours1 += time[0]
      this.hourHand2.update(this.hours2 + time[1])
      this.hours2 += time[1]
  
      pop()
    }
  }