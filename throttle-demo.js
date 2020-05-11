const throttle = (fn, interval = 10) => {};

if (require.main === module) {
  const throttledConsoleCount = throttle(console.count, 1000);
  setInterval(() => {
    throttledConsoleCount("Hello World");
    // console.count("Hello World")
  }, 10);
}

module.exports = throttle;
