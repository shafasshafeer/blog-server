require ('dotenv').config()
const express= require('express')
const cors= require('cors')
const router=require('./routes')
require('./connection')
const soulserver= express()
soulserver.use(cors())
soulserver.use(express.json())
soulserver.use(router)

soulserver.use('/uploads',express.static('./uploads'))
// soulserver.use('/uploads',express.static('./uploads'))

const PORT=4000 || process.env.PORT
soulserver.listen(PORT,()=>{
    console.log(`server running successfully at ${PORT} `);
    
})

// soulserver.get('/', (req,res)=>{

//     res.send("server is running successfully!")
// }) 