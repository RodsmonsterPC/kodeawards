const { response, request, json } = require("express");
const bcryptjs = require('bcryptjs');
const User = require('../modules/user.modules');
const { generateJWT } = require('../helpers/generateWebToken');
const { googleValidator } = require('../helpers/googleValidator');


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

const googleSignIn = async(req = request, res = response) => {
  console.log('Asnwer from FRONT GOOGLE',req.body);

  const {id_token} = req.body;
  
  try{
      console.log('in try')
      const { email, name, img} = await googleValidator(id_token);
      console.log('email: ',email);
      console.log('name: ',name); 
      

      let user = await User.findOne({email});
      if( !user ){// User does not exist
          const data = { // Creating the data for the user
              name,
              email,
              password: 'Not_Needed',
              role: 'USER_ROLE',
              img,
              google: true
          }

          user = new User( data );
          await user.save();
      }

      const token = await generateJWT(user.id);

      return res.json({
          msg: "All OK till now",
          name,
          email          
      })
  } catch (error){
      return res.status(400).json({
        success: false,

      })
  }
}

module.exports = {
  login,
  googleSignIn
}