 const mongoose = require("mongoose")

 const testimonialSchema = new mongoose.Schema({

userId:{
        type:mongoose.Schema.Types.ObjectId,
ref:"user",
required: true

},
feedback:{
    type:String,
    required:true
},
rating:{
    type:Number,
    required:true
},

createdAt:{
    type:Date,
    default:Date.now
}



 })

 const testimonial = mongoose.model('trstimonial',testimonialSchema)

 module.exports=testimonial