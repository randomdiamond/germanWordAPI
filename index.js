const express = require("express")
const app = express()
const importData = require("./wordData.json")
let port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("hello world")
})
app.get("/randomword", (req, res) => {
    res.send(importData[Math.floor(Math.random() * importData.length)])
})
app.listen(port, () => {
    console.log(`server is running on port http://localhost:${port}`)
}) 