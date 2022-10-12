const User = require('../modules/user.modules');
const {validationResult} = require('express-validator');

const emailExists = async(email = '') => {
    const availableEmail = await User.findOne({email});
    if(availableEmail){
        throw new Error(`The email is no longer available`);
    } 
}

const userExistsById = async(userId) =>{
    console.log(userId)

    const availableUser = await User.findById(userId);
    if(!availableUser){
        throw new Error(`Error: User not found`);
    }
}

const validateFields = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }

    next();
}



module.exports = {
    emailExists,
    userExistsById,
    validateFields
}




