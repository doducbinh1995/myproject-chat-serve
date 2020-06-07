var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var socketControll = require('./controller/index');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection',(socket)=>socketControll(socket,io));

http.listen(3000, function () {
    console.log('listening on *:3000');
});
