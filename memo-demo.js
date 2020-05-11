const fibonnaci = (num) => {
  let memo = new Map();
  const fibHelper = (num) => {
    if (num === 1 || num === 2) {
      return 1;
    }
    if (memo.has(num)) return memo.get(num);
    const result = fibHelper(num - 1) + fibHelper(num - 2);
    memo.set(num, result);
    return result;
  };
  return fibHelper(num);
};

const startTime = new Date();

const answer = fibonnaci(50);
console.log(`Answer: ${answer}`);
console.log(`It took ${new Date() - startTime} milliseconds`);
