
const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerController = async (req, res) => {

    const { username, email, password } = req.body

    const existingUser = await users.findOne({ email })


    try {

        if (existingUser) {
            res.status(401).json("User Already exist")
        }


        else {

            const newUser = new users({
                username,
                email,
                password,
                phoneNumber: "",
                profileImage: ""
            })
            await newUser.save()

            res.status(201).json("New User Registered Successfully")

        }

    } catch (error) {

        res.status(404).json(error)

    }

}



exports.loginController = async (req, res) => {


    const { email, password } = req.body


    // console.log(email,password);

    try {

        const existingUser = await users.findOne({ email, password })

        // console.log(existingUser);

        if (existingUser) {

            const token = jwt.sign({ userId: existingUser._id }, 'superkey')

            res.status(200).json({ existingUser, token })

        }
        else {
            res.status(406).json("user not exist")
        }

    } catch (error) {

        res.status(401).json(error)
    }

}



exports.userProfileController = async (req, res) => {

    const id = req.payload


    const { username,password,email, phoneNumber, profileImage } = req.body

    const updated = req.file?req.file.filename:profileImage



    try {

        const updateProfile = await users.findByIdAndUpdate({ _id: id },
            { email,username, password, phoneNumber, profileImage:updated },{returnDocument:"after"} )
        await updateProfile.save()

        res.status(200).json(updateProfile)



    } catch (error) {
        res.status(406).json(error)


    }


}

