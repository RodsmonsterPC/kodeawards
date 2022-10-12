const User = require('../models/user')

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

module.exports = {
    emailExists,
    userExistsById
}