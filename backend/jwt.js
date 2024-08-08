import jwt from "jsonwebtoken"

const generateToken = (userData) => {
    return jwt.sign(userData,"12345")
}

const jwtAuthMiddleware = (req,res,next) => {
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(400).json({msg:"Token not found"})
    }
    const token = req.headers.authorization.split(' ')[1]
    if(!token){
        return res.status(404).json({msg:"Unaithorized"})
    }
    try{
        const decoded = jwt.verify(token,"12345")
        req.userPayload = decoded
        next();
    }catch(err){
        console.log(err);
        res.status(401).json({error:"Invalid token"})
    }
}

export {generateToken,jwtAuthMiddleware}
