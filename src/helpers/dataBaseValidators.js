const User = require('../modules/user.modules')

const emailExists = async(email = '') => {
    const availableEmail = await User.findOne({email});
    if(availableEmail){
        throw new Error(`The email is no longer available`);
    } 
}

const userExistsById = async(userId) =>{
    const availableUser = await User.findById(userId);
    if(!availableUser){
        throw new Error(`Error: User not found`);
    }
}

const sameUser = (value, {req, location, path})=>{
    if(!(value==req.user._id.toString())){
        throw new Error('You do not have the permissions to perform the request'); 
    }
    else{
        return true;
    }
}

module.exports = {
    emailExists,
    userExistsById,
    sameUser
}