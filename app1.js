/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */
var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/path",function (req,res) {//eg. url? query
    var query=req.query;
    var name=query.name;
    res.send("hello Gm GET::"+name);
});




app.post("/user",function (req,res) {
    var reqjson=req.body;
    res.send("Api Body Post ::"+reqjson.name+"::"+reqjson.email);//eg body json hit

});


app.listen(3001,function (){
    console.log("server started");

});

