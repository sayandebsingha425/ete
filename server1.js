const http = require("http")
var server = http.createServer((req,res)=>{
    var str =''
    res.writeHead(200,{'Content-Type':'text/html'})
    str +="<html><head><title>Node Js App</title></head>"
    str +="<body>Hello to node js App</body>"
    str +="</html>"
    res.write(str)
    res.end()
})
var port = 3000
server.listen(port,()=>{
    console.log('server is listning at port ${port}')
});