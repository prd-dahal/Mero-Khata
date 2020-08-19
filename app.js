const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/',function(req,res){
  res.render('home',{name:"Pradeep"})
})
app.listen(3000,function(){
  console.log('Server started at http://localhost:3000')
})
