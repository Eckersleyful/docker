var http = require('http')
var express = require("express");
var app = express()


const options = {
    hostname: 'localhost',
    port: 3001,
    path: '/service2',
    method: 'GET'
}

app.listen(8001, () => {
    console.log("up")
});


app.get("/service1", (req, res, next) => {
    console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort);
    console.log("to " + req.client.localAddress + ":" + req.client.localPort);
    const request = http.request(options, res => {
        res.on('data', d => {
            console.log(d)
        });
        res.on('error', e => {
            console.error(e) 
        });
    });
    request.on('error', error => { 
        console.error(error)
    })
    request.end()
    res.end()
});  