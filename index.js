const EventEmitter  = require('events');
const myEmitter = new EventEmitter();


myEmitter.on('FizzBuzz', (number) => {
  if(number % 5 === 0 && number % 3 === 0) {
    console.log("FizzBuzz")
  }
  else if(number % 5 === 0) {
    console.log("Buzz")
  }else if (number % 3 === 0) {
    console.log("Fizz")
  }
})

myEmitter.emit("FizzBuzz", 15)
myEmitter.emit("FizzBuzz", 30)
myEmitter.emit("FizzBuzz", 2)
myEmitter.emit("FizzBuzz", 3)
myEmitter.emit("FizzBuzz", 5)