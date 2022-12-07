import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
   user:{
       type: mongoose.Schema.Types.ObjectId,
       required:true,
       ref:'User'
   },
    name:{
       type:String,
       required:true
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    reviews:[{ type: mongoose.Schema.Types.ObjectId  , required:true, ref:'Review'}],
    rating:{
        type: Number,
        required:true,
        default:0
    },
    numReviews:{
        type: Number,
        required:true,
        default:0
    },
    countInStock:{
        type: Number,
        required:true,
        default:0
    }

});

const Product = mongoose.model('Product' , productSchema);

export default Product;