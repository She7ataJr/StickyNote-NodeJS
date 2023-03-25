import jwt from 'jsonwebtoken'
import noteModel from '../../DB/model/Note.model.js'
import userModel from '../../DB/model/User.model.js'


export const auth =async(req,res,next)=>{
try {
    const {authorization}=req.headers

    if(!authorization?.startsWith('Bearer ')){
        return res.json({message:"invalid Bearer key"})
    }
    const token = authorization.split("Bearer ")[1]

    if(!token){
        return res.json({Message : "token is required"})
    }
    const decoded = jwt.verify(token , process.env.loginSignature)
   
    if(!decoded?.id){
        return res.json({Message : "In-valid Payload"})
    }
    const authUser = await userModel.findById(decoded.id).select("userName email")
    if(!authUser){
        return res.json({message :"Not registered account"})
    }
    
    req.user = authUser

    return next()
} catch (error) {
    if(error.message.startsWith('jwt')){
        return res.json({message :error.message})
    }
    return res.json({message :"error catch ",error})
}
}