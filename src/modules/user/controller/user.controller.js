import userModel from "../../../../DB/model/User.model.js"
import jwt from "jsonwebtoken"


export const getUsers = async (req, res, next) => {
    try {
        const users = await userModel.find()
        return res.json({ message: "Done", users })
    } catch (error) {
        return res.json({ message: "Catch error", error })
    }
}


export const updateUser = async (req, res) => {
    try {
        // const { id } = req.params;
        const { userName } = req.body;
        // console.log({ id, age });

        const user = await userModel.findByIdAndUpdate(req.user._id, { userName },
            { new: true })
        return user ? res.json({ message: "updated ", user }) : res.json({ message: "In-valid AccountID" })

    } catch (error) {
        return res.json({ message: "Catch error", error })

    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const user = await userModel.findByIdAndDelete({ _id: id })
        return user ? res.json({ message: "User Deleted", user }) : res.json({ message: "In-valid AccountID" })

    } catch (error) {
        return res.json({ message: "Catch error", error })
    }
}
 export const getProfile =async  (req,res,next)=>{
    try {
        const user = await userModel.findById(req.user.id)
    return user? res.json({message :"Done" ,user})
    : res.json({Message:"not register account"})
    } catch (error) {
        if(error.message){
            return res.json({message : error.message})
        }
        return res.json({
            Message : "catch error"
        })
    }
}