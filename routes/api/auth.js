const express = require("express");

const ctrl = require("../../controllers/auth");
const {validateBody} = require("../../middlewares");
const {registerSchema, loginSchema} = require("../../schemas");

const router = express.Router();


// signup
router.post("/register", validateBody(registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(loginSchema), ctrl.login);

module.exports = router;