const express = require('express')

const app = express()

app.use(express.text)
app.use(express.json)

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send('Nuevo usuario')
})

app.listen(3000)
console.log(`Server on port ${3000}`)