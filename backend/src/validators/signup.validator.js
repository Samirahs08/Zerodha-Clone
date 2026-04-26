import { body } from "express-validator";

const signup_validator = [
  body("username")
    .notEmpty()
    .withMessage("username must not be Empty")
    .bail()
    .isLength({ min: 4 })
    .withMessage("username atleast contains 4 letter"),

  body("email")
    .notEmpty()
    .withMessage("email should not be Empty")
    .bail()
    .isEmail()
    .withMessage("Invalid Email"),

  body("password")
    .notEmpty()
    .withMessage("password is mendatory for signup ")
    .isLength({ min: 3, max: 12 })
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

export default signup_validator;
