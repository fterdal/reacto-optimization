const express = require("express")
const morgan = require("morgan")
const html = require("html-template-tag")
const throttle = require("./throttle-demo")
const app = express()

app.use(morgan("dev"))

let counter = 0
const updateCounter = () => {
  counter = counter + 1
}

const throttledUpdate = throttle(updateCounter, 200)

//
// setInterval(() => {
//   if (counter > 0) {
//     counter--
//   }
// }, 500)

app.get("/", (req, res) => {
  // throttledUpdate()
  updateCounter()
  if (counter > 70) {
    return res.status(500).send(html`
      <div style="text-align: center;">
        <p style="font-size: ${counter}">Oh No! The server crashed! 🥺</p>
      </div>
    `)
  }
  res.send(html`
    <div style="text-align: center;">
      <a href="/">Click Me!</a>
      <p style="font-size: ${counter}">Counter: ${counter} 😎</p>
    </div>
  `)
})

const PORT = 3030
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
