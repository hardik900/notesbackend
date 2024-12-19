import express from "express"
import { Note } from "./db/note.models.js"
import userRouter from "./routes/course.routes.js"
import cors from "cors"
const app = express()

app.use(cors())

app.use("/api/v1",userRouter)



export {app}