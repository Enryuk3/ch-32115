const express = require('express');
const app = express();
const port = process.env.PORT || 8081;
const morgan = require('morgan');
const router = require('./routes')

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("views","./views")
app.set("view engine","pug")


app.get('/',(req, res) =>{
    res.render('index.pug', {nombre:"nachito",edad:28})
})




app.use("/api",router)

app.listen(port,()=>{
    console.log(`Server listening http://localhost:${port}`);
})
