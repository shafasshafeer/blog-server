const mongoose= require('mongoose')


const blogSchema =new mongoose.Schema({


    title:{
        type:String,
        required:true
    },

      authorname:{
        type:String,
        required:true
    },

      category:{
        type:String,
        required:true
    },

      content:{
        type:String,
        required:true
    },

      blogImage:{
        type:String,
        required:true
    },

     userId:{
        type:String,
        required:true
    },
     createdAt:{
        type:Date,
        default:Date.now
    },
    updateAt:{
        type:Date,
        default:null
    }
})

const blog = mongoose.model("blog",blogSchema)

module.exports=blog