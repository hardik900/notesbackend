import mongoose from "mongoose";

const connectDB = async ()=>{
    const connectInstance = await mongoose.connect('mongodb+srv://hardiksaini900:Jaimatadi@cluster0.5xcoc.mongodb.net/notes')
    // const connectInstance = await mongoose.connect('mongodb://localhost:27017/notes')
    if(connectInstance){
        console.log('mongoDB connected')
    }else{
        console.log('mongoDB not connected')

    }
}

export default connectDB

// mongodb://localhost:27017