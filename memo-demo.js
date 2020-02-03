const fibonnaci = num => {
  if (num < 3) return 1
  return fibonnaci(num - 2) + fibonnaci(num - 1)
}

const startTime = new Date()

const answer = fibonnaci(35)
console.log(`Answer: ${answer}`)
console.log(`It took ${new Date() - startTime} milliseconds`)
