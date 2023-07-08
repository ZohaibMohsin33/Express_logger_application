const express = require('express')
const router   = express.Router();

const credentials = {
    email : 'anything@gmail.com',
    password  : "Radia@1204"
}

router.post('/login',(req,res)=>{
    if(req.body.email === credentials.email && req.body.password === credentials.password){
       req.session.email = req.body.email 
       res.redirect('/route/dashboard')
    }
    else{
        res.send('invalid email or password')
    }
})

router.get('/dashboard',(req,res)=>{
    if(req.session.email){
        res.render('dashboard', {user : req.session.email})
    }else{
        res.end('Invalid User')
    }
})

router.get('/logout',(req,res)=>{
   req.session.destroy((err)=>{
    if(err)
    console.log(err)
    else{
        res.render('base', {title : 'Express', logout : 'Logout Successfully'})
    }
   })
})

module.exports = router