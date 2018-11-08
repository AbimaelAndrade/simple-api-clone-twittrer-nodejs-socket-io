const Twitter = require('../models/Twitter')

module.exports = {
    async index(req, res) {
        const twitters = await Twitter.find({}).sort('-createdAt')
        return res.json(twitters)
    },

    async store(req, res) {
        const twitter = await Twitter.create(req.body)
        
        req.io.emit('twitter', twitter)
        
        return res.json(twitter)
    },

    async likes(req, res) {
        const twitter = await Twitter.findById(req.params.id)
        twitter.set({ likes: ++twitter.likes })
        await twitter.save()
        
        req.io.emit('twitter.like', twitter)

        return res.json(twitter)
    },

    async dislikes(req, res) {
        const twitter = await Twitter.findById(req.params.id)
        twitter.set({ likes: --twitter.likes })
        await twitter.save()

        req.io.emit('twitter.dislike', twitter)
        
        return res.json(twitter)
    }
}