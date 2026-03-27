const testimonials= require('../models/testimonialModel')

exports.addTestimonialsController= async(req,res)=>{

    const userId = req.payload
     const {feedback,rating}= req.body

    //  console.log(req.body);
    //  console.log(userId);
     
     
try {

    const newTestimonial = new testimonials({

        userId,
        feedback,
        rating
    })

    await newTestimonial.save()
    res.status(200).json(newTestimonial)


} catch (error) {
    // console.log(error);
    
res.status(406).json(error)

}

}


exports.getTestimonialController=async(req,res)=>{

try {
    const allTestimonials= await testimonials
    .find()
    .populate("userId","username profileImage")
    res.status(200).json(allTestimonials)
    
} catch (error) {
    

res.status(406).json(error)

}

    
}