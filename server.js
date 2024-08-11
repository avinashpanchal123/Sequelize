const http = require('http');
const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res)=>{
    res.end("Hello world")
})


server.listen(port, host, ()=>{
    console.log(`listening on port ${port}`)
})