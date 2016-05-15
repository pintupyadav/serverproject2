/**
 * Created by Affixus_Shashikant on 5/15/2016.
 */

var express=require("express");
var bodyParser = require("body-parser");

var app =express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));



app.post("/b/:id1",function (req,res) {
    var id=req.params.id1;
    var name=req.params.id1;
    res.send("Hellow hi::"+id+"::"+name);

})

app.listen(3000,function (){
    console.log("server started!!!!");

});
