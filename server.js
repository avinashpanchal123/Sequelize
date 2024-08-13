// const http = require('http');
// const host = 'localhost';
// const port = 3000;

// const server = http.createServer((req, res)=>{
//     res.end("Hello world")
// })


// server.listen(port, host, ()=>{
//     console.log(`listening on port ${port}`)
// })

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const path = require('path');
const {Server} = require('socket.io');
const io = new Server(server)


app.get('/', (req, res)=>{
    // res.sendFile(path.join(__dirname +'/index.html'))
})

io.on('connection', (socket)=>{
    // console.log(socket, 'socket.object');
    socket.on('chat', (msg)=>{
        console.log(msg)
    })
})




server.listen(4000, ()=>{
    console.log(`listening on port 3000`)
})