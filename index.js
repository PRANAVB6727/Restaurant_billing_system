var express = require('express');
// import express from"express"
var mysql = require('mysql');
// import mysql from"mysql"
var bodyParser = require('body-parser');
// import bodyParser from"body-parser"

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pranav@6727",
//   database: "RMS"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("connected");
  
// });



app.get('/',function(rq,res){
  res.sendFile(__dirname+'/bill.html');
});


function addItem()
{
  app.post('/',function(req,res){

    console.log(req.body);

    // var id = req.body.id;
    // var qty = req.body.quantity;
    // var amt = eeq.body.amount;
    // var price = amt*qty;
    // var query = "insert into bill values('"+id+"','"+qty+"','"+price+"')"
    // con.query(query,function(error,result){
    //   if(error) throw error;
    //   console.log(result);
    // });
    
  })
}


app.listen(5500);