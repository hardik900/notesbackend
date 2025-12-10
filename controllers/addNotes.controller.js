import { Note } from "../models/note.models.js";
import { requestHandler } from "../utility/requestHandler.js";

const addNotes = requestHandler(async (req, res) => {
    const { topic, description, category } = req.body;

    // Validation
    if (!topic || !description || !category) {
        return res.status(400).json({
            success: false,
            message: "All fields (topic, description, category) are required"
        });
    }

    // Create note
    const newNote = await Note.create({
        'category':category.toLowerCase(),
        'query' :topic,
        'description' : description
    });

    return res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: newNote
    });
})

export { addNotes }