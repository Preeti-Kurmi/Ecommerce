const express = require("express");

const { signup, login } = require("../controller/authController");
const passport=require('passport')

const router = express.Router();
require('dotenv').config()


router.post("/signup", signup);

router.post("/login", login);


module.exports=router

