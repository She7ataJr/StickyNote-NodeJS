import { query } from "express";
import noteModel from "../../../../DB/model/Note.model.js";
import userModel from "../../../../DB/model/User.model.js";



export const getNoteModule = async (req, res, next) => {

    const notes = await noteModel.find({}).populate([
        {
            path: 'createdBy',
            select: 'userName email'
        }
    ])
    return res.json({ message: "Done", notes })
}

export const  addNote = async (req, res, next) => {
    try {
        const { title, description} = req.body;

        const user = await userModel.findById(req.user._id);

        if (!user) {
            return res.json({ message: "In-valid userId" })

        }
        const note = await noteModel.create({ title, description, createdBy:req.user._id })
        return res.json({ message: "Done", note })
    } catch (error) {
        return res.json({ message: "Catch error", error })
    }
}

export const updateNote = async(req,res,next)=>{
    try {
        const {_id} = req.params

        const createdBy = req.user._id
        console.log(createdBy);
        const {title,description}=req.body
        console.log(req.body);
        const note = await noteModel.findOneAndUpdate({id:_id,createdBy},{title,description})
        return note? res.json({message :"updated",note}):res.json({message : 'in-valid user or In-valid Note'})
    } catch (error) {
        return res.json({message:'catch error',error:error.stack})
    }
} 


export const deleteNote = async (req,res,next)=>{
    const {_id}=req.params 
    const createdBy=req.user._id
    const note = await noteModel.findOneAndDelete({id:_id,createdBy})
    return note? res.json({message :"deleted"}):res.json({message :"catch error"})
}