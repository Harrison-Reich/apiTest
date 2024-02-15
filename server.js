const express = require('express')
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index', { text: 'world'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

app.listen(3000)