import mongoose from "mongoose"

const subtodoSchema= new mongoose.Schema(
    {
        content:{
            type: String,
            required: true
        },
        Complete:{
            type: Boolean,
            default: false
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
    },
    {timestamps: true})
export const SubTodo= new mongoose.model("SubTodo",subtodoSchema)