/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */
var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/path",function (req,res) {
    var reqjson={"host":req.headers.host}//acess heder
    res.json(reqjson);
});


app.post("/hd",function (req,res) {
    var name="shashikant";
    req.headers.name=name;
    var reqjson={"host":req.headers,"name":req.headers.name}//custom hedar
    res.json(reqjson);
});


app.listen(4001,function (){
    console.log("server started");

});
