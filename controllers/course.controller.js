import { Note } from "../models/note.models.js";
import { requestHandler } from "../utility/requestHandler.js";

const getCourseData = requestHandler(async (req, res) => {
    let { course } = req.params
    const data = await Note.find({ category: course });
    res.send(data)
})

export { getCourseData }