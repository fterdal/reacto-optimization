const throttle = (fn, interval = 10) => {
  let readyToRun = true
  return function(...args) {
    if (readyToRun) {
      readyToRun = false
      setTimeout(() => {
        readyToRun = true
      }, interval)
      return fn(...args)
    }
  }
}

// const throttledConsoleLog = throttle(console.log, 1000)
// setInterval(() => {
//   throttledConsoleLog("Hello World")
//   // console.log("Hello World")
// }, 10)

module.exports = throttle
