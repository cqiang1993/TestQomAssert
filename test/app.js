var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var middleFunc = require('./middleFunc');
//
// app.use(middleFunc());

app.get('/v1/commonapi/get_codes',function (req,res) {
    middleFunc.getCodes(req,res)
});

app.get('/v1.1/qom/exams/actions/my_exams',function (req,res) {
    req.headers['Authorization']="Debug UserId=2081291352";
    middleFunc.getQomList(req,res)
});

app.get('/v1/qom/papers/:id',function(req,res){
    req.headers['Authorization']="Debug UserId=2081575077";
    middleFunc.getQomPaper(req,res)
});

app.listen(port);