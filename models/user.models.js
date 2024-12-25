import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true
        },

        number: {
            type: Number,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: [true, "Password is required"]
        },

        refreshToken: {
            type: String
        },
    },
    {
        timestamps: true
    }
)

export const User =  mongoose.model("User", userSchema) 