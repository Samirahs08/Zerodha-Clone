import { validationResult } from "express-validator";
import ApiError from "../Error/ApiError.js";
const validate = (req,res,next)=>{
const err = validationResult(req);
if(!err.isEmpty()){

    const msg = err.array().map(e=>e.msg).join(" , ");
    return next(new ApiError(400,msg))
}
next()

}


export default validate