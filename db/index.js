import mongoose from "mongoose";

const connectDB = async ()=>{
    const connectInstance = await mongoose.connect('mongodb+srv://hardiksaini900:Jaimatadi@cluster0.5xcoc.mongodb.net/notes')
    if(connectInstance){
        console.log('mongoDB connected')
    }else{
        console.log('mongoDB not connected')

    }
}

export default connectDB