const express = require('express')
app = express()


app.get('/',function(req,res){
  res.send("Hello World")
})
app.listen(3000,function(){
  console.log('Server started at http://localhost:3000')
})
