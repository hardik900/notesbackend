import connectDB from "./db/index.js"
import express from "express"
import { Note } from "./db/note.models.js"
const app = express()
const port = 5000

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server start at port 5000`)
    })
}).catch((err)=>{
    console.log('mongoDB connection failed')
})

app.get('/',async (req,res)=>{
    try {
        const data = await Note.find();
        res.send(data)
    } catch (e) {
        console.log(e)
    }
})

