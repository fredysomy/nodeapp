var express = require('express');
var bodyParser=require('body-parser');
var path=require('path');

var app=express();
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
var p=[
    {
        name:"fredy",
        age:'20'
    },
    {
        name:"shahin",
        age:'17'
    }
]
var logger=function(req,res,next){
    console.log("loging");
    next();
}
app.use(logger);
app.get('/',function(req,res){
res.json(p);
});

app.listen('3000',()=>{
    console.log("server startted")
});