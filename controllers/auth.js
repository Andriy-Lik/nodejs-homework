const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const {User} = require("../models");
const { ctrlWrapper } = require("../helpers");

const {SECRET_KEY} = process.env;

const register = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(user) {
        return res.status(409).json({ message: "Email in use"});
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({...req.body, password: hashPassword});
    
    res.status(201).json({
        email: newUser.email,
        subscription: newUser.subscription,
    })
};

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
        return res.status(401).json({ message: "Email or password is wrong"});  
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
        return res.status(401).json({ message: "Email or password is wrong"});
    }
    const payload = {
        id: user._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    res.status(200).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription,
        },
    })
};

module.exports = {
    register: ctrlWrapper(register),
    login: ctrlWrapper(login),
};