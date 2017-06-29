/*
 * 一.创建一个服务器
要求： 1.用到switch语句来处理请求
      2.最少三个页面(不算报错页面)，这三个页面间可以相互跳转
      3.某一个页面上必须有图片，外部的css和js代码
      4.如果输入的请求没有定义，发送一个报错页面
 * */
var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
    var url = req.url;
   console.log(url)
    switch (url) {
        case "/index1.html":
            fs.readFile("index1.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break
        case "/css":
            fs.readFile("index.css", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/css"})
                    res.end(data)
                }
            });
            break;
        case "/js":
            fs.readFile("index.js", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "text/javascript"})
                    res.end(data)
                }
            });
            break;
        case "/jpg":
            fs.readFile("1.jpg", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err)
                } else {
                    res.writeHead(200, {"content-type": "image/jpeg;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        case "/index2.html":
            fs.readFile("index2.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
		case "/log.html":
            fs.readFile("log.html", "utf-8", function (err, data) {
                if (err) {
                    console.log("读取失败")
                    console.log(err);
                } else {
                    res.writeHead(200, {"content-type": "text/html;charset=utf8"})
                    res.end(data)
                }
            });
            break;
        default:
            res.writeHead(404, {"content-type": "text/html;charset=utf8"})
            res.end("404 没有找到此网页")
    }

}).listen(3000)



