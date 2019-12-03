var socket = io();

//conexion
socket.on('connect', function() {
    console.log('frontend => conectado al servidor');
});

//desconexion
socket.on('disconnect', function() {
    console.log("frontend => perdimos conexion con server");
});


//escribir al servidor sin ACK
/*socket.emit('enviarMensaje', {
    usuario: 'Pakito',
    mensaje: 'hola mundo'
});*/

//escribir al servidor con ACK, es necesario del lado del server
//tb añadir codigo
socket.emit('enviarMensaje', {
    usuario: 'Pakito',
    mensaje: 'hola mundo'
}, function(resp) {
    console.log("respuesta del server: ", resp);
});


//recibir info del servidor o escucharlo
socket.on('enviarMensaje', function(data) {
    console.log("mensaje del servidor", data);
});