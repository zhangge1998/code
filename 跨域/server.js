var express = require('express');
var app = express();
app.get('/user',function(req,res){
    if(req.headers.origin){
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
            "Access-Control-Allow-Origin":"http://localhost:63342",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Custom-Header"
        });
        res.write('cors');
        res.end();
    }
   // res.send('userpage');
});
app.options('/user',function(req,res){
   if(req.headers.origin){
       res.writeHead(200, {
           "Content-Type": "text/html; charset=UTF-8",
           "Access-Control-Allow-Origin":"http://localhost:63342",
           "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT",
           // "Access-Control-Allow-Credentials": "true",
           "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Custom-Header"
       });
       res.write('cors');
       res.end();
   }
});
app.put('/user',function(req,res){
    if(req.headers.origin){
        res.writeHead(200, {
            "Access-Control-Request-Method":"PUT",
            // "Access-Control-Request-Headers": "X-Custom-Header",
            "Content-Type": "text/html; charset=UTF-8",
            "Access-Control-Allow-Origin":"http://localhost:63342",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            // "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Custom-Header"
        });
        res.write('cors');
        res.end();
    }
    // res.send('userpage');
});
app.post('/user',function(req,res){
    if(req.headers.origin){
        res.writeHead(200, {
            "Content-Type": "text/html; charset=UTF-8",
            "Access-Control-Allow-Origin":"http://localhost:63342",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, X-Custom-Header"
        });
        res.write('cors');
        res.end();
    }
    // res.send('userpage');
});
app.listen(8080);

// var http = require('http');
// var socket = require('socket.io');
//
// // 启http服务
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {
//         'Content-type': 'text/html'
//     });
//     res.end();
// });
//
// server.listen('8080');
// console.log('Server is running at port 8080...');
//
// // 监听socket连接
// socket.listen(server).on('connection', function(client) {
//     // 接收信息
//     client.on('message', function(msg) {
//         client.send('hello：' + msg);
//         console.log('data from client: ---> ' + msg);
//     });
//
//     // 断开处理
//     client.on('disconnect', function() {
//         console.log('Client socket has closed.');
//     });
// });