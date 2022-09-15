const express = require("express")
const routes = require("./routes/index.js")
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/", routes)

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});
