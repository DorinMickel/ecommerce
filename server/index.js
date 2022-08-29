const express = require('express')
const cors = require('cors')
const userData = require('../someData.json')
const app = express()
const port = 5000
const products = require('../productsData.json')

app.use(cors())


app.get('/', (req,res) => {
    res.send(userData.users)
})
app.get('/products', (req,res) => {
    res.send(products.arrayOfProducts)
})

app.listen(port, () => {
    console.log(`I am listening on ${port}`)
})