const throttle = (fn, interval = 10) => {
  let readyToRun = true;
  return function(...args) {
    if (readyToRun) {
      readyToRun = false;
      setTimeout(() => {
        readyToRun = true;
      }, interval);
      return fn(...args);
    }
  };
};

if (require.main === module) {
  const throttledConsoleCount = throttle(console.count, 1000);
  setInterval(() => {
    throttledConsoleCount("Hello World");
    // console.count("Hello World")
  }, 10);
}

module.exports = throttle;
