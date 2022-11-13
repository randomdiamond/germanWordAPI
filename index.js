const express = require("express")
const cors = require('cors')
const app = express()
const importData = require("./wordData.json")
let port = process.env.PORT || 3000

app.use(cors())
app.get("/", (req, res) => {
    res.send(`To get a random word just use the /randomword endpoint: https://germanwordsapi.cyclic.app/randomword`)
})
app.get("/randomword", (req, res) => {
    res.send(importData[Math.floor(Math.random() * importData.length)])
})
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
}) 