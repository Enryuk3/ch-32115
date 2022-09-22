const express = require("express");

const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 8080;
const router = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));


//* Handlebars config
const { engine } = require("express-handlebars");
app.engine('handlebars',engine());
app.set("view engine", "handlebars")
app.set("views","./views")


app.get("/", (req, res)=>{
  res.render("productos")
})

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
