
const history = require("../models/historyModel");



exports.userHistoryController = async (req, res) => {

    const id = req.payload

    // console.log(req);


    const { title, authorname } = req.body


    try {

        const newHistory = new history({
            title,
            authorname,
            userId: id
        })
        await newHistory.save()

        res.status(200).json("read history added successfully")



    } catch (error) {

        res.status(406).json(error)

    }


}

exports.readHistoryController = async (req, res) => {

    const id = req.payload



    try {


        const blogHistory = await history.find({userId:id})

        res.status(200).json(blogHistory)


    } catch (error) {

        res.status(406).json(error)


    }

}


exports.deleteHistoryController = async(req,res)=>{

const{ id }= req.params
// console.log(id);

try {
    


const deleteHistory = await history.findByIdAndDelete({_id:id})

// console.log(deleteHistory);


res.status(200).json("history deleted successfully")

} catch (error) {


    res.status(406).json(error)
    
}

}