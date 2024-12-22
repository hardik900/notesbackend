import { Note } from "../models/note.models.js";

const getCourseData = (async (req, res) => {
    let { course } = req.params
    try {
        const data = await Note.find({ category: course });
        res.send(data)
    } catch (e) {
        console.log(e)
    }
})

export { getCourseData }