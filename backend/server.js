const express = require('express')
const mongoose = require('mongoose')
const noteRoutes = require('./routes/noteRoutes')
require('dotenv').config()

const app = express()
// parse data from req.body
app.use(express.json())

app.use('/api/notes', noteRoutes)

//connect to db and start listening
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(
      process.env.PORT,
      () => `Server listening on ${process.env.PORT}`
    )
  })
  .then(err => console.log(err))
