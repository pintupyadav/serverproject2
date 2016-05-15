/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */
var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/path",function (req,res) {
    var query=req.query;
    var name=query.name;
    res.send("hello Gm GET::"+name);
});
app.post("/path",function (req,res) {
    var query=req.query;
    var name=query.name;
    var eamil=query.email;
    res.send("hello ,Gm Post"+name+"::"+email);

});

app.get("/user",function (req,res) {
    var reqjson=req.body;
     res.send("Api Body Get ::"+reqjson.name);
    
});

app.post("/user",function (req,res) {
    var reqjson=req.body;
    res.send("Api Body Post ::"+reqjson.name+"::"+reqjson.email);

});


app.listen(3000,function (){
    console.log("server started");

});

