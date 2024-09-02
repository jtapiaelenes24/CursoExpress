const express = require('express')

const app = express()

app.get('/hello/:user', (req, res) => {
    console.log(typeof req.params.user)
    res.send(`Hello ${req.params.user.toLocaleUpperCase()}`)
})

app.get('/add/:x/:y', (req, res) => {
    const {x, y} = req.params

    res.send(`Result: ${parseInt(x) + parseInt(y)}`)
})

app.get('/users/:username/photo', (req, res) => {
    if(req.params.username === "jt24") {
        return res.sendFile('./image1.jpg', {
            root: __dirname
        })
    }

    res.send('el usuario no tiene acceso')
})

app.get('/name/:nombre/age/:age', (req, res) => {
    console.log(req.params)
    res.send(`El usuario ${req.params.nombre.toLocaleUpperCase()} tiene ${req.params.age} años`)
})

app.listen(3000)
console.log(`Server on port ${3000}`)