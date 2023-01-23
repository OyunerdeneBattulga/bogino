const express = require("express");
const router = express.Router();
const { 
    signup,
    getUsers, 
    login
        // getUser , 
        // updateUser, 
        // createUser
} = require('../Controller/usersController');


router
.get(    "/", getUsers)
.post ('/' , signup)
.post ('/' , login)


// .post(   "/", createUser)
// .get(    "/:id", getUser)
// .put(    "/:id", updateUser)

module.exports = router;