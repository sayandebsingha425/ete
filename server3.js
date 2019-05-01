const http = require("http")
var server = http.createServer((req,res)=>{
    var str =''
    if(req.url == '/'){
    res.writeHead(200,{'Content-Type':'text/html'})
    str +="<html><head><title>Node Js App</title></head>"
    str +="<body>This is Home Page</body>"
    str +="</html>"
    res.write(str)
    res.end()
    }
    else if(req.url == '/about'){

        res.writeHead(200,{'Content-Type':'text/html'})
    str +="<html><head><title>Node Js App</title></head>"
    str +="<body>This is About Us Page</body>"
    str +="<form> First name:<br> <input type='text' name='firstname'><br>Last name:<br><input type='text' name='lastname'></form>"
    str +="</html>"
    res.write(str)
    res.end()

    }
    else{

        res.writeHead(404,{'Content-Type':'text/html'})
        res.end("Invalid Request")
    }
})
var port = 3000
server.listen(port,()=>{
    console.log('server is listning at port {~port}')
});