var express = require("express")
var app = express()

app.listen(3001, () => {
    console.log("up")
});
 
app.get("/", (req, res, next) => {
    console.log("Hello from " + req.client.remoteAddress + ":" + req.client.remotePort);
    console.log("to " + req.client.localAddress + ":" + req.client.localPort);
    res.status(201)
});   