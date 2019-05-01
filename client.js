
const http=require("http")
const url="http://www.google.com"
http.get(url,(responce)=>{
responce.on("data",(chunk)=>{
    setTimeout(()=>{
        console.log(chunk.toString())  
    },5000)
    
})
responce.on("end",()=>{
    console.log("End of the response from server")
})
}).on("error",(err)=>{
    console.error(err.message)
})