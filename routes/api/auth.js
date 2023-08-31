const express = require("express");

const ctrl = require("../../controllers/auth");
const {validateBody} = require("../../middlewares");
const {registerSchema} = require("../../schemas");

const router = express.Router();


// registration
router.post("/register", validateBody(registerSchema), ctrl.register);

module.exports = router;