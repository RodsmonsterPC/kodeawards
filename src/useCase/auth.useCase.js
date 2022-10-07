const { response, request, json } = require("express");
const bcryptjs = require('bcryptjs');
const User = require('../modules/user.modules');
const { generateJWT } = require('../helpers/generateWebToken');


const login = async( req, res = response ) => {
  const { email, password } = req.body;

  try{
    const user = await User.findOne({email});

    if(!user){
      return res.status(400).json({
        success: false,
        msg: 'User/Password incorrect - user'
      })
    }

    const validPassword = bcryptjs.compareSync( password, user.password);
    if( !validPassword ){
      return res.status(400).json({
        success: false,
        msg: 'User/Password incorrect - password'
      })
    }

    const token = await generateJWT(user.id);


    // watch out
    return res.json({
      success: true,
      user,
      token
    })

  }
  catch(error){
    return res.status(500).json({
      status: false,
      msg: 'INTERNAL ERROR: Reach out the administrator'
    });
  }
}

module.exports = {
  login
}