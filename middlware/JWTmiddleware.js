const jwt= require('jsonwebtoken')


const jwtmiddleware = (req,res,next)=>{

    console.log("inside jwt");
    


const token = req.headers['authorization'].split(" ")[1]
console.log(token);


try {

    const jwtResponse = jwt.verify(token,'superkey')
    console.log(jwtResponse);
    req.payload = jwtResponse.userId
    next()
    
} catch (error) {
    
res.status(401).json('authorization failed')

}



}

module.exports=jwtmiddleware