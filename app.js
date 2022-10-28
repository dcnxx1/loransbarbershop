const express = require('express')
const app = express()
const path = require('path')

app.set('views', path.join(__dirname, './src/pages'))
app.set('view engine', 'ejs')
app.use('/css', express.static(path.join(__dirname, './src/css')))
app.use('/js', express.static(path.join(__dirname, './src/js')))




app.get('/', (req,res) => {
    res.render('index')
})


app.listen(3000, () => {

})