const { Router } = require('express');
const { usersGet }    = require('../useCase/user.useCase');
const { usersPut }    = require('../useCase/user.useCase');
const { usersPost }   = require('../useCase/user.useCase');
const { usersDelete } = require('../useCase/user.useCase');
const { usersPatch }  = require('../useCase/user.useCase');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/user.middle');
const { emailExists }    = require('../middlewares/user.middle');
const { userExistsById } = require('../middlewares/user.middle')


const router = Router();

router.get('/',usersGet);

router.put('/:userId',[
    check('userId','Id is not valid').isMongoId(),
    check('userId').custom(userExistsById),
    validateFields
],usersPut);

router.post('/',[
    check('email','Email is not valid').isEmail(),
    check('name','Name is mandatory').not().isEmpty(),
    check('password','The password is mandatory and it should be greater than six characters').isLength({min: 6}),
    check('email').custom(emailExists),
    validateFields,
],usersPost);

router.delete('/:userId',[
    check('userId','Id is not valid').isMongoId(),
    check('userId').custom(userExistsById),
    validateFields
],usersDelete);

router.patch('/',usersPatch);


module.exports = router; 