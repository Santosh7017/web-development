const http = require('http');
// const port = 8000;
const port = 8000;
const fs = require('fs');
// const { url } = require('inspector');


// function requestHandler(req, res){
    // console.log(req.url);
    // res.writeHead(200,{'content-type':'Text/html'});
    // fs.readFile('./index.html');
    // res.end('<h1>Gotcha!</h1>');
    // res.end("Ended");
// }

function requestHandler(req, res){
    // console.log(req, url);
    res.writeHead(200,{'content-type':' text/html'});
//     fs.readFile('./index.html',function(err,data){
// if(err){ 
//     console.log('error ',err);
//     return res.end('<h1>Error!!!</h1 >');
// }

// return res.end(data);


//     })
//
let filepath;
switch(req.url){ // this will return which page we are looking for
case '/': // this is home page
    filepath = './index.html';
    break;
    case '/profile': // this is profile page
        filepath = './profile.html';
        break;
    default:
        filepath = './404.html';
}
    fs.readFile(filepath, function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1> error!</h1>');
        }
        return res.end(data);
    })

} 


const server = http.createServer(requestHandler);

server.listen(port,function(err){
if(err){
    console.log(err);
    return;
}
console.log("server is running in local server: ",port);

});