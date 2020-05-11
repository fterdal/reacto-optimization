const throttle = (fn, interval = 10) => {
  // Write throttle here:
  let readyToRun = true
  const throttledFn = (...args) => {
    if (readyToRun) {
      setTimeout(() => {
        // console.log("SET TIMEOUT")
        readyToRun = true
      }, interval)
      readyToRun = false
      return fn(...args);
    }
  }
  return throttledFn;
};

if (require.main === module) {
  const throttledConsoleCount = throttle(console.count, 1000);
  setInterval(() => {
    throttledConsoleCount("Hello World");
    // console.count("Hello World");
  }, 10);
}

module.exports = throttle;
