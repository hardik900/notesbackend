import express from "express"
import { Note } from "./models/note.models.js"
import cors from "cors"
const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"})) //directly except json data
app.use(express.urlencoded({ extended:true }));  
app.use(express.static("public"))  // images and favicon icon are stored in public folder
// app.use(cookieParser()) //we can perform crud operation on cookie data, we can directly store cookie from server to client machine

app.get("/api/health",(req,res)=>{
  return res.json({message: "This is the health route"})
})

import userRouter from "./routes/user.routes.js"
import courseRouter from "./routes/course.routes.js"
// import categoryRouter from "./routes/category.routes.js"
import categoryRouter from "./routes/category.routes.js"
import addNotesRouter from "./routes/addNotes.route.js"

// 

// user routes
app.use("/api",userRouter)
app.use("/api/v1",courseRouter)
app.use("/api/v",categoryRouter)
app.use("/api/addNotes",addNotesRouter)

export {app}
