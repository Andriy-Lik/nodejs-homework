const nodemailer = require("nodemailer");
require("dotenv").config();

const {META_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465,  //25, 465, 2525
    secure: true,
    auth: {
        user: "alan321@meta.ua",
        pass: META_PASSWORD,
    }
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
    const email = {...data, from: "alan321@meta.ua"};
    await transport.sendMail(email);
    return true;
};

module.exports = sendEmail;