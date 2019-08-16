const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require("./routers/task");

const app = express();
//to deploy in heroku
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const jwt = require('jsonwebtoken');

app.listen(port, ()=>{
  console.log(`Server is on port ${port}`)
})
