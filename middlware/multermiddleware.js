const multer = require('multer')


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        cb(null,filename)
    }
})

fileFilter = (req,file,cb)=>{
    if(file.mimetype == "image/jpeg"  || file.mimetype == "image/jpg" ||file.mimetype == "image/png" ){

        cb(null,true)
    }
    else{
        cb(null,false)
        return cb(new Error("only allow jpeg , jpj and png files"))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

module.exports = multerConfig