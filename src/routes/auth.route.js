const {Router} = require('express');
const { check } = require( 'express-validator');
const { login }        = require ('../useCase/auth.useCase');
const { googleSignIn } = require('../useCase/auth.useCase')
const { validateFields } = require('../middlewares/validateFields');

const router = Router();

router.post('/login',[
  check('email','Email is mandatory').isEmail(),
  check('password','The password is emtpy').not().isEmpty(),
  validateFields
],login);


router.post('/google',[
  check('id_token','Google token is mandatory').not().isEmpty(),
  validateFields
],
googleSignIn);



module.exports = router;