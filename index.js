const express = require("express")
const app = express()
const port = 5000

app.use('/got', require('./routes/got'))
app.use('/pokemon', require('./routes/pokemon'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})