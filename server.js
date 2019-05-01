const http = require("http")
var server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("Hello to node js App")
    res.end()
})
var port = 3000
server.listen(port,()=>{
    console.log('server is listning at port ${port}')
});