import mongoose from 'mongoose';
const productSchema = mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    productImage:{
        type: String
    },
    price:{
        type: Number,
        default: 0,
        required: true
    },
    stock:{
        type: Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
{timestamps:true});

export const Product= mongoose.models('Product',productSchema);