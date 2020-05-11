const throttle = (fn, interval = 10) => {
  let readyToRun = true;
  return function (...args) {
    if (readyToRun) {
      readyToRun = false;
      setTimeout(() => {
        readyToRun = true;
      }, interval);
      return fn(...args);
    }
  };
};
