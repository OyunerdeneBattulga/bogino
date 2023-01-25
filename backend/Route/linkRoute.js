const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink,
        hashLink,
        getPopulate
} = require('../Controller/linkController');

// const auth = require("../middleware/auth")



router
.post("/",     hashLink)
.post("/",     createLink)
.get( "/",     getPopulate)
.get( "/",     getLinks)
.get( "/:id",  getLink)

module.exports = router;