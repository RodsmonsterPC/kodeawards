const {request, response} = require('express'); 
const bcryptjs = require('bcryptjs');
const User = require('../modules/user.modules');

const getAllUsers = async(req, res = response ) =>{
    const allUsers = await User.find();
    res.json({
        msg: 'All users requested',
        allUsers
    })
}

const createNewUser = async(req, res = response ) => {
    const {google, id, name, email, password,preferenceTags } = req.body;

    const user = User({name, email});

    if(password){
        const salt = bcryptjs.genSaltSync(10);
        user.password = bcryptjs.hashSync(password,salt);
    }

    if(preferenceTags){
        user.preferenceTags = preferenceTags;
    }
    
    await user.save();

    res.json({
        msg: 'New user has been created',
        user
    })

}

const updateUserById = (req, res = response ) =>{
    res.json({
        msg: 'updateUserById - CONTROLLER'
    })
}

const getUserById = async(req, res = response) =>{
    const userId = req.params.userId;
    const user = await User.findById(userId);
    console.log(user);
    res.json({
        success: true,
        msg: "User found",
        user
    })

}

const deleteUserById = async(req, res = response ) =>{
    const userAuth = req.user;
    const user = await User.findByIdAndDelete(userAuth.id);

    res.json({
        success: true,
        msg: 'delete USER - CONTROLLER',
        user
    })
}


module.exports = {
    getAllUsers,
    createNewUser,
    updateUserById,
    deleteUserById,
    getUserById
}