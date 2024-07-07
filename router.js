const express = require('express');
const router = express.Router()
const {get_products } = require('./control')

router.get('/products',get_products)

module.exports = router