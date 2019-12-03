const express = require('express');
//cargamos socket.input-group
const socketIO = require('socket.io');
//cargamos el servidor basico web de node
const http = require('http');


const path = require('path');

const app = express();
let server = http.createServer(app); //pasamos el app de express...

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializamos el socket
//comunicacion del backend
//let io = socketIO(server);

//con este export puedo llevar io al socket.js y luego traer abajo el socket.js
module.exports.io = socketIO(server);
require('./sockets/socket');






//app.listen(port, (err) => {
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});