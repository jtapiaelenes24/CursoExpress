const express = require('express')
const morgan = require ('morgan')

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.post('/profile', (req, res) => {
    console.log(req.body)
    res.send('profile page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.use((req, res, next) => {
    if(req.query.login === 'jonDoe@hotmail.com') {
        next()
    } else {
        res.send('Unauthorized')
    }
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page')
})

app.listen(3000)
console.log(`Server on port ${3000}`)