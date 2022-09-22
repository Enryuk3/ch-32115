const {Router} = require('express')
const router = Router()

const products = require('./products')


router.use("/productos",products)




module.exports = router
