import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    complete:{
        type:Boolean,
        default:false
    }
})

export const Todo = mongoose.model("Todo",todoSchema);