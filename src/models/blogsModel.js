const mongoose=require("mongoose")
const ObjectId=mongoose.Schema.Types.ObjectId

const blogsSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    body:{
       type:String,
       required:true
    },
    authorId:{
        type:ObjectId,
        ref:"Author",
        required:true
    },
    tags:{type:[String]
    },
    category:[{
        type:String,
        required:true
    }],
    subcategory:[{
        type:String,
        required:true
    }],
    isDeleted: {
         type: Boolean,
          default: false
        },
    isPublished: {
         type: Boolean,
          default: false
        },
    deletedAt:{
        type:Date
    },
    publishedAt:{
        type:Date
    }
 
},{timestamps:true})
module.exports=mongoose.model("Blog",blogsSchema)