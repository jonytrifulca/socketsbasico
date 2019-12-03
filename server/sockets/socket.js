//me traigo el io del archivo server.js
const { io } = require('../server');

//vemos cuando se conecta o desconecta un cliente
io.on('connection', (client) => {
    //console.log("BACKEND: se conecto un cliente:", client);
    console.log("BACKEND: se conecto un cliente");

    //le envio un mensaje al cliente
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido al server'
    });

    client.on('disconnect', () => {
        //console.log("BACKEND: se conecto un cliente:", client);
        console.log("BACKEND: se DESconecto un cliente");
    });


    //escuchar al cliente sin ACK
    /*client.on('enviarMensaje', (message) => {
        console.log("llega un mensaje del cliente => ");
        console.log(message);
    });*/

    //escuchar al cliente, sus emits con ACK
    client.on('enviarMensaje', (data, callback) => {
        console.log("llega un mensaje del cliente => ");
        console.log(data);

        /* if (data.usuario) {
             callback({ //para el ack al cliente
                 resp: " todo salio bien"
             });
         } else {
             callback({ //para el ack al cliente
                 resp: " todo salio MAL NO USER"
             });
         }*/

        //notificar a todos los clientes conectados
        client.broadcast.emit('enviarMensaje', data);


    });

});


module.export = io;