const { request } = require("express");
const express = require("express");
const router = express.Router();
const { 
    signup,
    login,
    // getUsers, 
    getUser , 
} = require('../Controller/usersController');


router
.get("/:id", getUser)
// .get("/", getUsers)
.post ('/' , signup)
.get ('/' , login)

module.exports = router;