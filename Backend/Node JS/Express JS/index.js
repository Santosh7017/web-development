const express = require('express');
const port = 8000;

const app = express();



app.get('/profile', function(req,res){
    res.send("Profile page is running");
})
app.get('/',function(req,res){
    res.send("It is running");
})

app.listen(port, function(err){
    if(err){
        console.log("error in running server", err);
    }
    console.log("Yup! My Express server is running on port:", port);
    
})