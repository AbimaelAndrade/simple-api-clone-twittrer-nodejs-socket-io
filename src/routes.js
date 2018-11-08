const express = require('express')

const routes = express.Router()
const twitterController = require('./controllers/TwitterController')

routes.get('/', (req, res) => {
    return res.end(`
    API - Clone Twitter

    Routers

    [GET]  - /twitters      - List all twitters 
    [POST] - /twitters      - Create new twitter
    [POST] - /likes/:id     - Add like in the twitter with id
    [POST] - /dislikes/:id  - Remove like in the twitter with id
    
    `)
})

routes.get('/twitters', twitterController.index)
routes.post('/twitters', twitterController.store)
routes.post('/likes/:id', twitterController.likes)
routes.post('/dislikes/:id', twitterController.dislikes)

module.exports = routes

