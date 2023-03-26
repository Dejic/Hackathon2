const express = require("express")
const app = express()
const cors = require ("cors")
const port = 3000
const db = require("knex")({
    client: "pg", connection: {
        host: "localhost",
        user: "postgres",
        password: "Clubhouse123",
        database: "To do list",
        port: "5432"
    }
})

app.use(cors())
app.use(express.json())
app.get("/getinfo",async (req,res)=>{
let questions=await db("questions").select()
console.log(questions)
    
res.json(questions)
})





app.listen(port,()=>console.log("server is running"))