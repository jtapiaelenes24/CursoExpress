const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log(`Route: ${req.url}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/profile', (req, res) => {
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