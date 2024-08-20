class Display {
    constructor(digits) {
      this.digits = digits
    }
    getTo(num) {
      for (let i = this.digits.length - 1; i >= 0; i--) {
        this.digits[i].getTo(num[i])
      }
    }
  }