const {
    app,
    client,
    MONGO_DB,
    PORT
} = require('./src')

app.listen({ port: PORT}, () => {
    console.log(`Service running on @ http://localhost:${PORT}`)
})