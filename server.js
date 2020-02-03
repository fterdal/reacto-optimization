const express = require("express")
const morgan = require("morgan")
const html = require("html-template-tag")
// const throttle = require("./throttle-demo")
const app = express()

app.use(morgan("dev"))

let counter = 0
const updateCounter = () => {
  counter = counter + 1
}

//
// setInterval(() => {
//   if (counter > 0) {
//     counter--
//   }
// }, 500)

app.get("/", (req, res) => {
  updateCounter()
  if (counter > 10) {
    return res.status(500).send(html`
      <div style="text-align: center;">
        <h1>Oh No! The server crashed! 🥺</h1>
      </div>
    `)
  }
  res.send(html`
    <div style="text-align: center;">
      <h1>Counter: ${counter} 😎</h1>
      <a href="/">Click Me!</a>
    </div>
  `)
})

const PORT = 3030
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
