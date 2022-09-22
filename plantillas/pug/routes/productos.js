const { Router } = require('express')
const router = Router()
const productosController = require("../controllers/productosController")



const productos = []
let id = 1

router.get("/",productosController.getAll)
router.get('/productos',productosController.renderProducts)
router.get('/add',productosController.renderForm)
router.post('/add',productosController.add )


module.exports =router
