const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

const MONGO_DB = process.env.BD_HOST
const PORT = process.env.PORT

const client = mongoose.connect(
    MONGO_DB,
    { useNewUrlParser: true }
)

app.get('/', (req, res) => {
    return res.end(`API - Clone Twitter`)
})

module.exports = {
    app,
    client,
    MONGO_DB,
    PORT
}