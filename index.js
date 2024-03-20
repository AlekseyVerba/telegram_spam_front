const express = require("express")
const path = require("path")
const dotenv = require('dotenv');
dotenv.config()

const PORT = Number(process.env.PORT) || 8000

const app = express()
app.use(express.static(__dirname))
app.use(express.static(path.resolve(__dirname, "build")))

app.get("*", (req, res) => {

    res.sendFile(path.join(__dirname, "build", "index.html"))
})

app.listen(PORT)
