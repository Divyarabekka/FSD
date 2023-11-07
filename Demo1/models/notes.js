import { ObjectId } from "bson";
import mongoose from "mongoose";
 const notesSchema = new mongoose.Schema({
    companyName:{
        type:String,
        required:true,  
    },
    role:{
        type:String,
        required:true,   
    },
    package:{
        type:String,
        required:true,
    },
    questions:{
        type:String,
        required:true,
    },
    date:{
        type:String,
        required:true,
    },
    user: {
        type:ObjectId,
        ref: "user"
    }
 });
 const Notes = mongoose.model("notes",notesSchema);
 export { Notes};

