import mongoose,{Schema} from "mongoose";

const notesSchema = new Schema(
{
    query: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
},
{
    timestamp: true
})

export const Note = mongoose.model("Note", notesSchema)