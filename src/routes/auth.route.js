const { Router } = require("express");
const { check } = require("express-validator");

const { login } = require("../useCase/auth.useCase");
const { googleSignIn } = require("../useCase/auth.useCase");

const { validateFields } = require("../middlewares/validateFields");
const { validateJWT } = require("../middlewares/validateJWT");
const { getUserById } = require("../useCase/user.useCase");
const router = Router();

router.post(
  "/login",
  [
    check("email", "Email is invalid").isEmail(),
    check("email", "Email is empty").not().isEmpty(),
    check("password", "Password is emtpy").not().isEmpty(),
    validateFields,
  ],
  login
);

router.get(
  "/user",
  validateJWT,
  (req, _, next) => {
    req.params.userId = req.user._id;
    next();
  },
  getUserById
);

router.post(
  "/google",
  [
    check("id_token", "Google token is mandatory").not().isEmpty(),
    validateFields,
  ],
  googleSignIn
);

module.exports = router;
