/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */

var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/a/:id",function (req,res) {
    var id=req.params.id;
    res.send("Hello::"+id);
});

app.post("/b/:id1",function (req,res) {
    var id=req.params.id;
    res.send("Hellow hi::"+id);

})


app.listen(3000,function (){
    console.log("server started");

});
