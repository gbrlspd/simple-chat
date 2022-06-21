var express = require('express');
var app = express();
var server = app.listen(3000);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

io.on('connection', (socket) => {
    
    socket.on('disconnect', () => {
        console.log('Conexão socket encerrada: ' + socket.id);
    });

    socket.on('msg', (data) => {
        io.emit('showMsg', data);
    });

});