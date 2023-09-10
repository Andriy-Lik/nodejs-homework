const Joi = require("joi");

const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const emailSchema = Joi.object({
    email: Joi.string().pattern(emailRegexp).required().messages({ "any.required": "missing required field email" }),
  });
  
  module.exports = emailSchema;