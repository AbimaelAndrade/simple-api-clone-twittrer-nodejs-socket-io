const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
app.use(express.json())

const MONGO_DB = process.env.BD_HOST
const PORT = process.env.PORT

const client = mongoose.connect(
    MONGO_DB,
    { useNewUrlParser: true }
)

app.use(require('./routes'))

module.exports = {
    app,
    client,
    MONGO_DB,
    PORT
}