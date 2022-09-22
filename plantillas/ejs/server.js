const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes')

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api",router)

app.set('view engine', 'ejs')


app.get("/", (req, res)=>{
  res.render("index")
})

const port = process.env.PORT || 8080
app.listen(port,()=>{
    console.log(`Server lstening on port http://localhost:${port}`);
})
