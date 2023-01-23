const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink} = require('../Controller/linkController');

        // const auth = require("../middleware/auth")

router
// .get(auth , getUsers)
// .post(auth , login)

router
.post(   "/", createLink)
.get(    "/", getLinks)
.get(    "/:id", getLink)

module.exports = router;