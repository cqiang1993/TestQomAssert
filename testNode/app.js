var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var middleFunc = require('./middleFunc');
var MacTokenUtil = require('./MacTokenUtil');
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
    req.headers['Authorization']=MacTokenUtil.getMacContent("fepapi.debug.web.nd","GET",req.path,
        "F5C53502A965E182F54A33AFAC6A197C361300322E578AF9F7E7D46AE8DF06DDE26D973DF69C9C32","tosAFTka0j");
    middleFunc.getQomPaper(req,res)
});

app.post('/v1/commonapi/heartbeat',function (req,res) {
    req.body = {"client_agent": "web"};
    middleFunc.postHeartBeat(req,res)
});

app.listen(port);