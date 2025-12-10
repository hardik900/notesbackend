import { Note } from "../models/note.models.js";
import { requestHandler } from "../utility/requestHandler.js";

const courseCategory = requestHandler( async(req,res) =>{
    const getCategory = await Note.distinct("category")
    res.send(getCategory)
})

export {courseCategory}