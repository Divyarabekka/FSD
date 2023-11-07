import mongoose from "mongoose";
export function dataBaseConection(){
    const params ={
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }
    try {
        mongoose.connect(process.env.MONGO_URL,params)
        console.log("mongoDB connected");
    } catch (error) {
        console.log("connection fail",error);
    }
}