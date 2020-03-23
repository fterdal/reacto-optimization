const memo = new Map()
const fibonnaci = num => {
  console.count("FIB")
  // console.log(num)
  if (num < 3) return 1
  if (memo.has(num)) return memo.get(num);
  const result = fibonnaci(num - 1) + fibonnaci(num - 2);
  memo.set(num, result)
  return result
}

const startTime = new Date()

const answer = fibonnaci(500)
console.log(`Answer: ${answer}`)
console.log(`It took ${new Date() - startTime} milliseconds`)
