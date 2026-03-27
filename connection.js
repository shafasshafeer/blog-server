const mongoose = require('mongoose')

const ConnectionString= process.env.DATABASE

mongoose.connect(ConnectionString).then(()=>{
    console.log('mongoose is running successfully')
    
}).catch((error)=>{
    console.log(error)
    
})