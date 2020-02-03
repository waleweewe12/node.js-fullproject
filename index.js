const express=require('express')

const app=express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/home',(req,res)=>{
    res.render('home')
})

app.listen(8080,()=>{
    console.log("Application Start At Port 8080")
})