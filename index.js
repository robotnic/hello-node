const express = require('express')
const app = express()
const port = 30000

const startTime = new Date();

app.get('/', (req, res) => {
  res.send('Hello World!' + startTime.toISOString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
