import jwt from 'jsonwebtoken';

const verifytoken = (req,res,next) => {
    const token = req.cookies.accessToken

if(!token){
    return res.status(401).json({success:false, message: "You're not authorize"})
}
// if token is exist then verify the token
jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
    
    if(err){
        return res.status(401).json({success:false, message:"token is invalid"})
    }
    req.user=user 
    next()
})
}

export const verifyuser = (req,res,next) => {
    verifytoken(req,res,next,() =>{
        if(req.user.id===req.params.id || req.user.role==='admin'){
            next()
        }else{
            res.status(401).json({success:false, message: "You're not Authenticated"})
        }
    })
}