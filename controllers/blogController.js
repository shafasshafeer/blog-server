const blog = require('../models/blogModel')
const blogs = require('../models/blogModel')
const user = require('../models/userModel')

exports.addBlogController = async (req, res) => {
    // console.log("inside controller");


    const userId = req.payload
    // console.log(userId);

    // res.status(200).json("request recievd")
    // console.log(req.body);


    const { title, authorname, category, content } = req.body

    const blogimage = req.file.filename


    try {

        const ExistingBlog = await blogs.findOne({ title })

        if (ExistingBlog) {
            res.status(406).json('blog already exist')
        }

        else {
            const newBlog = new blogs({
                title,
                authorname,
                category,
                content,
                blogImage: blogimage,
                userId

            })

            await newBlog.save()
            res.status(200).json(newBlog)
        }

    } catch (error) {
        res.status(401).json(error)
    }

    // console.log(req);



}



exports.getHomeBlogController = async (req, res) => {
    try {

        const homeBlog = await blogs.find().sort({ createdAt: -1 }).limit(3)
        res.status(200).json(homeBlog)

    } catch (error) {
        res.status(406).json(error)
    }
}


exports.allBlogController = async (req, res) => {

    const searchkey = req.query.search

    const query = {
        category: { $regex: searchkey, $options: "i" }
    }

    // console.log(searchkey);


    try {
        const AllBlog = await blogs.find(query)
        res.status(200).json(AllBlog)
    } catch (error) {
        res.status(406).json(error)
    }


}


exports.myBlogController = async (req, res) => {

    const id = req.payload

    // console.log(id);



    try {

        const userBlogs = await blog.find({ userId: id })
        res.status(200).json(userBlogs)

    } catch (error) {

        res.status(406).json(error)

    }
}



exports.deleteBlogController = async (req, res) => {
    const { id } = req.params
    // console.log(req.params);



    try {
        const deleteBlogs = await blog.findByIdAndDelete({ _id: id })
        res.status(200).json("deleted successfully")

    } catch (error) {

        res.status(406).json(error)

    }
}


exports.EditBlogController = async (req, res) => {

    // console.log("inside controller");
    
    const { id } = req.params

    // console.log(id);
    


    const userId = req.payload


    // console.log(req.params);

    const { title, authorname, category, content, blogImage } = req.body

    const updated = req.file ? req.file.filename : blogImage

    // console.log(updated);
    

   

    try {

        
        
        const EditBlog = await blogs.findByIdAndUpdate({ _id: id },
            { title, authorname, category, content, blogImage: updated, userId, updateAt: Date.now() }, { returnDocument: 'after' })

           await EditBlog.save()


        res.status(200).json(EditBlog)

    } catch (error) {

        res.status(406).json(error)

    }

}