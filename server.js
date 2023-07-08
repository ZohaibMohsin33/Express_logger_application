const express = require('express')
const path    = require('path')
const app     = express();
const bodyparser = require('body-parser')
const session    = require('express-session') 
const {v4 : uuidv4} = require('uuid')
const router = require('./route')
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))

app.use(session({
    secret : uuidv4(),
    resave : false,
    saveUninitialized : true
}))

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

app.use('/route',router)
app.get('/',(req,res)=>{
    res.render('base',{title : "Submit Form"})
})

app.listen(PORT,()=>{
    console.log(`The app is running on port : ${PORT}`)
})