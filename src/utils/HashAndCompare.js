import bcrypt from 'bcryptjs'
export const hash =({plainText,saltRound}={})=>{
    const hashResult = bcrypt.hashSync(plainText,Number(saltRound))
    return hashResult
}

export const compare =({plainText,hashValue}={})=>{
    const match = bcrypt.compareSync(plainText,hashValue)
    return match
}