/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */
var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/getjson",function (req,res) {
    var reqjson={"name":req.query.name};
    res.send(reqjson);

})

/*app.get("/path",function (req,res) {
    var query=req.query;
    var name=query.name;
    res.send("hello Gm GET::"+name);
});*/

app.post("/postjson",function (req,res) {

    var reqjson=req.body;
 res.send(reqjson);

})

app.listen(4000,function (){
    console.log("server started");

});
