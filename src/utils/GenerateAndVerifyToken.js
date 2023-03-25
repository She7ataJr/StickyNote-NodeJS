import  jwt  from 'jsonwebtoken';


export const CreateToken = ({payload={},signature=process.env.loginSignature}={})=>{

const token = jwt.sign(payload,signature)
return token

}
export const verifyToken = ({payload={},signature=process.env.loginSignature}={})=>{
    const decoded = jwt.sign(payload,signature)
    return decoded
    
}