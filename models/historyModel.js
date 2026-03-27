

const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({

title:{
    type:String,
    require:true
},

authorname:{
    type:String,
    require:true
},

createdAt:{
    type:Date,
    default:Date.now
},
userId:{
    type:String,
    require:true
}



})

const history = mongoose.model('history',historySchema)

module.exports=history