const memo = new Map()
const fibonnaci = num => {
  if (num < 3) return 1
  if (memo.has(num)) return memo.get(num)
  const result = fibonnaci(num - 2) + fibonnaci(num - 1)
  memo.set(num, result)
  return result
}

const startTime = new Date()

const answer = fibonnaci(60)
console.log(`Answer: ${answer}`)
console.log(`It took ${new Date() - startTime} milliseconds`)
