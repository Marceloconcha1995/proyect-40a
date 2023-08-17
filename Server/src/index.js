const express = require('express')
const server = express();
const router = require('./routes/index')
const morgan = require('morgan')

server.use(morgan('dev'))
server.use(express.json())

server.use((request, respuesta, next) => {
    respuesta.header('Access-Control-Allow-Origin', '*');
    respuesta.header('Access-Control-Allow-Credentials', 'true');
    respuesta.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    respuesta.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );

    next();
 });

server.use('/rickandmorty', router)


server.listen(3001, () => console.log('Server raised in port 3001'));