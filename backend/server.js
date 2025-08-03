const express = require("express")
const cors = require("cors")
const app = express()
const data = require("./data")


app.listen(3000,()=>{
    console.log("Server started at port 3000!")
})

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send(data)
})

app.get("/doctor/:id",(req,res)=>{
     let check = false
     const {id} = req.params
     for(let i=0;i<data.length;i++){
       
         if(data[i].id==id){
            res.json(data[i])
            check = true
           break
         }
     }

     if(check==false){
        res.send("Invalid Request!")
     }
     
    
})

