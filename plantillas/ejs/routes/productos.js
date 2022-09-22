const { Router } = require('express')
const router = Router()
const productController = require('../controllers/productosController')

router.get("/",productController.getAll)

router.get('/add',productController.renderForm)

router.post('/add',productController.add)

module.exports = router
