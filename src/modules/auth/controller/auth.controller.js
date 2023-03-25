import userModel from "../../../../DB/model/User.model.js";
import bcryptjs from 'bcryptjs'
import { compare } from "../../../utils/HashAndCompare.js";
import jwt from 'jsonwebtoken'
import { CreateToken } from './../../../utils/GenerateAndVerifyToken.js';

export const getAuthModule = (req, res, next) => {

    return res.json({ message: "Auth module" })
}

export const signUp = async (req, res, next) => {
    try {
        const { email, password, userName, cPassword } = req.body;
        if (password != cPassword) {
            return res.json({ message: "password misMatch cPassword" })
        }
        const checkUser = await userModel.findOne({email})
        if(checkUser){
            return res.json({Message : "Email Exist"})
        }    
        const hashPassword = bcryptjs.hashSync(password,Number( process.env.SALTROUND))
        const user = await userModel.create({ email, password : hashPassword,cPassword:hashPassword, userName })
        return res.json({ message: "Account Created Successfully ", user })
    } catch (error) {
       return res.json({Message :"There's an Error",error,stack:error.stack})
    }
}


export const login = async (req, res, next) => {

    try {
        const { email, password } = req.body       
        const user = await userModel.findOne({ email})
        if(!user){
            return res.json({message : "In-Valid Email"})
        }

        const match = compare({plainText:password,hashValue:user.password})

        if(!match){
            return res.json({Message  : "in-valid password"})
        }
        const token = CreateToken({ payload: { id: user._id } })
        return res.json({message : "you're LoggedIn ",token})
    } catch (error) {
        return res.json({ message: "Catch error", error, stack: error.stack })
    }
}