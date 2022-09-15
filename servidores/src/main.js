const express = require("express")
const routes = require("./routes/index.js")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

const PORT = 5000;

app.listen(PORT, (req, res) => {
  console.log('server running on port 5000')
});
