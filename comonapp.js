/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */
var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

//url?name=shashikan
app.get("/path",function (req,res) {//eg. url? query
    var query=req.query;
    var name=query.name;
    res.send("hello Gm GET::"+name);
});

//body json
// http://localhost:5001/user
app.post("/user",function (req,res) {
    var reqjson=req.body;
    res.send("Api Body Post ::"+reqjson.name+"::");//eg body json hit

});
//http://localhost:5001/a/shashikantvipin param both same get and post
app.get("/a/:id",function (req,res) {
    var id=req.params.id;
    res.send("Hello::"+id);
});
//http://localhost:5001/getjson?name=shashikant  json
app.get("/getjson",function (req,res) {
    var reqjson={"name":req.query.name};
    res.send(reqjson);

});

//

app.post("/postjson",function (req,res) {

    var reqjson=req.body;
    res.send(reqjson);

})


app.listen(5001,function (){
    console.log("server started");

});