const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect('mongodb+srv://exambly:exambly@cluster0.folvz.mongodb.net/exambly?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
