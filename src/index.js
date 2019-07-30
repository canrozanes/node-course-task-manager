const express = require('express');
require('./db/mongoose');
const User = require('./models/User');

const app = express();

//to deploy in heroku
const port = process.env.PORT || 3000

app.use(express.json())

//resource creation
app.post('/users', (req, res)=>{
  const user = new User(req.body)
  user.save().then(()=>{
    res.send(user)
  }).catch((e)=>{
    res.send(400).send(e)
  })
})

app.listen(port, ()=>{
  console.log(`Server is on port ${port}`)
})