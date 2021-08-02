const express = require('express')
const app = express()
const port = 4000
const { dbURI } = require('./config/environment')
const router = require('./config/router') 
const logger = require('./config/lib/logger')
const mongoose = require('mongoose')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo has connected')
  })

app.use(express.json())
app.use(logger)
app.use(router)

app.listen(port, () => console.log(`Listening on Port: ${port}`))