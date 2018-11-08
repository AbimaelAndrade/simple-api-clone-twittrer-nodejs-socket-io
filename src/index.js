const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

const server = require('http').Server(app)
const io = require('socket.io')(server)

app.use((req, res, next) => {
    req.io = io
    return next()
})

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

const MONGO_DB = process.env.BD_HOST
const PORT = process.env.PORT

const client = mongoose.connect(
    MONGO_DB,
    { useNewUrlParser: true }
)

module.exports = {
    app,
    server,
    client,
    MONGO_DB,
    PORT
}