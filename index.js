import connectDB from "./db/index.js"
import { app } from "./app.js"

const port = 5000



connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`server start at port 5000`)
    })
}).catch((err)=>{
    console.log('mongoDB connection failed')
})


