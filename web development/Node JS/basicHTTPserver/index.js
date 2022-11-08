const http = require('http');
const port = 8000;


function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'Text/html'})
    res.end('<h1>Gotch!</h1>');
    res.end("Ended");
}



const server = http.createServer(requestHandler);

server.listen(port,function(err){
if(err){
    console.log(err);
    return;
}
console.log("server is up and running on port: ",port);
});