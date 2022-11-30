class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null
  }


  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback();
      }
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let numberString = value.toString()
  
    if(numberString.length === 1){
      return `0${numberString}`
    } else{
    return `${numberString}`
    }
  } 

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
let minutes = this.getMinutes()
let seconds = this.getSeconds()

let stringMinutes = this.computeTwoDigitNumber(minutes)
let stringSeconds = this.computeTwoDigitNumber(seconds)

return `${stringMinutes}:${stringSeconds}`
    
  }
}


let newChrono = new Chronometer()
console.log(newChrono)


const jansWatch = new Chronometer
console.log(jansWatch)