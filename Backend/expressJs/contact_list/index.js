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

var contactList = [
{
    name:"Arpan",
    Phone:"1111111111",
},
{
    name:"Tony  Stark",
    Phone:"1234567890"
},
{
    name: "abcd",
    Phone:"0987654321"
}

]







app.get('/',function(req,res){
    return res.render('home',{
        title: "Contact List",
        contact_List: contactList

    });


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