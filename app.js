const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, './src/pages'))
app.set('view engine', 'ejs')
app.use('/css', express.static(path.join(__dirname, './src/css')))
app.use('/js', express.static(path.join(__dirname, './src/js')))
app.use('/assets', express.static(path.join(__dirname, './src/assets')))



app.get('/', (req,res) => {
    res.render('index')
})

app.get('/over', (req,res) => {
    res.render('about')
})

app.get('/contact', (req,res) => {
    res.render('contact')
})

app.get('/tarieven', (req,res) => {
    res.render('prices')
})

app.get('*', (req,res) => {
    res.send("verdwaald?")
})



app.listen(3000, () => {

})