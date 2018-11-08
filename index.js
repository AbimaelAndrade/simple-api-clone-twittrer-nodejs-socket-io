const {
    app,
    server,
    MONGO_DB,
    PORT
} = require('./src')

server.listen({ port: PORT}, () => {
    console.log(`Service running on @ http://localhost:${PORT}`)
})