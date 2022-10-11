const webSocket = require('ws');

const PORT = 5000;

const webServer = new webSocket.Server({
    port: PORT
});

webServer.on('connection', function (sockect) {
    // some feedback on the console
    console.log("A client just connected");

    // Attach some behaviour to the incoming socket
    sockect.on('message', function (msg){
        console.log("Received message from client: " + msg);

        // Broadcast that message to all connected clients
        webServer.clients.forEach(function (client) {
            client.send("Someone said: " + msg);
        });
    });
});

console.log( (new Date()) + " Server is listening on port " + PORT);