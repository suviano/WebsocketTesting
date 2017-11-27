var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/form', function (req, res) {
    res.sendFile(__dirname + '/form.html')
})

app.get('/page', function (req, res) {
    res.sendFile(__dirname + '/page.html')
})

io.on('connection', function (socket) {
    console.log('a user connected')
    socket.on('#enterprise1', function (msg) {
        io.emit('#enterprise1', msg)
    })
})

http.listen(3000, function () {
    console.log('listening on *:3000')
})
