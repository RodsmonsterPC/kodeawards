const {Router} = require('express');
const { check } = require( 'express-validator');
const { login } = require ('../useCase/auth.useCase');
const { validateFields } = require('../middlewares/validateFields');

const router = Router();

router.post('/login',[
  check('email','Email is mandatory').isEmail(),
  check('password','The password is emtpy').not().isEmpty(),
  validateFields
],login);


module.exports = router;