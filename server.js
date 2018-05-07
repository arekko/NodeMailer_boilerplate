var express=require('express');
var nodemailer = require("nodemailer");
var app=express();



app.get('/',function(req,res){
res.sendfile('index.html');
});

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "arekkoresp@gmail.com",
        pass: "oong3ied"
    }
});

app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});
// app.get('/send',function(req,res){
//     var mailOptions={
//         to : req.query.to,
//         subject : req.query.subject,
//         text : req.query.text
//     }





app.listen(3000,function(){
console.log("Express Started on Port 3000");
});
