import { body } from "express-validator";
import isEmail from "validator/lib/isEmail.js";
import validator from "validator"

const login_validator = [
body("identifier").notEmpty().withMessage("Email or username is required").custom((value)=>{

if(value.includes("@")){
    if(!validator.isEmail(value)){
    throw Error("Invalid Email")


}
}
else{
if(value.length <4){
    throw Error("username should contain at least 4 letters")
}

}








return true
})



,




  body("password")
    .notEmpty()
    .withMessage("password is mendatory for signup ")
    .isLength({ min: 6, max: 12 })
    .withMessage("password must be between 6 & 12 characters")
    .matches(/[A-Z]/)
    .withMessage("password must contains at lest one UpperCase")
    .matches(/[a-z]/)
    .withMessage("password must contains at least one lowerCase")
    .matches(/[0-9]/)
    .withMessage("password must contains at least one number")
    .matches(/[^A-Za-z0-9]/)
    .withMessage("Password must contain at least one special character"),
];

export default login_validator;
