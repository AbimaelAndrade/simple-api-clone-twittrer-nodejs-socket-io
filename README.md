# Simple API Clone Twitter

**API Clone Twitter**, um exemplo de API com nodejs utilizando socket.io.

# Instalar

Primeiro clone o repositório do github:
```bash
    cd ~/your-directory
    git clone https://github.com/AbimaelAndrade/simple-api-clone-twittrer-nodejs-socket-io.git ./
    npm install
``` 

Segundo, crie um arquivo .env

```bash
    touch .env
    vi .env
```
Adicione as key:

```
PORT=3000
BD_HOST=mongodb://localhost:27017/your-database-name
```

# Executar

* Inicie o servidor com `npm start`

# Bibliotecas externas

Libraries | Description
---------- | -------------
[express](https://www.npmjs.com/package/express) | Fast, unopinionated, minimalist web framework for node. 
[dotenv](https://www.npmjs.com/package/dotenv) | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
[cors](https://www.npmjs.com/package/cors) | CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
[mongoose](https://www.npmjs.com/package/mongoose) | Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
[nodemon](https://www.npmjs.com/package/nodemon) | Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
[socket.io](https://www.npmjs.com/package/socket.io) | Socket.IO enables real-time bidirectional event-based communication.
