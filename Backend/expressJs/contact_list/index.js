
// request
// *get
// *post
//? below work with only ajax
// * put
// * patch
// * delete 



const express = require('express');
const path = require('path');
const port = 8000;
const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));







app.get('/',function(req,res){
    return res.render('home',{title: "Contact List"});


    // console.log(__dirname);
// res.send('<h1>cool, it is running! or is it? </h1>');
});

app.get('/practice',function(req,res){
    // console.log(req);
    // console.log(res);
    return res.render('practice',{
title:"Let us play with ejs"
    });
});



app.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Express server is running on port: ",port);
});