import express from "express"
import { Note } from "./models/note.models.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use((req, res, next) => {
    console.log('Before parsing:', req.body);  // Check the body before parsing
    next();
});

// app.use(express.json({limit: "16kb"})) //directly except json data
app.use(express.json()) //directly except json data
app.use(express.urlencoded({ extended:true }));  
// app.use(express.urlencoded({extended: true, limit: "16kb"})) //get data through url
app.use(express.static("public"))  // images and favicon icon are stored in public folder
// app.use(cookieParser()) //we can perform crud operation on cookie data, we can directly store cookie from server to client machine

import userRouter from "./routes/user.routes.js"
import courseRouter from "./routes/course.routes.js"


app.use("/api/v1",courseRouter)

// user routes
app.use("/api",userRouter)

export {app}