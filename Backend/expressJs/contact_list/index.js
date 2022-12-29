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

const db = require('./config/mongoose');
const Contact = require('./models/contact')

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); // parser, midelware  - a function whcih has acces to your request and response then it can process data and response data and have capability to return data.  
app.use(express.static('assets'));

//  creating middleware1
// app.use(function(req, res, next){
// // console.log("middleware 1 called");
// req.myName="Arpan";
// next();
// });

// //  middleware 2
// app.use(function(req,res,next){
//     console.log("My name from Mw2", req.myName);
//     // console.log("middleware 2 called");
//     next();
// });



var contactList = [
{
    name:"Arpan",
    Phone:"3938274638",
},
{
    name:"Tony  Stark",
    Phone:"1234567890"
},
{
    name: "abcd",
    Phone:"0987654321"
}

];







app.get('/',function(req,res){
    // console.log("From the get route controller",req.myName); 

//  
    Contact.find({},function(err,contacts){
        if(err){
            console.log('Error in fetching contacts');
            return;
        }
        return res.render('home',{
            title: "Contact List",
            contact_List: contacts
    
        });
    
    });


   

    // console.log(__dirname);
// res.send('<h1>cool, it is running! or is it? </h1>');
});

app.get('/practice',function(req,res){
    // console.log(req);
    // console.log(res);
    return res.render('practice',{
title:"Contact list"
    });
});

app.post("/create-contact",function(req, res){
    // contactList.push({
    //     name:req.body.name,
    //     Phone:req.body.Phone

    // });

    // push the data into contact list or add contacts in contact list
    // contactList.push(req.body);

    // push data into database
    Contact.create({
        name:req.body.name,
        phone: req.body.Phone,
    },function(err, newContact){
        if(err){
            console.log("Error in creating a contact");
            return;
        }

        console.log('*******', newContact);
        return res.redirect('back');
    });

    // return res.redirect('back');

    // return res.redirect('/');

    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.Phone);
    // return res.redirect('/practice');
});

// for deleteding contact
app.get('/delete-contact/',function(req, res){
//     console.log(req.params); 
// let phone = req.params.Phone;

// get query from the url
// console.log(req.query);
// let phone = req.query.Phone;

// fetching id from database from query
let id = req.query.id;

// find the contacat in the dtabase using id and delete
Contact.findByIdAndDelete(id,function(err){
if(err){
    console.log("error in deleteing an object from dtabase");
    return;
}
return res.redirect('back');

});

// find the index  if found returen index otherwise return -1
// let contactIndex = contactList.findIndex(contact => contact.Phone ==  phone);
// if(contactIndex != -1){
//     // if found deleted element
//     contactList.splice(contactIndex,1);
// }

});


app.listen(port, function(err){
    if(err){
        console.log("Error in running the server");
    }
    console.log("Express server is running on port: ",port);

});