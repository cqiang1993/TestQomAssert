var http = require('http');
var middleFunc = {
    getCodes:function(req,res) {
        var options = {
            hostname: 'fepapi.debug.web.nd',
            path: req.path,
            method: 'GET',
            headers:req.headers
        };
        delete options.headers.host;

        var creq = http.request(options, function (cres) {
            res.writeHead(cres.statusCode, cres.headers);
            cres.on('data',function (chunk) {
                console.log(chunk.getB)
            });
            cres.pipe(res);
        });
        req.pipe(creq);
    },
    getQomList:function (req,res) {
        var options = {
            hostname: 'fepapi.debug.web.nd',
            path: req.path,
            method: 'GET',
            headers:req.headers
        };
        delete options.headers.host;
        console.log(options.headers);
        var creq = http.request(options, function (cres) {
            res.writeHead(cres.statusCode, cres.headers);
            cres.pipe(res);
        });
        req.pipe(creq)
    },
    getQomPaper:function (req,res) {
        var options = {
            hostname: 'fepapi.debug.web.nd',
            path: req.path,
            method: 'GET',
            headers:req.headers
        };
        delete options.headers.host;
        console.log(options.headers);
        var creq = http.request(options, function (cres) {
            res.writeHead(cres.statusCode, cres.headers);
            cres.pipe(res);
        });
        req.pipe(creq)
    },
    postHeartBeat:function (req,res) {
        var options = {
            hostname: 'fepapi.debug.web.nd',
            path: req.path,
            method: 'POST',
            headers:req.headers
            // body:req.body
        };
        delete options.headers.host;
        console.log(options.headers);
        var creq = http.request(options, function (cres) {
            res.writeHead(cres.statusCode, cres.headers);
            cres.pipe(res);
        });
        req.pipe(creq)
    }
};
module.exports=middleFunc;
