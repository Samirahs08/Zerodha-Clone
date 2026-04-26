import jwt from "jsonwebtoken" 

const AccessToken = (userid)=>{

   return jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:"5d"})



}

export default AccessToken