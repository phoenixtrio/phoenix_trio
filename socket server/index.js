const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    //Handle socket connection
    socket.on('message', (message) => {
        //Broadcast received message to all connected clients
        io.emit('message', message);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});